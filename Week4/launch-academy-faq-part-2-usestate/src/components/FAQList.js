import React, { useEffect, useState } from "react";
import Question from "./Question";
import QuestionsForm from "./QuestionsForm";

const FAQList = (props) => {
  const [questions, setQuestions] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState([]);

  const getQuestions = async () => {
    const response = await fetch("/api/v1/questions");
    let data = await response.json();
    setQuestions(data);
  };

  useEffect(() => {
    getQuestions();
  }, []);

  const addQuestion = async (formPayload) => {
    const response = await fetch("/api/v1/questions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formPayload),
    });
    const body = await response.json();
    setQuestions(questions.concat(body));
  };

  const toggleQuestionSelect = (id) => {
    if (id === selectedQuestion) {
      setSelectedQuestion(null);
    } else {
      setSelectedQuestion(id);
    }
  };

  const questionListItems = questions.map((question) => {
    let selected;
    if (selectedQuestion === question.id) {
      selected = true;
    }

    let handleClick = () => {
      toggleQuestionSelect(question.id);
    };

    return (
      <Question
        key={question.id}
        question={question.question}
        answer={question.answer}
        selected={selected}
        handleClick={handleClick}
      />
    );
  });

  return (
    <div className="page">
      <h1>We Are Here To Help</h1>
      <div className="question-list">{questionListItems}</div>
      <QuestionsForm addQuestion={addQuestion} />
    </div>
  );
};

export default FAQList;
