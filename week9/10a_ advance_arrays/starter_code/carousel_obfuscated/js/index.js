var images = ["images/animals/animals1.jpg","images/animals/animals2.jpg","images/animals/animals3.jpg","images/animals/animals4.jpg"];

var i = 0;

function previousImage(){
  i>0 ? changeImage(indexChange);
}

function nextImage(){
  i<0 ? changeImage()
}

changeImage( 
  images[0++]
  )

$(".btn[value="Skip"]").on("click, nextImage");