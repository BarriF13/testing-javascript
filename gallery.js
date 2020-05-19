var Gallery = (function () {
  var Gallery = {},

    galleryPrototype = {

    };
  Gallery.create = function (id) {
    var gal = Object.create(galleryPrototype), ul, i=0 ,len;
    gal.el = document.getElementById(id);
    ul = gal.el.querySelector("ul");

    gal.imgs = gal.el.querySelectorAll("ul li img");
    gal.displayImage = gal.el.querySelector("img");
    gal.idx = 0;
    gal.going = false;
    gal.ids = [];
    len = gal.imgs.length;

    for (; i < len; i++) {
      gal.ids[i] = gal.imgs[i].getAttribute("src").split("-thumb")[0].split("/")[1];
    }
    ul.addEventListener("click", function (e) {
      var i = [].indexOf.call(gal.imgs, e.target);
      if (i > -1) {
        gal.set(i);
      }
    }, false);
    //gal.set(0);
    return gal;
    //return "some String"; ---for testing the testing framework
  };
  return Gallery;
}());