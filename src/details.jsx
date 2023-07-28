import { useState } from "react";
function PersonalDetails() {
    const [name, setName] = useState("");
    const handleName = (e) => {
        setName(e.target.value);
}
    return (
        <>
        <div className="name">
            <div className="personal-title">
                Full Name:
            </div>
            <input type="text" placeholder="First Name Last Name" />
        </div>
        <div className="email">
            <div className="personal-title">
                Email
            </div>
            <input type="text" placeholder="Enter email" onChange={handleName} />
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
        </>
    )
}
function Header() {
    return (
        <>
        <div className="display-name">
            {name}
        </div>
        <div className="display-personal">
            <div className="display-email">

            </div>
            <div className="display-phone">
 
            </div>
            <div className="display-address">
 
            </div>
        </div>
        </>
    )
}
export {
    PersonalDetails,
    Header
}