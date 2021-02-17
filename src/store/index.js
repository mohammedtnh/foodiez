import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";
import { fetchCategories } from "./actions/CategoryActions";
import { fetchIngredients } from "./actions/IngredientActions";
import { fetchRecipes } from "./actions/RecipeActions";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

store.dispatch(fetchCategories());
store.dispatch(fetchIngredients());
store.dispatch(fetchRecipes());

export default store;
