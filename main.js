
let canvas = document.getElementById("canvas");
let ctx= canvas.getContext("2d");
canvas.height= window.innerHeight;
canvas.width=window.innerWidth;
ctx.fillStyle= "white";
ctx.fillRect(0,0,canvas.width,canvas.height);
ctx.fill();
let mainX=canvas.height/2;
let mainY=canvas.width/2;



function Axes()
{
    ctx.beginPath();
for (let i=0; i<=canvas.height; i+=10)
{
    ctx.lineWidth=0.5;
     ctx.moveTo(0,i);
     ctx.lineTo(canvas.width,i)
}

    for (let j=0; j<=canvas.width; j+=10)
{
     ctx.moveTo(j,0);
     ctx.lineTo(j,canvas.height);
}
ctx.stroke()
}


function mainAxis(){
   
    ctx.beginPath()
    ctx.lineWidth=3;
    //y axis
    ctx.moveTo(mainY,0)
    ctx.lineTo(mainY,canvas.height)
        //x axis
    ctx.moveTo(0,mainX)
    ctx.lineTo(canvas.width,mainX)
    ctx.stroke();

}

window.onload=()=>{
    Axes();
    mainAxis();
    ctx.translate(mainY,mainX);
}


$(document).ready(function(){
$("#btn1").click(function(){
    $("#optLine").toggle();
  });

$("#btn2").click(function(){
    $("#optCircle").toggle();
});
$("#btn3").click(function(){
    $("#optEllipse").toggle();
});

$("#circleDone").click(function(){
let circleH= document.getElementById("circleH");
let circleK= document.getElementById("circleK");
let circleR = document.getElementById("circleR");

Drawcircle(circleH.value,circleK.value,circleR.value);

});
});
