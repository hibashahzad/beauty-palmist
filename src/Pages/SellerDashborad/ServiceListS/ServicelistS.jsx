import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import classes from "./ServiceListS.module.css";
import Rating from "react-rating";
const ServiceListS = () => {
  const navigate = useNavigate();
  const SingleService = (name) => {
    navigate(name);
  };
  return (
    <div className={`${classes.width} container-fluid`}>
      <h1 class="my-5">Services</h1>
      <div class="row align-items-center">
        <div class=" col-sm-8">
          <form class="card card-sm form-control-borderless">
            <div class="card-body row no-gutters align-items-center">
              <div class="col-auto">
                <i class="fa fa-search h4 text-body"></i>
              </div>

              <div class="col">
                <input
                  class="form-control form-control-lg form-control-borderless"
                  type="search"
                  placeholder="Search topics or keywords"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="col-sm-3">
          {" "}
          <button
            onClick={() => SingleService("/Seller/AddServices")}
            style={{
              backgroundImage: "linear-gradient(to right, #FBDFCF , white)",
            }}
            class={`btn  ${classes[`login-btn`]}`}
          >
            Add Services<i class="fa fa-plus  ps-2"></i>
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          {new Array(6).fill(0).map((val, index) => (
            <div className="row my-3">
              <div className={`col-md-10 ${classes.sectionset}`}>
                <div className="row gy-2">
                  <div className="col-1 fw-bold">{index}</div>
                  <div className="col-8 fw-bold">Hair Protein Treatment</div>
                  <div className="col-3">
                    <button
                      onClick={() => SingleService("/Seller/SingleService")}
                      class={`btn btn-primary ${classes[`login-btn`]}`}
                    >
                      View Services<i class="fa fa-arrow-right ps-2"></i>
                    </button>
                  </div>
                  <div className="col-1 fw-bold"></div>
                  <div className="col-md-8">
                    <Rating
                      style={{ fontSize: "10px", color: "#FFCC00" }}
                      initialRating={4}
                      readonly
                      stop={5}
                      emptySymbol={[
                        "fa fa-star-o fa-2x low",
                        "fa fa-star-o fa-2x low",
                        "fa fa-star-o fa-2x medium",
                        "fa fa-star-o fa-2x medium",
                        "fa fa-star-o fa-2x high",
                        "fa fa-star-o fa-2x high",
                      ]}
                      fullSymbol={[
                        "fa fa-star fa-2x low",
                        "fa fa-star fa-2x low",
                        "fa fa-star fa-2x medium",
                        "fa fa-star fa-2x medium",
                        "fa fa-star fa-2x high",
                        "fa fa-star fa-2x high",
                      ]}
                    />
                    <span className="mx-2">3.0</span>
                    <span className="mx-2">150 Ratings</span>
                  </div>
                  <div
                    className="col-3 text-center"
                    style={{ fontSize: "24px" }}
                  >
                    <i
                      class="fas fa-edit mx-2"
                      onClick={() => SingleService("/Seller/AddServices/2")}
                    ></i>
                    <i class="fa-solid fa-trash"></i>
                  </div>
                </div>
              </div>
              <div className="col-md-2 d-flex my-md-0 my-4">
                <img
                  className={`${classes.circle} m-auto text-center`}
                  src="https://static.wixstatic.com/media/11062b_a74f7392ca384dff8b5516e880f76ac3~mv2.jpg/v1/crop/x_300,y_0,w_1201,h_1201/fill/w_249,h_249,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Dying%20Hair.jpg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default ServiceListS;
