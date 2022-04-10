import React from "react";
import { Carousel } from "react-bootstrap";
import classes from "./SingleService.module.css";
const SingleService = () => {
  return (
    <div class={`py-5 ${classes.main}`}>
      <div class="container">
        <div class={`card ${classes.detailservicecard}`}>
          <div class="row hidden-md-up">
            <div class="col-md-6">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://media.vogue.co.uk/photos/5efcac19100363e612305ceb/master/w_4500,h_3003,c_limit/Salons_HAIR-LOUNGE-SALON.jpg"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h1
                      style={{
                        color: "black",
                        fontWeight: "bold !important",
                      }}
                    >
                      Book Now
                    </h1>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://cdn1.treatwell.net/images/view/v2.i1719934.w1080.h720.x59B7C043"
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h1
                      style={{
                        color: "black",
                        fontWeight: "bold !important",
                      }}
                    >
                      Book Now
                    </h1>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
            <div class="col-md-6">
              <h5 class={`card-title ${classes.head5}`}>Protein Treatment</h5>
              <h6 class="card-subtitle mb-2 text-muted">
                Dr.Fazeela Abbasi Aesthetics
              </h6>
              <div class="card-body">
                <p class="card-text">
                  Protein Treatment will nourish your hair.Protein treatments,
                  when used in moderation, may provide the strength your hair
                  needs to minimize dryness and damage. However, these
                  treatments should only be used as directed.
                </p>
                <div class={classes.cardbuttons}>
                  {" "}
                  <button
                    type="button"
                    class={`btn ${classes.detailservicebtn}`}
                  >
                    Book Now! (Calender Method)
                  </button>
                  <button
                    type="button"
                    class={`btn ${classes.detailservicebtn} `}
                  >
                    Book Now! (Manual Input)
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row" style={{ marginTop: "30px" }}>
          <div class="col-md-12">
            <div class={`card h-100 ${classes.reviewservicecard}`}>
              <h5
                class="card-title"
                style={{ textAlign: "center", marginTop: "20px" }}
              >
                Ratings & Review
              </h5>
              <hr />
              <div class="card-body">
                <div class="row g-0">
                  <div class="col-md-4 border-right">
                    <div class="ratings text-center p-4 py-5">
                      {" "}
                      <span class="badge bg-success">
                        4.1 <i class="fa fa-star-o"></i>
                      </span>{" "}
                      <span class="d-block about-rating">VERY GOOD</span>{" "}
                      <span class="d-block total-ratings">183 ratings</span>{" "}
                    </div>
                  </div>
                  <div class="col-md-8">
                    <div class="rating-progress-bars p-3">
                      <div class="progress-1 align-items-center">
                        <div class="progress">
                          <div
                            class="progress-bar bg-warning"
                            role="progressbar"
                            style={{ width: "70%" }}
                            aria-valuenow="70"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            {" "}
                            71%{" "}
                          </div>
                        </div>
                        <div class="progress">
                          <div
                            class="progress-bar bg-warning"
                            role="progressbar"
                            style={{ width: "55%" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            55%
                          </div>
                        </div>
                        <div class="progress">
                          <div
                            class="progress-bar bg-warning"
                            role="progressbar"
                            style={{ width: "48%" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            48%
                          </div>
                        </div>
                        <div class="progress">
                          <div
                            class="progress-bar bg-warning"
                            role="progressbar"
                            style={{ width: "30%" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            30%
                          </div>
                        </div>
                        <div class="progress">
                          <div
                            class="progress-bar bg-warning"
                            role="progressbar"
                            style={{ width: "15%" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            15%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row d-flex justify-content-center align-items-center">
                  <div class="col-sm-7">
                    <div class="review-block">
                      {new Array(10).fill(0).map((val) => (
                        <>
                          <div class="row">
                            <div class="col-sm-3">
                              <h6>Customer</h6>
                              <div
                                class="review-block-name"
                                style={{ color: "green", fontWeight: "bold" }}
                              >
                                Verified User
                              </div>
                              <div class="review-block-date">
                                January 29, 2016
                                <br />1 day ago
                              </div>
                            </div>
                            <div class="col-sm-9">
                              <div class="review-block-title">
                                this was nice in buy
                              </div>
                              <div class="review-block-description">
                                this was nice in buy. this was nice in buy. this
                                was nice in buy. this was nice in buy this was
                                nice in buy this was nice in buy this was nice
                                in buy this was nice in buy
                              </div>
                            </div>
                          </div>
                          <hr />
                        </>
                      ))}
                    </div>
                  </div>{" "}
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
