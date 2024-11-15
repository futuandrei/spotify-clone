// import React from "react";
// - > Following lines to be moved to App.jsx?
import { Route, Routes } from "react-router-dom";
import DisplayHome from "./DisplayHome.jsx";

const Display = () => {
    return (
        // <div>
        //     <p>Test</p>
        // </div>
        <div className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'>
            <Routes>
                <Route path='/' element={<DisplayHome/>}/> 
            </Routes>
        </div>
    )
}

export default Display;