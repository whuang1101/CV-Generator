import {Input, Display} from "./input"
export default function Layout () {
    return (
        <>
            <div className="empty"> </div>
            <div className="input-information">
                <Input/>
            </div>
            <div className="display-information">
                <Display/>
            </div>
            <div className="empty"> </div>
        </>
    )
}