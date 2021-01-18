import React, { useState, createContext } from 'react';

export const AppContext = createContext();

export const ContextProvider = (props) => {
  const [city, setCity] = useState('')
  const [cityData, setCityData] = useState([])
  const [zip, setZip] = useState('')
  const [zipData, setZipData] = useState([])

  return (
    <AppContext.Provider value={{
      city: [city, setCity],
      cityData: [cityData, setCityData],
      zip: [zip, setZip],
      zipData: [zipData, setZipData]
    }}>
      {props.children}
    </AppContext.Provider>
  )
}
