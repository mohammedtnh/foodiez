import { ListWrapper, Title } from "../../styles";
import { useSelector } from "react-redux";
import RecipeItem from "./RecipeItem";

const RecipeList = ({ ingredients }) => {
  const recipes = useSelector((state) => state.recipeReducer.recipes);

  const recipeList = recipes.map((recipe) => (
    <RecipeItem key={recipe.id} recipe={recipe} ingredients={ingredients} />
  ));

  return (
    <div>
      <Title>Recipes</Title>
      <ListWrapper>{recipeList}</ListWrapper>
    </div>
  );
};

export default RecipeList;
