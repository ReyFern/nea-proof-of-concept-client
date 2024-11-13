import React from "react";
import { Nav, NavLink, NavMenu } from "../components/NavbarElements";

const Home = () => {
    return (
        <div className="Home">
            <h1>Welcome to DNDOnline Character Creator!</h1>
            <form>
                <br/><br/>
                <NavLink to="/new-player" activeStyle>
                    <button class="center-horizontally pointer" name="playerType" id="newPlayer" value="NEW_PLAYER">New Player</button>
                </NavLink>
                <br/><br/>
                <NavLink to="/fam-player" activeStyle>
                    <button class="center-horizontally pointer" name="playerType" id="famPlayer" value="FAM_PLAYER">Familiar Player</button>
                </NavLink>
                <br/><br/>
            </form>
        </div>
    );
};

export default Home;