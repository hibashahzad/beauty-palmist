import "./AddServices.css";
const AddServices = () => {
  return (
    <div class="py-5 mainAddService">
      <div class="card addServiceCard">
        <div class="card-title titleService">Add Service Form</div>
        <div class="card-body">
          <form>
            <div class="row">
              <div class="col-md-6">
                <label for="ServiceName" class="ServiceLabel">
                  Service Name
                </label>
                <input
                  type="text"
                  class="form-control ServiceTextfield"
                  id="ServiceName"
                />
                <div class="form-group">
                  <label for="ServiceCategory" class="ServiceLabel">
                    Service Category
                  </label>
                  <select
                    class="form-control ServiceTextfield"
                    id="ServiceCategory"
                  >
                    <option>Beauty Service</option>
                    <option>Skin Treatment</option>
                    <option>Hair Treatment</option>
                    <option>Salon Product</option>
                    <option>Other</option>
                  </select>
                </div>
                <label for="ServiceCode" class="ServiceLabel">
                  Service Code
                </label>
                <input
                  type="pin"
                  class="form-control ServiceTextfield"
                  id="ServiceCode"
                  placeholder="Service code will be auto-generated"
                />
                <label for="ServicePrice" class="ServiceLabel">
                  Price (PKR)*
                </label>
                <input
                  type="number"
                  class="form-control ServiceTextfield"
                  id="ServicePrice"
                />
                {/* <div class="form-group">
                <label for="BookingPayment" class="ServiceLabel">
                  Booking Payment Percentage*
                </label>
                <select
                  class="form-control ServiceTextfield"
                  id="BookingPayment"
                >
                  <option>Full Payment</option>
                  <option>50% Advance Payment</option>
                  <option>25% Advance Payment</option>
                  <option>Custom Payment</option>
                </select>
              </div> */}
              </div>
              <div class="col-md-6">
                <button type="button" class="btn qbutton">
                  Fill Questionnare{" "}
                  <i
                    class="fa-regular fa-circle-question pr-2"
                    aria-hidden="true"
                  ></i>
                </button>

                <label class="ServiceLabel">
                  Select your Service Type in terms of Price Range
                </label>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Luxury
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    checked
                  />
                  <label class="form-check-label" for="flexRadioDefault2">
                    Affordable
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    checked
                  />
                  <label class="form-check-label" for="flexRadioDefault2">
                    Low Cost
                  </label>
                </div>
              </div>
            </div>
            <label for="ServiceDescription" class="ServiceLabel">
              Service Description'
            </label>
            <input
              type="text"
              class="form-control descriptiontextfield"
              id="ServiceDescription"
              placeholder="Enter your service description"
            />
            <div class="btndiv">
              <button type="button" class="btn btn-lg btn-dark submitbtn">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddServices;
