const fs = require('fs');
const endpointDataJSON = require('./out/endpoint_data.json');
const getEndpointsBlock = require('./get_endpoints_html');
const ejs = require('ejs');
const path = require('path');


const articles = [
  {
    "id": "intro-section",
    "contentPath": "../templates/api/articles/intro.ejs"
  },
  {
    "id": "authentication-section",
    "title": "Authentication",
    "contentPath": "../templates/api/articles/authentication.ejs"
  },
  {
    "id": "example-request-response-section",
    "title": "Example Request Response",
    "contentPath": "An example of Request and Response"
  },
  {
    "id": "etag-caching-section",
    "title": "ETag Caching",
    "contentPath": "We use ETags!"
  },
  {
    "id": "rate-limiting-section",
    "title": "Rate Limiting",
    "contentPath": "Don't make too many requests please"
  },
  {
    "id": "pagination-section",
    "title": "Pagination",
    "contentPath": "You can get your data in pages"
  }
];

let gettingStartedBlock = '';
let endpointsBlock = '';
let sidebarBlock = '';
let page = '';

endpointsBlock = getEndpointsBlock();

// Generate the body content for each article
// articles.forEach(article => {
//   const url = path.join(__dirname, article.contentPath);
//   ejs.renderFile(url, article, (err, html) => {
//       article.body = html;
//   });
// });
//
// // Group all articles together into Getting Started section
// const gettingStartedPath = path.join(__dirname, '../templates/api/getting_started.ejs');
// ejs.renderFile(gettingStartedPath, {articles}, (err, html) => {
//   if (err) console.log(err);
//   gettingStartedBlock = html;
// });

// // Generate endpoint sections
// const endpointsPath = path.join(__dirname, '../templates/api/endpoints.ejs');
// ejs.renderFile(endpointsPath, { sections: endpointDataJSON }, (err, html) => {
//     if (err) console.log(err);
//     endpointsBlock = html;
// });

// // Generate sidebar with links to content
// const sidebarPath = path.join(__dirname, '../templates/api/sidebar.ejs');
// const sidebarData = { articles, endpointSections: endpointDataJSON };
// ejs.renderFile(sidebarPath, sidebarData, (err, html) => {
//     if (err) console.log(err);
//     sidebarBlock = html;
// });


// Generate the entire document with boilerplate
const boilerplatePath = path.join(__dirname, '../templates/boilerplate.ejs');
ejs.renderFile(boilerplatePath, {documentationContent: gettingStartedBlock + endpointsBlock , sidebar: sidebarBlock, id: 'api-documentation' }, (err, html) => {
    if (err) console.log(err);
    page = html;
});

// Write the HTML file
const destPath = path.join(__dirname, '../app/docs/api.html');
fs.writeFile(destPath, page, (err) => {
    if (err) throw err;
    process.exit();
});
