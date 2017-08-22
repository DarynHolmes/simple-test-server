const fs = require('fs');
const path = require('path');
const config = require('../config.json')
const generator = require('./generator')

const testFile = __dirname + '/../data/test-data.json'
const data = generator();

fs.closeSync(fs.openSync(testFile, 'w'))
fs.appendFileSync(testFile, '{ "items": [')
data.items.forEach((element, index) => {
  console.log(`writing ${index+1} of ${config.numberOfRows}`);
  fs.appendFileSync(testFile, JSON.stringify(element) + (index ===  data.items.length - 1 ? '\n' : ',\n'))
});
fs.appendFileSync(testFile, ']}')
console.log(`Done -> ` + path.normalize(testFile));
