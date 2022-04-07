import React from "react";
import classes from "./Services.module.css";
import { useNavigate } from "react-router-dom";
const Services = () => {
  return (
    <div class={`py-5 ${classes.main}`}>
      <h1 class={classes.head1}>Services</h1>
      <div class={`${classes.bgcolor} container m-auto`}>
        <div
          style={{
            position: "relative",
            width: "70%",
            margin: "auto",
          }}
        >
          <div class="row  d-flex justify-content-between m-auto py-5  ">
            <div class="col-lg-5 m-auto py-lg-0 py-5">
              <div class={`${classes.servicecard} card`}>
                <div class={`${classes.servicec} card-block`}>
                  <img
                    class="card-img-top cardb"
                    src="https://static.wixstatic.com/media/11c705_2daa24ccb82842eba93a8b3228f78247~mv2.jpg/v1/crop/x_0,y_23,w_250,h_158/fill/w_219,h_221,al_c,lg_1,q_80,enc_auto/beauty-luxury-woman-face-hair-spa-logo-design-spa-decoration-yoga_151157-1033_edited_edite.jpg"
                    alt="Card image cap"
                  />
                  <div class={`${classes.serviceb} card-body`}>
                    <button
                      type="button"
                      class={`btn btn-outline-dark ${classes.servicebtn}`}
                    >
                      Salons
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-5 m-auto py-lg-0 py-5">
              <div class={`${classes.servicecard} card`}>
                <div class={`${classes.servicec} card-block`}>
                  <img
                    class="card-img-top cardb"
                    src="https://static.wixstatic.com/media/11c705_2daa24ccb82842eba93a8b3228f78247~mv2.jpg/v1/crop/x_0,y_23,w_250,h_158/fill/w_219,h_221,al_c,lg_1,q_80,enc_auto/beauty-luxury-woman-face-hair-spa-logo-design-spa-decoration-yoga_151157-1033_edited_edite.jpg"
                    alt="Card image cap"
                  />
                  <div class={`${classes.serviceb} card-body`}>
                    <button
                      type="button"
                      class={`btn btn-outline-dark ${classes.servicebtn}`}
                    >
                      Salons
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row  d-flex justify-content-between py-5 my-5">
            <div class="col-lg-5 m-auto py-lg-0 py-5">
              <div class={`${classes.servicecard} card`}>
                <div class={`${classes.servicec} card-block`}>
                  <img
                    class="card-img-top cardb"
                    src="https://static.wixstatic.com/media/11c705_2daa24ccb82842eba93a8b3228f78247~mv2.jpg/v1/crop/x_0,y_23,w_250,h_158/fill/w_219,h_221,al_c,lg_1,q_80,enc_auto/beauty-luxury-woman-face-hair-spa-logo-design-spa-decoration-yoga_151157-1033_edited_edite.jpg"
                    alt="Card image cap"
                  />
                  <div class={`${classes.serviceb} card-body`}>
                    <button
                      type="button"
                      class={`btn btn-outline-dark ${classes.servicebtn}`}
                    >
                      Salons
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-5 m-auto py-lg-0 py-5">
              <div class={`${classes.servicecard} card`}>
                <div class={`${classes.servicec} card-block`}>
                  <img
                    class="card-img-top cardb"
                    src="https://static.wixstatic.com/media/11c705_2daa24ccb82842eba93a8b3228f78247~mv2.jpg/v1/crop/x_0,y_23,w_250,h_158/fill/w_219,h_221,al_c,lg_1,q_80,enc_auto/beauty-luxury-woman-face-hair-spa-logo-design-spa-decoration-yoga_151157-1033_edited_edite.jpg"
                    alt="Card image cap"
                  />
                  <div class={`${classes.serviceb} card-body`}>
                    <button
                      type="button"
                      class={`btn btn-outline-dark ${classes.servicebtn}`}
                    >
                      Salons
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
