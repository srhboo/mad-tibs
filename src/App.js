import React, { Component, useState, useReducer } from "react";
import "./App.css";
import styled from "styled-components";
import { SimpleGeneratedPage } from "./components/simple-generated-page";
import { ColourOptions } from "./components/colour-options";
import { ShapeOptions } from "./components/shape-options";
import { TextInput } from "./components/text-input";
import { SmileyFaceButton } from "./components/button";

const FlexBlock = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
const TextInputWrapper = styled.div`
  flex-shrink: 1;
  position: relative;
  padding-left: 2rem;
`;
const questions = [
  { id: "headline", questionText: "enter a noun", type: "text" },
  {
    id: "backgroundColor",
    questionText: "pick a colour",
    type: "colourOptions",
    options: [
      "yellow",
      "orange",
      "lime",
      "aqua",
      "teal",
      "fuchsia",
      "pink",
      "palevioletred",
      "lightsalmon",
      "lightcoral",
      "peachpuff",
      "skyblue",
      "palegreen",
      "mediumaquamarine",
      "turquoise",
      "lightsteelblue",
      "thistle"
    ]
  },
  {
    id: "shape",
    questionText: "pick a shape",
    type: "shapeOptions",
    options: ["square", "circle"]
  },
  {
    id: "topic",
    questionText: "enter a topic",
    type: "text"
  }
];
const questionsObj = questions.reduce(
  (acc, question) => ({ ...acc, [question.id]: question }),
  {}
);
const initialState = questions.reduce(
  (acc, { id }) => ({ ...acc, [id]: "" }),
  {}
);

const Question = ({ saveAnswer, id }) => {
  const [value, setValue] = useState("");
  return (
    <>
      <form
        onSubmit={e => {
          e.preventDefault();
          saveAnswer({ id, answer: value });
          setValue("");
        }}
      >
        <h1>{questionsObj[id] && questionsObj[id].questionText}</h1>
        {questionsObj[id].type === "colourOptions" ? (
          <ColourOptions
            options={questionsObj[id].options}
            onClickHandler={option => setValue(option)}
          />
        ) : questionsObj[id].type === "shapeOptions" ? (
          <ShapeOptions
            options={questionsObj[id].options}
            onClickHandler={option => setValue(option)}
          />
        ) : (
          <FlexBlock>
            <TextInputWrapper>
              <TextInput
                type="text"
                name={id}
                value={value}
                onChange={e => setValue(e.target.value)}
              />
            </TextInputWrapper>
            <SmileyFaceButton type="submit">{`>>`}</SmileyFaceButton>
          </FlexBlock>
        )}
      </form>
    </>
  );
};

const questionReducer = (state, { type, payload }) => {
  switch (type) {
    case "saveAnswer":
      return { ...state, [payload.id]: payload.answer };
    default:
      return state;
  }
};

const FakeWitch = () => {
  const [currentStep, setStep] = useState(0);
  const allQuestionsAnswered = currentStep === questions.length;
  const [questionState, questionDispatch] = useReducer(
    questionReducer,
    initialState
  );
  return allQuestionsAnswered ? (
    <SimpleGeneratedPage {...questionState} />
  ) : (
    <Question
      id={questions[currentStep] && questions[currentStep].id}
      saveAnswer={({ id, answer }) => {
        questionDispatch({ type: "saveAnswer", payload: { id, answer } });
        setStep(currentStep + 1);
      }}
    />
  );
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <FakeWitch />
      </div>
    );
  }
}

export default App;
