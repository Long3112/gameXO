class Square{
    x;
    y;
    vuong;
    color;
    canvas;
    ctx;
    constructor(x, y, vuong) {
        this.x = x;
        this.y = y;
        this.vuong = vuong;
        this.canvas = document.getElementById('canvas1');
        this.ctx = this.canvas.getContext('2d');
    }

draw(){
    this.ctx.beginPath();
    this.ctx.rect(this.x,this.y,this.vuong,this.vuong,this.color);
    this.ctx.stroke();
    this.ctx.closePath();
}
}