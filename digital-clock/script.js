$(document).ready(() => {
    const updateClock = () => {
        const now = new Date();
        $("#hour").text(String(now.getHours()).padStart(2, '0'));
        $("#minute").text(String(now.getMinutes()).padStart(2, '0'));
        $("#second").text(String(now.getSeconds()).padStart(2, '0'));
    }
    setInterval(updateClock, 1000);
    updateClock();
});