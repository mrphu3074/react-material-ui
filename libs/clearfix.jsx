ClearFix = React.createClass({
  
  render: function() {

    var {
      style,
      ...other
    } = this.props;

    var before = function() { 
      return {
        content: "' '",
        display: 'table'
      }
    }

    var after = before();
    after.clear = 'both';

    return (
      <BeforeAfterWrapper 
        {...other} 
        beforeStyle={before()} 
        afterStyle={after} 
        style={this.props.style}>
          {this.props.children}
      </BeforeAfterWrapper>
    );
  }
});