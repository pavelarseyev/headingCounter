export function cardsSlider() {

    const $slider = $(".cards .slider");
    const $prev = $(".cards button.prev");
    const $next = $(".cards button.next");


    function initCardsSlider() {
        if (window.innerWidth < 1200) {

            $(".cards .slider:not(.slick-initialized)").slick({
                infinite: false,
                arrows: false,
                swipeToSlide: true,
                variableWidth: true
            });

        } else {
            $(".cards .slider.slick-initialized").slick("unslick");
        }
    }

    initCardsSlider();

    $(window).resize(function () {
        initCardsSlider();
    });

    $prev.click(function () {
        $slider.slick("slickPrev");
    });

    $next.click(function () {
        $slider.slick("slickNext");
    });
}