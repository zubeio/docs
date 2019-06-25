const fs = require('fs');
const _ = require('lodash');
const endpointSchema = require('./endpoint_schema.js');

let docObject = {};

_.each(endpointSchema, function (section, key) {
  docObject[key] = {
    title: key.toUpperCase(),
    id: key
  };
});

console.log(docObject);












// const destPath = path.join(__dirname, '../app/docs/api.html');
// fs.writeFile(destPath, page, (err) => {
//     if (err) throw err;
//     process.exit();
// });
