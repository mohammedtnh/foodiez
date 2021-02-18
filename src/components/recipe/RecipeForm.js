import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createRecipe } from "../../store/actions/RecipeActions";

const RecipeForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [recipe, setRecipe] = useState({
    name: "",
    image: "",
  });

  const handleChange = (event) => {
    setRecipe({ ...recipe, [event.target.name]: event.target.value });
  };

  const handleImage = (event) => {
    setRecipe({ ...recipe, image: event.target.files[0] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createRecipe(recipe));
    history.push("/recipes");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Create Recipe</h1>
        <div className="form-group row">
          <div className="col-6">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={handleChange}
              value={recipe.name}
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
        {/* ingredients */}
        <button type="submit" className="btn btn-info float-right">
          Create
        </button>
      </form>
    </>
  );
};
export default RecipeForm;
