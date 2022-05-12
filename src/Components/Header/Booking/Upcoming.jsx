import React from "react";
import { useAuth } from "../../../Services/provideMain";
import bookingServices from "../../../Services/services/booking";

const Upcoming = () => {
  const [service, setServices] = React.useState([]);
  const { state } = useAuth();
  React.useEffect(() => {
    bookingServices.getBooking(state.user._id).then((val) => {
      setServices(val.Booking.filter((val) => val.status == 0));
    });
  }, []);
  return (
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
                  <button type="button" class="btn btn-outline-dark actionbtn">
                    Cancel Booking
                  </button>
                  <button type="button" class="btn btn-outline-dark actionbtn">
                    Reschedule
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h1>No Bokoing</h1>
        )}
      </li>
    </ul>
  );
};

export default Upcoming;
