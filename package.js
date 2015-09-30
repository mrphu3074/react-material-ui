Package.describe({
    name: 'izzilab:material-ui',
    version: '0.1.7',
    // Brief, one-line summary of the package.
    summary: 'Material-UI using official React package',
    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/mrphu3074/react-material-ui.git',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

var MUI_VERSION = '0.12.1';
var EXTERNALIFY_VERSION = "0.1.0";
var TAP_EVENT_PLUGIN_VERSION = '0.1.7';
Npm.depends({
    'externalify': EXTERNALIFY_VERSION,
    'material-ui': MUI_VERSION
});

Package.onUse(function(api){
    api.use(['react@0.1.13', 'cosmos:browserify@0.7.0']);

    api.addFiles([
        'mui.browserify.options.json',
        'mui.browserify.js'
    ]);

    api.addFiles('window.react.js', 'client');
    api.export(["MUI", "injectTapEventPlugin"]);
});
