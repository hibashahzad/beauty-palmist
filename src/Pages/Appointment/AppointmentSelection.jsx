import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import DatePicker from "sassy-datepicker";
import Swal from "sweetalert2";
import { useAuth } from "../../Services/provideMain";

function AppointmentSelection() {
  const [value, onChange] = useState(new Date());
  const navigate = useNavigate();
  const location = useLocation();
  let { state: check } = useAuth();
  const setdates = (e) => {
    console.log(e);
  };
  const loginfirst = () => {
    navigate("/Clogin", {
      state: { info: location.state.info, from: location },
    });
  };
  const move = () => {
    if (!check.auth) {
      Swal.fire({
        title: "Detail",
        html: `
            <h2>You need to Login first Before conitinue</h2>
          
        `,

        confirmButtonText: "Ok",
      }).then(() => {
        loginfirst();
      });
    } else {
      navigate("/AppointmentDetails", { state: { info: location.state.info } });
    }
  };
  return (
    <div className="main">
      <div className="heading_contaier">
        <h1 className="heading">
          {location.state.info.name} -{" "}
          {location.state.info?.BussnesId?.bussnessname ||
            location.state.info?.userid.name}{" "}
        </h1>
        <p className="heading_paragraph">
          Request a time slot suitable for you. Your request will be accepted if
          the slot is available otherwise you will be suggested an alternate
          slot for this service.
        </p>
      </div>
      <div className="container">
        <div className="DateandTime row">
          <div className=" col-md-6">
            <div className="DatePicker">
              <h2 className="selectedheading">
                Select Requested Date and Time
              </h2>

              <div className="selection_sector">
                <DatePicker onChange={setdates} selected={value} />

                <div className="buttons">
                  <h6>Monday,4 Aril</h6>
                  <p>Timezone: Pakistan Standard time (GMT+5)</p>
                  <div className="botn">
                    <button type="button" class="btn btn-light padding">
                      10:00 am
                    </button>
                    <button type="button" class="btn btn-light padding">
                      10:00 am
                    </button>
                  </div>
                  <div className="botn">
                    <button type="button" class="btn btn-light padding">
                      10:00 am
                    </button>
                    <button type="button" class="btn btn-light padding">
                      10:00 am
                    </button>
                  </div>
                  <div className="botn">
                    <button type="button" class="btn btn-light padding">
                      10:00 am
                    </button>
                    <button type="button" class="btn btn-light padding">
                      10:00 am
                    </button>
                  </div>
                  <div className="botn">
                    <button type="button" class="btn btn-light padding">
                      10:00 am
                    </button>
                    <button type="button" class="btn btn-light padding">
                      10:00 am
                    </button>
                  </div>
                  <div className="botn">
                    <button type="button" class="btn btn-light padding">
                      10:00 am
                    </button>
                    <button type="button" class="btn btn-light padding">
                      10:00 am
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
          <div className=" col-md-5">
            <h2 className="selectionheading">Booking Summary</h2>
            <h6>
              {" "}
              <b>
                {" "}
                {location.state.info.name} -{" "}
                {location.state.info?.BussnesId?.bussnessname ||
                  location.state.info?.userid.name}{" "}
              </b>{" "}
            </h6>
            <h6>4 April 2022, 10.00 am</h6>
            <p>1 hr</p>
            <p>Rs {location.state.info.Price}</p>
            <button
              class="btn btn-success batn"
              type="button"
              onClick={() => move("/AppointmentDetails")}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppointmentSelection;
