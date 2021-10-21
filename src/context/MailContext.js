import { createContext, useState } from 'react';

//create a context, with createContext api
export const mailContext = createContext();

const MailContextProvider = ({children}) => {
        // this state will be shared with all components 
    const [mail,setMail] = useState({
        inbox : 0,
        flagged : 0,
        spam : 0,
        trash :0
      });

    return (
                // this is the provider providing state
        <mailContext.Provider value={{mail, setMail}}>
            {children}
        </mailContext.Provider>
    );
};

export default MailContextProvider;