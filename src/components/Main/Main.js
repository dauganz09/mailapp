import './Main.css'
import { IconName, MdSearch,MdFilterAlt } from "react-icons/md";
import { MailItem } from '..';
import { mailData } from '../../data';

export const Label = ({text}) =>{
  
  return (
  <div className="spacer">
    <h4>{text}</h4>
  </div>
  )

}

 const Main = () => {
    return (
    <div className="main">
       <div className="header">
          <div className="searchbox">
              <input type="text" /> 
              <MdSearch/>
              
         </div>
         <div className="filter"><MdFilterAlt/></div>
       </div>

       <Label text='Last Month'/>
      
       <div className="content">
           {mailData.map(({content,date,number},i)=>(
             
             <MailItem content={content}date={date} number={number}/>

           ))
           }
          

       </div>
    </div>
    )
}

export default Main;
