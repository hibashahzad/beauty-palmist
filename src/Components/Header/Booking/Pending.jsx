import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import Swal from "sweetalert2";
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
  }, [service]);
  const updateBooking = async (id) => {
    await bookingServices.updatebooking(id, { status: "3" });
    setServices(service.filter((val) => val._id != id));
    Swal.fire("Booking canceled");
  };
  const updateBookings = async (id) => {
    await bookingServices.updatebooking(id, { status: "3" });
    setServicesP(serviceP.filter((val) => val._id != id));
    Swal.fire("Booking canceled");
  };
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
                        onClick={() => updateBookings(val._id)}
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
                        onClick={() => updateBooking(val._id)}
                      >
                        Cancel Request
                      </button>
                      <button
                        type="button"
                        class="btn btn-outline-dark actionbtn"
                      >
                        Confirm Booking
                      </button>
                      <button
                        type="button"
                        class="btn btn-outline-dark actionbtn"
                        onClick={() =>
                          Swal.fire({
                            title: "Detail",
                            html: `
                          <div style="font-weight:bold">Price:${val.Price}</div>
                          <div style="font-weight:bold">Building:${val.Building}</div>
                          <div style="font-weight:bold">Address:${val.Address}</div>
                          <div style="font-weight:bold">City:${val.City}</div>
                          <div style="font-weight:bold">State:${val.State}</div>
                          <div style="font-weight:bold">Message:${val.Message}</div>
                          
                         
                      `,

                            confirmButtonText: "Ok",
                          })
                        }
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
    </Tabs>
  );
};

export default Pending;
