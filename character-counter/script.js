$(document).ready(() => {
    const $textarea = $("textarea"); 
    $textarea.on("input", () => {
       $("#count").text($textarea.val().length);
    });
});
