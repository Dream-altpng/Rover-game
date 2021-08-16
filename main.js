canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

rover_width=100;
rover_height=90;

roverx=650; 
rovery=10;

background_image="mars.jpg";
rover_image="rover.png";

function add(){
    background_imgtag=new Image();
    background_imgtag.onload=uploadBackground;
    background_imgtag.src=background_image;

    rover_imgtag=new Image();
    rover_imgtag.onload=uploadrover;
    rover_imgtag.src=rover_image;
}
function uploadBackground(){
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(rover_imgtag,roverx,rovery,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);

function my_keydown(e){
  keyPressed=e.keyCode;
  console.log(keyPressed); 
  if(keyPressed=='38'){
      up();
      console.log("up");
  } 
  if(keyPressed=='40'){
      down();
      console.log("down");
  }
  if(keyPressed=='37'){
      left();
      console.log("left");
  }   
  if(keyPressed=='39'){
      right();
      console.log("right");
  } 
}

function up(){
    if (rovery>=0) {
        rovery=rovery-10;
        console.log("when up arrow is pressed , x= " + roverx + "y= " + rovery);
        uploadBackground();
        uploadrover();
    }
}

function down(){
    if (rovery<=500) {
        rovery=rovery+10;
        console.log("when down arrow is pressed , x= " + roverx + "y= " + rovery);
        uploadBackground();
        uploadrover();
    }
}

function left(){
    if (roverx>=0) {
        roverx=roverx-10;
        console.log("when left arrow is pressed , x= " + roverx + "y= " + rovery);
        uploadBackground();
        uploadrover();
    }
}

function right(){
    if (roverx<=700) {
        roverx=roverx+10;
        console.log("when right arrow is pressed , x= " + roverx + "y= " + rovery);
        uploadBackground();
        uploadrover();
    }
}