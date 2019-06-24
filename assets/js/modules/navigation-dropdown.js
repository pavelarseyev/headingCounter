export function navigationDropdown() {

    const $btn = $(".main-navigation button");

    $btn.on("click", function () {
        $(this).next().stop().slideToggle();
    });
}