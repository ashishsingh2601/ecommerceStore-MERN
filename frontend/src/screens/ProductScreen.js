import React from 'react';
import {Link, useParams} from 'react-router-dom';
import {Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap';
import Rating from '../components/Rating';
import products from '../products';

const ProductScreen = () => {
    const params = useParams();
    console.log(params.id);
    let individualProduct = products.find(product => product._id === params.id);
    return (
        <>

            <Link className="btn btn-dark my-3" to="/">
                Go Back
            </Link>
            <Row>
                <Col md={6}>
                    <Image src={individualProduct.image} alt={individualProduct.name} fluid/>
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h2>{individualProduct.name}</h2>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={individualProduct.rating} text={`${individualProduct.numReviews} reviews`} />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price: ${individualProduct.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Desc: ${individualProduct.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Price: 
                                    </Col>
                                    <Col>
                                        <strong>${individualProduct.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Status:
                                    </Col>
                                    <Col>
                                        {individualProduct.countInStock > 0 ? "In Stock" : "Out of Stock"}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button className="btn-block" style={{width: '100%'}} type="button" disabled={individualProduct.countInStock === 0}>
                                    Add to Cart
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>

            </Row>

        </>
    )
}

export default ProductScreen
