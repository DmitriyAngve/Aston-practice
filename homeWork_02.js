// 1 Создать объект counter всеми возможными способами;

// Литеральная нотация
let counter1 = { count: 0 };

// С помощью конструктора Object
let counter2 = new Object();
counter2.count = 0;

// С помощью функции-конструктора
function Counter1() {
  this.count = 0;
}
let counter3 = new Counter1();

// С помощью Object.create()
let counterPrototype = { count: 0 };
let counter4 = Object.create(counterPrototype);

// С помощью класса
class Counter2 {
  constructor() {
    this.count = 0;
  }
}
let counter5 = new Counter2();

// С помощью Object.assign()
let counter6 = Object.assign({}, { count: 0 });

// Еще один с помощью Object.create()
let counter7 = Object.create({ count: 0 });

// С помощью JSON.parse
let counter8 = JSON.parse('{"count": 0}');

// console.log(
//   counter1,
//   counter2,
//   counter3,
//   counter4.count,
//   counter5,
//   counter6,
//   counter7.count,
//   counter8
// );

// 2 Скопировать объект counter всеми возможными способами

let counter = { count: 0 };

// spread operator
let counterCopy1 = { ...counter };

// Object.assign()
let counterCopy2 = Object.assign({}, counter);

// JSON.parse / JSON.stringify
let counterCopy3 = JSON.parse(JSON.stringify(counter));

// Копирование свойств
let counterCopy4 = Object.create(
  Object.getPrototypeOf(counter),
  Object.getOwnPropertyDescriptors(counter)
);

// Циклом for in
let counterCopy5 = {};
for (let key in counter) {
  counterCopy5[key] = counter[key];
}

// Конструктор Object
let counterCopy6 = new Object(counter);

// Деструктуризация
let { ...counterCopy7 } = counter;

// Прототипное наследование и Object.create()
let counterCopy8 = Object.create(Object.getPrototypeOf(counter));
Object.getOwnPropertyNames(counter).forEach(function (prop) {
  let desc = Object.getOwnPropertyDescriptor(counter, prop);
  Object.defineProperty(counterCopy8, prop, desc);
});

// console.log(
//   counterCopy1,
//   counterCopy2,
//   counterCopy3,
//   counterCopy4,
//   counterCopy5,
//   counterCopy6,
//   counterCopy7,
//   counterCopy8
// );

// 3 – Создать функцию makeCounter всеми описанными и возможными способами;

// Function Declaration
let a = 1;
function makeCounter1(count) {
  return ++count;
}
console.log("a:", makeCounter1(a));

// Function Expression
let b = 1;
const makeCounter2 = function (count) {
  return ++count;
};
console.log("b:", makeCounter2(b));

// Arrow
let c = 1;
const makeCounter3 = (count) => ++count;
console.log("c:", makeCounter3(c));

// Constuctor
let d = 1;
const makeCounter4 = new Function("count", "return count + 1");
console.log("d:", makeCounter4(d));

// Метод объекта
let e = 1;
const obj = {
  makeCounter5(count) {
    return ++count;
  },
};
console.log("e:", obj.makeCounter5(e));

// Метод класса
let f = 1;
class ClassName {
  makeCounter6(count) {
    return ++count;
  }
}
const instance = new ClassName();
console.log("f:", instance.makeCounter6(f));

// Генератор
let g = 1;
function* makeCounter7(count) {
  yield ++count;
}

const iterator = makeCounter7(g);
console.log("g:", iterator.next().value);
