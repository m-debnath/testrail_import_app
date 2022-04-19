const fs = require('fs');

// Read webpack generated HTML
const htmlPluginOutput = 'index.html';
const buildJsPath = './static/ui/';
const buildHtmlTarget = buildJsPath + htmlPluginOutput;
let buildHtml = '';
try {
    buildHtml = fs.readFileSync(buildHtmlTarget, 'utf8');
} catch (err) {
    console.error(err);
    process.exit(1);
}

// Manipulate script tasg into django format
const regex = /<script.*<\/script>/g;
let scriptTagsArr = [];
let scriptTags = '';
scriptTagsArr = buildHtml.match(regex);
if (scriptTagsArr.length === 1) {
    scriptTags = scriptTagsArr[0];
} else {
    console.error('No script tag found in ' + buildHtmlTarget + ' !!');
    process.exit(1);
}
scriptTags = scriptTags.replaceAll(`src="`, `src="{% static 'ui/`);
scriptTags = scriptTags.replaceAll(`">`, `' %}">`);

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
        fileContent = fileContent.replace(fileSrcRegex, scriptTags);
        fs.writeFileSync(templateFile, fileContent, 'utf8');
        console.log(templateFile + ' injected with new JS file names.');
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
});
console.log('\n');

// Delete old build files
const licenseNameFormat = `.LICENSE.txt`;
const vendorsNameFormat = `vendors`;
const fileNameRegex = /"\S*.js?"/g;
let keepModules = [
    'jquery.js'
];
let generatedJsFileNames = [];
generatedJsFileNames = buildHtml.match(fileNameRegex);
generatedJsFileNames = generatedJsFileNames.map(filename => filename.replaceAll(`"`, ``));
keepModules = keepModules.concat(generatedJsFileNames);
fs.readdirSync(buildJsPath).forEach(file => {
    if (!keepModules.includes(file)) {
        fs.unlinkSync(buildJsPath + file);
        console.log(buildJsPath + file + ' removed.');
    }
});
console.log('\nPostbuild is done');