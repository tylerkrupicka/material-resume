$(document).ready(function() {
	//Setup click listener to list elements
	$('.card-list-element').on('click', function(e) {
		expandToggle(this);
		materialRipple(this, e);
	});
});

/* Expand or contract to show hidden information using jQuery */
function expandToggle(element) {
	var hidden = $(element).find('.card-hidden');
	var text = $(element).find('.card-list-text');
	if ($(hidden).is(":visible")) {
		$(text).animate({
			opacity: "0"
		}, 100, function() {
			$(hidden).slideUp(200);
		});
	} else {
		$(hidden).slideDown(200, function() {
			$(text).animate({
				opacity: "1"
			}, 100);
		});
	}
}

function materialRipple(element, e) {
	$(".ripple").remove();
	// Get offsets and sizes
	var posX = $(element).offset().left,
		posY = $(element).offset().top,
		buttonWidth = $(element).width(),
		buttonHeight = $(element).height();
	// Add the span
	$(element).prepend("<span class='ripple'></span>");
	// Make it round!
	if (buttonWidth >= buttonHeight) {
		buttonHeight = buttonWidth;
	} else {
		buttonWidth = buttonHeight;
	}
	// Get the center of the element
	var x = e.pageX - posX - buttonWidth / 2;
	var y = e.pageY - posY - buttonHeight / 2;
	// Add the ripples CSS and start the animation
	$(".ripple").css({
		width: buttonWidth,
		height: buttonHeight,
		top: y + 'px',
		left: x + 'px'
	}).addClass("rippleEffect");
}
