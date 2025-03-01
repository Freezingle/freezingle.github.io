
let canvas = document.getElementById("canvas");
let ctx= canvas.getContext("2d");
canvas.height= window.innerHeight;
canvas.width=window.innerWidth;
ctx.fillStyle= "lightgreen";
ctx.fillRect(0,0,canvas.width,canvas.height);
ctx.fill();
let mainX=canvas.height/2;
let mainY=canvas.width/2;



function Axes()
{
    ctx.beginPath();
  //  ctx.strokeStyle="lightgreen";
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
    ctx.strokeStyle="darkgreen";    
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
$("#btn4").click(function(){
    $("#optParabola").toggle();
});
$("#btn5").click(function(){
    $("#optHyperbola").toggle();
});
$("#circleDone").click(function(){
let circleH= document.getElementById("circleH");
let circleK= document.getElementById("circleK");
let circleR = document.getElementById("circleR");

Drawcircle(circleH.value,circleK.value,circleR.value);

});
$("#lineDone").click(function(){
    let lineM= document.getElementById("lineM");
    let lineC = document.getElementById("lineC");

    Drawline(lineM.value,lineC.value);
});
$("#ellipseDone").click(function(){
    let ellipseH= document.getElementById("ellipseH");
    let ellipseK = document.getElementById("ellipseK");
    let ellipseA= document.getElementById("ellipseA");
    let ellipseB = document.getElementById("ellipseB");
    Drawellipse(ellipseH.value, ellipseK.value, ellipseA.value, ellipseB.value);
});
$("#parabolaDone1").click(function(){
let parabolaH=document.getElementById("parabolaH");
let parabolaK= document.getElementById("parabolaK");
let parabolaA= document.getElementById("parabolaA");

    Drawparabola(parabolaH.value,parabolaK.value,parabolaA.value,1)
});
$("#parabolaDone2").click(function(){
    let parabolaH=document.getElementById("parabolaH");
    let parabolaK= document.getElementById("parabolaK");
    let parabolaA= document.getElementById("parabolaA");
    Drawparabola(parabolaH.value,parabolaK.value,parabolaA.value,0)
});
$("#hyperbolaDone1").click(function(){
    let hyperbolaH= document.getElementById("hyperbolaH");
    let hyperbolaK= document.getElementById("hyperbolaK");
    let hyperbolaA= document.getElementById("hyperbolaA");
    let hyperbolaB= document.getElementById("hyperbolaB");

    Drawhyperbola(hyperbolaH.value,hyperbolaK.value,hyperbolaA.value,hyperbolaB.value,1);

});
$("#hyperbolaDone2").click(function(){
    let hyperbolaH= document.getElementById("hyperbolaH");
    let hyperbolaK= document.getElementById("hyperbolaK");
    let hyperbolaA= document.getElementById("hyperbolaA");
    let hyperbolaB= document.getElementById("hyperbolaB");

    Drawhyperbola(hyperbolaH.value,hyperbolaK.value,hyperbolaA.value,hyperbolaB.value,2);

})
});




//finish the overall coding
//leave only responsive design for next day(if possible finish tommorow and be done with this project)
