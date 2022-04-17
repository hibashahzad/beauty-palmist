import { Tab, Tabs } from "react-bootstrap";

const Pending = () => {
  return (
    <Tabs
      defaultActiveKey="Requested"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="Requested" title="Requested">
        <ul class="list-group">
          <li class="list-group-item">
            <div class="row">
              <div class="col-md-6">
                <h5>Service Name</h5>
                <h5 class="servicepro">Service Provider</h5>
                <h6 class="info">Date . Time . Price . Booking ID</h6>
              </div>
              <div class="col-md-6">
                <div class="row">
                  <button type="button" class="btn btn-outline-dark actionbtn">
                    Cancel Request
                  </button>
                  <button type="button" class="btn btn-outline-dark actionbtn">
                    View Booking Form
                  </button>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </Tab>
      <Tab eventKey="Payment" title="Payment Pending">
        <ul class="list-group">
          <li class="list-group-item">
            <div class="row py-2">
              <div class="col-md-6">
                <h5>Service Name</h5>
                <h5 class="servicepro">Service Provider</h5>
                <h6 class="info">Date . Time . Price . Booking ID</h6>
              </div>
              <div class="col-md-6">
                <div class="row">
                  <button type="button" class="btn btn-outline-dark actionbtn">
                    Confirm Booking
                  </button>
                  <button type="button" class="btn btn-outline-dark actionbtn">
                    View Booking Form
                  </button>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </Tab>
    </Tabs>
  );
};

export default Pending;
