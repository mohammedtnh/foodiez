import slugify from "react-slugify";
import * as types from "../actions/actionTypes";

const initialState = {
  recipes: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_RECIPES:
      return {
        ...state,
        recipes: action.payload.recipes,
        loading: false,
      };
    case types.CREATE_RECIPE:
      const { newRecipe } = action.payload;
      newRecipe.id = state.recipes[state.recipes.length - 1].id + 1;
      newRecipe.slug = slugify(newRecipe.name, { lower: true });
      return {
        ...state,
        recipes: [...state.recipes, newRecipe],
      };
    default:
      return state;
  }
};

export default reducer;
