// Main Class
var mainClass = {
	slider: ".slideme", // Enter here class name of slider ( Add this class name on each respective object classes)
	left_slide: ".left-slide", // Enter here class name of your left slide 
	right_slide: ".right-slide" // Enter here class name of your right slide
};
// Animation Class
var animateClass = {
	slide_to_left_slider: ".slide-to-left-slider",
	left_slide_speed: 500, // Left Slide Animation Speed (In Milliseconds)
	slide_to_right_slider: ".slide-to-right-slider",
	right_slide_speed: 500, // right Slide Animation Speed (In Milliseconds)
	slide_to_top_slider: ".slide-to-top-slider",
	top_slide_speed: 500, // Top Slide Animation Speed (In Milliseconds)
	slide_to_down_slider: ".slide-to-down-slider",
	down_slide_speed: 500, // Down Slide Animation Speed (In Milliseconds)
	fadeIn_slider: ".fadein-slider",
	fadein_speed: 1000, // FadeIn Animation Speed (In Milliseconds)
	fadeOut_slider: ".fadeout-slider",
	fadeout_speed: 1000, // FadeOut Animation Speed (In Milliseconds)
};

// Required Variable
var total_len = $(mainClass.slider).length;
var sliderprev = 0;
if (screen.width <= '1243' && screen.width > '939') {
	var total_slider = 3; // no of objects to show each slide
	var slidercount = total_slider;
	hideSlider(); // Hide All Slider
	sliderAnimate(); // Animation Begin
	for (var i = 0; i < total_slider; i++) {
		$(mainClass.slider).eq(i).show();
	}
	$(mainClass.right_slide).click(function () {
		rightAction(total_slider); // Right Button Action 
	});
	$(mainClass.left_slide).click(function () {
		leftAction(total_slider); // Left Button Action 
	});
} else if (screen.width <= '939' && screen.width > '629') {
	var total_slider = 2; // no of objects to show each slide
	var slidercount = total_slider;
	hideSlider(); // Hide All Slider
	sliderAnimate(); // Animation Begin
	for (var i = 0; i < total_slider; i++) {
		$(mainClass.slider).eq(i).show();
	}
	$(mainClass.right_slide).click(function () {
		rightAction(total_slider); // Right Button Action 
	});
	$(mainClass.left_slide).click(function () {
		leftAction(total_slider); // Left Button Action 
	});
} else if (screen.width <= '629') {
	var total_slider = 1; // no of objects to show each slide
	var slidercount = total_slider;
	hideSlider(); // Hide All Slider
	sliderAnimate(); // Animation Begin
	for (var i = 0; i < total_slider; i++) {
		$(mainClass.slider).eq(i).show();
	}
	$(mainClass.right_slide).click(function () {
		rightAction(total_slider); // Right Button Action 
	});
	$(mainClass.left_slide).click(function () {
		leftAction(total_slider); // Left Button Action 
	});
} else {
	var total_slider = 4; // No Of Objects To Show Each Slide
	var slidercount = total_slider;
	hideSlider(); // Hide All Slider
	sliderAnimate(); // Animation Begin
	for (var i = 0; i < total_slider; i++) {
		$(mainClass.slider).eq(i).show();
	}
	$(mainClass.right_slide).click(function () {
		rightAction(total_slider); // Right Button Action 
	});
	$(mainClass.left_slide).click(function () {
		leftAction(total_slider); // Left Button Action 
	});
}

function rightAction(totalCount) {
	if (total_len <= slidercount) {
		try {
			for (var i = sliderprev; i < slidercount; i++) {
				$(mainClass.slider).eq(i).hide();
			}
			sliderprev = 0;
			slidercount = totalCount;
			for (var i = sliderprev; i < slidercount; i++) {
				$(mainClass.slider).eq(i).show();
			}
		} catch (err) { }

	} else {
		try {
			sliderprev = slidercount;
			slidercount += totalCount;
			for (var i = 0; i < totalCount; i++) {
				hideSlider(sliderprev - 1 - i);
			}
			for (var i = sliderprev; i < slidercount; i++) {
				$(mainClass.slider).eq(i).show();
			}
		} catch (error) { };
	}
	resetAnimation(); // Stop Previous Animation
	sliderAnimate(); // Animation Begin
}
function leftAction(totalCount) {
	if (slidercount <= totalCount) {
		try {
			for (var i = 0; i < totalCount; i++) {
				if ((slidercount - i) > total_len) {
					continue;
				}
				hideSlider(slidercount - 1 - i);
			}
			slidercount = total_len;
			var check_div = 2;
			if (totalCount == 1) {
				slidercount = total_len;
			} else {
				while ((slidercount % totalCount) != 0) {
					slidercount += 1;
				}
			}
			sliderprev = slidercount - totalCount;
			for (var i = sliderprev; i < slidercount; i++) {
				$(mainClass.slider).eq(i).show();
			}
		} catch (error) { };
	} else {
		try {
			for (var i = 0; i < totalCount; i++) {
				if ((slidercount - i) > total_len) {
					continue;
				}
				hideSlider(slidercount - 1 - i);
			}
			slidercount -= totalCount;
			sliderprev = sliderprev - totalCount;
			for (var i = sliderprev; i < slidercount; i++) {
				$(mainClass.slider).eq(i).show();
			}
		} catch (error) { };
	}
	resetAnimation(); // Stop Previous Animation
	sliderAnimate(); // Animation Begin
}
function hideSlider(i) {
	if (i == null) {
		$(mainClass.slider).hide();
	} else {
		$(mainClass.slider).eq(i).hide();

	}
}
function sliderAnimate() {
	// FadeIn Animation
	$(mainClass.slider + " " + animateClass.fadeIn_slider).each(function (i) {
		$(mainClass.slider + " " + animateClass.fadeIn_slider).eq(i).css({
			opacity: "0",
		});
		$(mainClass.slider + " " + animateClass.fadeIn_slider).eq(i).show();
		$(mainClass.slider + " " + animateClass.fadeIn_slider).eq(i).animate({
			opacity: "1",
		}, animateClass.fadein_speed);
	});
	// FadeOut Animation
	$(mainClass.slider + " " + animateClass.fadeOut_slider).each(function (i) {
		$(mainClass.slider + " " + animateClass.fadeOut_slider).eq(i).css({
			opacity: "1",
		});
		$(mainClass.slider + " " + animateClass.fadeOut_slider).eq(i).show();
		$(mainClass.slider + " " + animateClass.fadeOut_slider).eq(i).animate({
			opacity: "0",
		}, animateClass.fadeout_speed);
	});
	// Slide To Left Animation
	$(mainClass.slider + " " + animateClass.slide_to_left_slider).each(function (i) {
		$(mainClass.slider + " " + animateClass.slide_to_left_slider).eq(i).css({
			position: "relative",
			opacity: "0",
			right: "40px"
		});
		$(mainClass.slider + " " + animateClass.slide_to_left_slider).eq(i).show();
		$(mainClass.slider + " " + animateClass.slide_to_left_slider).eq(i).animate({
			opacity: "1",
			right: "0px"
		}, animateClass.left_slide_speed);
	});
	// Slide To Right Animation
	$(mainClass.slider + " " + animateClass.slide_to_right_slider).each(function (i) {
		$(mainClass.slider + " " + animateClass.slide_to_right_slider).eq(i).css({
			position: "relative",
			opacity: "0",
			left: "40px"
		});
		$(mainClass.slider + " " + animateClass.slide_to_right_slider).eq(i).show();
		$(mainClass.slider + " " + animateClass.slide_to_right_slider).eq(i).animate({
			opacity: "1",
			left: "0px"
		}, animateClass.right_slide_speed);
	});
	// Slide To Top Animation
	$(mainClass.slider + " " + animateClass.slide_to_top_slider).each(function (i) {
		$(mainClass.slider + " " + animateClass.slide_to_top_slider).eq(i).css({
			position: "relative",
			opacity: "0",
			top: "20px"
		});
		$(mainClass.slider + " " + animateClass.slide_to_top_slider).eq(i).show();
		$(mainClass.slider + " " + animateClass.slide_to_top_slider).eq(i).animate({
			opacity: "1",
			top: "0px"
		}, animateClass.top_slide_speed);
	});
	// Slide To Down Animation
	$(mainClass.slider + " " + animateClass.slide_to_down_slider).each(function (i) {
		$(mainClass.slider + " " + animateClass.slide_to_down_slider).eq(i).css({
			position: "relative",
			opacity: "0",
			bottom: "20px"
		});
		$(mainClass.slider + " " + animateClass.slide_to_down_slider).eq(i).animate({
			opacity: "1",
			bottom: "0px"
		}, animateClass.down_slide_speed);

	});
}
function resetAnimation(){
	$(mainClass.slider + " " + animateClass.fadeIn_slider).each(function() {
		$(this).stop(); // Stop Animating
	});
	$(mainClass.slider + " " + animateClass.fadeOut_slider).each(function() {
		$(this).stop(); // Stop Animating
	});
	$(mainClass.slider + " " + animateClass.slide_to_left_slider).each(function() {
		$(this).stop(); // Stop Animating
	});
	$(mainClass.slider + " " + animateClass.slide_to_right_slider).each(function() {
		$(this).stop(); // Stop Animating
	});
	$(mainClass.slider + " " + animateClass.slide_to_top_slider).each(function() {
		$(this).stop(); // Stop Animating
	});
	$(mainClass.slider + " " + animateClass.slide_to_down_slider).each(function() {
		$(this).stop(); // Stop Animating
	});
}