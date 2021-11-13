
img="";
status="";
object=[];

function setup() {
canvas=createCanvas(640,420);
canvas.center();

objectDetector=ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML="status: detecting objects...";

}


function preload() {
img = loadImage("fruit.jpeg");


}


function modelLoaded() {

  console.log("model loaded");
  status=true;  
  objectDetector.detect(img, gotResult);

}



function gotResult(error, results) {
if(error) {
    console.log(error);
}
else{ 
console.log(results);
objects=results;
}
 
}





function draw() {
image(img,0,0,640,420);
 if(status != "") {
   for (i = 0; i < objects.length; i++) {
   document.getElementById("status").innerHTML="status: object detected";
   fill("#FF5233");
   confidence = floor(objects[i].confidence*100);
   text(objects[i].label + " " + confidence + "%", objects[i].x, objects[i].y);
   noFill();
   stroke("#FF5233");
   rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
   
   }
 }
 

}