var gal = Gallery.create("gal-1");

TEST.areEqual(typeof gal, "object" , "Gallery should be an object");

TEST.areEqual(gal.el.id, "gal-1" , "Gallery.el should be the one we specified");

TEST.areEqual(gal.idx, 0, "Gallery index should be start at zero");

TEST.areEqual(gal.set(4), 4, "Gallery.set (with number should return the same number passed in");

TEST.areEqual(gal.displayImage.getAttribute("src"), "images/cat2.jpg", "Gallery.set(with number) should change the displayed image ");

TEST.areEqual(gal.set("cat1"), 3, "Gallery.set (with string ) should return the corresponding number");

TEST.areEqual(gal.displayImage.getAttribute("src"), "images/cat1.jpg" , "Gallery.set(with string ) should change the displayed image")