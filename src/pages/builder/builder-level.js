import React from "react";
import { useState, useEffect } from 'react';
import { Nav, NavLink, NavMenu } from "react-router-dom";

const Builder_Level = () => {
    return (
        <div className="Builder_Level">
            <h2>Select a level</h2>
            <select onChange={(e)=>{
                console.log(e.target.value)
                fetch("http://localhost:5000/save-character", {
                    method: "post",
                    headers: {
                        'Accept': "application/json",
                        'Content-Type': "application/json"
                    },
                    body: JSON.stringify({
                        "level": e.target.value
                    })
                }).then((res)=>{
                    console.log(res);
                });
            }}>
                {[...Array(20).keys()].map((k)=><option value={k+1} key={k+1}>{k+1}</option>)}
            </select>
            <br/><br/><br/><br/>

            <NavLink to="class" activeStyle>
                <button class="center-horizontally pointer" name="nextBtn" id="nextBtn">Next</button>
            </NavLink>
        </div>
    );
};

export default Builder_Level;