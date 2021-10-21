import './Sidebar.css'
import { MdMenu,
    MdAllInbox,
    MdOutlinedFlag,
    MdWarningAmber } from "react-icons/md";
import { BsTrash } from "react-icons/bs";
import { useContext } from 'react';
import { mailContext } from '../../context/MailContext';


function Sidebar() {

    const {mail,spam,read,trash,flag} = useContext(mailContext)

    return (
        <div className="sidebar">
            <div className="sidebar__button">
                <MdMenu/>
            </div>
             <div className="nav">
                 <ul>
                     <li> <a href="/#"><MdAllInbox/> Inbox</a> {read !== 0  && <span>{read}</span>}</li>
                     <li> <a href="/#"><MdOutlinedFlag/>Flagged</a>{flag !== 0 && <span>{flag}</span>}</li>
                     <li><a href="/#"><MdWarningAmber/>Spam</a>{spam !== 0 && <span>{spam}</span>}</li>
                     <li><a href="/#"><BsTrash/> Deleted</a>{trash !== 0 && <span>{mail.trash}</span>}</li>
                 </ul>
             </div>
        </div>
    )
}

export default Sidebar
