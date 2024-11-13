import React from "react";
import { Nav, NavLink, NavMenu } from "react-router-dom";

const Builder_Level = () => {
    return (
        <div className="Builder_Level">
            <h2>Select a level</h2>
            <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
            </select>
            <br/><br/><br/><br/>

            <NavLink to="class" activeStyle>
                <button class="center-horizontally pointer" name="nextBtn" id="nextBtn">Next</button>
            </NavLink>
        </div>
    );
};

export default Builder_Level;