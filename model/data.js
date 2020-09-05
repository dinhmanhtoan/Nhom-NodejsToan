const fs = require('fs')
let text = fs.readFileSync('data.json','utf8')

module.exports = text;

