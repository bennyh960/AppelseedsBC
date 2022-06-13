// const events = {
//   name: "Birthday Party",
//   printGuestList: function () {
//     console.log("Guest list: ", this.name);
//   },
// };

// !not work with single arrow
// const events = {
//   name: "Birthday Party",
//   printGuestList: () => {
//     console.log("Guest list: ", this.name);
//   },
// };

const events = {
  name: "Birthday Party",
  guestList: ["ben", "dan", "mosh"],
  printGuestList() {
    console.log("Guest list: ", this.name);
    // !will set this.name as undifind
    // this.guestList.forEach(function (g) {
    //   console.log(g + "is attending", this.name);
    // });
    this.guestList.forEach((g) => {
      console.log(g + "is attending", this.name);
    });
  },
};

events.printGuestList();
