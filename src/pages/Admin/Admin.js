import React from "react";
import MyNavbar from "../../Components/Util/MyNavbar";
import {Container} from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import HotelRoomList from "./HotelRoomList";
import HotelRoomCRUD from "./HotelRoomCRUD";

const Admin = () =>{
    return(
        <Container>
            <MyNavbar role={"Admin"}></MyNavbar>
            <Routes>
                <Route path="homepage" element={<Homepage/>}></Route>
                <Route path="rooms" element={<HotelRoomList/>}></Route>
                <Route path="rooms/:roomID" element={<HotelRoomCRUD/>}></Route>
            </Routes>
        </Container>
    )
}

export default Admin;