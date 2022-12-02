import React from "react";
import MyNavbar from "../../Components/Util/MyNavbar";
import {Container} from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";

const Admin = () =>{
    return(
        <Container>
            <MyNavbar role={"Admin"}></MyNavbar>
            <Routes>
                <Route path="homepage" element={<Homepage/>}></Route>
            </Routes>
        </Container>
    )
}

export default Admin;