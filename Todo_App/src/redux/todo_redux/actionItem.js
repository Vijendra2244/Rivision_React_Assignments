import { ADD_TODO, DELETE_TODO, EDIT_TODO, UPDATE_TODO_STATUS } from "./action";

export const add_todo = (payload) => {
  return {
    type: ADD_TODO,
    paylaod: payload,
  };
};

export const uppdate_todo = (payload) => {
  return {
    type: UPDATE_TODO_STATUS,
    payload: payload,
  };
};

export const edit_todo = (payload) => {
  return {
    type: EDIT_TODO,
    payload: payload,
  };
};

export const delete_todo = (payload) => {
  return {
    type: DELETE_TODO,
    payload: payload,
  };
};
