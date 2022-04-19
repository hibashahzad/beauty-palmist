import React from "react";
import classes from "./BusinessLogin.module.css";
import { useNavigate } from "react-router-dom";
const BusniessLogin = () => {
  let navigate = useNavigate();
  let Client = () => {
    navigate("/");
  };
  const move = (name) => {
    navigate(name);
  };
  return (
    <div class={`${classes[`main-container`]}`}>
      <div class={`container `}>
        <div class="row">
          <div class="col-md-6 ">
            <div
              class={`card ${classes.LoginCard} shadow-lg bg-body rounded m-md-0 m-auto`}
            >
              <div
                class="row g-0"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "8px",
                }}
              >
                <div class="col-md-6 ">
                  <button
                    onClick={Client}
                    class={`btn btn-primary ${classes.btnsize} ${classes.z} `}
                  >
                    Client
                  </button>
                </div>
                <div class="col-md-6 ">
                  <button
                    class={`btn btn-primary ${classes.btnsize} ${classes.bussiness}`}
                  >
                    Bussiness
                  </button>
                </div>
              </div>
              <div class="card-body">
              
               
                <form>
                  <h2>Login</h2>
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      placeholder="Email"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="password"
                      class="form-control mb-4"
                      id="exampleInputPassword1"
                      placeholder="Password"
                    />
                  </div>

                  <button
                    type="submit"
                    onClick={() => move("/Seller/Dashborad")}
                    class={`btn btn-primary ${classes[`login-btn`]}`}
                  >
                    Login
                  </button>
                  <h3>
                    Don't have an account? <i className="bolds">Sign Up</i>
                  </h3>
                </form>{" "}
              </div>
            </div>
          </div>
          <div class="col-md-6 d-none d-md-inline">
            <div class={`card ${classes.titleCard}`}>
              <div class={`card-body ${classes.body}`}>
                <h1 className={classes.head1}>Business Login</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusniessLogin;
