// Создать функцию обёртку
// которая будет принимать количество аргументов
// и считать сумму передаваемых чисел , после того как кол-во аргументов
// будет равнятся передаваемому значению

const n = 4;
function funcСurryingCount(n) {
  return function func(...rest) {
    if (rest.length === n) {
      return rest.slice(0, n).reduce((total, current) => total + current, 0);
    } else {
      return (...rest2) => func(...rest, ...rest2);
    }
  };
}
const funcCurrent = funcСurryingCount(n);

console.log("funcCurrent(1, 3, 4, 2) ", funcCurrent(1, 3, 4, 2));
console.log("funcCurrent(1, 3)(4, 5, 1) ", funcCurrent(1, 3)(4, 5, 1));
console.log("funcCurrent(1)(3,4) ", funcCurrent(1)(3, 4));
console.log("funcCurrent(1)(3)(4, 5) ", funcCurrent(1)(3)(4, 5));
