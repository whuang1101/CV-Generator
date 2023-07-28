import { useState } from "react";
import { dropDownIcon , personalItem, educationIcon, workIcon} from "./assets/Icons";
import { PersonalDetails, Header } from "./details";

function Input (){
    const [personal, setPersonal] = useState({detail: "person-details", display:"hide"});

    const [name, setName] = useState("");
    const handleName = (e) => {
        window.name = e.target.value;
        setName(e.target.value);
        console.log(name)
    }

    const handlePersonalClick = () => {
        if(personal.display === "hide"){
            const newPersonal = { ...personal, detail: "person-details-drop", display: "show"}
            setPersonal(newPersonal)
        }
        else {
            const newPersonal = { ...personal, detail: "person-details", display:"hide"}
            setPersonal(newPersonal)
        }
    }

    return (
        <>
        <div className="tools">
            
        </div>
        <div className={personal.detail}>
            <div className="title">
                <div className="icon">
                    {personalItem}
                </div>
                <div className="titleName">Personal Details</div>
            </div>
            <div className="dropdown" onClick={handlePersonalClick}>
                {dropDownIcon}
            </div>
        </div>
        <div className={[personal.display, "personal-details"].join(" ")}>
            <div className="name">
                <div className="personal-title">
                    Full Name:
                </div>
                <input type="text" placeholder="First Name Last Name" onChange={handleName}  />
            </div>
            <div className="email">
                <div className="personal-title">
                    Email
                </div>
                <input type="text" placeholder="Enter email"/>
            </div>
            <div className="phone">
                <div className="personal-title">
                    Phone number:
                </div>
                <input type="text" placeholder="Enter phone number" />
            </div>
            <div className="address">
                <div className="personal-title">
                    Address
                </div>
                <input type="text" placeholder="City, Country" />
            </div>
        </div>
        <div className="education">
            <div className="title">
                <div className="icon">
                        {educationIcon}
                    </div>
                <div className="titleName">Education</div>
            </div>
            {dropDownIcon}
        </div>
        <div className="experience">
            <div className="title">
                <div className="icon">
                    {workIcon}
                </div>
                <div className="titleName">Work Experience</div>
            </div>
            {dropDownIcon}
        </div>
        </>
    )
}
function Display() {
    return(
        <>
        <div className="display-top">
        <div className="display-name">
            {window.name}
        </div>
        <div className="display-personal">
            <div className="display-email">

            </div>
            <div className="display-phone">
 
            </div>
            <div className="display-address">
 
            </div>
        </div>
        </div>
        <div className="display-bottom"> </div>
        </>
    )
}
export {Input, Display}