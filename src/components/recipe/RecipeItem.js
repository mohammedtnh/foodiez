import { Link } from "react-router-dom";
import { ItemWrapper } from "../../styles";
import IngredientItem from "../ingredient/IngredientItem";

const RecipeItem = (props) => {
  const recipe = props.recipe;
  const ingredients = props.ingredients;
  const recipeIngredients = recipe.ingredients;

  const recipeIngredientList = ingredients.filter((ingredient) => {
    return recipeIngredients.some((_ingredient) => {
      return ingredient.id === _ingredient.id;
    });
  });

  const finalList = recipeIngredientList.map((ingredient) => (
    <IngredientItem key={ingredient.id} ingredient={ingredient} />
  ));

  console.log("1recipeIngredients::::", recipeIngredients);
  console.log("2recipeIngredientList::::", recipeIngredientList);
  return (
    <ItemWrapper>
      <Link to={`/recipes/${recipe.id}`}>
        <img src={recipe.image} alt={recipe.name} />
      </Link>
      <p> {recipe.name}</p>
      <p>{finalList}</p>
    </ItemWrapper>
  );
};

export default RecipeItem;
