var sun;
var earth;
//Loading the Gifs
function preload(){
  sun = createImg("/sun.gif")
  earth = createImg("/earth.gif")
 
}
  
function setup() { 
createCanvas(1920, 1080);                //sizing the canvas to fit the whole screen
} 

function draw() { 
  background(0);                         //background color
  sun.position(1580,0);                  //Positioning the Gifs.
  earth.position(10,600);

}


