import React from "react";

const SubcategoryForm = ({ data, handleDataChange }) => {
  return (
    <ul>
      <li>
        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <input
                type="text"
                id="subcategory_name"
                name="subcategory_name"
                className="form-control"
                placeholder="Category name *"
                required
                value={data.subcategory_name}
                onChange={(e) =>
                  handleDataChange(data.id, e.target.name, e.target.value)
                }
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <label>Create tags</label>
              <input
                type="input"
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

export default SubcategoryForm;
