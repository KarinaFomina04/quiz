import React from 'react';
import style from './Result.module.scss';

const Result: React.FC<any> = ({ correct, questions }) => {
  return (
    <div className={style.result}>
      <img src="/img/winner.gif" />
      <h2>You got {correct} out of {questions.length}</h2>
      <a href="/">
        <button>Try again</button>
      </a>
    </div>
  );
}

export default Result;