import { useState,useContext } from 'react';
import './Main.css'
import { MdSearch,MdFilterAlt ,MdClose} from "react-icons/md";
import {MailItem} from '../index';

import { mailContext } from '../../context/MailContext';
import api from '../../api/mails'

export const Label = ({text}) =>{
  
  return (
  <div className="spacer">
    <h4>{text}</h4>
  </div>
  )

}

 const Main = () => {

    const {mail,setMail} = useContext(mailContext)
    const [search,setSearch] = useState(['']);
    
    
    const handleChange= (val)=>{
        setSearch(val);
        const fetchSearch = () => {
            api.get(`/mails?q=${search}`)
            .then((response) => {
                setMail(response.data);
                
               
            }) }
        
            fetchSearch();
        }

// useEffect(() => {
    
   
// },[])

const handleClear = ()=>{
    setSearch('')
    api.get("/mails")
    .then((response) => {
        setMail(response.data);
        
        console.log(response.data)
    })
}


   

    
    

    return (
    <div className="main">
       <div className="header">
          <div className="searchbox">
              <input type="text" value={search} onChange={e=>handleChange(e.target.value)}  /> 
              {search === '' ? <MdSearch/> : <MdClose onClick={handleClear}/> }
              
         </div>
         <div className="filter"><MdFilterAlt/></div>
       </div>

       <Label text='Last Month'/>
      
       <div className="content">
           {mail.map(({id,content,date,number,isSpam,isRead,isFlagged},i) =>(
             
             <MailItem  key={i} id={id} content={content} 
                                date={date}
                                number={number}
                                isSpam={isSpam}
                                isRead={isRead}
                                isFlagged={isFlagged}
             />

           ))
           }
          

       </div>
    </div>
    )
}

export default Main;
