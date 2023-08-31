import React from "react";
// import { NavLink } from "react-router-dom";
import web from "../src/images/homebg.png";
import Common from "./Common";

const Home = () => {
    return (
        <>
        <Common 
        name="Excel Your Business with " 
        imgsrc={web} 
        visit="/service" 
        btname="Get Started" 
        />
        </>
    );
};

export default Home;
