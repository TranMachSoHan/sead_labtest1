import React, { useState } from "react";
import DateBar from "./RoomSearchBar/DateBar";
import RoomTable from "./RoomTable/RoomTable";

const HotelRooms = (props) => {
    const date = new Date();
    date.setDate(date.getDate()+1);

    const [rooms, setRooms] = useState(props.roomList);
    const [datePick, setDatePick] = useState({"startDate": new Date(), "endDate":date });

    const handleDateSearch = (date) => {
        setDatePick(date);
        console.log(datePick);
    }

    const calculateRate = (room) => {
        const startDate = Date.parse(datePick.startDate);
        const endDate = Date.parse(datePick.endDate);
        const dateDiff = Math.ceil((endDate - startDate) / (1000 * 3600 * 24));
        console.log(dateDiff);

        const roomRates = getLocalStorage(room);

        let total = 0;

        for(let rate of roomRates){
            console.log(rate);
            const startRoomRate = Date.parse(rate.startDate)
            const endRoomRate = Date.parse(rate.endDate)

            if(startDate.valueOf() <= endRoomRate.valueOf()  && startDate.valueOf() >= startRoomRate.valueOf()){
                console.log("success start date");
                let diff = Math.ceil((endRoomRate - startDate) / (1000 * 3600 * 24));
                console.log(diff);
                if(diff < dateDiff){
                    total = rate.rating * dateDiff;
                    break;
                }
                else{
                    total = rate.rating * diff;
                    const left = startRoomRate.setDate(startRoomRate.getDate() + (dateDiff-diff));
                    // continue finding next date 
                }

            }
            else if (endDate.valueOf() >= endRoomRate.valueOf() && endDate.valueOf() <= startRoomRate.valueOf()){

            }

        }

        console.log(dateDiff);
        console.log(room.rate);
        total = room.rate * dateDiff
        if (window.confirm(`Confirm book this room with ${total} VND`)) {
            // Save it!
            saveStorage(room,total)
        } else {
            // Do nothing!
            console.log('Thing was not saved to the database.');
        }
    }

    const saveStorage =(room,total) =>{
        const dataStore = {
            "startDate": datePick.startDate,
            "endDate": datePick.endDate,
            "price": total,
            "roomID": room.uuid
        }
        const visitorJourney = JSON.parse(localStorage.getItem("visitor"));
        if(visitorJourney === null){
            const jsonObj = JSON.stringify([dataStore]);
            localStorage.setItem("visitor", jsonObj);
        }
        else{
            visitorJourney.push(dataStore)
            const jsonObj = JSON.stringify(visitorJourney);
            localStorage.setItem("visitor", jsonObj);
        }
    }

    const getLocalStorage = (value) => {
        if(localStorage.getItem(value.uuid) !== null){
            return JSON.parse(localStorage.getItem(value.uuid));
        }
        return [];
    }

    return (
        <div>
            <h3>Availability</h3>
            <DateBar dateRange={datePick} onSearch={handleDateSearch}></DateBar>
            <RoomTable onOrder={calculateRate} roomList = {rooms}></RoomTable>
        </div>
        
    )
}
    

export default HotelRooms;