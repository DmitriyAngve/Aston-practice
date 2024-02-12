// 1 Написать ответ - почему массивы в JS являются "неправильными" и совмещают в себе несколько структур данных? Какие?

/*

Массивы являются объектами, а не строго типизированными списками элементов одного типа данных, как в других С-подобных языках.

Массивы в JavaScript могут содержать элементы разных типов и могут иметь произвольные ключи в качестве свойств.
const arr = ["a", "b", "c", key: "d"]

Так же они обладают способностью объектов, например - расширением, использование нечисловых ключей и методов.

В целом, массивы сочетают в себе две структуры: списки и ассоциативные массивы (в других языках это словари или объекты). В массивах можно к элементам обращаться по индексу (как в списках), а так же сохраняется функциональность ассоциативных массивов для хранения пар ключ-значение, как я упомянул ранее.

*/

//////////////////////////////////////////////////////////////////

// 2 Привязать контекст объекта к функции logger, чтобы при вызове this.item выводило - some value (Привязать через bind, call, apply)

const obj = { item: "some value" };

function logger() {
  console.log(`I output only external context: ${this.item}`);
}

// bind
// создает новую ф-ию, в которой контекст выполнения привязан к указанному объекту. Ф-ия будет вызывать Logger с привязанным контекстом
const bindLogger = logger.bind(obj);
bindLogger();

// call
// вызывает ф-ию и устанавливает контекст выполнения для вызова
logger.call(obj);

// apply
// вызывает ф-ию и устанавливает конекст выполнения для вызова. Метод может принимать аргументы в качестве массива
logger.apply(obj);

//////////////////////////////////////////////////////////////////

// 3.1 Массивы

// - Создайте массив чисел и найдите его сумму.
const arr1 = [1, 2, 3, 5, 7, 78, 89, 9, 0];

// 1
function reduce(arr1) {
  return arr1.reduce((acc, curr) => acc + curr, 0);
}
console.log(reduce(arr1));

// 2
function cicle(arr1) {
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  return sum;
}
console.log(cicle(arr1));

// - Создайте массив строк и объедините их в одну строку

const arr2 = ["a", "s", "t", "o", "n"];

// 1
function join(arr2) {
  return arr2.join("");
}
console.log(join(arr2));

// 2
function reduce2(arr2) {
  return arr2.reduce((acc, curr) => acc + curr, "");
}
console.log(reduce2(arr2));

// - Найдите максимальный и минимальный элементы в массиве чисел.

const arr3 = [1, 5, 3, 4, 2];

// 1
function sort(arr3) {
  const sorted = arr3.sort((a, b) => b - a);
  return `max: ${sorted[0]} | min: ${sorted[sorted.length - 1]}`;
}

console.log(sort(arr3));

// 2
function minMax(arr3) {
  const max = Math.max(...arr3);
  const min = Math.min(...arr3);

  return `max: ${max} | min: ${min}`;
}

console.log(minMax(arr3));

//////////////////////////////////////////////////////////////////

// 3.2 Stack (стек): - Реализуйте стек с использованием массива.

// Стек - это структура данных работающая по принципу Last In First Out. Необходимо реализовать класс с возможностью добавления элементов, удаление и возврат последнего добавленного, возврат последнего без удаления, возврат размера стека и очистка стека. При случае, если стек пустой, операции не должны к нему применяться (за исключение добавления и размера)
class Stack {
  constructor() {
    this.items = [];
  }

  // Проверка стека на пустоту
  isEmpty() {
    return this.items.length === 0;
  }

  // добавление элементов в стек
  push(el) {
    this.items.push(el);
  }

  // удаление и возврат последнего добавленного элемента из стека
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    // Возвращение последнего
    return this.items.pop();
  }

  // Возврат последнего добавленного без удаления
  peek() {
    if (this.isEmpty) {
      return "Stack is empty";
    }
    return this.items[this.items.length - 1];
  }

  // Размер стека
  size() {
    return this.items.length;
  }

  // Очистка
  clear() {
    this.items = [];
  }
}
const stack = new Stack();
stack.push(1); // добавляю в стек
stack.push(2);
console.log(stack.peek()); // возвращаю последнего добавленного
console.log(stack.pop()); // удаляю и возвращаю последнего
console.log(stack.size()); // размер стека
console.log(stack.isEmpty()); // стек пустой? false
stack.clear(); // очищаю стек
console.log(stack.isEmpty()); // стек пустой? true

// 3.3 Queue (очередь):

// - Реализуйте очередь с использованием массива.
// Для реализации очереди необходимо создать класс с методами добавления элемента в конец массива, удаление первого элемента с его возвращением, возвращение первого элемента без удаления и очистку очереди. Так же необходимо выполнять проверка на пустоту очереди.

class Queue {
  constructor() {
    // создаю пустой массив для хранения элементов
    this.queue = [];
  }
  // Добавление элемента в конец очереди
  enqueue(el) {
    this.queue.push(el);
  }

  // Удаление и возврата первого элемента из очереди
  dequeue() {
    return this.queue.shift();
  }

  // Получение первого элемента без его удаления
  peek() {
    return this.queue[0];
  }

  // Проверка на пустоту очереди
  isEmpty() {
    return this.queue.length === 0;
  }

  // Очистка очереди
  clear() {
    this.queue = [];
  }
}

const queue = new Queue();
queue.enqueue("Клиент №1"); // добавление
queue.enqueue("Клиент №2");
queue.enqueue("Клиент №3");

console.log(queue.peek()); // первый клиент
queue.dequeue(); // удаление первого (как в очереди)
console.log(queue.peek()); // первый клиент после удаления
console.log(queue.isEmpty()); // очередь пустая? false
queue.clear(); // очистка очереди
console.log(queue.isEmpty()); // очередь пустая? true
