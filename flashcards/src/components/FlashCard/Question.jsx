function Question({question, onClick}) {
    return (
        <div onClick={onClick}>{question}</div>
    );
}

export default Question;