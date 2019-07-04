const fs = require('fs');
const _ = require('lodash');
const ejs = require('ejs');
const path = require('path');
const layoutSchema = require('./in/layout_schema.js');
const cobaltEndpointJSON = require('../../cobalt/scripts/api/out/api_endpoints.json');

function getEndpointSections() {
  // create hash of all routes returned from Cobalt
  // we'll use this to make sure our layoutSchema has all of the whitelisted routes
  let cobaltEndpointCheckHash = {};
  _.each(cobaltEndpointJSON.routes, function (route) {
    cobaltEndpointCheckHash[route.method + route.path] = false;
  });

  let sectionsHTML = '';
  _.each(layoutSchema, function (section, key) {
    let sectionData = {};
    sectionData.id = key;
    sectionData.title = _.capitalize(key);
    sectionData.tables = [];
    section.forEach(function (tableGroup) {
      tableGroup.attrs = cobaltEndpointJSON.database_info[tableGroup.table];
      tableGroup.endpoints.forEach(function (endpoint) {
        // Add formatted ID here for convenience
        endpoint.id = endpoint.name.split(' ').join('-');
        // Check that layoutSchema does not contain any invalid endpoints
        if (cobaltEndpointCheckHash[endpoint.method + endpoint.rawPath] === void 0) {
          console.log('Invalid endpoint', endpoint.method + endpoint.rawPath);
          return endpoint = null;
        } else {
          cobaltEndpointCheckHash[endpoint.method + endpoint.rawPath] = true;
        }
      });
      sectionData.tables.push(tableGroup);
    });
    const sectionTemplate = path.join(__dirname, '../templates/api/endpoints/section.ejs');
    ejs.renderFile(sectionTemplate, { section: sectionData }, (err, html) => {
      if (err) console.log(err);
      sectionsHTML += html;
    });
  });
  // Check that cobaltEndpointJSON does not contain any endpoints not included in layoutSchema
  _.each(cobaltEndpointCheckHash, function (v, k) {
    if (v) return;
    // console.log('Endpoint', k, 'missing from layoutSchema.');
  });

  return sectionsHTML;
}

module.exports = getEndpointSections;
