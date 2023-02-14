import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import FlashCard from "../FlashCard/FlashCard";

function Learning() {
    const [flashcards, setFlashcards] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const {id} = useParams();

    useEffect(() => {
        const controller = new AbortController()
        getFlashcardsApi(id, controller.signal)
            .then((data) => {
                setFlashcards(data);
                setIsLoading(false);
            })
            .catch(console.error);

        return () => {
            controller.abort();
        }
    }, [])

    async function getFlashcardsApi(id, signal) {
        const response = await fetch(`/decks/${id}/flashcards/`, {signal});
        return await response.json();
    }

    return (
        <div>
            {isLoading ? (
                <h3>Loading...</h3>
            ) : (
                <FlashCard card={flashcards[0]}/>
            )}
        </div>
    );
}

export default Learning;