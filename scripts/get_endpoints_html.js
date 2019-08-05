const fs = require('fs');
const _ = require('lodash');
const ejs = require('ejs');
const path = require('path');
const schema = require('./schema.js');
const cobaltEndpointJSON = require('../../cobalt/scripts/api/out/api_endpoints.json');

let endpointsHTML = '';
let finalHTML = '';
let sidebarInfo = [];

const endpointTemplate = path.join(__dirname, '../templates/api/endpoints/endpoint.ejs');
function renderEndpoint(endpoint) {
  let htmlStr = '';
  ejs.renderFile(endpointTemplate, { endpoint }, (err, html) => {
    if (err) console.log(err);
    htmlStr = html;
  });
  return htmlStr;
}

const sectionTemplate = path.join(__dirname, '../templates/api/endpoints/section.ejs');
function renderSection(section) {
  let htmlStr = '';
  ejs.renderFile(sectionTemplate, { section }, (err, html) => {
    if (err) console.log(err);
    htmlStr = html;
  });
  return htmlStr;
}

const isIndexRoute = (endpoint) => {
  var path_parts = endpoint.rawPath.split('/').reverse();
  var is_index_route = false;
  if (path_parts[0][0] === ':') {
    // not index
  } else {
    if (endpoint.method === 'GET') is_index_route = true;
  }
  return is_index_route;
}

const getParamsTable = (path) => {
  var path_parts = path.split('/').reverse();
  var table_name;
  if (path_parts[0][0] === ':') {
    table_name = path_parts[1];
  } else {
    table_name = path_parts[0];
  }
  if (table_name === 'admin_members' || table_name === 'members' || table_name === 'collaborators') table_name = 'people';
  return cobaltEndpointJSON.database_info[table_name];
}

const sortAttrs = array => {
  if (!array) return;
  function compare(a, b) { let comparison = 0;if (a.name > b.name) { comparison = 1; } else if (a.name < b.name) { comparison = -1; } return comparison; }
  array.sort(compare);
};

module.exports = function () {
  // create hash of all routes returned from Cobalt
  // we'll use this to make sure our schema has all of the whitelisted routes
  let cobaltEndpointCheckHash = {};
  _.each(cobaltEndpointJSON.routes, function (route) {
    cobaltEndpointCheckHash[route.method + route.path] = false;
  });

  let sectionsHTML = '';
  schema.forEach(function (section) {
    section.id = section.title.toLowerCase().replace('\'', '').split(' ').join('-'); // set the id for hashLink
    let sidebarSection = { title: section.title, id: section.id, endpoints: [] };
    let endpointsHTML = '';
    section.endpoints.forEach(function (endpoint) {
      // Add formatted ID here for convenience
      endpoint.id = endpoint.name.toLowerCase().replace('\'', '').split(' ').join('-');
      // Check that schema does not contain any invalid endpoints
      if (cobaltEndpointCheckHash[endpoint.method + endpoint.rawPath] === void 0) {
        console.log('Invalid endpoint', endpoint.method, endpoint.rawPath, endpoint.name);
        return endpoint = null;
      } else {
        cobaltEndpointCheckHash[endpoint.method + endpoint.rawPath] = true;
        sidebarSection['endpoints'].push({ name: endpoint.name, id: endpoint.id });
      }
      // Attach paramsTable for index routes
      if (isIndexRoute(endpoint)) {
        endpoint.paramsTable = getParamsTable(endpoint.rawPath);
      }
      sortAttrs(endpoint.paramsTable);
      sortAttrs(endpoint.formData);
      endpointsHTML += renderEndpoint(endpoint);
    });
    sidebarInfo.push(sidebarSection);
    section.endpointsHTML = endpointsHTML;
    sectionsHTML += renderSection(section);
  });

  // Check that cobaltEndpointJSON does not contain any endpoints not included in schema
  _.each(cobaltEndpointCheckHash, function (v, k) {
    if (v) return;
    console.log('Endpoint', k, 'missing from schema.');
  });

  const finalSectionTemplate = path.join(__dirname, '../templates/api/endpoints/api_endpoints_section.ejs');
  function getFinalHTML() {
    ejs.renderFile(finalSectionTemplate, { sectionsHTML }, (err, html) => {
      if (err) console.log(err);
      finalHTML = html;
    });
  }

  getFinalHTML();

  return { finalHTML, sidebarInfo };
}
