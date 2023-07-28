import { useState } from "react";
import { dropDownIcon , personalItem, educationIcon, workIcon,  emailIcon, phoneIcon, addressIcon} from "./assets/Icons";

export default function Layout () {
    const [personal, setPersonal] = useState({detail: "person-details", display:"hide"});

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleEmail  = (e) => {
        setEmail(e.target.value)
    }
    const handlePhone = (e) => {
        setPhone(e.target.value);
    }
    const handleAddress  = (e) => {
        setAddress(e.target.value)
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
            <div className="empty"> </div>
            <div className="input-information">
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
                    <input type="text" placeholder="Enter email" onChange={handleEmail}/>
                </div>
                <div className="phone">
                    <div className="personal-title">
                        Phone number:
                    </div>
                    <input type="text" placeholder="Enter phone number" onChange={handlePhone} />
                </div>
                <div className="address" onChange={handleAddress}>
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

            </div>
            <div className="display-information">
                <div className="display-top">
                        {name !== "" ? (
                        <div className="display-name">{name}</div>
                        ) : (
                        <div className="display-name">Your Name</div>
                        )}
                    <div className="display-personal">
                        {email !== "" && 
                        <div className="display-email">
                            <div className="email-icon">
                            {emailIcon} 
                            </div>
                            <div className="email-text">{email}</div>
                        </div>}
                        {phone !== "" && <div className="display-phone"> 
                            <div className="phone-icon">    
                            {phoneIcon}
                            </div> 
                            <div className="phone-text">{phone}</div>                   
                            </div>
                        }
                        {address !== "" && <div className="display-address"> 
                            <div className="address-icon">    
                            {addressIcon}
                            </div> 
                            <div className="address-text">{address}</div>                   
                            </div>
                        }
                    </div>
                </div>
                <div className="display-bottom"> </div>
            </div>
            <div className="empty"> </div>
        </>
    )
}