import { ItemWrapper } from "../../styles";

const IngredientItem = (props) => {
  const ingredient = props.ingredient;

  return (
    <ItemWrapper>
      {/* <Link to={`/ingredients/${ingredient.slug}`}> */}
      <img src={ingredient.image} alt={ingredient.name} />
      {/* </Link> */}

      <p> {ingredient.name}</p>
    </ItemWrapper>
  );
};

export default IngredientItem;
