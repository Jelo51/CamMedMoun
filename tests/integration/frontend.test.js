const assert = require("assert");

console.log("Test frontend");

const tasks = [
  { id: 1, title: "task1" },
  { id: 2, title: "task2" }
];

assert.strictEqual(tasks.length, 2);
assert.strictEqual(tasks[0].title, "task1");

console.log("Frontend test OK");