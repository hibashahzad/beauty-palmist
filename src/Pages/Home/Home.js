import React from "react";
import classes from "./Home.module.css";
import { useNavigate } from "react-router-dom";
const Home = () => {
  let navigate = useNavigate();
  let Client = (name) => {
    navigate(name);
  };
  return (
    <div className={classes.main} style={{ backgroundColor: "blue" }}>
      <div class="container">
        <div class="row" id="Services">
          <div class="col-md-12 text-center  py-4">
            <h2 class="heading  fadeLeft fw-bold fs-2" data-t-show="0">
              Beauty Palmist
            </h2>
            <div className="text-muted">
              Best Online Booking for Beauty care
            </div>
          </div>
          <div class="col-md-4  text-center flipY  ">
            <div
              class="card shadow p-3 mb-5 bg-white rounded pb-5"
              data-t-show="1"
            >
              <div class="card-body">
                <div class="card-img-top">
                  <img
                    className="w-100"
                    src="https://static.wixstatic.com/media/11c705_d25335dd907d40e295d469d81fdcb2f3~mv2.jpg/v1/crop/x_99,y_0,w_802,h_1000/fill/w_467,h_584,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/jjjjj.jpg"
                    alt=""
                  />
                </div>
                <button
                  onClick={() => {
                    Client("/Palmist");
                  }}
                  class={`btn btn-primary ${classes[`login-btn`]}`}
                >
                  View
                </button>
                <h2 class={`card-title ${classes.head1}`}>The Palmist</h2>
                <p class="card-text text-muted py-2">
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
                <button
                  onClick={() => Client("/Services")}
                  class={`btn btn-primary ${classes[`login-btn`]}`}
                >
                  View
                </button>
                <h2 class={`card-title ${classes.head1} py-4`}>Our Services</h2>
                <p class="card-text text-muted py-2">
                  Choose from a variety of categories from Personal Care to
                  Fitness
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
                    src="https://static.wixstatic.com/media/11c705_aa437f551aea450fbeeae621e4bc818b~mv2.jpg/v1/crop/x_61,y_0,w_491,h_612/fill/w_467,h_584,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/istockphoto-1127729949-612x612.jpg"
                    alt=""
                  />
                </div>
                <button
                  type="submit"
                  class={`btn btn-primary ${classes[`login-btn`]}`}
                >
                  View
                </button>
                <h2 class={`card-title ${classes.head1} py-2`}>Trending</h2>
                <p class="card-text text-muted py-2">
                  View Latest trends and offers and don't miss on amazing
                  deals!!
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
