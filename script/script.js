function check(media) {
  if (media.matches) {
    showSlide(1, 0);
    showSlide(1, 1);
  }
  else {
    showNormal("analog-image");
    showNormal("poly-image");
  }
}

function traverseSlide(n, classNum) {
  showSlide(indexes[classNum] += n, classNum);
}

function showSlide(n, classNum) {
  var i;
  var images = document.getElementsByClassName(classes[classNum]);

  if (n > images.length) {
    indexes[classNum] = 1;
  }

  if (n < 1) {
    indexes[classNum] = images.length;
  }

  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }

  images[indexes[classNum] - 1].style.display = "block";
}

function showNormal(className) {
  var i;
  var images = document.getElementsByClassName(className);

  for (i = 0; i < images.length; i++) {
    images[i].style.display = "inline-block";
  }
}

var indexes = [1, 1];
var classes = ["analog-image", "poly-image"];
var mediaQuery = window.matchMedia("(orientation: portrait)");

//Show slide version? Or show all images?
check(mediaQuery);
mediaQuery.addListener(check);

document.getElementById('analog-prev').onclick = function() {
  traverseSlide(-1, 0);
};

document.getElementById('analog-next').onclick = function() {
  traverseSlide(1, 0);
}

document.getElementById('poly-prev').onclick = function() {
  traverseSlide(-1, 1);
};

document.getElementById('poly-next').onclick = function() {
  traverseSlide(1, 1);
}