import { ADD_TODO } from "./action";

export const add_todo = (payload) => {
  return {
    type: ADD_TODO,
    paylaod: payload,
  };
};
