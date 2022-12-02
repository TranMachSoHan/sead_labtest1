import React from "react";
import RoomTable from "./RoomTable/RoomTable";

const HotelRooms = (props) => {
    return (
        <RoomTable roomList = {props.roomList}>

        </RoomTable>
    )
}
    

export default HotelRooms;