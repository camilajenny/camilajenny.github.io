/**
 * Created by Kamil on 05-Mar-17.
 */

function init() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 300,
            header = document.getElementsByTagName("nav")[0]; //we have only 1 menu
        if(header === null) {
            console.error("header is null");
            return;
        }
        if (distanceY > shrinkOn) {
            header.classList.add("smaller");
        } else {
            if (header.classList.contains("smaller")) {
                header.classList.remove("smaller");
            }
        }
    });
}
window.onload = init();