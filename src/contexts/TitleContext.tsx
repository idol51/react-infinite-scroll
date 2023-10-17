import React, { ReactNode, createContext, useContext, useState } from 'react'

interface TitleContextType {
    title: string,
    setTitle: any,
}

const TitleContext = createContext<TitleContextType>({
    title: '',
    setTitle: () => null
})

export function TitleContextProvider({ children }: { children: ReactNode }) {
    const [ title, setTitle ] = useState<string>('');

  return (
    <TitleContext.Provider value={{ title, setTitle }}>
      {children}
    </TitleContext.Provider>
  )
}

export const useTitleContext = () => useContext(TitleContext); 
