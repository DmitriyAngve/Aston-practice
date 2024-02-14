// Домашнее задание(Порешать типовые задачи - написать порядок и вывод в консоли):
// 1)
let promiseTwo = new Promise((resolve, reject) => {
  resolve("a");
});

promiseTwo
  .then((res) => {
    return res + "b";
  })
  .then((res) => {
    return res + "с";
  })
  .finally((res) => {
    return res + "!!!!!!!";
  }) // в finally ничего не передаем. Внутри finally нет доступа к resolve, которое было получено из двух предыдущих then (надо было написать finally без (res))
  .catch((res) => {
    return res + "d";
  }) // reject отсутствует
  .then((res) => {
    console.log(res);
  });

// Ответ: "abc"

///////////////////////////////////////////////////////////////

// 2)
function doSmth() {
  return Promise.resolve("123");
}

doSmth()
  .then(function (a) {
    console.log("1", a);
    return a; // a = "123", дальше передаю уже "a"
  })
  .then(function (b) {
    console.log("2", b); // b - тут равен тому, что пришло из прошлого then
    return Promise.reject("321"); // но возвращается отклоненный промис с 321
  })
  .catch(function (err) {
    console.log("3", err);
  }) // ошибка ловится и она равна err = 321
  .then(function (c) {
    console.log("4", c); // просто консолится, но с - undefined, так как catch ничего не вернул
    return c; // undefined
  });
/*Ответ:

1 123
2 123
3 321
4 undefined
*/

///////////////////////////////////////////////////////////////

// 3) Напишите функцию, которая будет проходить через массив целых чисел и выводить индекс каждого элемента с задержкой в 3 секунды.Входные данные: [10, 12, 15, 21]

// 1
function indexCount1(arr) {
  for (let i = 0; i < arr.length; i++) {
    setTimeout(() => {
      console.log(`${arr[i]}: ${i}`);
    }, i * 3000);
  }
}
indexCount1([10, 12, 15, 21]);

// 2
async function indexCount2(arr) {
  for (let i = 0; i < arr.length; i++) {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log(`${arr[i]}: ${i}`);
  }
}
indexCount2([10, 12, 15, 21]);

///////////////////////////////////////////////////////////////

// 4) Прочитать про Top Level Await (можно ли использовать await вне функции async)
/*
С появляением TLA (top level await) появилась возможность использовать await на верхнем уровне модуля. Это означает, что можно использовать await для ожидания результатов асинхронных операций прямо в коде на верхнем уровне. Используется только в модульном JS, т.е. в скриптах, подключаемых через import, но не в скриптах, поюключаемых с помощью тега <script>

Важно помнить, что модуль становится асинхронным, а это означает, что при импорте вызывающий модуль тоже должен быть асинхронным.
*/

// 5) Бонусное задание
// /* Необходимо реализовать функцию fetchUrl, которая будет использоваться следующим образом. Внутри fetchUrl можно использовать условный метод fetch, который просто возвращает Promise с содержимым страницы или вызывает reject fetchUrl('https://google/com&#39;).then(...).catch(...)
// сatch должен сработать только после 5 неудачных попыток получить содержимое страницы внутри fetchUrl

function fetchUrl(url) {
  let counts = 0; // переменная для отслеживания попыток

  return new Promise((resolve, reject) => {
    const fetchData = async () => {
      // асинх. ф-ия для выполнения запроса
      try {
        const response = await fetch(url); // отправка запроса
        // проверяю успшеность запроса в блоке try
        if (!response.ok) {
          throw new Error("Network problem");
        }
        const data = await response.json();
        resolve(data); // промис успешен
      } catch (error) {
        counts++; // при неудаче увеличиваю количество попыток

        // проверка числа попыток
        if (counts < 5) {
          console.log(`Count: ${counts}`);
          // снова запускаю ф-ию для повторной попытки
          fetchData();
          // Если попыток больше 5
        } else {
          reject(error); // отклоняю промис
        }
      }
    };

    fetchData(); // вызов для начала выполнения
  });
}

fetchUrl("https://google/com&#39")
  .then((data) => {
    console.log("Success:", data); // вывод успешно полученных данных
  })
  .catch((error) => {
    console.error("Error:", error); // вывод сообщения об ошибке
  });
