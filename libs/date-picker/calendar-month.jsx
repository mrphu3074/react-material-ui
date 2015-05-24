CalendarMonth = React.createClass({

  mixins: [StylePropable],

  propTypes: {
    displayDate: React.PropTypes.object.isRequired,
    onDayClick: React.PropTypes.func,
    selectedDate: React.PropTypes.object.isRequired,
    maxDate: React.PropTypes.object,
    minDate: React.PropTypes.object,
    autoOk: React.PropTypes.bool
  },

  render: function() {
    var styles = {
      lineHeight: '32px',
      textAlign: 'center',
      padding: '8px 14px 0 14px',
    };

    return (
      <div style={styles}>
        {this._getWeekElements()}
      </div>
    );
  },

  _getWeekElements: function() {
    var weekArray = DateTime.getWeekArray(this.props.displayDate);

    return weekArray.map(function(week, i) {
      return (
        <ClearFix key={i}>
          {this._getDayElements(week)}
        </ClearFix>
      );
    }, this);
  },
  _isDisabled: function(day){
    var minDate = this.props.minDate;
    var maxDate = this.props.maxDate;

    if(minDate != null && day < minDate){
      return true;
    }

    if(maxDate != null && day > maxDate){
      return true;
    }

    return false;
  },
  _getDayElements: function(week) {
    return week.map(function(day, i) {
      var selected = DateTime.isEqualDate(this.props.selectedDate, day);
      var disabled = this._isDisabled(day);
      return (
        <DayButton
          key={i}
          date={day}
          disabled={disabled}
          onClick={this._handleDayClick}
          selected={selected} />
      );
    }, this);
  },

  _handleDayClick: function(e, date) {
    if (this.props.onDayClick) this.props.onDayClick(e, date);
  }

});