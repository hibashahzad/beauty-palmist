const Rejected = () => {
  return (
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
                View Message
              </button>
              <button type="button" class="btn btn-outline-dark actionbtn">
                Re-Request
              </button>
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default Rejected;
