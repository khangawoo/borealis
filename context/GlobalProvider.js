import { createContext, useContext, useState, useEffect } from "react";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
    const [lowerThreshold, setLowerThreshold] = useState('0'); 
    const [upperThreshold, setUpperThreshold] = useState('60'); 

    console.log('Lower Threshold gp:', lowerThreshold);  // Log to verify the value
    console.log('Upper Threshold gp:', upperThreshold);  // Log to verify the value

    return (
        <GlobalContext.Provider
            value={{
                lowerThreshold, 
                setLowerThreshold,
                upperThreshold, 
                setUpperThreshold
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider