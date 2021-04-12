const path = require('path');

exports.entry = path.resolve(__dirname, '../', 'src/index.jsx');
exports.output = path.resolve(__dirname, '../', 'build');
exports.template = path.resolve(__dirname, '../', 'src/template.html');
