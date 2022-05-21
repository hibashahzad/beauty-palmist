import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../Services/provideMain";
import Rating from "react-rating";
import bookingServices from "../../Services/services/booking";
import Swal from "sweetalert2";
const Review = () => {
  const { state } = useAuth();
  const { state: data } = useLocation();
  let navigate = useNavigate();
  const [review, setReview] = React.useState();

  const [comment, setComment] = React.useState();

  const handleFormSubmit = () => {
    bookingServices
      .createReview({
        comment: comment,
        rating: review,

        ServiceId: data.info.ServiceId._id,
        BookId: data.info._id,
        UserId: state.user._id,
      })
      .then((val) => {
        navigate(-1);
        Swal.fire("Feeback Complete");
      });
  };
  return (
    <div class="py-5 mainBookingContainer">
      <div class="card mx-auto ClientBookFormCard shadow-lg">
        <div class="card-body">
          <div class="row">
            <div class="col-md-8">
              <h3>Fill out your details</h3>
              <hr class="solid" />
              <div class="row">
                <div class="col-md-6">
                  <label for="Name" class="form-label BookLabels">
                    Comment<span class="star">*</span>
                  </label>
                  <input
                    type="text"
                    class="form-control inputTextfields"
                    id="Name"
                    name="name"
                    onChange={(e) => setComment(e.target.value)}
                  />
                </div>
                <Rating
                  style={{ fontSize: "10px", color: "#FFCC00" }}
                  initialRating={0}
                  onChange={(val) => setReview(val)}
                  stop={5}
                  emptySymbol={[
                    "fa fa-star-o fa-2x low",
                    "fa fa-star-o fa-2x low",
                    "fa fa-star-o fa-2x medium",
                    "fa fa-star-o fa-2x medium",
                    "fa fa-star-o fa-2x high",
                    "fa fa-star-o fa-2x high",
                  ]}
                  fullSymbol={[
                    "fa fa-star fa-2x low",
                    "fa fa-star fa-2x low",
                    "fa fa-star fa-2x medium",
                    "fa fa-star fa-2x medium",
                    "fa fa-star fa-2x high",
                    "fa fa-star fa-2x high",
                  ]}
                />
              </div>

              <button
                type="button"
                class="btn paybtn btn-success batn"
                onClick={() => handleFormSubmit()}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
