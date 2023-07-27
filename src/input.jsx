import { useState } from "react";
import { dropDownIcon , personalItem, educationIcon, workIcon} from "./assets/Icons";
import { PersonalDetails } from "./details";

function Input (){
    const [personal, setPersonal] = useState({detail: "person-details", display:"hide"});
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
            <PersonalDetails/>
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
        <div className="display-top"> </div>
        <div className="display-bottom"> </div>
        </>
    )
}
export {Input, Display}