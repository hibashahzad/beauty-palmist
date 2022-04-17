import React from "react";
import { Outlet } from "react-router-dom";
import "./Profile.css";
const Profile = () => {
  return (
    <div class="py-5 mainProfileSettings">
      <div class="card toppings">Profile Update</div>
      <div class="card settingcard">
        <div class="card-header hdcard">
          <div class="row">
            <div class="col-md-2">
              <img
                src="https://static.vecteezy.com/system/resources/previews/005/154/134/large_2x/face-logo-sketch-girl-avatar-portrait-illustration-drawn-by-brush-beauty-salon-icon-free-vector.jpg"
                class="img-thumbnail avatarpic"
                alt="..."
              />
            </div>
            <div class="col-md-2">
              <h3>User Name</h3>
            </div>
          </div>
        </div>
        <div class="card-body">
          <form>
            <div class="row">
              <div class="col-md-6">
                <input
                  type="name"
                  class="form-control settingfield"
                  id="username"
                  placeholder="Aesthetic In."
                />
                <input
                  type="address"
                  class="form-control settingfield"
                  id="LocationId"
                  placeholder="Location/Address"
                />
                <input
                  type="email"
                  class="form-control settingfield"
                  id="emailId"
                  aria-describedby="emailHelp"
                  placeholder="Email Id"
                />
                <small id="emailHelp" class="form-text text-danger">
                  Verification email will be sent to your email id. Visit the
                  link to confirm updated email address
                </small>
              </div>
              <div class="col-md-6">
                <div class="card sidesettingcard">
                  <h6 class="sidecardlbl">
                    Current Status:{" "}
                    <span class="status">Home Based/Small Business</span>
                  </h6>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Set Status to Registered?
                    </label>
                  </div>

                  <label class="sidecardlbl">Attach Documents</label>
                  <div class="custom-file">
                    <input
                      type="file"
                      class="custom-file-input"
                      id="customFile"
                    />
                    <label class="custom-file-label" for="customFile"></label>
                  </div>
                  <label class="sidecardlbl">Document Title</label>
                  <input
                    type="text"
                    class="form-control docfield"
                    id="doctitle"
                  />
                  <button
                    type="button"
                    class="btn btn-outline-dark approvalbtn"
                  >
                    Send for Approval
                  </button>
                </div>
              </div>
            </div>
            <input
              type="text"
              class="form-control aboutfield"
              id="about"
              placeholder="About"
            />
            <div class="btnupdate">
              <button type="button" class="btn btn-lg btn-dark">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
