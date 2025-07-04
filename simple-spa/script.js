$(document).ready(() => {

    $(".nav-link").click(function (e) {
        e.preventDefault();

        const clickedPage = $(this).attr("href");

        $(".page").removeClass("active");
        $(clickedPage).addClass("active");

        $(".nav-link").removeClass("active");
        $(this).addClass("active");
    });

});