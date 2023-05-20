let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let width = canvas.width;
let height = canvas.height;

let circle = function(x,y,radius,fill,color){
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    if(fill){
        ctx.fill();
    }else{
        ctx.stroke();
    }
}
let colors = ["pink", "red", "blue", "black", "gold", "purple"];

let pickRandomColor = function(color){
    let i = Math.floor(Math.random() * color.length);
    return colors[i]
} 
let Ball = function(){
    this.x = width / 2,
    this.y = height / 2,
    this.xSpeed = Math.random() * 8 - 4;
    this.ySpeed = Math.random() * 4 - 2;
    this.radius = 10;
    this.color = pickRandomColor(colors);
}
Ball.prototype.draw = function(){
    circle(this.x, this.y, this.radius, true, this.color);
}
Ball.prototype.move = function(){
    this.x += this.xSpeed;
    this.y += this.ySpeed;
}

Ball.prototype.checkCollosion = function(){
    if(this.x > width){
        this.xSpeed = -this.xSpeed;
    }
    if(this.x < 0){
        this.xSpeed = -this.xSpeed;
    }
    if(this.y > height){
        this.ySpeed = -this.ySpeed;
    }
    if(this.y < 0){
        this.ySpeed = -this.ySpeed;
    }
}
let ball = [];

for(let i = 0; i < 10; i++){
    ball[i] = new Ball();
}
setInterval(function(){
    ctx.clearRect(0,0,width,height);
    for(let i = 0; i < ball.length; i++){
        ball[i].draw();
        ball[i].move();
        ball[i].checkCollosion();
    }
    ctx.strokeRect(0,0,width,height)
},50)
