// const a = setInterval(function () {
//   console.log(this);
// }, 3000);

// console.log(a);

// (function () {
//   console.log("x");
// })();

// const a = () => {
//   console.log(this);
// };

// console.log(setInterval(a, 1));

const annoyer = {
  phrases: ["literally", "cray cray", "I can't even", "Totes!", "YOLO", "Can't Stop, Won't Stop"],
  pickPhrase() {
    const { phrases } = this;
    const idx = Math.floor(Math.random() * phrases.length);
    return phrases[idx];
  },
  a() {
    console.log(this);
  },
  b() {
    setInterval(() => {
      console.log("=======================================================================");
      console.log(this); // the object due to arrow func dont got his own this. it refer to closes context
      console.log("=======================================================================");
    }, 3000);
  },
  c() {
    //   console.log(this);//the obj
    setInterval(function () {
      console.log("=======================================================================");
      console.log(this); // the window duw to setInterval called by window after the first call
      console.log("=======================================================================");
    }, 3000);
  },
};

// annoyer.b();
// annoyer.c();
