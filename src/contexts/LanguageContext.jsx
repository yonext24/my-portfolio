import React, { createContext, useEffect, useState } from 'react'

export const LanguageContext = createContext( localStorage.getItem('language') || 'es' )

export const LanguageContextProvider = ({children}) => {
  const [language, setLanguage] = useState( localStorage.getItem('language') || 'es' )

  useEffect(() => {
    localStorage.setItem('language', language)
    console.log(language)
  }, [language])
  
  return <LanguageContext.Provider value={{
    language,
    setLanguage
  }} >{children}</LanguageContext.Provider>
}