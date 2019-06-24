export function stickyHeader() {
	
	const $header = $(".header") ;
	$(window).on("scroll load", () => {
		$(".preloader").outerHeight() <= $(window).scrollTop() ? $header.addClass("sticky") : $header.removeClass("sticky");
	});
}