const fs = require('fs');

// Copies development configuration for webpack.config.js 
const devWebpackConfig = 'webpack.dev.js';
const webpackConfig = 'webpack.config.js';
fs.copyFileSync(devWebpackConfig, webpackConfig, fs.constants.COPYFILE_FICLONE);

// replace template file script tags with new file names
const fileSrcRegex = /<script defer.*\d*.*.js.*<\/script>/g;
const templateFiles = [
    './templates/ui/base.html',
    './templates/ui/login.html'
];
templateFiles.forEach((templateFile) => {
    let fileContent = '';
    try {
        fileContent = fs.readFileSync(templateFile, 'utf8');
        fileContent = fileContent.replace(fileSrcRegex, `<script defer src="{% static 'ui/main.js' %}"></script>`);
        fs.writeFileSync(templateFile, fileContent, 'utf8');
        console.log(templateFile + ' injected with main.js file names.');
    } catch (err) {
        console.error(err);
    }
});
console.log('\n');
console.log('\nPredev is done');