import {useState} from "react";
import Question from "./Question";
import Answer from "./Answer";

function FlashCard({card}) {
    const [isQuestion, setIsQuestion] = useState(true);
    return (
        <div>
            {isQuestion ? (
                <Question question={card.question} onClick={() => setIsQuestion(false)}/>
            ) : (
                <Answer answer={card.answer}/>
            )}
        </div>
    );
}

export default FlashCard;