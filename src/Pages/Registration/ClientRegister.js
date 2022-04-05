import classes from "./CRegister.module.css";
import { useNavigate } from "react-router-dom";
const CRegister = () => {
  let navigate = useNavigate();
  let signup = (name) => {
    navigate(name);
  };
  return (
    <div className={classes.main}>
      <div class="container">
        <div class="row">
          <div class=" col-md-6 d-md-none text-center d-block my-5">
            <div class={`text-white ${classes.head2}`}>Client Sign Up</div>
          </div>
          <div class="col-md-6">
            <div class={`card ${classes.LoginCard} m-auto`}>
              <div class="card-body">
                <form>
                  <h2 className={classes.head1}>Create an Account</h2>
                  <div class="form-group">
                    <input
                      type="username"
                      class="form-control"
                      id="exampleInputusername1"
                      placeholder="Username"
                    />
                  </div>
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
                  <div class="form-group">
                    <input
                      type="confirm-password"
                      class="form-control"
                      id="exampleInputconfirmPassword1"
                      placeholder="Repeat Password"
                    />
                  </div>
                  <button
                    type="submit"
                    class={`btn text-white ${classes.login}
                  `}
                  >
                    Sign Up
                  </button>
                  <button
                    onClick={() => signup("/")}
                    type="submit"
                    class={`btn btn-outline-dark  ${classes.cancel}`}
                  >
                    Login
                  </button>
                  <button
                    onClick={() => signup("/Selection")}
                    type="submit"
                    class={`btn btn-outline-dark  ${classes.cancel}`}
                  >
                    Sign Up Selection
                  </button>
                </form>{" "}
              </div>
            </div>
          </div>
          <div class=" col-md-6 d-md-inline d-none">
            <div class={`text-white ${classes.head2}`}>Client Sign Up</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CRegister;
