import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Visitor.css"
import { Container } from "react-bootstrap";
import HotelImages from "../../Components/Visitor/HotelImages/HotelImages";
import HotelOverview from "../../Components/Visitor/HotelOverview/HotelOverview";
import MyNavbar from "../../Components/Util/MyNavbar";
import HotelRooms from "../../Components/Visitor/HotelRooms/HotelRooms";
import HotelRuleView from "../../Components/Visitor/HotelRule/HotelRuleView";

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
        <MyNavbar role={"Visitor"}></MyNavbar>
        {loading && <div>Loading</div>}
        {!loading && (
          <div className="visitor">
              <HotelImages hotelPhotos={hotel.photos}></HotelImages>
              <HotelOverview overview={hotel.overview}></HotelOverview>
              <HotelRooms roomList = {hotel.roomType}></HotelRooms>
              <HotelRuleView rules={hotel.houseRules}></HotelRuleView>
          </div>
        )}
      </Container>
    )
}

export default Visitor;