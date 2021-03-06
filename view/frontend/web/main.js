require(['jquery'], function($) {$(function() {
	// 2018-10-18
	// "An ADA issue: keyboard-only users are unable to navigate to the «SIGN-IN» dropdown button":
	// https://github.com/kitchencollection-com/core/issues/17
	$('#authorization-trigger')
		.attr('tabindex', 0)
		.keypress(function(e) {
			if (13 === e.keyCode) {
				$(this).click();
			}
		})
	;
	// 2018-10-18
	// "An ADA issue: keyboard-only users are unable to navigate to the hamburger menu button":
	// https://github.com/kitchencollection-com/core/issues/19
	$('.cdz-main-menu')
		.attr('tabindex', 0)
		.keypress(function(e) {
			if (13 === e.keyCode) {
				$('.cdz-menu', this).toggle();
			}
		})
	;
	// 2018-10-25
	// An ADA issue: the control's «reset» state is not announced by the screen reader
	// when user selects the «Reset» button on the «Store Locator» page:
	// https://github.com/kitchencollection-com/core/issues/30
	$('.btn-reset-search-distance').click(function(){
		$('.slider-range-amount').focus();
	});
});});