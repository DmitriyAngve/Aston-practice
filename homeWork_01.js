// 3
/*
// String:
const str1 = "Hello";
const str2 = String(44);
const str3 = new String("Hello");
const str4 = `${true}`;
console.log(str1, str2, str3, str4);

// Number:
const num1 = 44;
const num2 = 3.14;
const num3 = Number("44");
const num4 = new Number(42);
const num5 = +44;
console.log(num1, num2, num3, num4, num5);

// Boolean:
const bool1 = true;
const bool2 = Boolean(0);
const bool3 = !!0;
const bool4 = new Boolean(true);
console.log(bool1, bool2, bool3, bool4);

// Null:
const null1 = null;
console.log(null1);

// Undefined:
let und1;
const und2 = undefined;
const und3 = (() => {})();
const und4 = (function () {})();
let user = {
  name: "Dmitriy",
};
const und5 = user.city;
console.log(und1, und2, und3, und4, und5);

// Symbol:
const sym1 = Symbol();
const sym2 = Symbol("descript");
const sym3 = Symbol.for("descript");
const sym4 = Symbol.iterator;
console.log(sym1, sym2, sym3, sym4);

// BigInt:
const bigInt1 = 1234567890123456789012345678901234567890n;
const bigInt2 = BigInt("1234567890123456789012345678901234567890");
const bigInt3 = 9007199254740991n + 9007199254740991n;
const bigInt4 = BigInt(42);
const bigInt5 = BigInt("42");
console.log(bigInt1, bigInt2, bigInt3, bigInt4, bigInt5);
*/

// 4
/*

Почему, если обратиться к переменным созданным через let, const до их объявления - мы получаем ReferenceError? 

- Это происходит из-за того, что переменные, объясвленные с помощью let/const подвергаются hoising. Переменные поднимаются в начало своей области видимости, но инициализация их значений не происходит до тех пор, пока не будет достигнута строка кода, где переменные фактически были определены

*/

// 5
const res = "B" + "a" + (1 - "hello");
console.log(res); // BaNaN
// "B" + "a" вернет "Ba"
// (1 - "hello") вернет NaN, поскольку "hello" не может быть преобразовано в число при арифметическом вычитании, значит вернётся NaN
// "B" + "a" + (1 - "hello") вернет BaNaN, так как при сложении строки "Ba" с "NaN", "NaN" преобразуется в строку неявно.

const res2 = (true && 3) + "d";
console.log(res2); // "3d"
// (true && 3) - оба операнда true, значит вернется последний операнд - так работает логический оператор И.
// 3 + "d" - сработает невяное преобразование числа в строку за счёт сложения со строкой

const res3 = Boolean(true && 3) + "d";
console.log(res3); // "trued"
// Boolean(true && 3) вернет true, Boolean(3) = true
// true + "d" вернет trued
