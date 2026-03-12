const assert = require("assert");

console.log("Test backend");

function addTask(a, b) {
  return a + b;
}

assert.strictEqual(addTask(2, 3), 5);

console.log("Backend test OK");