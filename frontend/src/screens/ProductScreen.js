import React, { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';
import {Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap';
import Rating from '../components/Rating';
// import products from '../products';

const ProductScreen = () => {

    const [product, setProduct] = useState({});
    const params = useParams();
    console.log(params.id);
    // let product = products.find(p => p._id === params.id);
    
    useEffect(()=>{
      const fetchProduct = async () => {
        const { data } = await axios.get(`/api/products/${params.id}`);
        setProduct(data);
      };
      fetchProduct();
    }, [params.id]);

    return (
        <>

            <Link className="btn btn-dark my-3" to="/">
                Go Back
            </Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid/>
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h2>{product.name}</h2>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price: ${product.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Desc: ${product.description}
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
                                        <strong>${product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Status:
                                    </Col>
                                    <Col>
                                        {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button className="btn-block" style={{width: '100%'}} type="button" disabled={product.countInStock === 0}>
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
