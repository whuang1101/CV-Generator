import { useState } from "react";
import ResumeIcon, { dropDownIcon , personalItem, educationIcon, workIcon,  emailIcon, phoneIcon, addressIcon,openEye,closedEye, trashIconWhite, trashIconBlack, backIcon} from "./assets/Icons";
export default function Layout () {
    const [personal, setPersonal] = useState({detail: "person-details", display:"hide"});
    const [mobile, setMobile] = useState("show");
    const [resume, setResume] = useState("");
    const [personalEducation, setPersonalEducation] = useState({detail:"education", display: "hide"});
    const [experience, setExperience] = useState({detail: "experience", display:"hide"});
    const [experienceDetails, setExperienceDetails] = useState ({format: "experience-click", click: false})
    const [educationDetails, setEducationDetails] = useState({click:false, format:"education-click"});
    const [color, setColor] = useState("red");
    const [editOne, setEditOne] = useState(false)
    const [editExperienceOne, setEditExperienceOne] = useState(false)
    const [edit, setEdit] = useState({click:false, format:"education-click"})
    const [educationData, setEducationData] = useState([]) 
    const [experienceData, setExperienceData] = useState([])
    const [dropdown, setDropDown] = useState("hello")
    const [educationDrop, setEducationDrop] = useState("hello")
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [originalEducationData, setOriginalEducationData] = useState([]);
    const [originalExperienceData, setOriginalExperienceData] = useState([]);
    const handleEditScreen = () => {
        if(mobile === "show")
        {setMobile("hide-mobile")}
        else{
        setMobile("show")
        }
    }
    const handleResumeScreen = () => {
        if(resume === "show")
        {setResume("hide-mobile")}
        else{
        setResume("show")
        }
    }
    const handleMobileClick = () => {
        handleEditScreen();
        handleResumeScreen();
    }
    const handleHideClick = (event,index) => {
        event.stopPropagation();
        if(!educationData[index].hide){
            const newEducationData = [...educationData];
            newEducationData[index] = {...newEducationData[index],
            hide:true}
            setEducationData(newEducationData)}
        else{
            const newEducationData = [...educationData];
            newEducationData[index] = {...newEducationData[index],
            hide:false}
            setEducationData(newEducationData)}
        };
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handlePersonalClick()
        }
    };
    const handleEducationKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleEducationClick()
        }
    };
    const handleExperienceKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleExperienceClick()
        }
    }
    const handleExperienceHide = (event,index) => {
        event.stopPropagation();
        if(!experienceData[index].hide){
            const newExperience = [...experienceData];
            newExperience[index] = {...newExperience[index],
            hide:true}
            setExperienceData(newExperience)}
        else{
            const newExperience = [...experienceData];
            newExperience[index] = {...newExperience[index],
            hide:false}
            setExperienceData(newExperience)}
        };
    const handleExperienceEdit = () => {
        setEditExperienceOne(!editExperienceOne)
    }
    function calculateHides(input){
        let numberOfEducationHides = 0;
        for(let i =0; i < input.length; i ++) {
            if(input[i].hide) {
                numberOfEducationHides ++;
            }
        }
        return numberOfEducationHides
    }
    const educationHides = calculateHides(educationData);
    const experienceHides = calculateHides(experienceData);
    const handleEditOne = () => {
        setEditOne(!editOne)
    }
    const handleExpSave = (index) => {
        if(experienceData[index].company !== ""){
            handleExperienceDetails();
        }
    }
    const handleExperienceDetails = () => {
        if(!experienceDetails.click){
            const newExperience = {... experienceDetails, click:true, format:"experience-details"}
            setExperienceDetails(newExperience);
        }
        else{
            const newExperience = {... experienceDetails, click:false, format:"experience-click"}
            setExperienceDetails(newExperience);
        }
    }
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
    const handleEditSave = (index) => {
        if(educationData[index].school !== ""){
        const updatedEducationData = [...educationData];
        updatedEducationData[index] = 
        {...updatedEducationData[index], 
        edit: false} 
        setEducationData(updatedEducationData)
        handleEditOne();}
    }
    const handleSave = (index) => {
        if(educationData.school !== ""){
            handleEducationDetails();
        } 
    }
    const handleExpEditSave = (index) => {
        if(experienceData[index].company !== "")
        {const updatedExperience = [...experienceData];
        updatedExperience[index] = 
        {...updatedExperience[index], 
        edit: false} 
        setExperienceData(updatedExperience)
        handleExperienceEdit();}
    }
    const handleEditCancel = () => {
        setEducationData(originalEducationData);
        handleEditOne();
    }
    const handleEditExpCancel = () => {
        setExperienceData(originalExperienceData);
        handleExperienceEdit();
    }
    const handleEditDelete = (index) => {
        handleEditOne();
        setEducationData((prevEducation) => {
            const updatedEducation = [...prevEducation];
            updatedEducation.splice(index, 1);
            return updatedEducation;
          });
    }
    const handleEditExpDelete = (index) => {
        handleExperienceEdit();
        setExperienceData((prevExperience) => {
          const updatedExperience = [...prevExperience];
          updatedExperience.splice(index, 1);
          return updatedExperience;
        });
      };
    const handleOneEdit = (index) => {
        const newEducationData = [...educationData];
        newEducationData[index] = { ...newEducationData[index], edit: true };
        const newerEducationData = [...educationData]
        newerEducationData[index] = { ...newEducationData[index], edit: false }
        setEducationData(newEducationData);
        setOriginalEducationData([... newerEducationData]);
        handleEditOne();
    };
    const handleOneExperience = (index) => {
        const newExperience = [...experienceData];
        newExperience[index] = { ...newExperience[index], edit: true };
        const newerExperience = [...experienceData]
        newerExperience[index] = { ...newerExperience[index], edit: false }
        setExperienceData(newExperience);
        setOriginalExperienceData([... newerExperience]);
        handleExperienceEdit();
    }
    
    const handleEdit = () => {
        if(!edit.click){
            const newEdit = {... edit, click:true, format:"education-details"}
            const newEducationDetails = {... educationDetails, click:false, format:"education-details"}
            setEducationDetails(newEducationDetails);
            setOriginalEducationData([... educationData]);
            setEdit(newEdit);
        }
        else{
            const newEdit = {... edit, click:false, format:"education-click"}
            const newEducationDetails = {... educationDetails, click:false, format:"education-click"}
            setEducationDetails(newEducationDetails);
            setOriginalEducationData([... educationData]);
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
    const handleExperienceData = (e, index) => {
        const {name, value} = e.target;
        const updatedExperience = [...experienceData];
        updatedExperience[index] = 
        {...updatedExperience[index], 
        [name]: value} 
        setExperienceData(updatedExperience)
    }
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
    const cancelHandleExperience = () => {
        handleExperienceDetails();
        setExperienceData((prevExperience) => prevExperience.slice(0,-1));
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
            edit: false,
        }])
    }
    const addExperience = () => {
        setExperienceData([...experienceData, {
            company: "",
            position: "",
            startDate: "",
            endDate: "",
            location: "",
            description: "",
            hide: false,
            edit: false
        }])
    }

    const combineClick = () => {
        handleEducationDetails();
        addEducation();
    }

    const handleExperienceButton = () => {
        handleExperienceDetails();
        addExperience();
    }
    function loadExample() {
        setEducationData ([{
            school: "Fake Prestigious University",
            degree: "Computer Science",
            startDate: "August 2019",
            endDate: "May 2023",
            location: "Cambridge, Massachusetts",
            hide: false,
            edit: false,
        },
        {
            school: "Hidden School",
            degree: "Computer Science",
            startDate: "August 2024",
            endDate: "May 2027",
            location: "New York, New York",
            hide: true,
            edit: false,
        }
        ])
        setExperienceData([{
            company: "FAANG Company",
            position: "UI/UX Designer",
            startDate: "August 2023",
            endDate: "Present",
            location: "New York, NY",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            hide: false,
            edit: false
        },{
            company: "Other FAANG Company",
            position: "Frontend Developer",
            startDate: "Never",
            endDate: "Never",
            location: "Los Angeles, California",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            hide: false,
            edit: false
        }])
        setName("Bob The Builder")
        setAddress("1234 Please Hire Me Street, USA")
        setEmail("Fakestemail123@pleaseHireMe.com")
        setPhone("123-456-7890")
    }
    function clearForm(){
        setExperienceData([]);
        setEducationData([]);
        setName("")
        setAddress("")
        setEmail("")
        setPhone("")
    }
    return (
        <>
            <div className="empty"></div>
            <div className={[mobile, "input-information"].join(" ")}>
            <div className="resume" onClick={handleMobileClick}>
                <div className="resume-display">Display Resume</div>
                <div className="resume-icon"><ResumeIcon/></div>
                </div>
            <div className="tools">
            <div className="load-example" onClick={loadExample} tabIndex={0} onKeyDown={loadExample}>Load Example</div>
            <div className="clear" onClick={clearForm} tabIndex={0} onKeyDown={clearForm}>
                <div className="trash">
                    {color === "white " ?
                    <div className="icon">{trashIconBlack}</div> :
                    <div className="icon">{trashIconWhite}</div>
                     }
                <div className="clear-text">Clear Form
                </div></div>
                </div>
            </div>
            <div className={personal.detail} onClick={handlePersonalClick}  tabIndex={0} role="button" onKeyDown={handleKeyDown}> 
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
                    <input type="text" placeholder="First Name Last Name" onChange={handleName} value={name}  />
                </div>
                <div className="email">
                    <div className="personal-title">
                        Email:
                    </div>
                    <input type="text" placeholder="Enter email" onChange={handleEmail} value={email}/>
                </div>
                <div className="phone">
                    <div className="personal-title">
                        Phone number:
                    </div>
                    <input type="text" placeholder="Enter phone number" onChange={handlePhone}value={phone} />
                </div>
                <div className="address" onChange={handleAddress} value={address}>
                    <div className="personal-title">
                        Address:
                    </div>
                    <input type="text" placeholder="City, Country" onChange={handleAddress} value={address} />
                </div>
            </div>
            <div className= {personalEducation.detail} onClick={handleEducationClick} tabIndex={0} role="button" onKeyDown={handleEducationKeyDown}>
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
                    {educationData.map((education, index) => (
                    !education.edit ?
                    (!editOne && <div key={index} className="education-snippet" onClick={() => handleOneEdit(index)}>
                        {education.school}
                        {!education.hide ? <div className="eye" onClick={(e) => handleHideClick(e, index)}>{openEye}</div>:
                            <div className="eye" onClick={(e) => handleHideClick(e, index)}>{closedEye}</div> }
                    </div>) :
                    
                    (<div className="education-sad"><div key={index} className="education-details-two">
                        <div className="school">
                        <label htmlFor="school">School: (required)</label>
                        <input type="text" placeholder="Enter school/university" name="school" value ={educationData[index].school} 
                        onChange ={(e) => handleEducationData(e, index)}/>
                    </div>
                    <div className="degree">
                        <label htmlFor="degree">Degree:</label>
                        <input type="text" placeholder="Enter Degree/ Field Of Study" name="degree" value= {educationData[index].degree}
                        onChange={(e) => handleEducationData(e,index)}/>
                    </div>
                    <div className="dates"  >
                        <div className="start-date">
                            <label htmlFor="startDate">Start Date:</label>
                            <input type="text" placeholder="Start Date" name="startDate" value = {educationData[index].startDate} onChange= {(e) => handleEducationData(e,index)}/>
                        </div>
                        <div className="end-date" >
                            <label htmlFor="endDate">End Date:</label>
                            <input type="text" placeholder="End Date" name="endDate" value = {educationData[index].endDate} onChange= {(e) => handleEducationData(e,index)}/>
                        </div>
                    </div>
                    <div className="location"  >
                        <label htmlFor="location">Location</label>
                        <input type="text" placeholder="City, Country" name="location" value = {educationData[index].location} onChange= {(e) => handleEducationData(e,index)}/>
                    </div>
                    <div className="buttons" >
                            <div className="first-half">
                                <button className="delete" onClick={()=> handleEditDelete(index)}>Delete</button>
                            </div>
                            <div className="second-half">
                                <button className="cancel" onClick={handleEditCancel}>Cancel</button>
                                <button className="save" onClick={() =>handleEditSave(index)} >Save</button>
                            </div>
                        </div>
                    </div>
                    </div>)
                    ))}
                    {(!edit.click && !editOne) &&
                    (<button className="add-education" onClick={(e) => combineClick(e)}>
                    + Education
                    </button>)}
                </>
                ) :<> 
                <div className="school">
                    <label htmlFor="school">School: (required)</label>
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
                            <button className="delete" onClick={cancelHandle}>Delete</button>
                        </div>
                        <div className="second-half">
                            <button className="cancel" onClick={cancelHandle}>Cancel</button>
                            <button className="save" onClick={(()=>handleSave(educationData.length-1))}>Save</button>
                        </div>
                    </div>
                </>
                }
            </div>
            <div className={experience.detail} onClick={handleExperienceClick} tabIndex={0} role="button" onKeyDown={handleExperienceKeyDown}>
                <div className="title">
                    <div className="icon">
                        {workIcon}
                    </div>
                    <div className="titleName">Work Experience</div>
                </div>
                {dropDownIcon}
            </div>
            <div className={[experience.display, experienceDetails.format].join(" ")}>
            {!experienceDetails.click ?
            <>
            {experienceData.map((experience, index) => (
                    !experience.edit ?
                    (!editExperienceOne && 
                        <div className="experience-snippet" onClick={() => handleOneExperience(index)}>
                            {experience.company}
                            {!experience.hide ? <div className="eye" onClick={(e)=> handleExperienceHide(e,index)}>{openEye}</div>:
                            <div className="eye" onClick={(e)=> handleExperienceHide(e,index)}>{closedEye}</div> }
                        </div>
                    ):
                    <div className="experience-sad" key={index}>
                    <div className="company">
                        <label htmlFor="company">Company: (required)</label>
                        <input type="text" placeholder="Company" name="company" value={experienceData[index].company} onChange={(e) => handleExperienceData(e, index)} />
                    </div><div className="position">
                            <label htmlFor="position">Position:</label>
                            <input type="text" placeholder="Job Title" name="position" value={experienceData[index].position} onChange={(e) => handleExperienceData(e, index)} />
                        </div><div className="dates">
                            <div className="start-date">
                                <label htmlFor="startDate">Start Date:</label>
                                <input type="text" placeholder="Start Date" name="startDate" value={experienceData[index].startDate} onChange={(e) => handleExperienceData(e, index)} />
                            </div>
                            <div className="end-date">
                                <label htmlFor="endDate">End Date:</label>
                                <input type="text" placeholder="End Date" name="endDate" value={experienceData[index].endDate} onChange={(e) => handleExperienceData(e, index)} />
                            </div>
                        </div><div className="location">
                            <label htmlFor="location">Location</label>
                            <input type="text" placeholder="City, Country" name="location" value={experienceData[index].location} onChange={(e) => handleExperienceData(e, index)} />
                        </div><div className="description">
                            <label htmlFor="description">Description</label>
                            <textarea
                                name="description"
                                placeholder="What do you do at your job"
                                value={experienceData[index].description}
                                onChange={(e) => handleExperienceData(e, index)}
                                rows={5} />
                        </div><div className="buttons">
                            <div className="first-half">
                                <button className="delete" onClick={()=> handleEditExpDelete(index)}>Delete</button>
                            </div>
                            <div className="second-half">
                                <button className="cancel" onClick={handleEditExpCancel} >Cancel</button>
                                <button className="save" onClick={() => handleExpEditSave(index)}>Save</button>
                            </div>
                        </div>
                        </div>
            ))}
            {!editExperienceOne &&
            <button className="add-experience" onClick={handleExperienceButton}>
                + Work Experience
            </button>
            }       
            </>:
            <>
                <div className="company">
                    <label htmlFor="company">Company: (required)</label>   
                    <input type="text" placeholder="Company" name="company" value={experienceData[experienceData.length-1].company} onChange = {(e) =>handleExperienceData(e,experienceData.length-1)}/>
                </div>
                <div className="position">
                    <label htmlFor="position">Position:</label>   
                    <input type="text" placeholder="Job Title" name="position" value={experienceData[experienceData.length-1].position} onChange = {(e) =>handleExperienceData(e,experienceData.length-1)}/>
                </div>
                <div className="dates">
                    <div className="start-date">
                        <label htmlFor="startDate">Start Date:</label>
                        <input type="text" placeholder="Start Date" name="startDate" value={experienceData[experienceData.length-1].startDate} onChange = {(e) =>handleExperienceData(e,experienceData.length-1)}/>
                    </div>
                    <div className="end-date" >
                        <label htmlFor="endDate">End Date:</label>
                        <input type="text" placeholder="End Date" name="endDate" value={experienceData[experienceData.length-1].endDate} onChange = {(e) =>handleExperienceData(e,experienceData.length-1)}/>
                    </div>
                </div>
                <div className="location">
                    <label htmlFor="location">Location</label>
                    <input type="text" placeholder="City, Country" name="location" value={experienceData[experienceData.length-1].location} onChange = {(e) =>handleExperienceData(e,experienceData.length-1)}/>
                </div>
                <div className="description">
                    <label htmlFor="description">Description</label>
                    <textarea
                        name="description"
                        placeholder="What do you do at your job"
                        value={experienceData[experienceData.length - 1].description}
                        onChange={(e) => handleExperienceData(e, experienceData.length - 1)}
                        rows={5}
                    />
                </div>
                <div className="buttons">
                            <div className="first-half">
                                <button className="delete" onClick={cancelHandleExperience}>Delete</button>
                            </div>
                            <div className="second-half">
                                <button className="cancel" onClick={cancelHandleExperience}>Cancel</button>
                                <button className="save" onClick={()=> {handleExpSave(experienceData.length -1)}}>Save</button>
                            </div>
                    </div>
            </>
            }
            </div>
            </div>
            <div className={[resume, "display-information"].join(" ")} id="print-content">
                <div className="display-top">
                <div className="back-icon" onClick={handleMobileClick}>{backIcon}</div>
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
                        (educationData.length !== 0 && educationData.length !== educationHides) && (
                            <div className="banner">
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
                    {
                        (experienceData.length !== 0 && experienceData.length !==experienceHides)&& (
                            <div className="banner">
                                Experience
                            </div>
                        )
                    }
                    {experienceData.map((experience,index)=> (
                        !experience.hide &&
                        <div className="experience-display">
                            <div className="date-location">
                                {experience.startDate !== "" &&
                                <div className="date">
                                    {experience.startDate} - {experience.endDate}
                                </div>}
                                <div className="city">
                                    {experience.location}
                                </div>
                            </div>
                            <div className="school-degree">
                                <div className="school-display"><b>{experience.company}</b></div>
                                <div className="position-display">{experience.position}</div>
                                <div className="description-display">{experience.description}</div>
                            </div>    
                        </div>
                    ))}
                </div>
            </div>
            <div className="empty"> </div>
        </>
    )
}