const { test, expect } = require("@jest/globals");
const sum = require("./sum");

// npm init
// npm install pagckge (in this case is "jest")
// then use instaalled packege test() and except
// npm run test

test("properly add two numbers", () => {
  expect(sum(1, 2)).toBe(3);
});
