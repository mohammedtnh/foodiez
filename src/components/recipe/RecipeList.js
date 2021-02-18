import { ListWrapper, Title } from "../../styles";
import { useSelector } from "react-redux";
import RecipeItem from "./RecipeItem";
import { Link } from "react-router-dom";
import { AddButtonStyled } from "../../styles";

const RecipeList = ({ ingredients }) => {
  const recipes = useSelector((state) => state.recipeReducer.recipes);

  const recipeList = recipes.map((recipe) => (
    <RecipeItem key={recipe.id} recipe={recipe} ingredients={ingredients} />
  ));

  return (
    <div>
      <Title>Recipes</Title>
      <Link to={`/recipes/new`}>
        <AddButtonStyled />
      </Link>
      <ListWrapper>{recipeList}</ListWrapper>
    </div>
  );
};

export default RecipeList;
