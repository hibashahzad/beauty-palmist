import React from "react";
import classes from "./Services.module.css";
import { useNavigate } from "react-router-dom";
import Category from "./../../Services/services/CategoryServices";
import { error } from "./../../utilties/Messagehandler";
const Services = () => {
  let navigate = useNavigate();
  let [cat, setCat] = React.useState([]);
  let Client = (navi) => {
    navigate(navi);
  };
  React.useEffect(() => {
    getcate();
  }, []);
  const getcate = async () => {
    try {
      let result = await Category.getCategory();
      setCat(result.category);
    } catch (e) {
      error(e.error);
    }
  };

  return (
    <div class={`py-5 ${classes.main}`}>
      {cat.length > 0 && (
        <>
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
                  <div class={`${classes.servicecard} card m-auto`}>
                    <div class={`${classes.servicec} card-block`}>
                      <img
                        class="card-img-top cardb"
                        src="https://static.wixstatic.com/media/11c705_70a81883a825483abe3571260cdd51b6~mv2.jpg/v1/crop/x_0,y_14,w_500,h_471/fill/w_375,h_378,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/attachment_66970956.jpg"
                        alt="Card image cap"
                      />

                      <div class={`${classes.serviceb} card-body`}>
                        <button
                          onClick={() => Client("/Category/" + cat[0]._id)}
                          type="button"
                          class={`btn btn-outline-dark ${classes.servicebtn}`}
                        >
                          {cat[0].name}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-5 m-auto py-lg-0 py-5">
                  <div class={`${classes.servicecard} card m-auto`}>
                    <div class={`${classes.servicec} card-block`}>
                      <img
                        class="card-img-top cardb"
                        src="
                    https://static.wixstatic.com/media/11c705_2daa24ccb82842eba93a8b3228f78247~mv2.jpg/v1/crop/x_0,y_23,w_250,h_158/fill/w_219,h_221,al_c,lg_1,q_80,enc_auto/beauty-luxury-woman-face-hair-spa-logo-design-spa-decoration-yoga_151157-1033_edited_edite.jpg"
                        alt="Card image cap"
                      />

                      <div class={`${classes.serviceb} card-body`}>
                        <button
                          onClick={() => Client("/Category/" + cat[1]._id)}
                          type="button"
                          class={`btn btn-outline-dark ${classes.servicebtn}`}
                        >
                          {cat[1].name}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row  d-flex justify-content-between py-5 my-5">
                <div class="col-lg-5 m-auto py-lg-0 py-5">
                  <div class={`${classes.servicecard} card m-auto`}>
                    <div class={`${classes.servicec} card-block`}>
                      <img
                        class="card-img-top cardb"
                        src="https://static.wixstatic.com/media/11c705_0aa9d7ac0170465c848cca578c83dd3e~mv2.jpg/v1/crop/x_0,y_7,w_163,h_123/fill/w_171,h_172,al_c,lg_1,q_80,enc_auto/il_340x270_edited_edited.jpg"
                        alt="Card image cap"
                      />
                      <div class={`${classes.serviceb} card-body`}>
                        <button
                          onClick={() => Client("/Category/" + cat[2]._id)}
                          type="button"
                          class={`btn btn-outline-dark ${classes.servicebtn}`}
                        >
                          {cat[2].name}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-5 m-auto py-lg-0 py-5">
                  <div class={`${classes.servicecard} card m-auto`}>
                    <div class={`${classes.servicec} card-block`}>
                      <img
                        class="card-img-top cardb"
                        src="https://static.wixstatic.com/media/11c705_1548f1aefba247fc992468a89f4262fc~mv2.jpg/v1/crop/x_102,y_0,w_795,h_955/fill/w_375,h_378,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/healthy-life-woman-logo-template-vector-27254670_edited.jpg"
                        alt="Card image cap"
                      />

                      <div class={`${classes.serviceb} card-body`}>
                        <button
                          onClick={() => Client("/Category/" + cat[3]._id)}
                          type="button"
                          class={`btn btn-outline-dark ${classes.servicebtn}`}
                        >
                          {cat[3].name}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Services;
