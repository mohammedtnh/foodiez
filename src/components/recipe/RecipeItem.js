import { Link } from "react-router-dom";
import { ItemWrapper } from "../../styles";
import IngredientItem from "../ingredient/IngredientItem";

const RecipeItem = (props) => {
  const recipe = props.recipe;
  const ingredients = props.ingredients;

  const getRecipeIngredients = () => {
    if (recipe.ingredients) {
      const recipeIngredients = recipe.ingredients;

      const recipeIngredientList = ingredients.filter((ingredient) => {
        return recipeIngredients.some((_ingredient) => {
          return ingredient.id === _ingredient.id;
        });
      });

      const finalList = recipeIngredientList.map((ingredient) => (
        <IngredientItem key={ingredient.id} ingredient={ingredient} />
      ));
      return finalList;
    }
  };

  return (
    <ItemWrapper>
      <img src={recipe.image} alt={recipe.name} />
      <p> {recipe.name}</p>
      <p>{getRecipeIngredients()}</p>
    </ItemWrapper>
  );
};

export default RecipeItem;
