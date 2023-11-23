import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import WellDone from '../img/welldone.svg';

import './GameOver.css';

const GameOver = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    console.log(quizState)

    return (
        <div id='gameover'>
            <h2>Game Over</h2>
            <p>Pontuacäo: {quizState.score}</p>
            <p>Vocë acertou {quizState.score} de {quizState.questions.length} perguntas</p>
            <img src={WellDone} alt="" />
            <button onClick={ ()=> dispatch({type: 'NEW_GAME' })}>Reiniciar</button>

        </div>
    )
}
export default GameOver