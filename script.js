//if browser support service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js',{scope:'.'});
    console.log("Service worker found")
}
else{
    console.log("Service worker error");
}