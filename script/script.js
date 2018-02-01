var index = 1;
var mediaQuery = window.matchMedia("(orientation: portrait)");

//Show slide version? Or show all images?
check(mediaQuery);
mediaQuery.addListener(check);

function traverseSlide(n) {
    showSlide(index += n);
}

function check(media) {
    if (media.matches) {
        showSlide(index);
    }
    else {
        showNormal("analog-image");
    }
}

function showSlide(n) {
    var i;
    var images = document.getElementsByClassName("analog-image");

    if (n > images.length) {
        index = 1;
    }

    if (n < 1) {
        index = images.length;
    }

    for (i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }

    images[index - 1].style.display = "block";
}

function showNormal(className) {
    var i;
    var images = document.getElementsByClassName(className);

    for (i = 0; i < images.length; i++) {
        images[i].style.display = "inline-block";
    }
}