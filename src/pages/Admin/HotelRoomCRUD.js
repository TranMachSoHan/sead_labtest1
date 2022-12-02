import React from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import RoomOverviewForm from "../../Components/Admin/RoomDetail/RoomOverviewForm/RoomOverviewForm";
import RoomRate from "../../Components/Admin/RoomDetail/RoomSpecificRate/RoomRate";

const HotelRoomCRUD = () =>{
    const navigate = useNavigate();
    const {roomID} = useParams();

    return(
        <div>
            <div className="d-flex justify-content-between">
                <h3>{roomID === "-1" ? "Add Room" : "Edit Room"}</h3>
                <button type="button" className="btn btn-info" onClick={() => navigate(`/admin/rooms/`)}>Return </button>
            </div>
            <RoomOverviewForm roomID={Number(roomID)}></RoomOverviewForm>
            <RoomRate roomID={Number(roomID)}></RoomRate>

        </div>
    )
}

export default HotelRoomCRUD;
