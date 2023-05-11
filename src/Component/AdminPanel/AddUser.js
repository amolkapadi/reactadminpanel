import React from "react";

export default function AddUser() {
  return (
    <div className="contanier-fluid p-4">
      <h3>Add User</h3>
      <form className="row g-3 Adduserform">
        <div className="col-md-6">
          <label for="inputEmail4" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" id="inputEmail4" />
        </div>
        <div className="col-md-6">
          <label for="inputPassword4" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="inputPassword4" />
        </div>
        <div className="col-12">
          <label for="inputAddress" className="form-label">
            Address
          </label>
          <input type="text" className="form-control" id="inputAddress" />
        </div>
        <div className="col-12">
          <label for="inputAddress2" className="form-label">
            Address 2
          </label>
          <input type="text" className="form-control" id="inputAddress2" />
        </div>
        <div className="col-md-6">
          <label for="inputCity" className="form-label">
            City
          </label>
          <input type="text" className="form-control" id="inputCity" />
        </div>
        <div className="col-md-4">
          <label for="inputState" className="form-label">
            State
          </label>
          <select id="inputState" className="form-select">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div className="col-md-2">
          <label for="inputZip" className="form-label">
            Zip
          </label>
          <input type="text" className="form-control" id="inputZip" />
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Add User
          </button>
        </div>
      </form>
    </div>
  );
}
