const BRegister = () => {
  return (
    <div class="container main-container">
      <h1>Business Sign Up</h1>
      <div class="card">
        <div class="card-body">
          <form>
            <div class="row">
              <div class="col-6 col-md-6">
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
                <label class="lb">Add Logo</label>
                <div class="custom-file">
                  <input
                    type="file"
                    class="custom-file-input"
                    id="customFile"
                  />
                  <label class="custom-file-label" for="customFile"></label>
                </div>
                <label class="lb">Select Your Service Category</label>
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
              <div class="col-6 col-md-6">
                <label class="lb">What is your business status?</label>
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
                <label class="lb">
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
                <label class="lb">Attach Documents (If registered)</label>
                <div class="custom-file">
                  <input
                    type="file"
                    class="custom-file-input"
                    id="customFile"
                  />
                  <label class="custom-file-label" for="customFile"></label>
                </div>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-youtube"></i>
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
              <label class="lb">About</label>
              <div class="form-group">
                <input
                  style="height: 100px !important;"
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  placeholder="Give description about your services, experience and achievements"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BRegister;
