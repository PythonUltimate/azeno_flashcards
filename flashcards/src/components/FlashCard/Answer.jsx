import {Button, Card} from "react-bootstrap";

function Answer({answer}) {
    return (
        <Card className="text-center">
            <Card.Header>Question</Card.Header>
            <Card.Body>
                <Card.Title>{answer}</Card.Title>
                <Button className='m-1' variant="success">I know it!</Button>
                <Button className='m-1' variant="warning">Not sure</Button>
                <Button className='m-1' variant="danger">I don`t know</Button>
            </Card.Body>
        </Card>
    );
}

export default Answer;