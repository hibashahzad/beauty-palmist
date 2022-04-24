import { Carousel } from "react-bootstrap";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import "./Home.css";
const HomeSeller = () => {
  const navigate = useNavigate();
  const move = (val) => {
    navigate("/Seller/" + val);
  };
  return (
    <div class=" maindashboard">
      <h1 class="maintitle">Dashboard</h1>
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="cardBookings">
              <div class="textpart">
                <div class="card-title titletext">Bookings</div>
                <div class="card-subtitle">
                  View booking schedules and requests
                </div>
              </div>
              <div>
                <button
                  type="button"
                  class="btn btn-outline-light forwardbtn"
                  onClick={() => move("MyBookings")}
                >
                  <i class="fa-solid fa-arrow-right-long"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="cardServices">
              <div class="textpart">
                <div class="card-title titletext">Services</div>
                <div class="card-subtitle">View and Update your services</div>
              </div>
              <div>
                <button
                  type="button"
                  class="btn btn-outline-light forwardbtn"
                  onClick={() => move("ServiceListS")}
                >
                  <i class="fa-solid fa-arrow-right-long"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="cardSettings">
              <div class="textpart">
                <div class="card-title titletext">Profile Settings</div>
                <div class="card-subtitle">
                  Keep your Profile Information Up to Date
                </div>
              </div>
              <div>
                <button
                  type="button"
                  class="btn btn-outline-light forwardbtn"
                  onClick={() => move("Profile")}
                >
                  <i class="fa-solid fa-arrow-right-long"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <h1 class="maintitle">Top Services</h1>
        <div class="row">
          <div class="col-md-6">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://media.istockphoto.com/photos/business-woman-lady-boss-in-beauty-salon-making-hairdress-and-looking-picture-id1147811403?k=20&m=1147811403&s=612x612&w=0&h=lBbmmhPxES33OgnJgkzvtURRSs_gRvD7kX65gETQ9r8="
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://media.istockphoto.com/photos/business-woman-lady-boss-in-beauty-salon-making-hairdress-and-looking-picture-id1147811403?k=20&m=1147811403&s=612x612&w=0&h=lBbmmhPxES33OgnJgkzvtURRSs_gRvD7kX65gETQ9r8="
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://media.istockphoto.com/photos/business-woman-lady-boss-in-beauty-salon-making-hairdress-and-looking-picture-id1147811403?k=20&m=1147811403&s=612x612&w=0&h=lBbmmhPxES33OgnJgkzvtURRSs_gRvD7kX65gETQ9r8="
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
          <div class="col-md-6">
            <div class="card statsCard">
              <div class="row">
                <div class="col-6">
                  <h4 class="statsh4">Regular Sales</h4>
                  <h3 class="statsh3">6540 PKR</h3>
                  <h5 class="statsh5">Today's Income</h5>
                </div>
                <div class="col-6">
                  <img
                    src="https://static.wixstatic.com/media/11c705_45b49820f47940bc87bb0bc4e21dd98d~mv2.png/v1/fill/w_304,h_135,al_c,usm_0.66_1.00_0.01,enc_auto/lol.png"
                    class="statsimg"
                    alt="..."
                  />
                </div>
              </div>
              <div class="progress">
                <div
                  class="progress-bar todaybar"
                  role="progressbar"
                  aria-valuenow="65"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  65%
                </div>
              </div>
            </div>
            <div class="card statsCard">
              <div class="row">
                <div class="col-6">
                  <h4 class="statsh4">Monthly Sales</h4>
                  <h3 class="statsh3">45230 PKR</h3>
                  <h5 class="statsh5">January's Income</h5>
                </div>
                <div class="col-6">
                  <img
                    src="https://static.wixstatic.com/media/11c705_45b49820f47940bc87bb0bc4e21dd98d~mv2.png/v1/fill/w_304,h_135,al_c,usm_0.66_1.00_0.01,enc_auto/lol.png"
                    class="statsimg"
                    alt="..."
                  />
                </div>
              </div>
              <div class="progress">
                <div
                  class="progress-bar monthlybar"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  75%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSeller;
