import * as types from "./actionTypes";
import instance from "./instance";

export const fetchRecipes = () => {
  return async (dispatch) => {
    try {
      const response = await instance.get("recipes");
      dispatch({
        type: types.FETCH_RECIPES,
        payload: { recipes: response.data },
      });
    } catch (error) {
      console.log(`fetchRecipes GET Request Error: ${error}`);
    }
  };
};

export const createRecipe = (newRecipe) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      for (const key in newRecipe) formData.append(key, newRecipe[key]);

      const res = await instance.post(`/recipes/new`, formData);
      dispatch({
        type: types.CREATE_RECIPE,
        payload: { newRecipe: res.data },
      });
    } catch (error) {
      console.log(`createRecipe POST Request Error: ${error}`);
    }
  };
};
