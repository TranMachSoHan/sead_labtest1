import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";

const MyNavbar= (props) => {
    const navigate = useNavigate();

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                    alt=""
                    src="https://png.pngtree.com/element_pic/00/16/07/115783931601b5c.jpg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    />{' '}
                    SEAD
                </Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    
                    <Navbar.Text>
                        Welcome {props.role}
                        <br></br>
                        <button type="button" className="btn btn-danger" onClick={() => navigate("/")}>Logout</button>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MyNavbar;