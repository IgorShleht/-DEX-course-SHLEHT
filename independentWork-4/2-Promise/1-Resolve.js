/*
Что выведет код ниже?

let promise = new Promise(function(resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

promise.then(alert);
*/

Ответ: 1 // resolve(1) 

Состояние промиса может быть изменено только один раз.
Исполнитель должен вызвать что-то одно: resolve или reject. 
Все последующие вызовы resolve и reject будут проигнорированы.
