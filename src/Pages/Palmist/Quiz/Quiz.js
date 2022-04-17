import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "../../Login/Login.module.css";

import "./Quiz.css";
const Quiz = () => {
  const naviagte = useNavigate();
  const move = (val) => naviagte("/List");

  return (
    <div class="py-5 mainquiz">
      <div class="card topquiz">
        <div class="topquiztitle">
          <h1>Palmist Quizz</h1>
        </div>
      </div>
      <div class="card quizcard">
        <div class="col mb-4">
          <h3>Aesthetics Questionnaire Facial Treatment</h3>
          {new Array(8).fill(0).map(() => (
            <div className="py-2">
              <h5 class="quizheading">What is your skin type?</h5>
              <div class="form-check">
                <input
                  class="form-check-input li"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label class="form-check-label la" for="flexRadioDefault1">
                  Dry
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label class="form-check-label la" for="flexRadioDefault1">
                  Oily
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input "
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label class="form-check-label la" for="flexRadioDefault1">
                  Combination
                </label>
              </div>
            </div>
          ))}
          <select
            class="form-select quizheading"
            aria-label="Default select example"
          >
            <option selected>Select your age group</option>
            <option value="1">12-24</option>
            <option value="2">24-40</option>
            <option value="3">40-60</option>
          </select>
        </div>

        <button
          type="submit"
          onClick={() => move()}
          class={`btn btn-primary ${classes[`login-btn`]}`}
        >
          Recommendation
        </button>
      </div>
    </div>
  );
};

export default Quiz;
