import { ListWrapper, Title } from "../../styles";
import IngredientItem from "./IngredientItem";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { AddButtonStyled } from "../../styles";
import { useSelector } from "react-redux";

const IngredientList = ({ ingredients }) => {
  const { categoryId } = useParams();

  const category = useSelector((state) =>
    state.categoryReducer.categories.find(
      (category) => category.id === +categoryId
    )
  );

  const ingredientList = ingredients
    .filter((ingredient) => ingredient.categoryId === +categoryId)
    .map((ingredient) => (
      <IngredientItem key={ingredient.id} ingredient={ingredient} />
    ));

  return (
    <div>
      <Title>{category.name}</Title>

      <Link to={`/categories/${categoryId}/ingredients/new`}>
        <AddButtonStyled />
      </Link>

      <ListWrapper>{ingredientList}</ListWrapper>
    </div>
  );
};
export default IngredientList;
