import React from "react";
import classes from "./Home.module.css";
import { useNavigate } from "react-router-dom";
const Home = () => {
  let navigate = useNavigate();
  let Client = () => {
    navigate("/");
  };
  return (
    <div className={classes.main} style={{ backgroundColor: "blue" }}>
      <div class="container">
        <div class="row" id="Services">
          <div class="col-md-12 text-center  py-4">
            <h2 class="heading  fadeLeft " data-t-show="0">
              Services
            </h2>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              doloribus sed possimus repellendus molestias voluptas mollitia hic
              accusantium, quasi obcaecati iusto ducimus ratione blanditiis
              deleniti soluta totam ipsa minima dolor.
            </div>
          </div>
          <div class="col-md-4  text-center flipY ">
            <div class="card shadow p-3 mb-5 bg-white rounded" data-t-show="1">
              <div class="card-body">
                <div class="card-img-top">
                  <img
                    className="w-100"
                    src="https://static.wixstatic.com/media/11c705_520eb9c867924167a04ffa8d4987935a~mv2.jpg/v1/crop/x_102,y_0,w_796,h_993/fill/w_467,h_584,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/home-cleaning-gardening-decorating-services-logo-vector-28974187_edited.jpg"
                    alt=""
                  />
                </div>
                <button
                  type="submit"
                  class={`btn btn-primary ${classes[`login-btn`]}`}
                >
                  View
                </button>
                <h2 class={`card-title ${classes.head1}`}>The Palmist</h2>
                <p class="card-text">
                  Your beauty answers are just a few questions away!
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4  text-center flipY" data-t-show="2">
            <div class="card shadow p-3 mb-5 bg-white rounded">
              <div class="card-body">
                <div class="card-img-top">
                  <img
                    className="w-100"
                    src="https://static.wixstatic.com/media/11c705_520eb9c867924167a04ffa8d4987935a~mv2.jpg/v1/crop/x_102,y_0,w_796,h_993/fill/w_467,h_584,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/home-cleaning-gardening-decorating-services-logo-vector-28974187_edited.jpg"
                    alt=""
                  />
                </div>
                <h5 class="card-title">Website development</h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Necessitatibus, incidunt a unde praesentium veritatis
                  exercitationem vero impedit molestiae quasi pariatur
                  asperiores. Tenetur autem officia libero cumque vel, vero ab
                  explicabo.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4  text-center flipY" data-t-show="3">
            <div class="card shadow p-3 mb-5 bg-white rounded">
              <div class="card-body">
                <div class="card-img-top">
                  <img
                    className="w-100"
                    src="https://static.wixstatic.com/media/11c705_520eb9c867924167a04ffa8d4987935a~mv2.jpg/v1/crop/x_102,y_0,w_796,h_993/fill/w_467,h_584,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/home-cleaning-gardening-decorating-services-logo-vector-28974187_edited.jpg"
                    alt=""
                  />
                </div>
                <h5 class="card-title">graphic Designning</h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Necessitatibus, incidunt a unde praesentium veritatis
                  exercitationem vero impedit molestiae quasi pariatur
                  asperiores. Tenetur autem officia libero cumque vel, vero ab
                  explicabo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
