// MISC.
function rightPoint() {
  var i;
  for (i = 0; i <= 100; i++){
    if (i%3===0 && i%5===0) {
      console.log("rightpoint");
    } else if (i%5===0) {
      console.log("point");
    } else if (i%3===0) {
      console.log("right");
    } else {
      console.log(i);
    }
  }
}

rightPoint();
// console.log(rightPoint(3));
// console.log(rightPoint(5));
// console.log(rightPoint(15));
console.log("\n\n\n");
