(function () {
    pagination(false);
})();

if (typeof navigator.serviceWorker !== "undefined") {
    navigator.serviceWorker.register("/sw.js")
}
