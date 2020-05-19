var gal = Gallery.create("gal-1");

TEST.areEqual(typeof gal, "object" , "Gallery should be an object");

TEST.areEqual(gal.el.id, "gal-1" , "Gallery.el should be the one we specified");

TEST.areEqual(gal.idx, 0, "Gallery index should be start at zero");