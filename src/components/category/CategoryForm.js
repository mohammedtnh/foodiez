import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createCategory } from "../../store/actions/CategoryActions";

const CategoryForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [category, setCategory] = useState({
    name: "",
    image: "",
  });

  const handleChange = (event) => {
    setCategory({ ...category, [event.target.name]: event.target.value });
  };

  const handleImage = (event) => {
    setCategory({ ...category, image: event.target.files[0] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createCategory(category));
    history.push("/categories");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Create Category</h1>
        <div className="form-group row">
          <div className="col-6">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={handleChange}
              value={category.name}
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
export default CategoryForm;
