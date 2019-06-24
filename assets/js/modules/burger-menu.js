export function burgerMenu() {

    const $burger = $(".burger-btn");
    const $body = $("body");

    $burger.on("click", () => {
        $body.toggleClass("show-nav");
        if ($(".preloader").outerHeight() > $(window).scrollTop()) {
            $("html, body").animate({scrollTop: $(".preloader").outerHeight()}, 700);
        }
    });

}