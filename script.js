// number method
let x = 1230000000;
let y = 123e5;
console.log(x);
console.log(y);
// result
// 1230000000
// 12300000

let z = 0.0123;
console.log(z);
// result
// 0.0123

// common mistake
let a, b;
a = 0.2;
b = 0.1;
console.log(a + b);
// result
// 0.30000000000000004

// resolve the above error
let c = 0.2 * 10;
let d = 0.1 * 10;
let e = c + d;
let f = e / 10;
console.log(f);
// result
// 0.3

// common mistake
let g = 10;
let h = "20";
let i = g + h;
console.log(i);
// result
// 1020;
// To String

// conversion string to numeric
// resolve the above eror
let j = "10";
let k = "20";
let l = j + k;
console.log(l);
// result
// 1020;

// TOSTRING - NUMBER -> TOSTRING
let m = 123;
let n = 100;
let o = 23;
console.log(m.toString());
console.log((n + o).toString());
// result
// 123
// 123

// TO EXPONENTIAL()
let p = 9656;
console.log(x.toExponential(1));
// result
// 9.656e+0

// TOFIXED()
let q = 9.5465;
console.log(q.toFixed(2)); //->.54 -> .55
// 9.55

// TOPRECISION()
let r = 9.54641;
console.log(r.toPrecision(4)); //4 = 9.546
// result
// 9.546
