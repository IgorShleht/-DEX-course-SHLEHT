/* 
Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

Сделайте два варианта решения.

Используя setInterval.
Используя рекурсивный setTimeout.
*/
//1
function printNumbersOne(from, to) {
  let timerId = setInterval(function() {
  console.log(from)
    if (from == to) {
      clearInterval(timerId);
    }
    from++;
  }, 1000);
}

console.log(printNumbersOne(1,15))

//2
function printNumbersTwo(from, to) {
  setTimeout(function start() {
    console.log(from)
    if (from < to) {
      setTimeout(start, 1000);
    }
    from++;
  }, 1000);
}

console.log(printNumbersTwo(1,15))
