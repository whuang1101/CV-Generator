import { useState } from "react";
import { dropDownIcon , personalItem, educationIcon, workIcon,  emailIcon, phoneIcon, addressIcon} from "./assets/Icons";

export default function Layout () {
    const [personal, setPersonal] = useState({detail: "person-details", display:"hide"});
    const [personalEducation, setPersonalEducation] = useState({detail:"education", display: "hide"});
    const [experience, setExperience] = useState({detail: "experience", display:"hide"});
    const [educationDetails, setEducationDetails] = useState({click:false, format:"education-click"});
    const [edit, setEdit] = useState({click:false, format:"education-click"})
    const [educationData, setEducationData] = useState([]) 
    const [dropdown, setDropDown] = useState("hello")
    const [educationDrop, setEducationDrop] = useState("hello")
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [originalEducationData, setOriginalEducationData] = useState([]);
    
    const handleEducationDetails = () => {
        if(!educationDetails.click){
            const newEducationDetails = {... educationDetails, click:true, format:"education-details"}
            setEducationDetails(newEducationDetails);
        }
        else{
            const newEducationDetails = {... educationDetails, click:false, format:"education-click"}
            setEducationDetails(newEducationDetails);
        }
    }
    const handleEditSave = () => {
        const newEducationDetails = {... educationDetails, click:false, format:"education-click"}
        const newEdit = {... edit, click:false, format:"education-details"}
        setEducationDetails(newEducationDetails);
        setEdit(newEdit);
    }
    const handleEditCancel = () => {
        const newEducationDetails = {... educationDetails, click:false, format:"education-click"}
        const newEdit = {... edit, click:false, format:"education-details"}
        setEducationDetails(newEducationDetails);
        setEdit(newEdit);
        setEducationData([originalEducationData]);
    }
    const handleEditDelete = (index) => {
        const newEducationDetails = {... educationDetails, click:false, format:"education-click"}
        const newEdit = {... edit, click:false, format:"education-details"}
        setEducationDetails(newEducationDetails);
        setEdit(newEdit);
        setEducationData((prevEducationData) => prevEducationData.splice(index, 1));
    }
    const handleEdit = () => {
        if(!edit.click){
            const newEdit = {... edit, click:true, format:"education-details"}
            const newEducationDetails = {... educationDetails, click:false, format:"education-details"}
            setEducationDetails(newEducationDetails);
            setOriginalEducationData(... educationData);
            setEdit(newEdit);
        }
        else{
            const newEdit = {... edit, click:false, format:"education-click"}
            const newEducationDetails = {... educationDetails, click:false, format:"education-click"}
            setEducationDetails(newEducationDetails);
            setOriginalEducationData(... educationData);
            setEdit(newEdit);
        }
    }
    const handleEducationData = (e, index) => {
        const {name, value} = e.target;
        const updatedEducationData = [...educationData];
        updatedEducationData[index] = 
        {...updatedEducationData[index], 
        [name]: value} 
        setEducationData(updatedEducationData)
    }
    console.log(educationData)
    console.log(originalEducationData)
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
    const cancelHandle = () => {
        handleEducationDetails();
        setEducationData((prevEducationData) => prevEducationData.slice(0, -1));
    }



    const handleEducationClick = () => {
        if (personalEducation.display === "hide") {
            const newEducation = {... personalEducation, detail: "education-drop", display: "show"};
            setPersonalEducation(newEducation)
            setEducationDrop("dropdown-rotate")
        }
        else {
            const newEducation = {... personalEducation, detail: "education", display: "hide"};
            setPersonalEducation(newEducation)
            setEducationDrop("dropdown")
        }
    }
    const handlePersonalClick = () => {
        if(personal.display === "hide"){
            const newPersonal = { ...personal, detail: "person-details-drop", display: "show"}
            setDropDown("dropdown-rotate")
            setPersonal(newPersonal)
        }
        else {
            const newPersonal = { ...personal, detail: "person-details", display:"hide"}
            setPersonal(newPersonal)
            setDropDown("dropdown")
        }
    }
    const handleExperienceClick = () => {
        if(experience.display === "hide"){
            const newExperience = {...experience, detail: "experience-drop", display:"show"};
            setExperience(newExperience);
        }
        else{
            const newExperience = {...experience, detail: "experience", display:"hide"};
            setExperience(newExperience);
        }
    }
    const addEducation = () => {
        setEducationData([...educationData, {
            school: "",
            degree: "",
            startDate: "",
            endDate: "",
            location: "",
            hide: false,
        }])
    }
    const combineClick = () => {
        handleEducationDetails();
        addEducation();
    }


    return (
        <>
            <div className="empty"> </div>
            <div className="input-information">
            <div className="tools">
            
            </div>
            <div className={personal.detail} onClick={handlePersonalClick}> 
                <div className="title">
                    <div className="icon">
                        {personalItem}
                    </div>
                    <div className="titleName">Personal Details</div>
                </div>
                <div className={dropdown}>
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
                        Email:
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
                        Address:
                    </div>
                    <input type="text" placeholder="City, Country" />
                </div>
            </div>
            <div className= {personalEducation.detail} onClick={handleEducationClick}>
                <div className="title">
                    <div className="icon">
                            {educationIcon}
                        </div>
                    <div className="titleName">Education</div> 
                </div>
                <div className={educationDrop}>
                    {dropDownIcon}
                </div>
            </div>
            <div className={[personalEducation.display, educationDetails.format].join(" ")}>
                {!educationDetails.click ? (
                <>
                    {educationData.map((education, index) => 
                    !edit.click ?
                    (<div key={index} className="education-snippet" onClick={handleEdit}>
                        <div className="school-name">{education.school}</div>
                        <button className="eye">Hide</button>
                    </div>) :
                    <div key={index} className="education-details-two">
                        <div className="school">
                        <label htmlFor="school">School:</label>
                        <input type="text" placeholder="Enter school/university" name="school" value ={educationData[index].school} 
                        onChange ={(e) => handleEducationData(e, index)}/>
                    </div>
                    <div className="degree">
                        <label htmlFor="degree">Degree:</label>
                        <input type="text" placeholder="Enter Degree/ Field Of Study" name="degree" value= {educationData[index].degree}
                        onChange={(e) => handleEducationData(e,index)}/>
                    </div>
                    <div className="dates">
                        <div className="start-date">
                            <label htmlFor="startDate">Start Date:</label>
                            <input type="text" placeholder="Start Date" name="startDate" value = {educationData[index].startDate} onChange= {(e) => handleEducationData(e,index)}/>
                        </div>
                        <div className="end-date">
                            <label htmlFor="endDate">End Date:</label>
                            <input type="text" placeholder="End Date" name="endDate" value = {educationData[index].endDate} onChange= {(e) => handleEducationData(e,index)}/>
                        </div>
                    </div>
                    <div className="location">
                        <label htmlFor="location">Location</label>
                        <input type="text" placeholder="City, Country" name="location" value = {educationData[index].location} onChange= {(e) => handleEducationData(e,index)}/>
                    </div>
                    <div className="buttons">
                            <div className="first-half">
                                <button className="delete" onClick={(index) =>handleEditDelete(index)}>Delete</button>
                            </div>
                            <div className="second-half">
                                <button className="cancel" onClick={handleEditCancel}>Cancel</button>
                                <button className="save" onClick={handleEditSave}>Save</button>
                            </div>
                        </div>
                    </div>
                    )}
                    {!edit.click &&
                    (<button className="add-education" onClick={(e) => combineClick(e)}>
                    + Education
                    </button>)}
                </>
                ) :<> 
                <div className="school">
                    <label htmlFor="school">School:</label>
                    <input type="text" placeholder="Enter school/university" name="school" value ={educationData[educationData.length-1].school} 
                    onChange ={(e) => handleEducationData(e, educationData.length-1)}/>
                </div>
                <div className="degree">
                    <label htmlFor="degree">Degree:</label>
                    <input type="text" placeholder="Enter Degree/ Field Of Study" name="degree" value ={educationData[educationData.length-1].degree}
                    onChange ={(e) => handleEducationData(e, educationData.length-1)}/>
                </div>
                <div className="dates">
                    <div className="start-date">
                        <label htmlFor="startDate">Start Date:</label>
                        <input type="text" placeholder="Start Date" name="startDate" value = {educationData[educationData.length-1].startDate} onChange= {(e) => handleEducationData(e,educationData.length-1)}/>
                    </div>
                    <div className="end-date">
                        <label htmlFor="endDate">End Date:</label>
                        <input type="text" placeholder="End Date" name="endDate" value = {educationData[educationData.length-1].endDate} onChange= {(e) => handleEducationData(e,educationData.length-1)}/>
                    </div>
                </div>
                <div className="location">
                        <label htmlFor="location">Location</label>
                        <input type="text" placeholder="City, Country" name="location" value = {educationData[educationData.length-1].location} onChange= {(e) => handleEducationData(e,educationData.length-1)}/>
                    </div>
                <div className="buttons">
                        <div className="first-half">
                            <button className="delete">Delete</button>
                        </div>
                        <div className="second-half">
                            <button className="cancel" onClick={cancelHandle}>Cancel</button>
                            <button className="save" onClick={handleEducationDetails}>Save</button>
                        </div>
                    </div>
                </>
                }
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
                <div className="display-bottom">
                    {
                        educationData.length !== 0 && (
                            <div className="education-banner">
                                Education
                            </div>
                        )
                    }
                    {educationData.map((education, index)=> {
                        {if(!education.hide){
                            return (
                            <>
                                <div className="education-display" key = {index}>
                                    <div className="date-location">
                                        {education.startDate !== "" &&
                                        <div className="date">
                                            {education.startDate} - {education.endDate}
                                        </div>}
                                        <div className="city">
                                            {education.location}
                                        </div>
                                    </div>
                                    <div className="school-degree">
                                        <div className="school-display"><b>{education.school}</b></div>
                                        <div className="degree-display">{education.degree}</div>
                                    </div>
                                </div>
                            </>
                            )
                        }}
                    })}
                </div>
            </div>
            <div className="empty"> </div>
        </>
    )
}