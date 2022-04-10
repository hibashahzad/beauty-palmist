import React from "react";
import classes from "./SubCat.module.css";
import { useNavigate } from "react-router-dom";
const SubCat = () => {
  let navigate = useNavigate();
  let view = (name) => {
    navigate(name);
  };
  return (
    <div className={classes.main}>
      <div class="container">
        <div className={classes.header}>
          <div>
            <h1 className={`${classes.headbg}   fadeLeft `} data-t-show="0">
              Salon Categories
            </h1>
          </div>
        </div>

        <div class="row" id="Services">
          {new Array(5).fill(0).map(() => (
            <div class="col-md-4  text-center flipY  ">
              <div
                class={`card shadow p-3 mb-5 bg-white rounded ${classes.bordersset}`}
                data-t-show="1"
              >
                <div class="card-body">
                  <div class="card-img-top">
                    <img
                      className="w-50"
                      src="./SERVICES/SALON/Beauty.png"
                      alt=""
                    />
                  </div>

                  <h2 class={`card-title ${classes.head1}`}>Beauty Services</h2>
                  <p class="card-text text-muted py-2 fst-italic">
                    Your beauty answers are just a few questions away!
                  </p>
                  <button
                    onClick={() => view("/List")}
                    type="submit"
                    class={`btn btn-primary ${classes[`login-btn`]}`}
                  >
                    View <i class="fa fa-arrow-right ps-2"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubCat;
