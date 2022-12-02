import React, { useState, useEffect } from "react";
import { Field, Formik,Form } from "formik";
import axios from "axios";
import { Card, Container, Row, Col } from "react-bootstrap";
import { v4 as uuid } from 'uuid';
import { useNavigate } from "react-router-dom";

const RoomOverviewForm = (props) => {
    const [room, setRoom] = useState({});
    const [loading, setLoading] = useState(true);
    const [hotel,setHotel] = useState({});

    const [roomID, setRoomID] = useState(props.roomID);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {

        try {
            axios.get(`https://api.npoint.io/57c91b6f051e9f983cd7`).then(
                response => {
                    setHotel(response.data);
                    if(roomID !== -1){
                        setRoom(response.data.roomType[roomID]);
                    }
                    setLoading(false);
                }
            )
        } catch (error) {
            console.error(error)
        }
        };
    
        fetchData();

      }, []);


    return (
        <div>
            {loading && <div>Loading</div>}
            {!loading && 
                (
                <div>
                    <Card>
                        <Card.Header>
                            Room Details
                        </Card.Header>
                        <Card.Body>
                            <Formik
                                initialValues={{
                                    roomName: room.name ? room.name : "",
                                    roomSize: room.size ? room.size : "",
                                    roomRate: room.rate ? room.rate : "",
                                    singleRoom: room.singleRoom ? room.singleRoom : 0,
                                    doubleRoom: room.doubleRoom ? room.doubleRoom : 0
                                }}
                                enableReinitialize
                                onSubmit={value=>{

                                    let data = {
                                        "uuid": room.uuid ? room.uuid : uuid(),
                                        "name" : value.roomName,
                                        "size": value.roomSize,
                                        "rate": value.roomRate,
                                        "singleRoom": value.singleRoom,
                                        "doubleRoom": value.doubleRoom
                                    }

                                    console.log(data);
                                    if(roomID === -1){
                                        hotel.roomType.push(data);
                                    }
                                    else{
                                        hotel.roomType[roomID] = data;
                                    }
                                    
                                    setLoading(true);
                                    axios.post("https://api.npoint.io/57c91b6f051e9f983cd7/", hotel).then(
                                        response => {
                                            navigate(`/admin/rooms/`)
                                        }
                                    )
                                }}
                                >
                                <Form>
                                    <Container>
                                        <Row>
                                            <Col>
                                                <div className="inputItem">
                                                    <label htmlFor="roomName">Room Name</label>
                                                    <Field name="roomName" className="form-control"/>
                                                </div>
                                                <div className="inputItem">
                                                    <label htmlFor="roomSize">Room Size</label>
                                                    <Field name="roomSize" className="form-control"/>
                                                </div>
                                                <div className="inputItem">
                                                    <label htmlFor="roomRate">Room Normal Rate</label>
                                                    <Field name="roomRate" className="form-control"/>
                                                </div>
                                            </Col>
                                            <Col>
                                                <div className="inputItem">
                                                    <label htmlFor="singleRoom">Number of Single room</label>
                                                    <Field name="singleRoom" className="form-control"/>
                                                </div>
                                                <div className="inputItem">
                                                    <label htmlFor="doubleRoom">Number of Double room</label>
                                                    <Field name="doubleRoom" className="form-control"/>
                                                </div>
                                            </Col>
                                        </Row>
                                        <div className="d-flex justify-content-end">
                                            <button type="submit" className="btn btn-primary">Save changes</button>
                                        </div>
                                    </Container>

                                    
                                </Form>
                            </Formik>
                        </Card.Body>
                    </Card>
                </div>)
            }
        </div>
    )
}

export default RoomOverviewForm;