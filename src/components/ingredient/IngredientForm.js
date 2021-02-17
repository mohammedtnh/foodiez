import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { createIngredient } from "../../store/actions/IngredientActions";

const IngredientForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { categoryId } = useParams();

  const [ingredient, setIngredient] = useState({
    categoryId: categoryId,
    name: "",
    image: "",
  });

  const handleChange = (event) => {
    setIngredient({ ...ingredient, [event.target.name]: event.target.value });
  };

  const handleImage = (event) => {
    setIngredient({ ...ingredient, image: event.target.files[0] });
  };

  const handleSubmit = (event) => {
    console.log(ingredient);
    event.preventDefault();
    dispatch(createIngredient(ingredient));
    history.push(`/categories/`);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Create Ingredient</h1>
        <div className="form-group row">
          <div className="col-6">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={handleChange}
              value={ingredient.name}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Image</label>
          <input
            type="file"
            className="form-control"
            name="image"
            onChange={handleImage}
          />
        </div>
        <button type="submit" className="btn btn-info float-right">
          Create
        </button>
      </form>
    </>
  );
};
export default IngredientForm;
