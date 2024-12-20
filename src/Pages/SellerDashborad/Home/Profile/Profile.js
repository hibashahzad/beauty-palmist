import React from "react";
import { Outlet } from "react-router-dom";
import "./Profile.css";
import { useAuth } from "../../../../Services/provideMain";
const Profile = () => {
  const { state, getUser } = useAuth();
  console.log(state);
  return (
    <div class="py-5 mainProfileSettings">
      <div class="card toppings">Profile Settings</div>
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
              <h3>{state.user.name}</h3>
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
                  readOnly
                  value={getUser().bussnessname}
                  placeholder="companyname"
                />
                <input
                  type="address"
                  class="form-control settingfield"
                  id="LocationId"
                  readOnly
                  value={getUser().address}
                  placeholder="Location/Address"
                />
                <input
                  type="text"
                  class="form-control settingfield"
                  id="about"
                  readOnly
                  value={state.user.email}
                  placeholder="Status"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  class="form-control settingfield"
                  id="about"
                  readOnly
                  value={getUser().categoryId.name}
                  placeholder="Category Name"
                />
                <input
                  type="text"
                  class="form-control settingfield"
                  id="about"
                  readOnly
                  value={getUser().bussnessstatus}
                  placeholder="Status"
                />
                <input
                  type="text"
                  class="form-control settingfield"
                  id="about"
                  readOnly
                  value={state.user.name}
                  placeholder="Status"
                />
              </div>
            </div>
            <input
              type="text"
              class="form-control aboutfield"
              id="about"
              readOnly
              value={getUser().about}
              placeholder="About"
            />

            {/* <div class="btnupdate">
              <button type="button" class="btn btn-lg btn-dark">
                Update
              </button>
            </div> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
