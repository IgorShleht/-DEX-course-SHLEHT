/*
Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).
*/

let a = +prompt('X: ',)
let b = +prompt('N: ',)

function value(a, b) {
return a ** b;
}

if (a % 1 == 0 && b % 1 == 0) {
alert(value(a, b))
} else {
alert('Не поддерживается')
}
