import React from "react";

const Builder_Class = () => {
    return (
        <div className="Builder_Class">
            <h2>Select a class</h2>
            <select onChange={(e)=>{
                console.log(e.target.value)
                fetch("http://localhost:5000/save-character", {
                    method: "post",
                    headers: {
                        'Accept': "application/json",
                        'Content-Type': "application/json"
                    },
                    body: JSON.stringify({
                        "class": "e.target.value"
                    })
                }).then((res)=>{
                    console.log(res);
                });
            }}>
                <option value="barbarian">Barbarian</option>
                <option value="bard">Bard</option>
                <option value="cleric">Cleric</option>
                <option value="druid">Druid</option>
                <option value="fighter">Fighter</option>
                <option value="monk">Monk</option>
                <option value="paladin">Paladin</option>
                <option value="ranger">Ranger</option>
                <option value="rogue">Rogue</option>
                <option value="sorcerer">Sorcerer</option>
                <option value="warlock">Warlock</option>
                <option value="wizard">Wizard</option>
                <option value="artificer">Artificer</option>
            </select>
            <br/><br/><br/><br/>

            <NavLink to="class" activeStyle>
                <button class="center-horizontally pointer" name="nextBtn" id="nextBtn">Next</button>
            </NavLink>
        </div>
    );
};

export default Builder_Class;