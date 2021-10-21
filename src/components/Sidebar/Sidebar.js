import './Sidebar.css'
import { MdMenu,
    MdAllInbox,
    MdOutlinedFlag,
    MdWarningAmber } from "react-icons/md";
import { BsTrash } from "react-icons/bs";
import { useContext } from 'react';
import { mailContext } from '../../context/MailContext';


function Sidebar() {

    const {mail} = useContext(mailContext)

    return (
        <div className="sidebar">
            <div className="sidebar__button">
                <MdMenu/>
            </div>
             <div className="nav">
                 <ul>
                     <li> <a href="/#"><MdAllInbox/> Inbox</a> {mail.inbox != 0  && <span>{mail.inbox}</span>}</li>
                     <li> <a href="/#"><MdOutlinedFlag/>Flagged</a>{mail.flagged != 0 && <span>{mail.flagged}</span>}</li>
                     <li><a href="/#"><MdWarningAmber/>Spam</a>{mail.spam != 0 && <span>{mail.spam}</span>}</li>
                     <li><a href="/#"><BsTrash/> Deleted</a>{mail.trash != 0 && <span>{mail.trash}</span>}</li>
                 </ul>
             </div>
        </div>
    )
}

export default Sidebar
