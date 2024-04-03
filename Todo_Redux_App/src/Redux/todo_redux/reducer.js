import { ADD_TODO, AUTH_USER } from "./action";

const initial_state = {
  auth_user: false,
  todo: [
    {
      id: 1,
      title: "learn HTML",
      status: false,
    },
  ],
};
export const todoReducer = (prevState = initial_state, action) => {
  switch (action.type) {
    case AUTH_USER:
      return { ...prevState, auth_user: true };
    case ADD_TODO:
      return {
        ...prevState,
        todo: [...prevState.todo, action.payload],
      };
    default:
      return prevState;
  }
};
