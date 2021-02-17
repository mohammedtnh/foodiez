import { ListWrapper, Title } from "../../styles";
import { useSelector } from "react-redux";
import CategoryItem from "./CategoryItem";
import { Link } from "react-router-dom";
import { AddButtonStyled } from "../../styles";

const CategoryList = () => {
  const categories = useSelector((state) => state.categoryReducer.categories);

  const categoryList = categories.map((category) => (
    <CategoryItem key={category.id} category={category} />
  ));

  return (
    <div>
      <Title>Categories</Title>

      <Link to={`/categories/new`}>
        <AddButtonStyled />
      </Link>

      <ListWrapper>{categoryList}</ListWrapper>
    </div>
  );
};

export default CategoryList;
