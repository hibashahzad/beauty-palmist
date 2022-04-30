import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Quizs from "../../../Services/services/quiz";
import classes from "../../Login/Login.module.css";

import "./Quiz.css";
import { error } from "./../../../utilties/Messagehandler";
import quizAnswer from "../../../Services/services/quizAnswer";
import { useAuth } from "../../../Services/provideMain";
const Quiz = () => {
  const naviagte = useNavigate();
  const { state: data } = useLocation();
  const move = (val) => naviagte("/List");
  const [ans, setAns] = React.useState([]);
  let { id } = useParams();
  const [quiz, setQuiz] = React.useState([]);
  const [loading, setloading] = React.useState(false);
  let { state, handleLogout } = useAuth();
  React.useEffect(() => {
    getcate();

    // byCategory
  }, [id]);
  const getcate = async () => {
    try {
      let result = await Quizs.getQuiz(id);

      setQuiz(result.quiz);
    } catch (e) {
      error(e.error);
    }
  };
  const submithandler = () => {
    try {
      if (state?.user?.role === "bussness") {
        quizAnswer
          .createAnswer({
            Answer: ans,
            ServiceId: state.val._id,
            Quiz: quiz._id,
            SubCategoryId: id,
          })
          .then((value) => {
            console.log(value);
          });
      } else {
        naviagte("/List", { state: { ans } });
      }
    } catch (e) {
      console.log(e);
    }
  };
  const save = (e) => {
    const { name, value } = e.target.value;
    if (ans.findIndex((val) => val.name === name) === -1) {
      setAns([...ans, { [name]: value }]);
    } else {
      setAns(
        ans.map((value) => (value.name == name ? { [name]: value } : value))
      );
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
          <h3>Questionnaire </h3>
          {quiz.length < 1 ? (
            <h1>No quiz Available</h1>
          ) : (
            quiz.map((value, index) => (
              <div className="py-2">
                <h5 class="quizheading">{value.Question}</h5>
                <div class="form-check">
                  <input
                    class="form-check-input li"
                    type="radio"
                    onChange={save}
                    name={`Ans${index}`}
                    id="flexRadioDefault1"
                  />
                  <label class="form-check-label la" for="flexRadioDefault1">
                    {value.Answer1}
                  </label>
                </div>
                <div class="form-check">
                  <input
                    onChange={save}
                    class="form-check-input"
                    type="radio"
                    name={`Ans${index}`}
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
                    onChange={save}
                    name={`Ans${index}`}
                    id="flexRadioDefault1"
                  />
                  <label class="form-check-label la" for="flexRadioDefault1">
                    {value.Answer3}
                  </label>
                </div>
              </div>
            ))
          )}
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
          type="button"
          onClick={() => submithandler()}
          class={`btn btn-primary ${classes[`login-btn`]}`}
        >
          Recommendation
        </button>
      </div>
    </div>
  );
};

export default Quiz;
