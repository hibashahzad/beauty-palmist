import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import quiz from "../../../Services/services/quiz";
import classes from "../../Login/Login.module.css";

import "./Quiz.css";
import { error } from './../../../utilties/Messagehandler';
const Quiz = () => {
  const naviagte = useNavigate();
  const move = (val) => naviagte("/List");
  let { id } = useParams();
  const [quiz, setQuiz] = React.useState([]);
  const [loading, setloading] = React.useState(false);
  React.useEffect(() => {
    getcate();

    // byCategory
  }, [id]);
  const getcate = async () => {
    try {
      setloading(true);
      let result = await quiz.getQuiz(id);

      setQuiz(result.quiz);
      setloading(false);
    } catch (e) {
      error(e.error);
    }
  };
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
          {quiz.map((value) => (
            <div className="py-2">
              <h5 class="quizheading">{value.Question}</h5>
              <div class="form-check">
                <input
                  class="form-check-input li"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label class="form-check-label la" for="flexRadioDefault1">
                {value.ANswer1}
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
                {value.Answer2}
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
                {value.ANswer3}
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
