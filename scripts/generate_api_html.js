const fs = require('fs');
// const endpointDataJSON = require('./out/endpoint_data.json');
const getEndpoints = require('./get_endpoints_html');
const ejs = require('ejs');
const moment = require('moment');
const path = require('path');


const articles = [
  {
    "id": "authentication-section",
    "title": "Authentication",
    "contentPath": "../templates/api/articles/authentication.ejs"
  },
  {
    "id": "example-request-response-section",
    "title": "Example Request Response",
    "contentPath": "../templates/api/articles/example_request_response.ejs"
  },
  {
    "id": "request-parameters-section",
    "title": "Request Parameters",
    "contentPath": "../templates/api/articles/request_parameters.ejs"
  },
  {
    "id": "etag-caching-section",
    "title": "ETag Caching",
    "contentPath": "../templates/api/articles/etags.ejs"
  },
  {
    "id": "responsible-usage-section",
    "title": "Responsible Usage",
    "contentPath": "../templates/api/articles/responsible_usage.ejs"
  },
];

let gettingStartedBlock = '';
let endpointsBlock = '';
let sidebarBlock = '';
let page = '';

let endpointsData = getEndpoints();
endpointsBlock = endpointsData.finalHTML;

// Generate the body content for each article
articles.forEach(article => {
  const url = path.join(__dirname, article.contentPath);
  ejs.renderFile(url, article, (err, html) => {
      article.body = html;
  });
});

// Group all articles together into Getting Started section
const gettingStartedPath = path.join(__dirname, '../templates/api/getting_started.ejs');
ejs.renderFile(gettingStartedPath, {articles}, (err, html) => {
  if (err) console.log(err);
  gettingStartedBlock = html;
});

// Generate sidebar with links to content
const sidebarPath = path.join(__dirname, '../templates/api/sidebar.ejs');
const sidebarData = { articles, endpoints: endpointsData.sidebarInfo };
ejs.renderFile(sidebarPath, sidebarData, (err, html) => {
    if (err) console.log(err);
    sidebarBlock = html;
});

// Generate the entire document with boilerplate
const boilerplatePath = path.join(__dirname, '../templates/boilerplate.ejs');
ejs.renderFile(boilerplatePath, {documentationContent: gettingStartedBlock + endpointsBlock , sidebar: sidebarBlock, id: 'api-documentation', date: moment().format('MMM D, YYYY') }, (err, html) => {
    if (err) console.log(err);
    page = html;
});

// Write the HTML file
const destPath = path.join(__dirname, '../app/docs/api.html');
fs.writeFile(destPath, page, (err) => {
    if (err) throw err;
    process.exit();
});
