import * as types from "./actionTypes";
import instance from "./instance";

export const fetchIngredients = () => {
  return async (dispatch) => {
    try {
      const response = await instance.get("ingredients");
      dispatch({
        type: types.FETCH_INGREDIENTS,
        payload: { ingredients: response.data },
      });
    } catch (error) {
      console.log(`fetchIngredients GET Request Error: ${error}`);
    }
  };
};

export const createIngredient = (newIngredient) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      for (const key in newIngredient) formData.append(key, newIngredient[key]);

      const res = await instance.post(
        `/categories/${newIngredient.categoryId}/ingredients`,
        formData
      );
      dispatch({
        type: types.CREATE_INGREDIENT,
        payload: { newIngredient: res.data },
      });
    } catch (error) {
      console.log(`createIngredient POST Request Error: ${error}`);
    }
  };
};
