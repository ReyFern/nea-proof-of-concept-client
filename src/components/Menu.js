import React from 'react';
import '../index.js';

export default function Menu() {
    return (
        <div className="Menu">
            <h1>Welcome to DNDOnline Character Creator!</h1>
            <form>
                <br/><br/>
                <label for="newPlayer">New Player</label>
                <input type="radio" name="playerType" id="newPlayer" value="NEW_PLAYER"/>
                <br/><br/>
                <label for="famPlayer">Familiar Player</label>
                <input type="radio" name="playerType" id="famPlayer" value="FAM_PLAYER"/>
                <br/><br/>
                <label for="vetPlayer">Veteran Player</label>
                <input type="radio" name="playerType" id="vetPlayer" value="VET_PLAYER"/>
                <br/><br/>
                <button name="playerType" id="submitButton">Submit</button>
            </form>
        </div>
    );
}