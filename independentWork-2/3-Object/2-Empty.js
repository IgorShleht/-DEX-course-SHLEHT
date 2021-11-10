/* 
Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
*/

let schedule = {};
// let schedule = '230490394'

    function isEmpty(schedule) {
  for (let key in schedule) {
    return false;
  }
  return true;
}
alert(isEmpty(schedule))
