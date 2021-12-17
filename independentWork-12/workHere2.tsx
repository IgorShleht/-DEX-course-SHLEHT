import { createStore } from "redux";

// Создать редюсер с экшонами "departments/add" и "departments/delete"

const initialState = {
  departments: ["1", "2"],
  emploees: [
    { name: "Igor", department: "AAA" },
    { name: "Alex", department: "BBB" }
  ]
};

interface IDepartment {
  type: string,
  payload: string
}

const depAdd: IDepartment = {
  type: "departments/add",
  payload: "Mobile"
};

const depDelete: IDepartment = {
  type: "departments/delete",
  payload: "Mobile"
};

const reducerDepartments = (
  state = initialState.departments,
  action: IDepartment
) => {
  switch (action.type) {
    case "departments/add":
      return [...state, action.payload];

    case "departments/delete":
      return state.filter((e) => e !== action.payload);

    default:
      return state;
  }
};

// Создать редюсер с экшонами "emloees/add" и "emploees/delete"

interface IEmployee {
  type: string;
  payload: {
    name: string;
    department: string;
  };
}

const addEmploee: IEmployee = {
  type: "emploee/add",
  payload: {
    name: "John",
    department: "Mobile"
  }
};

const deleteEmploee: IEmployee = {
  type: "emploee/delete",
  payload: {
    name: "John",
    department: "Mobile"
  }
};

const reducerEmloees = (state = initialState.emploees, action: IEmployee) => {
  switch (action.type) {
    case "emploee/add":
      return [...state, action.payload];
    case "emploee/delete":
      return state.filter((e) => e.name !== action.payload.name);
    default:
      return state;
  }
};
// Создать рут редюсер
const rootReducer = (state: initialState, action: IDepartment |  IEmployee): any => {
return {
    departments: reducerDepartments(state.departments, action),
    emploees: reducerEmloees(state.emploees, action)
  }
}

// создать стор
const store = createStore(rootReducer);

// вызвать каждый экшон
store.dispatch(depAdd);
store.dispatch(depDelete);
store.dispatch(addEmploee);
store.dispatch(deleteEmploee);

// законсолить изменения стейта
console.log(store.getState())
