import './MailItem.css'
import {MdChatBubbleOutline,
    MdFlag,
    MdOutlinedFlag,
    MdWarningAmber } from "react-icons/md";

import { BsTrash } from "react-icons/bs";

const MailItem = ({content,date,number}) => {
    return (
        <div className="mail">
           <div className="mail__content">
             <div className="mail__text">
                   {content}
            </div>
             <span>10</span>
             <div className="mail__date">{date}</div>
           </div>
           <div className="mail__actions">
            <div className="mail__number">
                <MdChatBubbleOutline/>
               {number}
            </div>
            <div className="mail__buttons">
              <MdWarningAmber/>
              <BsTrash/>
              <MdFlag/>
    
            </div>
           </div>
        </div>
    )
}

export default MailItem
