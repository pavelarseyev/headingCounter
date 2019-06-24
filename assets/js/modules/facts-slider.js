export function factsSlider() {

    const $slider = $(".facts .slider");
    const $prev = $(".facts button.prev");
    const $next = $(".facts button.next");

    $slider.slick({
        infinite: false,
        arrows: false,
        swipeToSlide: true,
        zIndex: 1,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1281,
                settings: {}
            },
            {
                breakpoint: 480,
                settings: {}
            }
        ]
    });

    $prev.click(function () {
        $slider.slick("slickPrev");
    });

    $next.click(function () {
        $slider.slick("slickNext");
    });
}