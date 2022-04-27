function Square(a, b, c, d) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;
}

Square.prototype.isSqaure = function () {
  return true ? this.a === this.b && this.b === this.c && this.c === this.d : false;
};

const s = new Square(1, 2, 1, 1);
const s2 = new Square(1, 1, 1, 1);
console.log(s.isSqaure());
console.log(s2.isSqaure());
