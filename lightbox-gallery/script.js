$(document).ready(() => {
    $(".thumb").click(function () {
        const src = $(this).attr("src");
        $("#lightbox-img").attr("src", src);
        $("#lightbox").fadeIn();
    });

    $("#close, #lightbox").click(() => {
        $("#lightbox").fadeOut();
    });

    $("#lightbox-img").click((e) => {
        e.stopPropagation();
    });
});
