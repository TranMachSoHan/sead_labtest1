import React from "react";
import './HotelImages.css'
import { Row, Col, Container } from 'react-bootstrap';


const HotelImages = (props) =>{
    return (
        <Container>
            <Row xs={1} lg={4}>
                {props.hotelPhotos.slice(0,8).map( (photo,index)=> (
                    <Col className="align-self-baseline" key={index}>
                        <img src={photo} alt={photo}/>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default HotelImages;