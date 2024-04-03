import { ADD_TODO, AUTH_USER } from "./action";

export const auth_user = () => {
  return { type: AUTH_USER };
};

export const add_todo = (payload) => {
  return { type: ADD_TODO, payload };
};
