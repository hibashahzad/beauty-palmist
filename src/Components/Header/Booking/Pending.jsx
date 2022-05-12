import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import { useAuth } from "../../../Services/provideMain";
import bookingServices from "../../../Services/services/booking";

const Pending = () => {
  const [service, setServices] = React.useState([]);
  const [serviceP, setServicesP] = React.useState([]);
  const { state } = useAuth();
  React.useEffect(() => {
    bookingServices.getBooking(state.user._id).then((val) => {
      setServices(val.Booking.filter((val) => val.status == 0));
      setServicesP(val.Booking.filter((val) => val.status == 1));
    });
  }, []);
  return (
    <Tabs
      defaultActiveKey="Requested"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="Requested" title="Requested">
        <ul class="list-group">
          <li class="list-group-item">
            {service.length > 0 ? (
              service.map((val) => (
                <div class="row py-2">
                  <div class="col-md-6">
                    <h5>{val?.ServiceId?.name}</h5>
                    <h5 class="servicepro">{val.OwnerId?.name}</h5>
                    <h6 class="info">
                      Date:{val.Date} Time: {val.Time} Price {val.Price} id:{" "}
                      {val._id.substr(1, 5)}
                    </h6>
                  </div>
                  <div class="col-md-6">
                    <div class="row">
                      <button
                        type="button"
                        class="btn btn-outline-dark actionbtn"
                      >
                        Cancel Request
                      </button>
                      <button
                        type="button"
                        class="btn btn-outline-dark actionbtn"
                      >
                        View Booking Form
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h1>No Booking</h1>
            )}
          </li>
        </ul>
      </Tab>
      <Tab eventKey="Payment" title="Payment Pending">
        <ul class="list-group">
          <li class="list-group-item">
            {serviceP.length > 0 ? (
              service.map((val) => (
                <div class="row py-2">
                  <div class="col-md-6">
                    <h5>{val?.ServiceId?.name}</h5>
                    <h5 class="servicepro">{val.OwnerId?.name}</h5>
                    <h6 class="info">
                      Date:{val.Date} Time: {val.Time} Price {val.Price} id:{" "}
                      {val._id.substr(1, 5)}
                    </h6>
                  </div>
                  <div class="col-md-6">
                    <div class="row">
                      <button
                        type="button"
                        class="btn btn-outline-dark actionbtn"
                      >
                        Cancel Request
                      </button>
                      <button
                        type="button"
                        class="btn btn-outline-dark actionbtn"
                      >
                        Confirm Booking
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h1>No Booking</h1>
            )}
          </li>
        </ul>
      </Tab>
    </Tabs>
  );
};

export default Pending;
