/* eslint-disable jsx-a11y/img-redundant-alt */
import classes from "./Selection.module.css";
import { useNavigate } from "react-router-dom";
const Selection = () => {
  let navigate = useNavigate();
  let register = () => {
    navigate("/ClientR");
  };
  return (
    <div className={classes.main}>
      <div class="container">
        <h1 class="text-center text-white mb-5">Sign Up</h1>
        <div class="row  justify-content-center">
          <div class="col-md-5 text-center ">
            <div class={`card   ${classes.selectionCard} m-auto`}>
              <img
                class={`card-img-top ${classes.imageset}`}
                src="https://static.wixstatic.com/media/11062b_e8da33a60c6d4b77be47d5d2275d96ce~mv2.jpg/v1/crop/x_1189,y_0,w_2730,h_3405/fill/w_372,h_464,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Discussion%20With%20Two%20People.jpg"
                alt="Card image cap"
              />
              <div class={`${classes.white} card-body`}>
                <button
                  onClick={register}
                  type="button"
                  class={`btn ${classes.register} btn-outline-dark btn-lg`}
                >
                  Client Registration
                </button>
              </div>
            </div>
          </div>
          <div class="col-md-5 text-center">
            <div class={`card ${classes.businessCard} m-auto`}>
              <img
                class={`card-img-top ${classes.imageset}`}
                src="https://static.wixstatic.com/media/04ba0b2450a4460bad90b90bc9908adf.jpg/v1/crop/x_2681,y_0,w_3079,h_3840/fill/w_372,h_464,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Computer%20Keyboard.jpg"
                alt="Card image cap"
              />
              <div class={`${classes.white} card-body`}>
                <button
                  type="button"
                  class={`btn ${classes.register} btn-outline-dark btn-lg`}
                >
                  Business Registration
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Selection;
