import React from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../../Services/provideMain";
const BookingDetail = () => {
  const { state } = useAuth();
  const { state: data } = useLocation();
  return (
    <div class="py-5 mainBookingContainer">
      <div class="card mx-auto ClientBookFormCard shadow-lg">
        <div class="card-body">
          <div class="row">
            <div class="col-md-8">
              <form>
                <h3>Fill out your details</h3>
                <hr class="solid" />
                <div class="row">
                  <div class="col-md-6">
                    <label for="Name" class="form-label BookLabels">
                      Name<span class="star">*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control inputTextfields"
                      id="Name"
                      readOnly={true}
                      value={state.user?.name}
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="Contact" class="form-label BookLabels">
                      Contact Number<span class="star">*</span>
                    </label>
                    <input
                      type="tel"
                      class="form-control inputTextfields"
                      id="Contact"
                      value={state.user?.phoneNo}
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 NoteMsg">
                    <label>
                      <span class="star">Note:</span> You cannot change your
                      Email Id. Update it in profile settings.
                    </label>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label for="Email" class="form-label BookLabels">
                      Email<span class="star">*</span>
                    </label>
                    <input
                      type="email"
                      class="form-control inputTextfields"
                      id="Email"
                      readOnly={true}
                      value={state.user?.email}
                    />
                    <label for="Address" class="form-label BookLabels">
                      Address<span class="star">*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control inputTextfields"
                      id="Address"
                    />
                    <label for="City" class="form-label BookLabels">
                      City<span class="star">*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control inputTextfields"
                      id="City"
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="NoOfClients" class="form-label BookLabels">
                      Number of Clients<span class="star">*</span>
                    </label>
                    <input
                      type="number"
                      class="form-control inputTextfields"
                      id="NoOfClients"
                    />
                    <label for="BuildingFloor" class="form-label BookLabels">
                      Building/Floor<span class="star">*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control inputTextfields"
                      id="BuildingFloor"
                    />
                    <label for="State" class="form-label BookLabels">
                      State<span class="star">*</span>
                    </label>
                    <select
                      class="form-select inputTextfields"
                      aria-label="Select State"
                    >
                      <option selected>State</option>
                      <option value="1">Punjab</option>
                      <option value="2">Sindh</option>
                      <option value="3">KPK</option>
                      <option value="3">Balochistan</option>
                    </select>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <label for="Message" class="form-label BookLabels">
                      Message<span class="star">*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control inputTextfields"
                      id="Message"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div class="col-md-4">
              <h3>Booking Summary</h3>
              <hr class="solid" />
              <div class="row Paymentrow">
                <div class="col-md-6">
                  <h5 class="floatstart">
                    Service Name :<b>{data.info.name}</b>
                  </h5>
                </div>
                <div class="col-md-6">
                  <h5 class="floatend">...</h5>
                </div>
              </div>
              <div class="row Paymentrow">
                <div class="col-md-6">
                  <h5 class="floatstart">Date & Time</h5>
                </div>
                <div class="col-md-6">
                  <h5 class="floatend">...</h5>
                </div>
              </div>
              <div class="row Paymentrow">
                <div class="col-md-6">
                  <h5 class="floatstart">
                    Location <b>{data.info?.address || "Not Available"}</b>
                  </h5>
                </div>
                <div class="col-md-6">
                  <h5 class="floatend">...</h5>
                </div>
              </div>

              <hr class="solid" />
              <h4>Payment Details</h4>
              <div class="row Paymentrow">
                <div class="col-md-6">
                  <h5 class="floatstart">
                    Total: <b>{data.info?.Price} </b>
                  </h5>
                </div>
                <div class="col-md-6">
                  <h5 class="floatend">...</h5>
                </div>
              </div>
              <button type="button" class="btn paybtn btn-success batn">
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingDetail;
