import React from "react";
import RoomTable from "./RoomTable/RoomTable";

const HotelRooms = (props) => {
    return (
        <div>
            <h3>Availability</h3>
            <RoomTable roomList = {props.roomList}></RoomTable>
        </div>
        
    )
}
    

export default HotelRooms;