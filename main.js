
canvas = document.getElementById("mine");
ctx= canvas.getContext("2d");


function show()
{

    alert("Hello and welcome to Olypmics games we are so exicted to see the olympics next year or now the logo of olympics will be display rigth now and please go to the website https://www.nbcolympics.com/")
    document.getElementById("mine").style.display = "block";
  
    ctx.beginPath()
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 5;
    ctx.arc(250, 210, 40, 2*Math.PI);
    ctx.stroke();

    ctx.beginPath()
    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;
    ctx.arc(300, 210, 40, 2*Math.PI);
    ctx.stroke();

    ctx.beginPath()
    ctx.strokeStyle = "red";
    ctx.lineWidth = 5;
    ctx.arc(350, 210, 40, 2*Math.PI);
    ctx.stroke();

    ctx.beginPath()
    ctx.strokeStyle = "yellow";
    ctx.lineWidth = 5;
    ctx.arc(250, 210 , 40, 2*Math.PI);
    ctx.stroke();

    ctx.beginPath()
    ctx.strokeStyle = "green";
    ctx.lineWidth = 5;
    ctx.arc(250, 210, 40, 2*Math.PI);
    ctx.stroke();

}
function hide(){
    document.getElementById("mine").style.display = "none";
    alert("You hid the logo press the button ' Olympic logo' and it will show the canvas  ")
}