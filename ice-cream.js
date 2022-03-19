// Do not modify these first two lines
const iceCreamFlavours = ["chocolate", "vanilla", "cookies and cream", "rocky road", "strawberry"];
console.log(iceCreamFlavours);

// Your code below here...
const modArray = iceCreamFlavours.slice();
modArray.push('root beer');
console.log(modArray);
console.log(modArray[0]);
console.log(modArray[modArray.length - 1]);
console.log(modArray.length);
