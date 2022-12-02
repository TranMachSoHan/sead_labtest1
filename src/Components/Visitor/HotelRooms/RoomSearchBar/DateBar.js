import React from "react";
import { Field, Formik,Form} from "formik"; 
import "react-datepicker/dist/react-datepicker.css";
import MyDatePicker from "../../../Util/MyDatePicker";
import {Card} from "react-bootstrap";

const DateBar = () => {

    return (
        
        <Card>
            <Card.Body>
                <Formik
                    initialValues={{
                        startDate: new Date(),
                        endDate : new Date() + 1
                    }}
                    enableReinitialize
                    onSubmit={value=>{
                        console.log(value);
                    }}
                    >
                    {() => (
                        <Form>
                            <div className="inputItem">
                                <label htmlFor="startDate">From</label>
                                <MyDatePicker name="startDate" />
                            </div>
                            <div className="inputItem">
                                <label htmlFor="endDate">To</label>
                                <MyDatePicker name="endDate" />
                            </div>
                            <button type="submit" className="btn btn-primary">Search</button>
                        </Form>
                        )}
                </Formik>
            </Card.Body>
            
        </Card>
    )
}

export default DateBar;