import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

interface contextProps {
    city: string,
    setCity: React.Dispatch<React.SetStateAction<string>>
}

export const CityContext = createContext<contextProps>({} as contextProps);

export const CityProvider = ({children}: {children: React.ReactNode}) => {
    const [city, setCity] = useState('')
    const getGeoInfo = () => {
        axios
          .get("https://ipapi.co/json/")
          .then((response) => {
            let data = response.data;
            setCity(data.city);
          })
          .catch((error) => {
            console.log(error);
          });
      };
    
      useEffect(() => {
        getGeoInfo();
      }, []);
    return (
        <CityContext.Provider value={{city, setCity}}>
            {children}
        </CityContext.Provider>
    )
}