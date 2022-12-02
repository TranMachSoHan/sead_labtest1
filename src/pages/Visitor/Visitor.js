import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container,Row } from "react-bootstrap";
import HotelImages from "../../Components/Visitor/HotelImages/HotelImages";

const Visitor = () => {
    const [hotel, setHotel] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
          try {
            axios.get('https://api.npoint.io/57c91b6f051e9f983cd7').then(
                response => {
                    setHotel(response.data);
                    setLoading(false);
                }
            );
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
      }, []);

    return (
      <Container>
        {loading && <div>Loading</div>}
        {/* {!loading && (
          <Row>
              <HotelImages hotelPhotos={hotel.photos}></HotelImages>
          </Row>
        )} */}
      </Container>
    )
}

export default Visitor;