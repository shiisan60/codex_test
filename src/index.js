function greet(name) {
  return 'Hello, ' + name;
}
console.log(greet('world')); // ← わざと typo
module.exports = greet;
