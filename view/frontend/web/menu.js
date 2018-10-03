// 2018-10-03
// An ADA issue: «The small appliances product choices in “All Categories”
// go out of the assigned fly-out tray on text-only zooming to 200%»:
// https://github.com/kitchencollection-com/core/issues/11
define([
	'underscore', 'jquery', 'mage/utils/wrapper'
], function(_, $, w) {'use strict'; return function(sb) {$.extend(sb.prototype, {
	/*_getMode: w.wrap(sb.prototype._getMode, function(_super) {
		var r = _super();
		// 2018-10-03 «detect browser font size»:https://stackoverflow.com/a/740112
		var e = document.createElement('div');
		e.style.height = '10em';
		document.body.appendChild(e);
		var size = e.offsetHeight / 10;
		document.body.removeChild(e);
		return 2 <= size / 14 ? 'mobile' : r;
	}) */
}); return sb;};});