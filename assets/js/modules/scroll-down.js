export function scrollDown() {
	
	const $btn = $(".scroll-down");
	
	$btn.on("click", () => {
		$("html, body").animate({ scrollTop: $(".preloader").outerHeight() }, 700);
	});
}