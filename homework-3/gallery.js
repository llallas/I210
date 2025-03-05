let photos = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"];

var gallerySection = document.getElementById("gallery");

for (var i = 0; i < photos.length; i++) {
  var img = document.createElement("img");
  img.src = "images/" + photos[i];
  img.alt = "Image " + (i + 1);
  img.height = 300;
  gallerySection.appendChild(img);
}
