import React from "react";

export default function NewProducts() {
  return (
    <div className="row mt-5">
      <div className="col-md-2"></div>
      <div className="col-md-4 mt-5">
        <h3 className="mt-4 text-primary">Enter New Product Details</h3>
        <form className="mt-2 pt-2">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Product Title
            </label>
            <input
              type="text"
              name="title"
              class="form-control"
              id="title"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="formFile" class="form-label">
              Product Image
            </label>
            <input class="form-control" type="file" id="formFile" />
          </div>
          <div class="mb-3 form-check p-0">
            <label for="exampleDataList" class="form-label">
              Product Category
            </label>
            <input
              class="form-control"
              list="datalistOptions"
              id="exampleDataList"
              placeholder="Type to search..."
            />
            <datalist id="datalistOptions">
              <option value="San Francisco" />
              <option value="New York" />
              <option value="Seattle" />
              <option value="Los Angeles" />
              <option value="Chicago" />
            </datalist>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Product Description
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Product Price
            </label>
            <input
              type="number"
              name="title"
              class="form-control"
              id="title"
              aria-describedby="emailHelp"
              min="1"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <div className="col-md-4 mt-5">
        <h3 className="mt-4 text-center">Binding data</h3>
      </div>
      <div className="col-md-2"></div>
    </div>
  );
}
