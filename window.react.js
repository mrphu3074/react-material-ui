/**
 * Re-assign window.React in production mode
 */
if(window && !window.hasOwnProperty("React")) {
    window.React = React;
}
