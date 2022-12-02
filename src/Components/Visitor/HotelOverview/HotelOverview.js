import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HotelUtility from "../HotelUtility/HotelUtility";
import HotelDetailHeader from "./HotelDetailHeader/HotelDetailHeader";
import './HotelOverview.css'
import HotelOwner from "./HotelOwner/HotelOwner";

const HotelOverview = (props)=> {
    return(
        <Container>
            <Row >
                <Col className="hotelOverview">
                    <HotelDetailHeader detail={props.overview}></HotelDetailHeader>
                    <HotelOwner hotelOwner={props.overview.hotelOwner}></HotelOwner>
                    <HotelUtility utilities={props.overview.utilities}></HotelUtility>
                </Col>
            </Row>
        </Container>
    )
}

export default HotelOverview;
