const fs = require('fs');
const _ = require('lodash');
const path = require('path');
const layoutSchema = require('./in/layout_schema.js');
const cobaltEndpointJSON = require('../../cobalt/scripts/api/out/api_endpoints.json');

let docEndpointSections = [];
let endpointData = {};

_.each(cobaltEndpointJSON.routes, function (route) {
  var { path, method } = route;
  var path_parts = path.split('/').reverse();
  var is_index_route = false;
  var table_name;
  if (path_parts[0][0] === ':') {
    table_name = path_parts[1];
  } else {
    table_name = path_parts[0];
    if (method === 'GET') is_index_route = true;
  }
  if (table_name === 'admin_members' || table_name === 'members' || table_name === 'collaborators') table_name = 'people';
  if (!cobaltEndpointJSON.database_info[table_name]) table_name = void 0;
  endpointData[method + ' ' + path] = {
    table_name,
    is_index_route,
    attrs: cobaltEndpointJSON.database_info[table_name],
  };
});

_.each(layoutSchema, function (section, key) {
  var data = {
    title: _.capitalize(key),
    id: key,
    endpoints: [],
  };
  _.each(section, function (route) {
    var routePathData = endpointData[route.method + ' ' + route.rawPath];
    if (!routePathData) return console.log('Not routePathData for', route);
    var routeData = {
      path: route.path,
      method: route.method,
      name: route.name,
      id: route.name && route.name.split(' ').join('-'),
      attrs: routePathData.attrs
    };
    data.endpoints.push(routeData);
  });
  if (key === 'accounts') data.note = 'Organizations are called <code>accounts</code> in the Zube API.';
  docEndpointSections.push(data);
});

const destPath = path.join(__dirname, './out/endpoint_data.json');
fs.writeFile(destPath, JSON.stringify(docEndpointSections), (err) => {
    if (err) throw err;
    process.exit();
});
