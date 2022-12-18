import React, { createContext, useEffect, useState } from 'react'

export const LanguageContext = createContext('es')

export const LanguageContextProvider = ({children}) => {
  const [language, setLanguage] = useState('es')

  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])
  
  return <LanguageContext.Provider value={{
    language,
    setLanguage
  }} >{children}</LanguageContext.Provider>
}