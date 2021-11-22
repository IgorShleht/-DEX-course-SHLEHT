/*
У нас есть класс Clock. Сейчас он выводит время каждую секунду.
Создайте новый класс ExtendedClock, который будет наследоваться от Clock и добавьте параметр precision – количество миллисекунд между «тиками». 
Установите значение в 1000 (1 секунда) по умолчанию.
*/

class ExtendedClock extends Clock{
constructor(props){
super(props)
this.interval = props.interval
  }
start() {
this.render();
this.timer = setInterval(() => this.render(), this.interval);
  }
}
let time = new ExtendedClock({template:'h:m:s',interval: 1000})
