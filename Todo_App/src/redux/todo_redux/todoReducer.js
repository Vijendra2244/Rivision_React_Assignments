import { ADD_TODO } from "./action";

export const todoReducers = (prevState = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...prevState,
        todo: [...prevState.todo, action.payload],
      };
    default:
      return prevState;
  }
};
