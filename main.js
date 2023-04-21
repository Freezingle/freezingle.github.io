let canvas = document.getElementById("canvas");
let ctx= canvas.getContext("2d");
canvas.height= 720;
canvas.width=1500;
ctx.fillStyle= "lightgrey";
ctx.fillRect(0,0,canvas.width,canvas.height);
ctx.fill();
let mainX=387;
let mainY=660;
//x axis
ctx.beginPath();
function Axes()
{
for (let i=0; i<=canvas.height; i+=30)
{
    ctx.lineWidth=2;
     ctx.moveTo(0,i);
     ctx.lineTo(canvas.width,i)
}

    for (let j=0; j<=canvas.width; j+=30)
{
     ctx.moveTo(j,0);
     ctx.lineTo(j,canvas.height);
}
ctx.stroke()
}

Axes();
function mainAxis(mainX,mainY){
    
    ctx.beginPath()
    ctx.lineWidth=5;
    //y axis
    ctx.moveTo(mainY,0)
    ctx.lineTo(mainY,canvas.height)
        //x axis
    ctx.moveTo(0,mainX)
    ctx.lineTo(canvas.width,mainX)
    ctx.stroke();

}

function OriginX(n){

    if(n==1)
    {
        mainX-=30;
    }
    if(n==2)
    {
        mainX+=30;
    }
    mainAxis(mainX,mainY);
}

mainAxis(mainX,mainY);

