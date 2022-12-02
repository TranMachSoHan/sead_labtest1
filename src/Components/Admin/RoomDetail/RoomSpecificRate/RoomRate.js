import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import {Container, Row, Col} from "react-bootstrap";
import RoomRateView from "./RoomRateView";
import RoomFormRate from "./RoomFormRate";


const RoomRate = (props) => {
    const [loading, setLoading] = useState(true);
    const [room,setRoom] = useState({});
    const [roomRates, setRoomRates] = useState([]);
    const roomID = props.roomID;
    const [roomRateFormData, setRoomRateFormData] = useState({});
    const [roomRateAction, setRoomRateAction] = useState(false);

    useEffect(() => {
        const fetchData = async () => {

        try {
            axios.get(`https://api.npoint.io/57c91b6f051e9f983cd7/roomType/${roomID}`).then(
                response => {
                    setRoom(response.data);
                    setLoading(false);
                    getLocalStorage(response.data);
                }
            )
        } catch (error) {
            console.error(error)
        }
        };
    
        fetchData();

    }, []);
      
    const getLocalStorage = (value) => {
        if(localStorage.getItem(value.uuid) !== null){
            setRoomRates(JSON.parse(localStorage.getItem(value.uuid)));
        }
    }

    const createRate = () => {
      setRoomRateFormData({ 
        "typeForm":"Create"
      });
      setRoomRateAction(true);
    }

    const handleRate = (value) =>{
      setRoomRateFormData({ 
        "startDate": new Date(value.range.startDate),
        "endDate": new Date(value.range.endDate),
        "rating": value.range.rating,
        "index": value.index,
        "typeForm":"Edit"
      });
      setRoomRateAction(true);
    }

    const deleteRate = (value)=>{
        roomRates.splice(value.index, 1);
        const jsonObj = JSON.stringify(roomRates);
        localStorage.setItem(room.uuid, jsonObj);
        cancelForm();
    }

    const submitForm =(formData)=>{
        const dataStore = {
            "startDate": formData.startDate,
            "endDate": formData.endDate,
            "rating": formData.rating
        }
        if(formData.typeForm === "Create"){
            roomRates.push(dataStore)
            const jsonObj = JSON.stringify(roomRates);
            localStorage.setItem(room.uuid, jsonObj);
            setRoomRates(roomRates)
        }
        else{
            // edit 
            roomRates[formData.index] = dataStore
            const jsonObj = JSON.stringify(roomRates);
            localStorage.setItem(room.uuid, jsonObj);
            setRoomRates(roomRates)
        }
        cancelForm();
    }

    const cancelForm = () =>{
      setRoomRateFormData({});
      setRoomRateAction(false);
    }

    return (
        <div>
            {loading && <div>Loading</div>}
            {!loading && 
                <Card>
                <Card.Header>
                  Room Rating
                </Card.Header>
                <Card.Body>
                  <Container>
                    <button type="button" className="btn btn-danger" onClick={createRate}>Add Specific Rate</button>
                    <Row>
                        {roomRates.length > 0 && (
                          <Col>
                            <RoomRateView onEditRate={handleRate} onDeleteRate={deleteRate} rangeRates={roomRates}></RoomRateView>
                        </Col>
                        )}
                        
                        {roomRateAction && (<Col>
                          <RoomFormRate onFormSubmit={submitForm} formData = {roomRateFormData} onFormCancel={cancelForm}></RoomFormRate>
                        </Col>)}
                    </Row>
                  </Container>
                </Card.Body>
              </Card>
            }
        </div>
    )
}

export default RoomRate;