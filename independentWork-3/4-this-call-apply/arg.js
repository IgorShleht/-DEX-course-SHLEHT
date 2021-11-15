/*
Напишите функцию applyAll(func, arg1, arg2...), которая получает функцию func и произвольное количество аргументов.

Она должна вызвать func(arg1, arg2...), то есть передать в func все аргументы, начиная со второго, и возвратить результат.

Например:

// Применить Math.max к аргументам 2, -2, 3
alert( applyAll(Math.max, 2, -2, 3) ); // 3

// Применить Math.min к аргументам 2, -2, 3
alert( applyAll(Math.min, 2, -2, 3) ); // -2
*/

function sum() {
  return [].reduce.call(arguments, function(a, b) {
  	return a + b;
  });
}

function mul() {
  return [].reduce.call(arguments, function(a, b) {
  	return a * b;
  });
}

function applyAll() {
  const args = [].slice.call(arguments, 1);
  return arguments[0].apply(this, args);
}

alert( applyAll(sum, 1, 2, 3) ); // 6
alert( applyAll(mul, 10, 3, 4) ); // 120
alert( applyAll(Math.max, 10, -2, 3) ); // 10
alert( applyAll(Math.min, -20, -2, 3) ); // -20
