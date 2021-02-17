import { combineReducers } from "redux";
import categoryReducer from "./CategoryReducer";
import ingredientReducer from "./IngredientReducer";
import recipeReducer from "./RecipeReducer";

const rootReducer = combineReducers({
  categoryReducer,
  ingredientReducer,
  recipeReducer,
});

export default rootReducer;
