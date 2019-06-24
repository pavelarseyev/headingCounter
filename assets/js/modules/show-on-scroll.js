export function showOnScroll() {
    let items = $(".scroll-fadein");

    function showItems() {
        items.each(function (i, item) {
            if (item.getBoundingClientRect().top <= (window.innerHeight - 200)) {
                $(item).addClass("animated");
            }
        });
    }

    showItems();

    $(window).scroll(function () {
        showItems();
    });


}