### `meteor add izzilab:material-ui`

### From version 0.1.7, we upgrade to MUI 0.12.1 and it have breaking changes
#### [CHANGELOG 0.12.0 and 0.12.1](https://github.com/callemall/material-ui/blob/master/CHANGELOG.md#0120)

## Introduction

This package ported from [Material-UI](http://material-ui.com) (a React Component) using [the official Meteor React package](http://react-in-meteor.readthedocs.org/).


## Install

1. Install the official React package `meteor add react`
2. Install this package `meteor add izzilab:material-ui`

## Using

Some clicks (like DatePicker) only work when you have run `injectTapEventPlugin()` first. It is the [official temporary fix](http://react-components.com/component/material-ui), will be removed with React v1.0.

Here's some example code to get you started:

```

//app.jsx
injectTapEventPlugin();

var {
    AppCanvas,
    AppBar,
    Styles,
    RaisedButton,
    DatePicker
    } = MUI;
var { ThemeManager, LightRawTheme } = Styles;

var App = React.createClass({
    childContextTypes: {
        muiTheme: React.PropTypes.object
    },

    getChildContext() {
        return {
            muiTheme: ThemeManager.getMuiTheme(LightRawTheme)
        };
    },

    render: function () {
        return (
            <AppCanvas>
                <AppBar title="izziLab"/>

                <div style={{padding: '80px',}}>
                    <RaisedButton primary={true} label="Tap" />
                    <br/>
                    <DatePicker hintText="Portrait Dialog" />
                    <br/>
                    <DatePicker
                        hintText="Landscape Dialog"
                        mode="landscape"/>
                </div>
            </AppCanvas>
        );
    }
});

if (Meteor.isClient) {
    Meteor.startup(() => React.render(<App/>, document.body));
}

```

## CHANGELOG
- 2015-09-30 : upgrade MUI to 0.12.1 (https://github.com/callemall/material-ui/blob/master/CHANGELOG.md#0120)
- 2015-09-08 : upgrade MUI to 0.11.0 (https://github.com/callemall/material-ui/blob/master/CHANGELOG.md#0110)
- 2015-08-23 : Fixed bugs Menu, MenuItem, MenuDivider And Supported SSR.
- 2015-08-11 : upgrade MUI to 0.10.4 (https://github.com/callemall/material-ui/blob/master/CHANGELOG.md#0104)
- 2015-08-02 : upgrade MUI to 0.10.2 (https://github.com/callemall/material-ui/blob/master/CHANGELOG.md#0102)

*Note: This is an old demo with bugs and performance problems. The code is also not updated to use the official react package yet. A new version will follow soon.*
