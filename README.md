### `meteor add izzilab:material-ui`

## Introduction

This package ported from [Material-UI](http://material-ui.com) (a React Component) using [the official Meteor React package](http://react-in-meteor.readthedocs.org/).

## Install

1. Install the official React package `meteor add react`
2. Install this package `meteor add izzilab:material-ui`

## Using

Some clicks (like DatePicker) only work when you have run `injectTapEventPlugin()` first. It is the [official temporary fix](http://react-components.com/component/material-ui), will be removed with React v1.0.

Here's some example code to get you started:

```JavaScript
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

## Demo

Simple Todos App: http://material-ui.meteor.com

*Note: This is an old demo with bugs and performance problems. The code is also not updated to use the official react package yet. A new version will follow soon.*
