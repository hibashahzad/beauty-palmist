import React from "react";
import { Outlet } from "react-router-dom";
import "./UserProfile.css";
const UserProfile = () => {
  return (
    <div class="py-5 ">
      <div class="card toppings">Profile Update</div>
      <h4>Account</h4>
      <h5 class="mb-2">View and Edit Your Profile</h5>
      <hr />
      <div class="card sd">
        <div class="card-body">
          <form>
            <div class="row">
              <div class="col-md-6">
                <label for="exampleInputEmail1" class="bold form-label">
                  Name
                </label>
                <input
                  type="name"
                  class="form-control "
                  id="Name"
                  placeholder="Name"
                />
              </div>
              <div class="col-md-6">
                <label for="exampleInputEmail1" class="bold">
                  Address
                </label>
                <input
                  type="address"
                  class="form-control "
                  id="LocationId"
                  placeholder="Email"
                />
              </div>

              <div class="col-md-6">
                <label for="exampleInputEmail1" class="bold form-label">
                  Phone no
                </label>
                <input
                  type="number"
                  class="form-control "
                  id="emailId"
                  aria-describedby="emailHelp"
                  placeholder="Phoneno"
                />
              </div>
              <div class="col-md-6">
                <label for="exampleInputEmail1" class="bold form-label">
                  Email
                </label>

                <input
                  type="email"
                  class="form-control "
                  id="emailId"
                  aria-describedby="emailHelp"
                  placeholder="Password"
                />
              </div>
            </div>

            <div class="btnupdate mt-4  text-end">
              <button type="button" class="btn btn-lg btn-dark">
                Update Info
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
