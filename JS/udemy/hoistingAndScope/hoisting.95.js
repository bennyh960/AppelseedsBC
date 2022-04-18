(space = (str) => console.log(`====================== ${str}=========================`))("line 1");

// ex -1
function test() {
  console.log(a);
  console.log(foo());

  var a = 1;
  function foo() {
    return 2;
  }
}

test();
space("ex 2");
// =============================================================================
// ansewere :
// undefind for a (var is hoist variable)
// 2 (function decleration is hoisted)
// =============================================================================

// Ex-2
// var a = 1;

function someFunction(number) {
  function otherFunction(input) {
    // console.log(input);
    return a * number * input;
  }

  //   console.log(otherFunction(2));
  a = 5;

  return otherFunction;
}

// var firstResult = someFunction(9)(2); //argument for outer func
var firstResult = someFunction(9); // = otherFunction(2)
console.log(firstResult);
console.log(firstResult());
var result = firstResult(2); // argument for inner
// console.log(firstResult);
console.log(result); // 90
// =============================================================================

space("Ex-3");
// Ex-3
var fullname = "John Doe";
var obj = {
  fullname: "Colin Ihrig",
  prop: {
    fullname: "Aurelio De Rosa",
    getFullname: function () {
      return this.fullname;
    },
  },
};

console.log(obj.prop.getFullname()); //Aurelio De Rosa

// this.fullname = "ofir"; //! node does not access to global variable

var test = obj.prop.getFullname; // same as copy the function
var gil = function () {
  //same as test
  return this.fullname; //this refear to window
};

// console.log(gil());
console.log(test); // [Function: getFullname]
console.log(test()); // undefined due to node not support in window as global (this refear to window)
// but it should print "jhon doe"

// var test2 = obj.prop.getFullname();
// console.log(test2); //Aurelio De Rosa

// =====================================================================================
space("Ex-4");
// Ex - 4

function funcB() {
  // prettier-ignore
  let ab = b = 0; // b is global , a equal to 0 in the funcB scope
  // let a = 0;
  // let b = 0;
  c = 5;
  ab++;
  return ab;
}
funcB();
console.log(typeof ab); // undefind cause a is defined in funcB scope
console.log(typeof b); // b is global that defined by func b so it will print number if funcB will invoked
console.log(typeof c); //number as b
// console.log(ab, b); // error due to ab is not defined in global scope
// =====================================================================================
space("EX-5");
var abc = 1;
function b2() {
  abc = 10;
  return;
  function abc() {} //the function is hoisted and due to the func is the same name as the local variable abc the changes is on that variable and not on the global
}
b2();
console.log(abc);

// ========================================
space("EX-6"); // function decleration is hoisted the later function with same name is overwrite on the previews one
function funcC() {
  console.log("1");
}
funcC(); //2
function funcC() {
  console.log("2");
}
funcC(); //2

//===========================================
space("Ex- 6 ");
function funcD1() {
  d = 1; //global
}
funcD1();
console.log(d); // 1
function funcD2() {
  var e = 1;
}
funcD2();
// console.log(e); //error
//==============================================
space("Ex- 7");
function funcE() {
  console.log("Value of f in local scope: ", f);
}
console.log("Value of f in global scope: ", f); //undefined
var f = 1;
funcE(); // f = 1 when this function invoked
