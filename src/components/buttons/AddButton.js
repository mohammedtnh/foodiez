import { Link } from "react-router-dom";
import { AddButtonStyled } from "../../styles";

const AddButton = (props) => {
  const categoryId = props.categoryId;

  return (
    <Link to={`/categories/${categoryId}/ingredients/new`}>
      <AddButtonStyled />
    </Link>
  );
};

export default AddButton;
