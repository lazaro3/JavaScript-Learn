function valor (x, y) {
    if(x > y) {
        return x;
    } else {
        return y;
    }
};

console.log( valor(7, 3));

//operador Ternario
function max(x, y) {
    return x > y ? x : y
}

console.log(max(8, 3));

//aero function
const max1 = (x, y) => {
     return x > y ? x : y
}
console.log(max1(11, 9))

//Aero function com uma linha
const max2 = (x, y) => x > y ? x : y
console.log(max2(23, 22));

var firstCheck = false,
  secondCheck = false,
  access = firstCheck ? "Access denied" : secondCheck ? "Access denied" : "Access granted";
console.log(access); // logs "Access granted"

var stop = false,
  age = 16;

age > 18 ? location.assign("continue.html") : (stop = false);
console.log(stop)

