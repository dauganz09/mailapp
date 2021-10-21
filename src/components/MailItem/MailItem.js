import './MailItem.css'
import {MdChatBubbleOutline,
    MdOutlinedFlag,
    MdWarningAmber } from "react-icons/md";
import { mailContext } from '../../context/MailContext';

import { BsTrash } from "react-icons/bs";
import { useState,useContext } from 'react';
import api from '../../api/mails'

const MailItem = ({id,content,date,number,isSpam,isRead,isFlagged}) => {
 
   const {mail,setMail,read,setRead,spam,setSpam,flag,setFlag} = useContext(mailContext)

   const [item, setItem] = useState({
       id: id,
       content : content,
       date : date,
       number : number,
       isSpam : isSpam,
       isRead : isRead,
       isFlagged : isFlagged
   });
   


   const setFlagMsg = async ()=>{
       setItem({...item,isFlagged : !item.isFlagged})
       if(item.isFlagged){
        setFlag(flag - 1)
        setItem({...item,isFlagged : !item.isFlagged})
       }else{
        setFlag(flag + 1)
           setItem({...item,isFlagged : !item.isFlagged})
       }
       
    
    }

   const setSpamMsg = () =>{
       if(item.isSpam){
        setSpam(spam - 1)
        setItem({...item,isSpam : !item.isSpam})
       }else{
           setSpam(spam + 1)
           setItem({...item,isSpam : !item.isSpam})
       }
       
   }


   const deleteItem = (id)=>{
       
    
    setMail(prevMail => prevMail.filter(m => m.id !== id))
    
    
    
    
   }
   

   const handleSetRead =()=>{
    if(read !== 0 && item.isRead !== true){
        setRead(read - 1)
        setItem({...item,isRead: true});
    }
}
  

    return (
        <div className="mail" >
           <div className="mail__content">
             <div className="mail__text" onClick={handleSetRead}>
                   {item.content}
            </div>
             {!item.isRead && <span>1</span>}
             <div className="mail__date">{item.date}</div>
           </div>
           <div className="mail__actions">
            <div className="mail__number">
                <MdChatBubbleOutline/>
               {item.number}
            </div>
            <div className="mail__buttons">
              <MdWarningAmber  style={{color : item.isSpam ? 'black' : '#9d9d9d'}} onClick={setSpamMsg} />
              <BsTrash style={{color: '#9d9d9d'}} onClick={() => deleteItem(item.id)}/>

              <MdOutlinedFlag style={{color : item.isFlagged ? 'black' : '#9d9d9d'}} onClick={setFlagMsg}/>
    
            </div>
           </div>
        </div>
    )
}

export default MailItem
