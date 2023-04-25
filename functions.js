function Drawparabola(x1,y1,a,type)
{ ctx.beginPath()
      x1*=-10;
    y1*=-10;
    a*=-10; 
    ctx.strokeStyle= "blue";
   
    if(type==1)
    {
    for (let x=0; x<500;x+=1)
    {        
        let y= (Math.pow((x-x1),2)/(4*a))+y1;
        ctx.moveTo(x-1,y);
        ctx.lineTo(x,y);
    }
    for ( x=0; x>-500;x-=1)
    {        
        
        let y=(Math.pow((x-x1),2)/(4*a))+y1;
        ctx.moveTo(x-1,y);
        ctx.lineTo(x,y);
        
    }
    }
    else{
        for(let y=0;y<700;y+=1)
        {
            let x= (Math.pow((y-y1),2)/(4*a*-1))+x1;
            ctx.moveTo(x,y-1);
            ctx.lineTo(x,y);
          
        }
        for ( y=0; y>-700;y-=1)
        {
            let x= (Math.pow((y-y1),2)/(4*a*-1))+x1;
            ctx.moveTo(x,y-1);
            ctx.lineTo(x,y);
        }
    }
    ctx.stroke();

}
function Drawcircle(x1,y1,radius)
{
    ctx.beginPath()
    x1*=10;
    y1*=-10;
    radius*=10;
    ctx.strokeStyle="darkgreen"
    ctx.arc(x1,y1,radius,0,2*Math.PI);
    ctx.stroke();
}

function Drawline(m,c)
{
    ctx.beginPath()
    m*=-1; // this is angle so it doenst need to change
    c*=-10;

    ctx.strokeStyle= "darkred";

    for(let x=0; x<250; x+=1)
    {
        let y=m*x+ c;
        ctx.moveTo(x-1,y);
        ctx.lineTo(x,y);

    }
    for(x=0; x>-250;x-=1)
    {
        let y=m*x + c;
        ctx.moveTo(x-1,y);
        ctx.lineTo(x,y);
 

    }

    ctx.stroke();
}
function Drawellipse(h,k,a,b)
{
    ctx.beginPath();
   
    ctx.strokeStyle= "#000080"
  a*=-10;
  b*=-10;
  h*=-10;
  k*=-10;
  
  for (x=0;x<1700;x+=1)
  {
    let y= -Math.sqrt((1-(Math.pow((x-h),2)/Math.pow(a,2)))*Math.pow(b,2))+k;
    ctx.moveTo(x-1,y);
    ctx.lineTo(x,y)
  }
  for(x=0; x>-1700;x-=1)
  {
    
    let y= -Math.sqrt((1-(Math.pow((x-h),2)/Math.pow(a,2)))*Math.pow(b,2))+k;
    ctx.moveTo(x-1,y);
    ctx.lineTo(x,y)
  }

  for (x=0;x<1700;x+=1)
  {
    let y= Math.sqrt((1-(Math.pow((x-h),2)/Math.pow(a,2)))*Math.pow(b,2))+k;
    ctx.moveTo(x-1,y);
    ctx.lineTo(x,y)
  }
  for(x=0; x>-1700;x-=1)
  {
    let y= Math.sqrt((1-(Math.pow((x-h),2)/Math.pow(a,2)))*Math.pow(b,2))+k;
    ctx.moveTo(x-1,y);
    ctx.lineTo(x,y)
  }
  ctx.stroke();
}

function Drawhyperbola(h,k,a,b,type)
{
    ctx.beginPath();
    ctx.strokeStyle ="#461111"
    h*=-10;
    k*=-10;
    a*=-10;
    b*=-10;

    if(type==1)
    {
    for(x=0;x<250;x+=1)
    {
    let y= Math.sqrt((1+(Math.pow((x-h),2)/Math.pow(a,2)))*Math.pow(b,2))+k;
    ctx.moveTo(x-1,y);
    ctx.lineTo(x,y)
    }

    for(x=0; x>-250;x-=1)
    {
      let y= Math.sqrt((1+(Math.pow((x-h),2)/Math.pow(a,2)))*Math.pow(b,2))+k;
      ctx.moveTo(x-1,y);
      ctx.lineTo(x,y)
    }

    for (x=0;x<250;x+=1)
  {
    let y= -Math.sqrt((1+(Math.pow((x-h),2)/Math.pow(a,2)))*Math.pow(b,2))+k;
    ctx.moveTo(x-1,y);
    ctx.lineTo(x,y)
  }
  for(x=0; x>-250;x-=1)
  {
    
    let y= -Math.sqrt((1+(Math.pow((x-h),2)/Math.pow(a,2)))*Math.pow(b,2))+k;
    ctx.moveTo(x-1,y);
    ctx.lineTo(x,y)
  }
}
else{
    for(y=0;y<250;y+=1)
    {
    let x= Math.sqrt((1+(Math.pow((y-k),2)/Math.pow(b,2)))*Math.pow(a,2))+h;
    ctx.moveTo(x,y-1);
    ctx.lineTo(x,y)
    }

    for(y=0; y>-250;y-=1)
    {
      let x= Math.sqrt((1+(Math.pow((y-k),2)/Math.pow(b,2)))*Math.pow(a,2))+h;
      ctx.moveTo(x,y-1);
      ctx.lineTo(x,y)
    }

    for (y=0;y<250;y+=1)
  {
    let x= -Math.sqrt((1+(Math.pow((y-k),2)/Math.pow(b,2)))*Math.pow(a,2))+h;
    ctx.moveTo(x,y-1);
    ctx.lineTo(x,y)
  }
  for(y=0; y>-250;y-=1)
  {
    
    let x= -Math.sqrt((1+(Math.pow((y-k),2)/Math.pow(b,2)))*Math.pow(b,2))+h;
    ctx.moveTo(x,y-1);
    ctx.lineTo(x,y)
  }

}
  ctx.stroke();

}