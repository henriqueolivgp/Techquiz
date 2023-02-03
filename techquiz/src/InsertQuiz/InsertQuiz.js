import { Fragment } from "react";
import "./InsertQuiz.css";

const InsertQuiz = () => {
  return (
    <Fragment>
      <input placeholder="Tittle" className="input-insertquiz "></input>
      <input placeholder="Descricao" className="input-insertquiz "></input>
      <button className="button-insertquiz">Submit</button>
    </Fragment>
  );
};

export default InsertQuiz;
