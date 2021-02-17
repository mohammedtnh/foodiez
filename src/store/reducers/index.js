import { combineReducers } from "redux";
import CategoryReducer from "./CategoryReducer";
import IngredientReducer from "./IngredientReducer";
import RecipeReducer from "./RecipeReducer";

const rootReducer = combineReducers({
  CategoryReducer,
  IngredientReducer,
  RecipeReducer,
});

export default rootReducer;
