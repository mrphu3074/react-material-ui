Package.describe({
    name: 'izzilab:material-ui',
    version: '0.2.3',
    // Brief, one-line summary of the package.
    summary: 'Material-UI using official React package',
    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/mrphu3074/react-material-ui.git',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

var MUI_VERSION = '0.13.4';
var EXTERNALIFY_VERSION = "0.1.0";
Npm.depends({
    'externalify': EXTERNALIFY_VERSION,
    'material-ui': MUI_VERSION,
    'react-tap-event-plugin': '0.2.1'
});

Package.onUse(function(api){

    api.use(['react@0.14.1_1']);
    api.use(['cosmos:browserify@0.9.2']);


    api.addFiles([
        'mui.browserify.options.json',
        'mui.browserify.js'
    ]);

    api.export(["MUI", "injectTapEventPlugin"]);
});
