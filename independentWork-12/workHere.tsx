import { createStore } from "redux";

const initialState = {
  greatings: 'Строка'
}

// Определить тип для экшона
interface IAction {
  type: string
}


// создать экшены FirstAction, SecondAction, AsyncAction
const firstAction: IAction = 
{
  type: 'FIRST_ACTION',
  
}

const secondAction: IAction =
{
  type: 'SECOND_ACTION'

}

const asyncAction: IAction = 
{
  type: 'ASYNC_ACTION'
}

// создать редьюсер, который обрабатывает экшены: первый, второй, асинхронный
const reducer = (state = initialState, action: IAction) => {
  switch(action.type) {
    case 'FIRST_ACTION': 
    return {
      ...state,
      greatings: 'Hello First'
    }
    case 'SECOND_ACTION': 
    return {
      ...state,
      greatings: 'Hello Second'
    }
    case 'ASYNC_ACTION':
      return {
        ...state,
        greatings: 'Hello Async'
      }
      default:
        return state
  }

}
// создать стор
const store = createStore(reducer)

// TODO подписаться на изменения сторы
// отписаться от изменений сторы

const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})
// Вызвать каждый экшон по одному разу
store.dispatch(firstAction)
unsubscribe()
store.dispatch(secondAction)
store.dispatch(asyncAction)

// Вызвать первый экшон ещё раз
store.dispatch(firstAction)
// Вывести в консоль текущее состояние сторы
// console.log(store.getState())
