function PersonalDetails() {
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
            <input type="text" placeholder="Enter email" />
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
export {
    PersonalDetails
}