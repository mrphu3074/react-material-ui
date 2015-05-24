SvgIcon = React.createClass({

  mixins: [StylePropable],

  contextTypes: {
    muiTheme: React.PropTypes.object
  },

  getTheme: function() {
    return this.context.muiTheme.palette;
  },

  getStyles: function() {
    return {
      display: 'inline-block',
      height: '24px',
      width: '24px',
      userSelect: 'none',
      fill: this.getTheme().textColor
    };
  },

  render: function() {

    var {
      viewBox,
      style,
      ...other
    } = this.props;

    return (
      <svg
        {...other}
        viewBox="0 0 24 24"
        style={this.mergeAndPrefix(
          this.getStyles(), 
          this.props.style)}>
            {this.props.children}
      </svg>
    );
  }
});