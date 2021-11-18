//TODO: Напишите функцию счётчик вызовов, должна принимать название и функцию, а возвращать функцию
// Выводит в консоль, в момент вызова функции из параметров, кол-во вызовов
export const counter = (name, func) => {
  let n = 0;
  return function () {
    n++;
    console.log(`${name} - ${n}`);
    return func.apply(this);
  };
};

//TODO: Напишите функцию логгер, должна принимать название и функцию, а возвращать функцию
// Выводит в консоль, в момент вызова функции из параметров, её параметры результат и название
export const logger = (name, func) => {
  return function (...args) {
    let result = this.result;
    console.log(`${name}, ${args}, ${result}`);
    return func.apply(this);
  };
};

//TODO: Напишите функцию каррирования, должна принимать функцию, а возвращать функцию
// Каррирование – это трансформация функций таким образом, чтобы они принимали аргументы не как f(a, b, c), а как f(a)(b)(c)
// Должна работать для любого кол-ва аргументов
export const curry = (func) => {
  return function sum(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return sum.apply(this, args.concat(args2));
      };
    }
  };
};
