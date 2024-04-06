import { ADD_TODO, DELETE_TODO, UPDATE_TODO_STATUS } from "./action";
const inital_state = {
  todo: [
    {
      id: 1,
      title: "Learn HTML",
      status: false,
    },
    {
      id: 2,
      title: "Learn CSS",
      status: false,
    },
  ],
};

export const todoReducers = (prevState = inital_state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...prevState,
        todo: [...prevState.todo, action.payload],
      };
    case UPDATE_TODO_STATUS:
      return {
        ...prevState,
        todo: prevState.todo.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, status: action.payload.status }
            : todo
        ),
      };
    case DELETE_TODO:
      return {
        ...prevState,
        todo: prevState.todo.filter((todo) => todo.id != action.payload),
      };
    default:
      return prevState;
  }
};
