import { Link } from "react-router-dom";
import { ItemWrapper } from "../../styles";
import IngredientItem from "../ingredient/IngredientItem";

const RecipeItem = (props) => {
  const recipe = props.recipe;
  const ingredients = props.ingredients;

  const ingredientList = ingredients.map((ingredient) => (
    <IngredientItem key={ingredient.id} ingredient={ingredient.id} />
  ));

  return (
    <ItemWrapper>
      <Link to={`/recipes/${recipe.id}`}>
        <img src={recipe.image} alt={recipe.name} />
      </Link>
      <p> {recipe.name}</p>
      <p>{ingredientList}</p>
    </ItemWrapper>
  );
};

export default RecipeItem;
