import React from "react";
import { useNavigate } from "react-router-dom";
import './Home.css'

const Home = () =>{
    const navigate = useNavigate();

    return (
        <div className="parent" >
            <div className="child">
                <div>
                    <button onClick={() => navigate(`/visitor`)} type="button" className="btn btn-info">VISITOR</button>
                </div>
                <div>
                    <button onClick={() => navigate(`/admin/homepage`)} type="button" className="btn btn-dark">ADMIN</button>
                </div>
            </div>
        </div>
    )
}

export default Home;