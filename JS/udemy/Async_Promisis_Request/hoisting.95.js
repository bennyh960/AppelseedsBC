// ex -1
function test() {
  console.log(a);
  console.log(foo());

  var a = 1;
  function foo() {
    return 2;
  }
}

// test();
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
// var firstResult = someFunction(9) = otherFunction(2)
// console.log(firstResult);
// console.log(firstResult());
// var result = firstResult(2); // argument for inner
// console.log(firstResult);
// console.log(result); // 90
// =============================================================================

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

this.fullname = "ofir"; //TODO ask about it

var test = obj.prop.getFullname;
var gil = function () {
  //same as test
  return this.fullname;
};

console.log(gil());
// console.log(test); // [Function: getFullname]
// console.log(test()); // undefined

// var test2 = obj.prop.getFullname();
// console.log(test2); //Aurelio De Rosa

// =====================================================================================

// Ex - 4

function funcB() {
  //   let a = (b = 0);
  let a = 0;
  let b = 0;
  c = 5;
  a++;
  return a;
}
funcB();
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
// console.log(a, b);
// =====================================================================================
var abc = 1;
function b() {
  abc = 10;
  return;
  function a() {}
}
b();
console.log(abc);
