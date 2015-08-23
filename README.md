### `meteor add izzilab:material-ui`

### From version 0.1.5, we supported SSR 

## Introduction

This package ported from [Material-UI](http://material-ui.com) (a React Component) using [the official Meteor React package](http://react-in-meteor.readthedocs.org/).


## Install

1. Install the official React package `meteor add react`
2. Install this package `meteor add izzilab:material-ui`

## Using

Some clicks (like DatePicker) only work when you have run `injectTapEventPlugin()` first. It is the [official temporary fix](http://react-components.com/component/material-ui), will be removed with React v1.0.

Here's some example code to get you started:

```
// client/app.jsx
var ThemeManager = new MUI.Styles.ThemeManager();
injectTapEventPlugin();

var { DatePicker, TextField } = MUI;

var App = React.createClass({
    childContextTypes: {
        muiTheme: React.PropTypes.object
    },

    getChildContext: function() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    },

    render: function() {
        return (
            <div>
                <DatePicker hintText="Landscape Dialog" mode="landscape"/>
                <TextField hintText="Hint Text" />
            </div>
        );
    }
});

if (Meteor.isClient) {
    Meteor.startup(function () {
        $(document.body).html("<div id='container'></div>");
        React.render(<App />, document.getElementById("container"));
    });
}
```

## CHANGELOG
- 2015-08-23 : Fixed bugs Menu, MenuItem, MenuDivider And Supported SSR.
- 2015-08-11 : upgrade MUI to 0.10.4 (https://github.com/callemall/material-ui/blob/master/CHANGELOG.md#0104)
- 2015-08-02 : upgrade MUI to 0.10.2 (https://github.com/callemall/material-ui/blob/master/CHANGELOG.md#0102)

*Note: This is an old demo with bugs and performance problems. The code is also not updated to use the official react package yet. A new version will follow soon.*
