function dateFormat(){
    let d =  new Date();

    // let day = d.getDay();
    // let dayAtMonth = new Date().getDate()

    let day = Date().split(" ")[0];
    let dayAtMonth = Date().split(" ")[2]
    let month = Date().split(" ")[1];
    let year = Date().split(" ")[3]
    return `Today is ${day} the ${dayAtMonth} of ${month}, ${year}`;

}

console.log(dateFormat());



// helpers

// console.log(Date());
// console.log(new Date().toDateString());
// console.log(Date.now());
// console.log(Date.parse("Tue Apr 05 2022 17:38:14"));

// getDate() , Date.prototype.getDay() , Date.prototype.getFullYear()
const birthday = new Date('August 19, 1975 23:15:30');
const date1 = birthday.getDate();

console.log(date1);
// console.log(Date('July 20, 69 00:20:18').getFullYear());
const moonLanding = new Date('July 20, 87 00:20:18');
console.log(moonLanding.getFullYear());
// expected output: 1969


