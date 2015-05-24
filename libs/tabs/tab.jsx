Tab = React.createClass({

  mixins: [StylePropable],

  contextTypes: {
    muiTheme: React.PropTypes.object
  },

  propTypes: {
    handleClick: React.PropTypes.func,
    selected: React.PropTypes.bool,
    width: React.PropTypes.string
  },

  handleClick: function(){
    this.props.handleClick(this.props.tabIndex, this);
  },

  render: function(){
    var styles = this.mergeAndPrefix({
      'display': 'table-cell',
      'height': '100%',
      'cursor': 'pointer',
      'textAlign': 'center',
      'verticalAlign': 'middle',
      'height': '48px',
      'color': Colors.white,
      'opacity': '.6',
      'fontSize': '14sp',
      'fontWeight': '500',
      'whiteSpace': 'initial',
      'fontFamily': this.context.muiTheme.contentFontFamily,
      'boxSizing': 'border-box',
      'width': this.props.width
    }, this.props.style);

    if (this.props.selected) styles.opacity = '1';

    return (
    <div style={styles} onClick={this.handleClick} routeName={this.props.route}>
      {this.props.label}
    </div>
    )
  }

});