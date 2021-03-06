/*
Есть функция sum, которая суммирует все элементы массива:

function sum(arr) {
  return arr.reduce(function(a, b) {
    return a + b;
  });
}

alert( sum([1, 2, 3]) ); // 6 (=1+2+3)
Создайте аналогичную функцию sumArgs(), которая будет суммировать все свои аргументы:

Для решения примените метод reduce к arguments, используя call, apply или одалживание метода.

*/

function sumArgs() {
  arguments.reduce = [].reduce;
  return arguments.reduce(function(a, b) {
    return a + b;
  });
}

alert( sumArgs(1, 2, 3) ); // 6

