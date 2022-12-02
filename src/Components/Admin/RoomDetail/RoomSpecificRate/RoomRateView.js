import React from "react";
import {Table} from "react-bootstrap";

const RoomRateView = (props) => {
    return (
        <div>
            <Table striped bordered hover> 
                <thead>
                    <tr>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Rating</th>
                        <th></th>
                    </tr>
                </thead>
                
                <tbody>
                    {props.rangeRates.map(
                        (range,index) => (
                            <tr key={index}>
                                <td>{new Date(range.startDate).toLocaleDateString()}</td>
                                <td>{new Date(range.endDate).toLocaleDateString()}</td>
                                <td>VND {range.rating}</td>
                                <td>
                                    <button onClick={ () => props.onEditRate({range,index})}>Edit</button>
                                    <button onClick={ () => props.onDeleteRate({range,index})}>Delete</button>
                                </td>
                            </tr>
                        )) 
                    }
                </tbody>
            </Table>   
        </div>
    )
}

export default RoomRateView;