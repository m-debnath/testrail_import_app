const fs = require('fs');

// Copies production configuration for webpack.config.js 
const prodWebpackConfig = 'webpack.prod.js';
const webpackConfig = 'webpack.config.js';
fs.copyFileSync(prodWebpackConfig, webpackConfig, fs.constants.COPYFILE_FICLONE);

console.log('\n');
console.log('\nPrebuild is done');