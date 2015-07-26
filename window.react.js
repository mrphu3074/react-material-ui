/**
 * Re-assign window.React in production mode
 */
if(!window.hasOwnProperty("React")) {
    window.React = React;
}
