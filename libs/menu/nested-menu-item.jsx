/***********************
* Nested Menu Component
***********************/
NestedMenuItem = React.createClass({

  mixins: [ClickAwayable, StylePropable],

  contextTypes: {
    muiTheme: React.PropTypes.object
  },

  propTypes: {
    index: React.PropTypes.number.isRequired,
    text: React.PropTypes.string,
    menuItems: React.PropTypes.array.isRequired,
    zDepth: React.PropTypes.number,
    disabled: React.PropTypes.bool,
    onItemClick: React.PropTypes.func,
    onItemTap: React.PropTypes.func,
    menuItemStyle: React.PropTypes.object,
  },
  
  getDefaultProps: function() {
    return {
      disabled: false
    };
  },

  getInitialState: function() {
    return { open: false }
  },

  componentClickAway: function() {
    this._closeNestedMenu();
  },

  componentDidMount: function() {
    this._positionNestedMenu();
  },

  componentDidUpdate: function(prevProps, prevState) {
    this._positionNestedMenu();
  },

  getSpacing: function() {
    return this.context.muiTheme.spacing;
  },

  render: function() {
    var styles = this.mergeAndPrefix({
      position: 'relative'
    }, this.props.style);

    var iconCustomArrowDropRight = {
      marginRight: this.getSpacing().desktopGutterMini * -1,
      color: this.context.muiTheme.component.dropDownMenu.accentColor
    };

    var {
      index,
      menuItemStyle,
      ...other
    } = this.props;

    return (
      <div ref="root" style={styles} onMouseEnter={this._openNestedMenu} onMouseLeave={this._closeNestedMenu}>
        <MenuItem 
          index={index}
          style={menuItemStyle}
          disabled={this.props.disabled} 
          iconRightStyle={iconCustomArrowDropRight} 
          iconRightClassName="muidocs-icon-custom-arrow-drop-right" 
          onClick={this._onParentItemClick}>
            {this.props.text}
        </MenuItem>
        <Menu {...other}
          ref="nestedMenu"
          menuItems={this.props.menuItems}
          onItemClick={this._onMenuItemClick}
          hideable={true}
          visible={this.state.open}
          zDepth={this.props.zDepth + 1} />
      </div>
    );
  },

  _positionNestedMenu: function() {
    var el = React.findDOMNode(this);
    var nestedMenu = React.findDOMNode(this.refs.nestedMenu);

    nestedMenu.style.left = el.offsetWidth + 'px';
  },
  
  _openNestedMenu: function() {
    if (!this.props.disabled) this.setState({ open: true });
  },
  
  _closeNestedMenu: function() {
    this.setState({ open: false });
  },
  
  _toggleNestedMenu: function() {
    if (!this.props.disabled) this.setState({ open: !this.state.open });
  },

  _onParentItemClick: function() {
    this._toggleNestedMenu();
  },

  _onMenuItemClick: function(e, index, menuItem) {
    if (this.props.onItemClick) this.props.onItemClick(e, index, menuItem);
    this._closeNestedMenu();
  },
  
  _onMenuItemTap: function(e, index, menuItem) {
    if (this.props.onItemTap) this.props.onItemTap(e, index, menuItem);
    this._closeNestedMenu();
  }

});