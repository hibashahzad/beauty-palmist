const CRegister = () => {
  return (
    <div class="container main-container">
      <div class="row">
        <div class="col-6 col-md-6">
          <div class="card LoginCard">
            <div class="card-body">
              <form>
                <h2>Create an account</h2>
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
                <button type="submit" class="btn login-btn">
                  Sign Up
                </button>
                <button type="submit" class="btn btn-outline-dark cancel-btn">
                  Cancel
                </button>
              </form>{" "}
            </div>
          </div>
        </div>
        <div class="col-6 col-md-6">
          <h1 class="text-white">Client Signup</h1>
        </div>
      </div>
    </div>
  );
};

export default CRegister;
