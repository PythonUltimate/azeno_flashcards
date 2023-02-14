import {faker} from '@faker-js/faker';

import {Badge, Card, Col} from "react-bootstrap";
import {Link} from "react-router-dom";

function Deck({deck: {id, difficulty, tags, name, description, author, rating} = {}}) {
    return (
        <Col>
            <Link to={`/decks/${id}/`}>
                <Card>
                    <Card.Img variant="top" src={faker.image.technics(480, 200, true)}/>
                    <Card.Body>
                        <Card.Title>
                            {name}
                        </Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Card.Text>
                            {tags.map((tag) => (
                                <Badge key={tag} bg="primary" className="me-1">
                                    {tag}
                                </Badge>
                            ))}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </Col>
    );
}

export default Deck;