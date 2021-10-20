import './Sidebar.css'
import { MdMenu,
    MdAllInbox,
    MdOutlinedFlag,
    MdWarningAmber } from "react-icons/md";
import { BsTrash } from "react-icons/bs";


function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__button">
                <MdMenu/>
            </div>
             <div className="nav">
                 <ul>
                     <li> <a><MdAllInbox/> Inbox</a> <span>10</span></li>
                     <li> <a><MdOutlinedFlag/>Flagged</a><span>10</span></li>
                     <li><a><MdWarningAmber/>Spam</a><span>10</span></li>
                     <li><a><BsTrash/> Deleted</a><span>10</span></li>
                 </ul>
             </div>
        </div>
    )
}

export default Sidebar
