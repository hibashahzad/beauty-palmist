import GenericServices from "./GenericServices";
class QuizAnswer extends GenericServices {
  constructor() {
    super();
  }

  createAnswer = (id, data) => {
    return this.post("QuizAnswer", data);
  };
}
let quizAnswer = new QuizAnswer();
export default quizAnswer;
