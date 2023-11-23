import { useContext, useEffect } from "react";

import { QuizContext } from "./context/quiz";

import Welcome from "./components/Welcome";
import Question from "./components/Question";

import "./App.css";

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  console.log(quizState);

  useEffect(() => {
    dispatch({ type: "REORDER_QUESTIONS" });
  }, []);

  return (
    <div className="App">
      <h1>Quiz App</h1>
      {quizState.gameStage === "Start" && <Welcome></Welcome>}
      {quizState.gameStage === "Playing" && <Question></Question>}
    </div>
  );
}

export default App;
