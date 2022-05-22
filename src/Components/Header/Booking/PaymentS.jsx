import React from "react";
import Swal from "sweetalert2";
import { useAuth } from "../../../Services/provideMain";
import bookingServices from "../../../Services/services/booking";

const PaymentS = () => {
  const [service, setServices] = React.useState([]);
  const { state, refresh, refetch } = useAuth();
  React.useEffect(() => {
    bookingServices.getOwnerBooking(state.user._id).then((val) => {
      setServices(val.Booking.filter((val) => val.status === 1));
      console.log(val);
    });
  }, [refresh]);
  const updateBooking = async (id, value) => {
    await bookingServices.updatebooking(id, {
      status: value,
      canceledBy: "Owner",
    });

    refetch();
    Swal.fire(`Booking Scheduled`);
  };
  return (
    <ul class="list-group">
      <li class="list-group-item">
        {service.length > 0 ? (
          service.map((val) => (
            <div class="row py-2">
              <div class="col-md-6">
                <h5>{val?.ServiceId?.name}</h5>
                <h5 class="servicepro">{val.UserId?.name}</h5>
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
                    onClick={() => updateBooking(val._id, 3)}
                  >
                    Cancel Booking
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-dark actionbtn"
                    onClick={() => updateBooking(val._id, 4)}
                  >
                    Approve Payment
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-dark actionbtn mt-3"
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
                      
                           
                               <h3>Payment Screenshot</h3>
                               <img src="http://localhost:3000/${val.screenshot}" />
                       
                          
                         
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
  );
};

export default PaymentS;
