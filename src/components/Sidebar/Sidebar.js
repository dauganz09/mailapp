import './Sidebar.css'
import { MdMenu,
    MdAllInbox,
    MdOutlinedFlag,
    MdWarningAmber } from "react-icons/md";
import { BsTrash } from "react-icons/bs";


function Sidebar({mail}) {

    const {inbox,flagged,spam,trash} = mail

    return (
        <div className="sidebar">
            <div className="sidebar__button">
                <MdMenu/>
            </div>
             <div className="nav">
                 <ul>
                     <li> <a href="/#"><MdAllInbox/> Inbox</a> {inbox && <span>{inbox}</span>}</li>
                     <li> <a href="/#"><MdOutlinedFlag/>Flagged</a>{flagged && <span>{flagged}</span>}</li>
                     <li><a href="/#"><MdWarningAmber/>Spam</a>{spam && <span>{spam}</span>}</li>
                     <li><a href="/#"><BsTrash/> Deleted</a>{trash && <span>{trash}</span>}</li>
                 </ul>
             </div>
        </div>
    )
}

export default Sidebar
