
// VARIABILES
var c=document.getElementById('myCanvas');
var ctx=c.getContext('2d'); 

var b=document.getElementById('powerBtn');

var rb=document.getElementById('rightBtn');
var lb=document.getElementById('leftBtn');

var ub=document.getElementById('upBtn');
var db=document.getElementById('downBtn');

 
var running=true;
var finished=false;
var score=0;

var isCollision;

var WIDTH=200+100;
var HEIGHT=400-250;
// var speed=50;

// http://images.clipartpanda.com/car-clipart-top-view-red-car-top-view-hi.png

var keys=[];

//Functions 
// function person(firstName,lastName,age,eyeColor) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.eyeColor = eyeColor;
//     this.changeName = function (name) {
//         this.lastName = name;
//     }
// }
// var myMother = new person("Sally","Rally",48,"green");
// myMother.changeName("Doe");

//Functions
var dash={
  x:30,
  y:0,
  speed:0,
  width:10,
  height:30
};



var car={ 
  x:150,
  y:110,
  color:'red',
  turnSpeed:1,
  moveSpeed:1,

  width:70,
  height:30
};

var truck={ 
  x:20,
  y:0,
  speed:5,
  color:'black',  
  width:80,
  height:45
};


//left and right by KEYS LISTENTERS
window.onkeydown = function(e) {
   keys[e.keyCode]=true; 
   //s('key-'+e.keyCode); 
  //s(keys);  
}

window.onkeyup = function(e) {
  delete keys[e.keyCode];
  //s('onkeyup-'+e.keyCode); 
  //s(keys);
}

function cspeed() {
  var cspeed = document.getElementById("cspeed").value;
  if(parseInt(cspeed)>0)
    car.moveSpeed=cspeed;
  else
    car.moveSpeed=1;
    s('car.moveSpeed :'+car.moveSpeed);

}
 
//left and right by buttons
// rb.onclick=function(){
//   s('r click');
//   if (car.x+car.width<=WIDTH) car.x+=car.turnSpeed;
//   } 

// lb.onclick=function(){
//   s('l click');    
//   if (car.x>0) car.x-=car.turnSpeed;
//   }

//   //speed up and down by buttons
// ub.onclick=function(){
//   s('u click');
//   truck.speed++;
//   } 

// db.onclick=function(){
//   s('d click');    
//   truck.speed--;
//   }

// //POWER
// b.onclick=function(){
//   s('click');
// if(running) {
//   running=false;
//   this.value='Resume';
// }
//   else{ 
//     running=true;
//     this.value='Pause';
//   }
// };


//GAME
function run(){
  update();
  render();
}



//ACITON
function update(){
  
    

  //dashs
  dash.y+=dash.speed;

  //when reach the buttom of canvas y=HEIGT
  if(dash.y>=HEIGHT) dash.y=0;



  //cars

  
  if (keys[39]) {
      //Right
      s('right');
      if (car.x+car.width<=WIDTH) car.x+=car.turnSpeed;
  }
  if (keys[37]) {
      //Left
      s('left');
      if (car.x>0) car.x-=car.turnSpeed;
  }

  //speed
  if (keys[38]) {
      //up
      //s('up :'+dash.speed);
      s('up :'+car.y);
      //s('car.moveSpeed :'+car.moveSpeed);

      //dash.speed++;
      if (car.y>=0) car.y-=parseInt(car.moveSpeed);
  }
  if (keys[40]) {
      //down
      s('down :'+car.y);
      //s('down :'+dash.speed);

      //dash.speed--;      
      if (car.y+car.height<=HEIGHT) car.y+=parseInt(car.moveSpeed);
  }


  //trucks  
  // truck.y+=truck.speed;
  //     //repeate
  //     if(truck.y>=HEIGHT) {
  //       truck.y=0;
  //       truck.x=Math.random()*WIDTH;
  //     }

  isCollision=false;
  
  isCollision=collision(car,truck)[0];
  isDir=collision(car,truck)[1];
  //Collisoin
  if (isCollision) {
    s('collision!!!');
    // if (score>0) score--;


    // //ctx.fillStyle='yellow';
    // //ctx.fillRect(car.x,car.y,car.width,car.height);
    
    // s(isDir);
    //  //push car
    // if(isDir=='l')car.x-=40;
    // if(isDir=='r')car.x+=40;
    finished=true;


  }
  else{
    score++;
  }
}



//DRAWING
function render(){

  //clear
  ctx.fillStyle='gray';
  ctx.fillRect(0,0,WIDTH,HEIGHT);

  //draw H lines
  ctx.fillStyle='black';  
  for(var h=10;h<HEIGHT;h+=10){
    //ctx.fillRect(0,h,WIDTH,1); 
  }

  //draw V lines
  ctx.fillStyle='black';  
  for(var v=10;v<WIDTH;v+=10){
    //ctx.fillRect(v,0,1,HEIGHT);
  }

 
  // ctx.fillStyle='red'; 
  // ctx.fillRect(0,0,WIDTH,1);
  // ctx.fillRect(0,HEIGHT,WIDTH,1);


  //draw dash s
  ctx.fillStyle='white';  
      for(var i=0;i<HEIGHT;i+=60){

        //first group
        ctx.fillRect(dash.x,dash.y-i,dash.width,dash.height);
        ctx.fillRect(dash.x+100,dash.y-i,dash.width,dash.height);
        ctx.fillRect(dash.x+200,dash.y-i,dash.width,dash.height);

        //second group
        ctx.fillRect(dash.x,dash.y+i,dash.width,dash.height);
        ctx.fillRect(dash.x+100,dash.y+i,dash.width,dash.height);
        ctx.fillRect(dash.x+200,dash.y+i,dash.width,dash.height);
        //s(dash.y+':'+(HEIGHT));  
    }
  
  //draw car
// function carFunction(x,y,color,turnSpeed,moveSpeed,width,height) {
//     this.x = x;
//     this.y = y;
//     this.color = color;
//     this.turnSpeed = turnSpeed;    
//     this.moveSpeed = moveSpeed;

//     this.width = width;    
//     this.height = height;

//     this.changeMoveSpeed = function (s) {
//         this.moveSpeed = s;
//     }
// }


//   var car = new carFunction(150,110,'red',1,1,70,30);

 
  // ctx.fillStyle=car.color;
  // ctx.fillRect(car.x,car.y,car.width,car.height);
  var carImg=new Image();
  carImg.src="car.png";
  ctx.drawImage(carImg,car.x,car.y,car.width,car.height);

   //draw truck
  // ctx.fillStyle=truck.color;
  // ctx.fillRect(truck.x,truck.y,truck.width,truck.height);
  // var truckImg=new Image();
  // truckImg.src="truck.png";
  // ctx.drawImage(truckImg,truck.x,truck.y,truck.width,truck.height);

  //draw score
  // ctx.fillStyle='yello';
  // ctx.fillText(score,20,20);

  ctx.font = "50px Verdana";
// Create gradient
  var gradient = ctx.createLinearGradient(0, 0, c.width, 0);
  gradient.addColorStop("0", "magenta");
  gradient.addColorStop("0.5", "blue");
  gradient.addColorStop("1.0", "red");
  // Fill with gradient
  // ctx.fillStyle = gradient;
  // ctx.fillText(score, 100, 90);
  //ctx.fillStyle='blue';
  //ctx.fillRect(70,HEIGHT-280,20,30);


  
   

}





//FUNTIONS
function collision (c,t) {
var dir;
  // body...
  var r=[];
  r[0]=false;
  //reach up
  if (c.y<t.y+t.height) {

    if (c.x<=(t.x+t.width) && c.x>t.x) //from right   
    {
      r[0]= true;
      r[1]='r';
    }


    if ((c.x+c.width)>t.x && (c.x+c.width)<(t.x+t.width)) //from left
    {
      r[0]= true;
      r[1]='l';
    }
    
    //r[0]=false;

  }   
return r;
  }


function resetGame(){
  score=0;
  finished=false;

   //sound    
    var snd = new Audio("sound1.wav"); // buffers automatically when created
    snd.play();

    
  car.x=150;
  car.y=110;

 
  truck.x=20;
  truck.y=0;
  



  //running=true;
}
 
function s(x){
  console.log(x);
  document.getElementById("demo").innerHTML = x;
}


//LIFE

setInterval(function(){
  //while(running)  
  if(running && !finished) {
   run(); 
  }
  if(finished){
    //end game
    resetGame();
  }
},100);

//DUMB

// window.addEventListener("keydown",function (e) 
// {
//   // body...
//   //alert(e.keyCode);
//   keys[e.keyCode]=true; 
// },false);


// window.addEventListener("keyup",function (e) 
// {
//   // body...
//   //alert(e.keyCode);
//   delete keys[e.keyCode];
// },false);

// 39 r
// 37 l