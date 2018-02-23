$(function(){
	var carouselList = $("#carousel ul");
	function changeSlide() {
		carouselList.animate({'marginLeft':-600}, 500, moveFirstSlide);
	};
	function moveFirstSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
	};
	setInterval(changeSlide, 3000);
});

/*var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function showSlides(n) {
	var slides = document.getElementsByClassName("mySlides");
	if (n > slides.length) {
		slideIndex = 1
	}
	if (n < 1) {
		slideIndex = slides.length
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[slideIndex - 1].style.display = "block";
}*/