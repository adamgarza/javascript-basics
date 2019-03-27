// MISC.
function chocolateCake(num) {
  while (num > 0 && num <= 100) {
    if (num % 3 === 0 && num % 5 === 0) {
      return "ChocolateCake";
    } else if (num % 5 === 0) {
      return "Cake";
    } else if (num % 3 === 0) {
      return "Chocolate";
    } else {
      return num;
    }
  }
}
console.log(chocolateCake(1));
console.log(chocolateCake(3));
console.log(chocolateCake(5));
console.log(chocolateCake(15));
