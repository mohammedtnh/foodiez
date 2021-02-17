import slugify from "react-slugify";
import * as types from "../actions/actionTypes";

const initialState = {
  ingredients: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_INGREDIENTS:
      return {
        ...state,
        ingredients: action.payload.ingredients,
        loading: false,
      };
    case types.CREATE_INGREDIENT:
      const { newIngredient } = action.payload;
      newIngredient.id = state.ingredients[state.ingredients.length - 1].id + 1;
      newIngredient.slug = slugify(newIngredient.name, { lower: true });
      return {
        ...state,
        ingredients: [...state.ingredients, newIngredient],
      };
    default:
      return state;
  }
};

export default reducer;
