import React from "react";
import classes from "./Login.module.css";
const ClientLogin = () => {
  return (
    <div class={`${classes[`main-container`]}`}>
      <div class={`container `}>
        <div class="row">
          <div class="col-md-6 ">
            <div class={`card ${classes.LoginCard}  m-md-0 m-auto`}>
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
                <h2>Login</h2>
                <div class={` ${classes[`social-btns`]}`}>
                  <a href="#" class={`${classes.fb} btn`}>
                    <i class="fa fa-facebook fa-fw"></i> Login with Facebook
                  </a>
                  <a href="#" class={`${classes.twitter} btn`}>
                    <i class="fa fa-twitter fa-fw"></i> Login with Twitter
                  </a>
                </div>
                <form>
                  <h2>Login with email</h2>
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
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                    />
                  </div>
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="exampleCheck1"
                    />
                    <label
                      class={` form-check-label ${classes.remember}`}
                      for="exampleCheck1"
                    >
                      Remember Me
                    </label>
                  </div>
                  <button
                    type="submit"
                    class={`btn btn-primary ${classes[`login-btn`]}`}
                  >
                    Login
                  </button>
                  <h3>
                    Don't have an account? <i>Sign Up</i>
                  </h3>
                </form>{" "}
              </div>
            </div>
          </div>
          <div class="col-md-6 d-none d-md-inline">
            <div class={`card ${classes.titleCard}`}>
              <div class={`card-body ${classes.body}`}>
                <h1 className={classes.head1}>Client Login</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientLogin;
