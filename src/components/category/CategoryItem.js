import { Link } from "react-router-dom";
import { ItemWrapper } from "../../styles";

const CategoryItem = (props) => {
  const category = props.category;

  return (
    <ItemWrapper>
      <Link to={`/categories/${category.slug}`}>
        <img src={category.image} alt={category.name} />
      </Link>
      <p> {category.name}</p>
    </ItemWrapper>
  );
};

export default CategoryItem;
