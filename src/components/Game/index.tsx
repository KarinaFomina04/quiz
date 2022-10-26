import React from "react";
import style from './Game.module.scss';




const Game: React.FC<any> = ({ question, onClickVariant, step, questions}) => {
  const persentage = Math.round((step / questions.length) * 100);
  console.log(persentage);
  return (
    <>
      <div className={style.progress}>
        <div style={{ width: `${persentage}%` }} className={`${style.progress__inner}`}></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {
          question.variants.map((text: string, index: number) => <li
            onClick={() => onClickVariant(index)}
            key={text}>{text}</li>)
        }
      </ul>
    </>
  );
}

export default Game;