import * as types from "./actionTypes";
import instance from "./instance";

export const fetchCategories = () => {
  return async (dispatch) => {
    try {
      const response = await instance.get("categories");
      dispatch({
        type: types.FETCH_CATEGORIES,
        payload: { categories: response.data },
      });
    } catch (error) {
      console.log(`fetchCategories GET Request Error: ${error}`);
    }
  };
};

export const createCategory = (newCategory) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      for (const key in newCategory) formData.append(key, newCategory[key]);

      const res = await instance.post(`categories`, formData);
      dispatch({
        type: types.CREATE_CATEGORY,
        payload: { newCategory: res.data },
      });
    } catch (error) {
      console.log(`createCategory POST Request Error: ${error}`);
    }
  };
};
