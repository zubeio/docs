const fs = require('fs');
const _ = require('lodash');
const ejs = require('ejs');
const path = require('path');
// const schema = require('./in/layout_schema.js');
const schema = require('./schema.js');
const cobaltEndpointJSON = require('../../cobalt/scripts/api/out/api_endpoints.json');

let finalHTML = '';

const tableGroupTemplate = path.join(__dirname, '../templates/api/endpoints/table_group.ejs');
function renderTableGroup(tableGroup) {
  let htmlStr = '';
  ejs.renderFile(tableGroupTemplate, { tableGroup }, (err, html) => {
    if (err) console.log(err);
    htmlStr = html;
  });
  return htmlStr;
}

const sectionTemplate = path.join(__dirname, '../templates/api/endpoints/section.ejs');
function renderSection(section) {
  ejs.renderFile(sectionTemplate, { section }, (err, html) => {
    if (err) console.log(err);
    finalHTML += html;
  });
}

module.exports = function () {
  // create hash of all routes returned from Cobalt
  // we'll use this to make sure our schema has all of the whitelisted routes
  let cobaltEndpointCheckHash = {};
  _.each(cobaltEndpointJSON.routes, function (route) {
    cobaltEndpointCheckHash[route.method + route.path] = false;
  });

  let sectionsHTML = '';
  schema.forEach(function (section) {
    section.id = section.title.toLowerCase().split(' ').join('-'); // set the id for hashLink
    section.tableGroups.forEach(function (tableGroup) {
      tableGroup.attrs = cobaltEndpointJSON.database_info[tableGroup.table] || []; // Attach the table attrs for the tableGroup
      if (!tableGroup.attrs.length === 0) console.log('No attributes found for ' + tableGroup.table);
      tableGroup.endpoints.forEach(function (endpoint) { // iterate over the endpoints for validation against cobaltEndpointCheckHash
        // Add formatted ID here for convenience
        endpoint.id = endpoint.name.toLowerCase().split(' ').join('-');
        // Check that schema does not contain any invalid endpoints
        if (cobaltEndpointCheckHash[endpoint.method + endpoint.rawPath] === void 0) {
          console.log('Invalid endpoint', endpoint.method, endpoint.rawPath, endpoint.name);
          return endpoint = null;
        } else {
          cobaltEndpointCheckHash[endpoint.method + endpoint.rawPath] = true;
        }
        tableGroup.html = renderTableGroup(tableGroup);
      });
    });
    renderSection(section);
  });


  // Check that cobaltEndpointJSON does not contain any endpoints not included in schema
  _.each(cobaltEndpointCheckHash, function (v, k) {
    if (v) return;
    console.log('Endpoint', k, 'missing from schema.');
  });

  return finalHTML;
}
