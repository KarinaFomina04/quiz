import React from 'react';
import Game from '../Game';
import Result from '../Result';
import style from './App.module.scss'

const questions = [
  {
    title: 'React is... ?',
    variants: ['Library', 'Framework', 'App'],
    correct: 0,
  },
  {
    title: 'Component is... ',
    variants: ['App', 'Part of app or page', 'I don`t know, what is it'],
    correct: 1,
  },
  {
    title: 'What is JSX?',
    variants: [
      'It`s simple HTML',
      'It`s function',
      'It`s HTML,  but with opportunity to perform JS-code',
    ],
    correct: 2,
  },
];



const App: React.FC = () => {
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const question = questions[step];

  const onClickVariant = (index: any) => {
    console.log(step, index);
    setStep(step + 1);

    if (index == question.correct) {
      setCorrect(correct + 1);
    }
  };
  return (
    <div className={style.App}>
      {
        step !== questions.length ?
          <Game step={step} question={question}
          questions={questions} 
          onClickVariant={onClickVariant} />
          : <Result correct={correct} questions={questions}/>

      }
    </div>
  );
}

export default App;