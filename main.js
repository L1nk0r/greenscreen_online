var fgimage = new SimpleImage();
var bgimage = new SimpleImage();

function upload_1(){
   var file = document.getElementById("photo_upload_input_1");

   fgimage = new SimpleImage(file);
   var canvas = document.getElementById("canvas1");

   fgimage.drawTo(canvas);
}

function upload_2(){
   var file = document.getElementById("photo_upload_input_2");

   bgimage = new SimpleImage(file);
   var canvas = document.getElementById("canvas2");

   bgimage.drawTo(canvas);
}

function make_grayscale_1(){
   for (var pix of fgimage.values()){
      var avg = (pix.getRed() + pix.getGreen() + pix.getBlue()) / 3;

      pix.setRed(avg);
      pix.setGreen(avg);
      pix.setBlue(avg);
   }

   fgimage.drawTo(document.getElementById("canvas1"));
}

function make_grayscale_2(){
   for (var pix of bgimage.values()){
      var avg = (pix.getRed() + pix.getGreen() + pix.getBlue()) / 3;

      pix.setRed(avg);
      pix.setGreen(avg);
      pix.setBlue(avg);
   }

   bgimage.drawTo(document.getElementById("canvas2"));
}

function compare(){

   var outputImage = new SimpleImage(fgimage.getWidth(), fgimage.getHeight());

   for (var pixel of fgimage.values()){
      var x = pixel.getX();
      var y = pixel.getY();
      if (pixel.getGreen() > pixel.getBlue() + pixel.getRed()){
         var bgPixel = bgimage.getPixel(x, y);
         outputImage.setPixel(x, y, bgPixel);  
      } else {
         outputImage.setPixel(x, y, pixel);  
      }
   } 

   outputImage.drawTo(document.getElementById("canvas3"));
}
