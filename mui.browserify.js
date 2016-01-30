global.React = React;
global.ReactDOM = ReactDOM;
// see https://github.com/meteor/react-packages/issues/83

injectTapEventPlugin = require("react-tap-event-plugin");
MUI = require('material-ui');
MUI.Libs = {};
MUI.Libs.Menu = require('material-ui/lib/menus/menu');
MUI.Libs.MenuItem = require('material-ui/lib/menus/menu-item');
MUI.Libs.MenuDivider = require('material-ui/lib/menus/menu-divider');

MUI.Libs.SvgIcons = require('material-ui/lib/svg-icons');