import { createStore, combineReducers } from "redux";
import { themeReducers } from "./theme_redux/themeReducer";
import { todoReducers } from "./todo_redux/todoReducer";

const rootReducers = combineReducers({
  theme: themeReducers,
  todo: todoReducers,
});

export const store = createStore(rootReducers);
