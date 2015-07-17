Package.describe({
    name: 'izzilab:material-ui',
    version: '0.0.8',
    // Brief, one-line summary of the package.
    summary: 'React Material ui ported from http://material-ui.com',
    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/mrphu3074/react-material-ui.git',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

var MUI_VERSION = '0.10.1';
var EXTERNALIFY_VERSION = "0.1.0";
Npm.depends({
    'externalify': EXTERNALIFY_VERSION,
    'material-ui': MUI_VERSION
});

Package.onUse(function(api){
    api.use(['react@0.1.3'], 'client');
    api.use(['cosmos:browserify@0.3.0'], 'client');

    api.addFiles([
        'client.browserify.options.json',
        'client.browserify.js'
    ], 'client');

    api.export(["mui", "MUI", "injectTapEventPlugin"], 'client');
});
