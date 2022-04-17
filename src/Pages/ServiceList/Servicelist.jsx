import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import classes from "./ServiceList.module.css";
const ServiceList = () => {
  const navigate = useNavigate();
  const SingleService = (name) => {
    navigate(name);
  };
  return (
    <div className={`${classes.width} container-fluid`}>
      <div className="row">
        <div className={`col-md-3 ${classes.main}`}>
          <div className="shadow-lg pt-4 rounded">
            <h1 className="py-3">Sort By Price Range</h1>
            <div className="shadow-lg bg-black py-5 rounded">
              <h2 className={classes.range}>LUXERY</h2>
              <h2 className={classes.range}>LOW RANGE</h2>
              <h2 className={classes.range}>ALL RANGES</h2>
            </div>
          </div>
        </div>
        <div className="col-md-9">
          {new Array(6).fill(0).map((val) => (
            <div className="row my-3">
              <div className={`col-md-9 ${classes.sectionset}`}>
                <div className="row gy-2">
                  <div className="col-1 fw-bold">1</div>
                  <div className="col-8 fw-bold">Hair Protein Treatment</div>
                  <div className="col-3">
                    <button
                      onClick={() => SingleService("/SingleService")}
                      class={`btn btn-primary ${classes[`login-btn`]}`}
                    >
                      View <i class="fa fa-arrow-right ps-2"></i>
                    </button>
                  </div>
                  <div className="col-1"></div>
                  <div className="col-11">Aira's Aesthetics Services</div>
                  <div className="col-1"></div>
                  <div className="col-11 fst-italic text-muted">
                    This is Service Description. Service Description will be
                    added by owner. It's a great opportunity to provide
                    information about the services you p
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex">
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

export default ServiceList;
