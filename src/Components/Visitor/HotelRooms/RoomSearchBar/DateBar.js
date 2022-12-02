import React, { useState } from "react";
import { Field, Formik,Form} from "formik"; 
import "react-datepicker/dist/react-datepicker.css";
import MyDatePicker from "../../../Util/MyDatePicker";
import {Card, Container, Row, Col} from "react-bootstrap";

const DateBar = (props) => {
    const date = new Date();
    date.setDate(date.getDate()+1);

    const [startDate, setStartDate] = useState(props.dateRange.startDate)
    const [endDate, setEndDate] = useState(props.dateRange.endDate)
    return (
        
        <Card>
            <Card.Body>
                <Formik
                    initialValues={{
                        startDate: new Date(),
                        endDate : date
                    }}
                    enableReinitialize
                    onSubmit={value=>{
                        setStartDate(value.startDate)
                        setEndDate(value.endDate)
                        props.onSearch(value)
                    }}
                    >
                    {() => (
                        <Form>
                            <h4>Searching</h4>
                            <Container>
                                <Row className="d-flex align-items-center">

                                    <Col>
                                        <div className="inputItem">
                                            <label htmlFor="startDate">From</label>
                                            <MyDatePicker name="startDate" />
                                        </div>
                                        <div>Start Date: </div>
                                        <p>{startDate.toLocaleDateString()}</p>
                                    </Col>
                                    <Col>
                                        <div className="inputItem">
                                            <label htmlFor="endDate">To</label>
                                            <MyDatePicker name="endDate" />
                                            <div>End Date: </div>
                                            <p>{endDate.toLocaleDateString()}</p>

                                        </div>
                                    </Col>
                                    <Col >
                                        <button type="submit" className="btn btn-primary">Search</button>
                                    </Col>
                                </Row>
                                
                            </Container>
                            
                            
                        </Form>
                        )}
                </Formik>
            </Card.Body>
            
        </Card>
    )
}

export default DateBar;