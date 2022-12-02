import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const MyNavbar= (props) => {
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
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MyNavbar;