import React from "react";

export default function Settings() {
  const userImg =
    "https://www.lifeinsweden.net/wp-content/uploads/2022/01/Hottest-Swedish-Men-2-1024x768.jpg";
  return (
    <div className="contanier-fluid p-4">
      <h3>Settings</h3>

      <div className="row g-3">
        <div className="col-md-8">
          <form className="settingform">
            <div class="row p-3">
              <div class="col-md-6">
                <label for="inputEmail4" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  aria-label="First name"
                />
              </div>
              <div class="col-md-6">
                <label for="inputEmail4" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  aria-label="Last name"
                />
              </div>
              <div class="col-md-12">
                <label for="inputEmail4" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  class="form-control"
                  aria-label="Last name"
                />
              </div>
              <div class="col-md-12">
                <label for="inputEmail4" className="form-label">
                  Address 2
                </label>
                <input
                  type="text"
                  class="form-control"
                  aria-label="Last name"
                />
              </div>
              <div class="col-md-6">
                <label for="inputEmail4" className="form-label">
                  Email Id
                </label>
                <input
                  type="text"
                  class="form-control"
                  aria-label="First name"
                />
              </div>
              <div class="col-md-6">
                <label for="inputEmail4" className="form-label">
                  Mobile Number
                </label>
                <input
                  type="text"
                  class="form-control"
                  aria-label="Last name"
                />
              </div>
              <div class="col-md-6">
                <label for="inputEmail4" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  aria-label="First name"
                />
              </div>
              <div class="col-md-6">
                <label for="inputEmail4" className="form-label">
                  City Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  aria-label="Last name"
                />
              </div>
              <div class="col-md-6">
                <label for="inputEmail4" className="form-label">
                  Birthday
                </label>
                <input
                  type="date"
                  class="form-control"
                  aria-label="First name"
                />
              </div>
              <div class="col-md-6">
                <label for="inputEmail4" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  aria-label="Last name"
                />
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary mt-3">
                  Update
                </button>
              </div>
            </div>
          </form>

          <div className="card mt-3 p-4">
            <h6>Alerts & Notifications</h6>
            <div className="mt-3 d-flex justify-content-between">
              <p>
                <span className="fw-bold">Company News </span>
                <br />
                Get Rocket news, announcements, and product updates
              </p>
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
              </div>
            </div>
            <div className="mt-3 d-flex justify-content-between">
              <p>
                <span className="fw-bold">Account Activity </span>
                <br />
                Get important notifications about you or activity you've missed
              </p>
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  checked
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div class="card mt-3">
            <img src={userImg} class="card-img-top" alt="..." />
            <div class="card-body text-center">
              <h4 class="card-title ">Leanne Graham</h4>
              <p>Senior Software Engineer</p>
              <p className="text-secondary">New York, USA</p>
              <div className="d-flex justify-content-evenly mb-3">
                <button type="button" class="btn btn-connect btn-sm">
                  Connect
                </button>
                <button type="button" class="btn btn-msg btn-sm">
                  Send Message
                </button>
              </div>
            </div>
          </div>
          <div className="card p-4 mt-3">
            <h6>Select profile photo</h6>
            <input type="file" />
          </div>
          <div className="card p-4 mt-3">
            <h6>Select cover photo</h6>
            <input type="file" />
          </div>
        </div>
      </div>

     
    </div>
  );
}
