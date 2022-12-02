import React from "react";
import { Field, Formik,Form} from "formik"; 
import "react-datepicker/dist/react-datepicker.css";
import MyDatePicker from "../../../Util/MyDatePicker";
import {Card} from "react-bootstrap";

const RoomFormRate = (props) => {
    const isCreated = props.formData.typeForm === "Create";

    return (
        
        <Card>
            <Card.Header>{isCreated ? "Add Rate" : "Edit Rate"}</Card.Header>
            <Card.Body>
                <Formik
                    initialValues={{
                        startDate: isCreated ? new Date(): props.formData.startDate,
                        endDate : isCreated ? new Date():  props.formData.endDate,
                        rating: isCreated ? '': props.formData.rating
                    }}
                    enableReinitialize
                    onSubmit={value=>{
                        props.onFormSubmit(
                            {
                                "index": props.formData.index,
                                "startDate" : value.startDate,
                                "endDate": value.endDate,
                                "rating": value.rating,
                                "typeForm": props.formData.typeForm
                            }
                        )
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
                            <div className="inputItem">
                                <label htmlFor="rating">Specific Rating</label>
                                <Field name="rating" className="form-control" />
                            </div>
                            <button type="submit" className="btn btn-primary">Save changes</button>
                            <button type="submit" className="btn btn-secondary" onClick={()=>props.onFormCancel()}>Cancel</button>
                        </Form>
                        )}
                </Formik>
            </Card.Body>
            
        </Card>
    )
}

export default RoomFormRate;