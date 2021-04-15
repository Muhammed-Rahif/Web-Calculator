//if browser support service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js',{scope:'/Web-Calculator/'});
    console.log("Service worker found")
}
else{
    console.log("Service worker error");
}