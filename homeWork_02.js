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

/////////////////////////////////////////////////////////////////////

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

/////////////////////////////////////////////////////////////////////

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

// 4 - прочитать и описать работу глобальной функции structuredClone()

/*
Функция structuredClone() предназначена для глубокого копирования объектов. Использует алгоритм структурного клонирования. Алгоритм помогает копировать объекты, включая все вложенные объекты и их свойства. Алгоритм определённ спецификацией HTML5. 

Во время вызова этой ф-ии происходит рекурсивное копирование всех свойств объекта.

Преимущества:
    - можно копировать RegExp, Date и другие встроенные объекты
    - сохраняет структуру объекта
    - может клонировать бесконечно вложенные объекты

Исключения:
    - Error и Function не могут быть клонированы
    - Узлы DOM также не поддаются клонированию
    - дескрипторы, сеттеры и геттеры не клонируются
    - не клонируется прототипная цепочка
*/

/////////////////////////////////////////////////////////////////////

// Бонус 1 Написать функцию глубокого сравнения двух объектов:
/*
Для обеспечения глубокого сравнения объектов необходимо выполнить следующие проверки: 
1. Оба аргумента должны быть объектами.
2. Проверить равенство длины ключей объектов.
3. Пройтись по всем ключам одного объекта и проверить их наличие в ключах второго объекта.
4. Проверить значения ключей:
    - если оба значения являются объектами, вызвать рекурсивно функцию deepEqual для их сравнения.
    - если оба значения не являются объектами, сравнить их напрямую.
5. Если все ключи и их значения равны в обоих объектах, вернуть true, иначе false.
*/

const obj1 = { here: { is: "on", other: "3" }, object: "Y" };

const obj2 = { here: { is: "on", other: "2" }, object: "Y" };

const deepEqual = (obj1, obj2) => {
  // Сохраню ключи объектов
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // Проверю длину ключей, если они не равны, то сразу false
  if (keys1.length !== keys2.length) return false;

  // Прохожу по ключам первого объекта
  for (const key of keys1) {
    // Проверка есть ли текущий ключ из obj1 в obj2. false при отсутсвии ключа (обнаружено неравенство объектов по ключам). Идем дальше, если ключи сходятся
    if (!keys2.includes(key)) {
      return false;
    }

    const val1 = obj1[key];
    const val2 = obj2[key];

    // Проверка, являются ли оба значения объектами
    if (typeof val1 === "object" && typeof val2 === "object") {
      // если оба значения объекты, вызываю саму функцию deepEqual рекурсивно для их сравнения
      if (!deepEqual(val1, val2)) {
        return false;
      }
      // если оба значения объекты, то сравниваем их напрямую. Это необходимо, чтобы гарантировать корректное сравнение
    } else if (val1 !== val2) {
      return false;
    }
  }
  // если ни одна из вышеперечисленных проверок не вернула false, то вернем true
  return true;
};

console.log(deepEqual(obj1, obj2));

/////////////////////////////////////////////////////////////////////

// Бонус 2 Развернуть строку в обратном направлении при помощи методов массивов:

// 1 преобразую в массив, разворачиваю, соединяю в строку
function reverseStr1(str) {
  return str.split("").reverse().join("");
}
console.log(reverseStr1("aston"));

// 2 преобразую в массив, использую обратный редьюс. Начальное значение аккумулятора - пустая строка, в нее и добавляю буквы в обратном порядке
function reverseStr2(str) {
  return str.split("").reduceRight((acc, el) => acc + el, "");
}
console.log(reverseStr2("aston"));

// 3 Создаю пустую строку для развернутой строки. Затем с помощью forEach с функцией "reversed = el + reversed;", которая добавляет символы в пустую строку, двигая предыдущий. Таким образом новая строка получится развернутой
function reverseStr3(str) {
  let reversed = "";
  str.split("").forEach((el) => {
    reversed = el + reversed;
    console.log(reversed);
  });
  return reversed;
}
console.log(reverseStr3("aston"));

// 4 с помощью map с вычислением обратного индекса символа строки
function reverseStr4(str) {
  return str
    .split("")
    .map((el, index, arr) => arr[arr.length - 1 - index])
    .join("");
}
console.log(reverseStr4("aston"));
