//#5 написать функцию
// которая выведет в консоль 'PING'
// передаваемое кол-во раз , раз в секунду

/*
pinger(10);
*/

function pinger(num) {
  let func = setInterval(() => console.log("PING"), 1000);
  setTimeout(() => clearInterval(func), num * 1000);
}

pinger(5);
