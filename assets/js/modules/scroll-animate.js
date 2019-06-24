export function scrollAnimate() {

    const $window = $(window);
    const $items = $(".has-animate");

    $window.on("scroll load", animateHolder);

    function animateHolder() {
        const $windowHeight = $window.innerHeight();
        const $scrollPosition = $window.scrollTop();

        $items.each((i, it) => {

            if ($(it).offset().top <= ($windowHeight + $scrollPosition / 1.05)) {
                $(it).addClass("animate");
            }
        });
    }
}