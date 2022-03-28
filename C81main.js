var canvas=document.getElementById("my_canvas");
ctx=canvas.getContext("2d");
color="purple";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=3;
ctx.arc(200,200,60,0,2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    console.log(color);
    mouse_x=e.clientX-canvas.offsetLeft;
    mouse_y=e.clientY-canvas.offsetTop;
    console.log("x= "+mouse_x);
    console.log("y= "+mouse_y);
    circle(mouse_x,mouse_y);
}
function circle(mouse_x,mouse_y){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=3;
    ctx.arc(mouse_x,mouse_y,50,0,2*Math.PI);
    ctx.stroke();
}
function clearArea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}