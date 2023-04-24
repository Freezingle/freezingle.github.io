
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
Axes();
mainAxis();
ctx.lineWidth=7
ctx.translate(mainY, mainX)
circle(0,0,10)
ellipse(0,0,5,8)
ellipse(0,0,5,10)
ellipse(0,0,5,11)
ellipse(0,0,5,12)
ellipse(0,0,5,13)
ellipse(0,0,5,14)
ellipse(0,0,5,15)
ellipse(0,0,5,16)
ellipse(0,0,5,17)
ellipse(0,0,5,18)


ellipse(0,0,8,5)
ellipse(0,0,10,5)
ellipse(0,0,11,5)
ellipse(0,0,12,5)
ellipse(0,0,13,5)
ellipse(0,0,14,5)
ellipse(0,0,15,5)


