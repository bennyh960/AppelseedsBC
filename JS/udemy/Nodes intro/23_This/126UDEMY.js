const annoyer = {
  phrases: ["literally", "cray cray", "I can't even", "Totes!", "YOLO", "Can't Stop, Won't Stop"],
  pickPhrase() {
    const { phrases } = this;
    const idx = Math.floor(Math.random() * phrases.length);
    return phrases[idx];
  },
  start() {
    // console.log(this); //object
    // setInterval(function () {
    //   console.log("==============================");
    // console.log(this); //first call is object and then is window due to setInterval is window function and it call to this after the first time , this refer to window, it will produce error
    // }, 3000);

    //we can avoid it by using variable that store this
    // var store = this; //this is not tradionial way , instead we using arrow function

    //Use an arrow function to avoid getting a different 'this':
    //Arrow functions don't get their 'own' this. they get the nearest local eaxeution context
    // setInterval(() => { //dont work
    this.timerId = setInterval(() => {
      console.log(this.pickPhrase());
    }, 3000);
  },
  stop() {
    // clearInterval(this.start()); //dont work
    clearInterval(this.timerId);
    console.log("PHEW THANK HEAVENS THAT IS OVER!");
  },
};

annoyer.start();
