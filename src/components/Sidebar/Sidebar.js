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
                     <li> <a href="/#"><MdAllInbox/> Inbox</a> <span>10</span></li>
                     <li> <a href="/#"><MdOutlinedFlag/>Flagged</a><span>10</span></li>
                     <li><a href="/#"><MdWarningAmber/>Spam</a><span>10</span></li>
                     <li><a href="/#"><BsTrash/> Deleted</a><span>10</span></li>
                 </ul>
             </div>
        </div>
    )
}

export default Sidebar
