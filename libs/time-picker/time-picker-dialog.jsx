TimePickerDialog = React.createClass({

  mixins: [StylePropable, WindowListenable],
  
  contextTypes: {
    muiTheme: React.PropTypes.object
  },

  propTypes: {
    initialTime: React.PropTypes.object,
    onAccept: React.PropTypes.func,
    onShow: React.PropTypes.func,
    onDismiss: React.PropTypes.func,
  },

  windowListeners: {
    'keyup': '_handleWindowKeyUp'
  },

 
  getTheme: function() {
    return this.context.muiTheme.component.timePicker;
  },
  render: function() {
    var {
      initialTime,
      onAccept,
      format,
      ...other
    } = this.props;
   
    var styles = {
      root: {
        fontSize: "14px",
        color: this.getTheme().clockColor,
      },
      dialogContent: {
        width: "280px",
      }
    };
   
    var actions = [
      <FlatButton
        key={0}
        label="Cancel"
        secondary={true}
        onClick={this._handleCancelClick} />,
      <FlatButton
        key={1}
        label="OK"
        secondary={true}
        onClick={this._handleOKClick} />
    ];

    return (
      <DialogWindow {...other}
        ref="dialogWindow"
        style={this.mergeAndPrefix(styles.root)}
        actions={actions}
        contentStyle={styles.dialogContent}
        onDismiss={this._handleDialogDismiss}
        onShow={this._handleDialogShow}
        repositionOnUpdate={false}>
        <Clock
          ref="clock"
          format={format}
          initialTime={initialTime}  />
      </DialogWindow>
    );
  },

  show: function() {
    this.refs.dialogWindow.show();
    this.refs.clock.init();
  },

  dismiss: function() {
    this.refs.dialogWindow.dismiss();
  },

  _handleCancelClick: function() {
    this.dismiss();
  },

  _handleOKClick: function() {
    this.dismiss();
    if (this.props.onAccept) {
      this.props.onAccept(this.refs.clock.getSelectedTime());
    }
  },

  _handleDialogShow: function() {

    if(this.props.onShow) {
      this.props.onShow();
    }
  },

  _handleDialogDismiss: function() {
   

    if(this.props.onDismiss) {
      this.props.onDismiss();
    }
  },

  _handleWindowKeyUp: function(e) {
    if (this.refs.dialogWindow.isOpen()) {
      switch (e.keyCode) {
        case KeyCode.ENTER:
          this._handleOKClick();
          break;
      }
    } 
  }

});