// 2018-10-18
// "An ADA issue: keyboard-only users are unable to navigate to the «SIGN-IN» dropdown button":
// https://github.com/kitchencollection-com/core/issues/17
require(['jquery'], function($) {$(function() {
	var $a = $('#authorization-trigger');
	$a.attr('tabindex', 0);
	$a.keypress(function(e) {
		if (13 === e.keyCode) {
			$a.click();
		}
	});
});});