export function preloader() {

    $(window).on("load", () => {
        $("body").addClass("load");
    });
}