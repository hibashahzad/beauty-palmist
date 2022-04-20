import classes from "./BRegister.module.css";
import { useNavigate } from "react-router-dom";
const BRegister = () => {
  let navigate = useNavigate();
  let signup = (name) => {
    navigate(name);
  };
  return (
    <div className={classes.main}>
      <div class="container">
        <h1 className={classes.head1}>Business Sign Up</h1>
        <div class="card ff">
          <div class="card-body">
            <form>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      placeholder="Company/Business Name"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      placeholder="Email ID"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="Location, Address"
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
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="Phoneno"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="Name"
                    />
                  </div>
                  <label class={classes.lib}>
                    Select Your Service Category
                  </label>
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="exampleCheck1"
                    />
                    <label class="form-check-label" for="exampleCheck1">
                      Salon
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="exampleCheck1"
                    />
                    <label class="form-check-label" for="exampleCheck1">
                      Aesthetics
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="exampleCheck1"
                    />
                    <label class="form-check-label" for="exampleCheck1">
                      Fitness
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="exampleCheck1"
                    />
                    <label class="form-check-label" for="exampleCheck1">
                      Photography
                    </label>
                  </div>
                </div>
                <div class=" col-md-6">
                  <label class={classes.lib}>
                    What is your business status?
                  </label>
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="exampleCheck1"
                    />
                    <label class="form-check-label" for="exampleCheck1">
                      Registered
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="exampleCheck1"
                    />
                    <label class="form-check-label" for="exampleCheck1">
                      Small Business
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="exampleCheck1"
                    />
                    <label class="form-check-label" for="exampleCheck1">
                      Home Based
                    </label>
                  </div>
                  <label class={classes.lib}>
                    Attach CNIC (Small Business/Home Based)
                  </label>
                  <div class="custom-file">
                    <input
                      type="file"
                      class="custom-file-input"
                      id="customFile"
                    />
                    <label class="custom-file-label" for="customFile"></label>
                  </div>
                 

                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      placeholder="Enter Account Link"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <label class={classes.lib}>About</label>
                <div class="form-group">
                  <input
                    style={{ height: "100px !important" }}
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    placeholder="Give description about your services, experience and achievements"
                  />
                </div>
               
              </div>
            </form>
            <div className="text-center">
              <button
                type="submit"
                class={`btn text-white w-50 text-center ${classes.login}
                  `}
              >
                Sign Up
              </button>
              <button
                  onClick={() => signup("/Business")}
                type="submit"
                class={`btn btn-outline-dark w-50 mx-2  ${classes.cancel}`}
              >
                Have an Account ?Login
              </button>
              <button
                onClick={() => signup("/Selection")}
                type="submit"
                class={`btn btn-outline-dark w-50  ${classes.cancel}`}
              >
                Sign Up Selection
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BRegister;
