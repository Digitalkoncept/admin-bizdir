import React from "react";

const CategoryForm = ({ data, handleDataChange }) => {
  return (
    <ul>
      <li>
        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <input
                type="text"
                id="category_name"
                name="category_name"
                className="form-control"
                placeholder="Category name *"
                required
                value={data.category_name}
                onChange={(e) =>
                  handleDataChange(data.id, e.target.name, e.target.value)
                }
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <label>Choose category image</label>
              <input
                type="file"
                name="image"
                id="category_image"
                className="form-control"
                value={data.image}
                onChange={(e) =>
                  handleDataChange(data.id, e.target.name, e.target.value)
                }
              />
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default CategoryForm;
