import { Route, Switch } from "react-router";
import IngredientForm from "./ingredient/IngredientForm";
import CategoryForm from "./category/CategoryForm";
import IngredientList from "./ingredient/IngredientList";
import CategoryList from "./category/CategoryList";
import RecipeList from "./recipe/RecipeList";
import { useSelector } from "react-redux";

const Routes = () => {
  const ingredients = useSelector(
    (state) => state.ingredientReducer.ingredients
  );

  return (
    <Switch>
      <Route path="/categories/:categoryId/ingredients/new">
        <IngredientForm />
      </Route>

      <Route path="/categories/new">
        <CategoryForm />
      </Route>

      <Route path="/categories/:categoryId">
        <IngredientList ingredients={ingredients} />
      </Route>

      <Route path="/categories">
        <CategoryList />
      </Route>

      <Route path="/recipes">
        <RecipeList ingredients={ingredients} />
      </Route>
    </Switch>
  );
};

export default Routes;
