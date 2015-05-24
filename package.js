Package.describe({
    name: 'izzilab:material-ui',
    version: '0.0.1',
    // Brief, one-line summary of the package.
    summary: 'React Material ui. I converted from http://material-ui.com',
    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/mrphu3074/react-material-ui.git',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function(api){
	api.versionsFrom("METEOR@0.9.0");

	var both = ['client', 'server'];
	api.use(["templating@1.1.1", "fastclick@1.0.0", "reactjs:react@0.2.3"], 'client');
	api.addFiles('env.js', 'client');
	/**
	* IMPORT Utils
	*/
	api.addFiles([
		'libs/utils/events.js',
		'libs/utils/css-event.js',
		'libs/utils/dom.js',
		'libs/utils/key-code.js',
		'libs/utils/key-line.js',
		'libs/utils/color-manipulator.js',
		'libs/utils/extend.js',
		'libs/utils/unique-id.js',
		'libs/utils/modernizr.custom.js',
		'libs/utils/date-time.js',
		'libs/draggable.js',
	], 'client');

	api.export([
		"CssEvent",
		"Dom",
		"Events",
		"KeyCode",
		"KeyLine",
		"ColorManipulator",
		"Extend",
		"UniqueId",
		"Modernizr",
		"DateTime",
		"Draggable",
	], 'client');


	/**
	* IMPORT MIXINS
	*/
	api.addFiles([
		"libs/mixins/classable.js",
		"libs/mixins/click-awayable.js",
		"libs/mixins/window-listenable.js",
		"libs/mixins/style-propable.js",
		"libs/mixins/style-resizable.js",
	], 'client');

	api.export([
		"Classable",
		"ClickAwayable",
		"WindowListenable",
		"StylePropable",
		"StyleResizable",
	], 'client');

	/**
	* IMPORT STYLES
	*/
	api.addFiles([
		"libs/styles/auto-prefix.js",
		"libs/styles/colors.js",
		"libs/styles/spacing.js",
		"libs/styles/transitions.js",
		"libs/styles/typography.js",
		"libs/styles/themes/dark-theme.js",
		"libs/styles/themes/light-theme.js",
		"libs/styles/theme-manager.js",
	], 'client');

	api.export([
		"AutoPrefix",
		"Colors",
		"Spacing",
		"ThemeManager",
		"Transitions",
		"Typography",
		"DarkTheme",
		"LightTheme",
	], 'client');

	/**
	* IMPORT COMPONENTS
	*/
	api.addFiles([
		"libs/app-bar.jsx",
		"libs/app-canvas.jsx",
		"libs/before-after-wrapper.jsx",
		"libs/checkbox.jsx",
		"libs/circular-progress.jsx",
		"libs/clearfix.jsx",
		"libs/dialog-window.jsx",
		"libs/dialog.jsx",
		"libs/drop-down-icon.jsx",
		"libs/drop-down-menu.jsx",
		"libs/enhanced-button.jsx",
		"libs/enhanced-switch.jsx",
		"libs/enhanced-textarea.jsx",
		"libs/flat-button.jsx",
		"libs/floating-action-button.jsx",
		"libs/font-icon.jsx",
		"libs/icon-button.jsx",
		"libs/ink-bar.jsx",
		"libs/input.jsx",
		"libs/left-nav.jsx",
		"libs/linear-progress.jsx",
		"libs/overlay.jsx",
		"libs/paper.jsx",
		"libs/radio-button-group.jsx",
		"libs/radio-button.jsx",
		"libs/raised-button.jsx",
		"libs/slider.jsx",
		"libs/snackbar.jsx",
		"libs/svg-icon.jsx",
		"libs/table-header.jsx",
		"libs/table-rows-item.jsx",
		"libs/table-rows.jsx",
		"libs/text-field.jsx",
		"libs/toggle.jsx",
		"libs/tooltip.jsx",
		"libs/date-picker/calendar-month.jsx",
		"libs/date-picker/calendar-toolbar.jsx",
		"libs/date-picker/calendar.jsx",
		"libs/date-picker/date-display.jsx",
		"libs/date-picker/date-picker-dialog.jsx",
		"libs/date-picker/date-picker.jsx",
		"libs/date-picker/day-button.jsx",
		"libs/menu/link-menu-item.jsx",
		"libs/menu/menu-item.jsx",
		"libs/menu/menu.jsx",
		"libs/menu/nested-menu-item.jsx",
		"libs/menu/subheader-menu-item.jsx",
		"libs/ripples/circle.jsx",
		"libs/ripples/focus-ripple.jsx",
		"libs/ripples/touch-ripple.jsx",
		"libs/svg-icons/drop-down-arrow.jsx",
		"libs/svg-icons/navigation-chevron-left.jsx",
		"libs/svg-icons/navigation-chevron-right.jsx",
		"libs/svg-icons/navigation-menu.jsx",
		"libs/svg-icons/toggle-check-box-checked.jsx",
		"libs/svg-icons/toggle-check-box-outline-blank.jsx",
		"libs/svg-icons/toggle-radio-button-off.jsx",
		"libs/svg-icons/toggle-radio-button-on.jsx",
		"libs/tabs/tab.jsx",
		"libs/tabs/tabs.jsx",
		"libs/tabs/tabTemplate.jsx",
		"libs/time-picker/clock-button.jsx",
		"libs/time-picker/clock-hours.jsx",
		"libs/time-picker/clock-minutes.jsx",
		"libs/time-picker/clock-number.jsx",
		"libs/time-picker/clock-pointer.jsx",
		"libs/time-picker/clock.jsx",
		"libs/time-picker/time-display.jsx",
		"libs/time-picker/time-picker-dialog.jsx",
		"libs/time-picker/time-picker.jsx",
		"libs/toolbar/toolbar-group.jsx",
		"libs/toolbar/toolbar-separator.jsx",
		"libs/toolbar/toolbar-title.jsx",
		"libs/toolbar/toolbar.jsx",
		"libs/transition-groups/slide-in-child.jsx",
		"libs/transition-groups/slide-in.jsx",
	], 'client');

	api.export([
		"AppBar",
		"AppCanvas",
		"BeforeAfterWrapper",
		"Checkbox",
		"CircularProgress",
		"ClearFix",
		"DialogWindow",
		"Dialog",
		"DropDownIcon",
		"DropDownMenu",
		"EnhancedButton",
		"EnhancedSwitch",
		"EnhancedTextarea",
		"FlatButton",
		"FloatingActionButton",
		"FontIcon",
		"IconButton",
		"InkBar",
		"Input",
		"LeftNav",
		"LinearProgress",
		"Overlay",
		"Paper",
		"RadioButtonGroup",
		"RadioButton",
		"RaisedButton",
		"Slider",
		"Snackbar",
		"SvgIcon",
		"TableHeader",
		"TableRowItem",
		"TableRow",
		"TextField",
		"Toggle",
		"Tooltip",
		"Calendar",
		"CalendarMonth",
		"CalendarToolbar",
		"DateDisplay",
		"DatePickerDialog",
		"DatePicker",
		"DayButton",
		"LinkMenuItem",
		"MenuItem",
		"NestedMenuItem",
		"Menu",
		"SubheaderMenuItem",
		"RippleCircle",
		"FocusRipple",
		"TouchRipple",
		"DropDownArrow",
		"NavigationChevronLeft",
		"NavigationChevronRight",
		"NavigationMenu",
		"ToggleCheckBoxChecked",
		"ToggleCheckBoxOutlineBlank",
		"CheckBoxChecked",
		"CheckboxOutline",
		"RadioButtonOff",
		"RadioButtonOn",
		"Tab",
		"Tabs",
		"TabTemplate",
		"ClockButton",
		"ClockHours",
		"ClockMinutes",
		"ClockNumber",
		"ClockPointer",
		"Clock",
		"TimeDisplay",
		"TimePickerDialog",
		"TimePicker",
		"ToolbarGroup",
		"ToolbarSeparator",
		"ToolbarTitle",
		"Toolbar",
		"SlideInChild",
		"SlideIn",
		"SlideInTransitionGroup",
	], 'client');
});