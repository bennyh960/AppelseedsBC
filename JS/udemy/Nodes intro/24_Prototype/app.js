// source https://www.youtube.com/watch?v=hS_WqkyUah8&t=2s&ab_channel=TheCodingTrain

function Particle() {
  this.x = 100;
  this.y = 99;
}

Particle.prototype.show = function () {
  point(this.x, this.y);
};
var p;

function setup() {
  // createCanvas(600, 300);
  p = new Particle();
}

setup();
console.log(p);
