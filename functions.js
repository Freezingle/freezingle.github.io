function parabola(x1,y1,a,type1)
{   x1*=-10;
    y1*=-10;
    a*=-10; 
    ctx.strokeStyle= "blue";
    penPointX=0;
    penPointY=0;
    if(type1)
    {
    for (let x=0; x<700;x+=1)
    {        
        let y= (Math.pow((x-x1),2)/(4*a))+y1;
        ctx.moveTo(penPointX,y);
        ctx.lineTo(x,y);
        penPointX=x;
    }
    for ( x=0; x>-700;x-=1)
    {        
        
        let y=(Math.pow((x-x1),2)/(4*a))+y1;
        ctx.moveTo(penPointX,y);
        ctx.lineTo(x,y);
        penPointX=x;
    }
    }
    else{
        for(let y=0;x<700;x+=1)
        {
            let x= (Math.pow((y-y1),2)/(4*a))+x1;
            ctx.moveTo(x,penPointY);
            ctx.lineTo(x,y);
            penPointY=y;
        }
        for ( y=0; y>-700;y-=1)
        {
            let x= -(Math.pow((y-y1),2)/(4*a))+x1;
            ctx.moveTo(x,penPointY);
            ctx.lineTo(x,y);
            penPointY=y;
        }
    }

}
/*function circle(x1,y1,radius)
{
    x1*=-10;
    y1*=-10;
    radius*=10;
    ctx.translate(mainY,mainX);
    ctx.strokeStyle="darkblue";
    penPointX=0;
    for(let x=0; x<700;x+=1)
    {
        let y= Math.sqrt(Math.pow(radius,2)-Math.pow((x-x1),2))+y1;
        ctx.moveTo(penPointX,y);
        ctx.lineTo(x,y);
        penPointX=x;
    }
    for (let x=0;x<700;x+=1)
    {
        let y= -Math.sqrt(Math.pow(radius,2)-Math.pow((x-x1),2))+y1;
        ctx.moveTo(penPointX,y);
        ctx.lineTo(x,y);
        penPointX=x

    }
    for (let x=0; x>-700;x-=1)
    {
        let y= Math.sqrt(Math.pow(radius,2)-Math.pow((x-x1),2))+y1;
        ctx.moveTo(penPointX,y);
        ctx.lineTo(x,y);
        penPointX=x;
    }
    for (let x=0; x>-700;x-=1)
    {
        let y= -Math.sqrt(Math.pow(radius,2)-Math.pow((x-x1),2))+y1;
        ctx.moveTo(penPointX,y);
        ctx.lineTo(x,y);
        penPointX=x;
    }

}*/

function circle(x1,y1,radius)
{
    x1*=10;
    y1*=10;
    radius*=10;
    ctx.strokeStyle="blue"
    ctx.arc(x1,y1,radius,0,2*Math.PI);
    ctx.stroke();
}