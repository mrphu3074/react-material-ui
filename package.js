Package.describe({
    name: 'izzilab:material-ui',
    version: '0.0.5',
    // Brief, one-line summary of the package.
    summary: 'React Material ui ported from http://material-ui.com',
    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/mrphu3074/react-material-ui.git',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

var MUI_VERSION = '0.9.2';
Npm.depends({
    'material-ui': MUI_VERSION
})

Package.onUse(function(api){
    var both = ['client', 'server'];
    api.use(['cosmos:browserify@0.3.0'], 'client');
    api.use(['tomesch:react-jsx@0.0.1'], both);
    api.imply('tomesch:react-jsx');

    api.addFiles('client.browserify.js', 'client');
    api.export(["React", "MUI"], 'client');
    // ReactMeteor.js is lib from official reactjs:react
    // https://github.com/reactjs/react-meteor
    api.addFiles("ReactMeteor.js", ["server", "client"]);
    api.export("ReactMeteor", ["server", "client"]);
});
