$(function () {
	var carouselList = $("#carousel ul");

	function changeSlideLeft() {
		carouselList.animate({
			'marginLeft': -1200
		}, 500, moveFirstSlide);
	};

	function moveFirstSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({
			marginLeft: -600
		});
	};
	function changeSlideRight() {
		carouselList.animate({
			'marginLeft': 0
		}, 500, moveLastSlide);
	};

	function moveLastSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		firstItem.before(lastItem);
		carouselList.css({
			marginLeft: -600
		});
	};
	//setInterval(changeSlide, 3000);
	var controlPrev = $("#carousel-control-prev");
	controlPrev.click(function () {
		changeSlideLeft();
	});
	var controlNext = $("#carousel-control-next");
	controlNext.click(function () {
		changeSlideRight();
	});
});





