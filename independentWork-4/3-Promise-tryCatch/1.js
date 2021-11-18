/*
Выполнится ли .catch? Поясните свой ответ.

new Promise(function(resolve, reject) {
  setTimeout(() => {
    throw new Error("Whoops!");
  }, 1000);
}).catch(alert);
*/

Нет

Невидимый "try..catch" вокруг промиса автоматически перехватывает ошибку и превращает её в отклонённый промис.
