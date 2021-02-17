import slugify from "react-slugify";
import * as types from "../actions/actionTypes";

const initialState = {
  categories: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_CATEGORIES:
      return {
        ...state,
        categories: action.payload.categories,
        loading: false,
      };
    case types.CREATE_CATEGORY:
      const { newCategory } = action.payload;
      newCategory.id = state.categories[state.categories.length - 1].id + 1;
      newCategory.slug = slugify(newCategory.name, { lower: true });
      return {
        ...state,
        categories: [...state.categories, newCategory],
      };
    default:
      return state;
  }
};

export default reducer;
