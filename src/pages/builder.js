import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Builder_Navbar from "../components/Builder_Navbar";
import Builder_Level from "./builder/builder-level"

const Builder = () => {
    return (
        <div className="Builder">
            <Builder_Navbar />
            <Routes>
                <Route exact path="level" element={<Builder_Level />} />
            </Routes>
        </div>
    );
};

export default Builder;