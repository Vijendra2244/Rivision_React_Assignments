import { THEME_CHANGE } from "./actionsItem";

const initial_theme = {
  theme: "light_theme",
};
export const themeReducres = (prevState = initial_theme, action) => {
  switch (action.type) {
    case THEME_CHANGE:
      return { ...prevState, theme: action.payload };
    default:
      return prevState;
  }
};
