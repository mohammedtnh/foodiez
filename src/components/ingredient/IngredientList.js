import { ListWrapper, Title } from "../../styles";
import IngredientItem from "./IngredientItem";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { AddButtonStyled } from "../../styles";

const IngredientList = ({ ingredients }) => {
  const { categoryId, categorySlug } = useParams();

  const ingredientList = ingredients.map((ingredient) => (
    <IngredientItem key={ingredient.id} ingredient={ingredient} />
  ));

  return (
    <div>
      <Title>{categorySlug}</Title>

      <Link to={`/categories/${categoryId}/ingredients/new`}>
        <AddButtonStyled />
      </Link>

      <ListWrapper>{ingredientList}</ListWrapper>
    </div>
  );
};
export default IngredientList;
