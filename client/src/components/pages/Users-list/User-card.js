import './User-card.css'
import { Col, Card } from 'react-bootstrap'

import { Link } from 'react-router-dom'

const UserCard = ({ name, image, _id }) => {

    return (
        <Col lg={4}>
            <Card className="user-card">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Link className="btn btn-dark btn-block btn-sm" to={`/usuarios/${_id}`}>Ver detalles</Link>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default UserCard