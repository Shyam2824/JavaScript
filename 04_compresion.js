// "===" that should be "Strict check " that also check data type also
console.log("20" === 20); // false

// this type of conversion that should be avoide
// compare null to numerical
console.log(null > 0); // false
console.log(null < 0); // false
console.log(null >= 0); // true

// compare undefined to numerical
console.log(undefined < 0); // false
console.log(undefined > 0); // false
console.log(undefined >= 0); // false

// // compare String to numerical
console.log("2" > 1); // true
console.log("02" > 1); // true