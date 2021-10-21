import { createContext, useState,useEffect } from 'react';
import api from '../api/mails'


//create a context, with createContext api
export const mailContext = createContext();

const MailContextProvider = ({children}) => {
        // this state will be shared with all components 
    const [mail,setMail] = useState([]);
    const [spam,setSpam] = useState(0);
    const [flag,setFlag]= useState(0);
    const [read,setRead] = useState(0);
    const [trash,setTrash] = useState(0);
    

    
    // const getMails = async () => {
    //     const response = await api.get("/mails");
    //     console.log(response.data)
    //     return response.data;
    // };

    // useEffect(()=>{
      
    //     const getAllMails = async () =>{
    //         const allMails  = await getMails();
            
    //         if(allMails) setMail(allMails);
    //         setRead(6);
    //     }

    //     getAllMails();

       

    // },[])

    useEffect(() => {
        api.get("/mails")
            .then((response) => {
                setMail(response.data);
                setRead(response.data.length)
                console.log(response.data)
            })
    }, [])



    return (
                // this is the provider providing state
        <mailContext.Provider value={{
            mail, 
            setMail,
            spam,
            setSpam,
            flag,
            setFlag,
            read,
            setRead,
            trash,
            setTrash
           }}>
            {children}
        </mailContext.Provider>
    );
};

export default MailContextProvider;