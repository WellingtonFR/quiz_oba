'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import style from './page.module.css';

interface Question {
  question: string;
  alternatives: string[];
  answer: string;
}

const questions: Question[] = [
  {
    question: 'A lua gira em torno do sol ?',
    alternatives: ['Sim', 'Não'],
    answer: '1',
  },
  {
    question: 'A terra é o maior planeta do sistema solar ?',
    alternatives: ['Sim', 'Não'],
    answer: '1',
  },
];

export default function Questions() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');

  const router = useRouter();

  const questionNumber = currentQuestion + 1;
  const question = questions[currentQuestion];

  const handleChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

  function submitForm(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    if (!selectedOption) {
      alert('É necessário selecionar uma opção');
      return;
    }

    const questionInfo = event.target as HTMLFormElement;
    const formData = new FormData(questionInfo);
    const { alternative } = Object.fromEntries(formData.entries());

    const question = questions[currentQuestion];

    const isCorrectAnswer = alternative === question.answer;

    if (isCorrectAnswer) {
      setCorrectAnswers(correctAnswers + 1);
    }

    setSelectedOption('');
    const isLastQuestion = questionNumber === questions.length;

    if (isLastQuestion) {
      alert('Desafio concluído, aguarde o resultado');
      router.push('/');
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  }

  return (
    <div className={style.card}>
      <div
        className={style.header}
      >{`Questão número ${questionNumber} de ${questions.length}`}</div>

      <form className={style.form} onSubmit={submitForm}>
        <p className={style.question}>{question.question}</p>

        {question.alternatives.map((alternative, index) => (
          <div className={style.answer} key={alternative + index}>
            <input
              type="radio"
              value={index}
              id={`alternative_${index}`}
              name="alternative"
              className="alternative-radio"
              checked={selectedOption === `${index}`}
              onChange={handleChange}
            />
            <label
              htmlFor={`alternative_${index}`}
              className="alternative-label"
            >
              {alternative}
            </label>
          </div>
        ))}

        <button type="submit" className="button">
          Confirmar
        </button>
      </form>
    </div>
  );
}
