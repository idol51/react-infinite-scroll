import React, { ReactNode, createContext, useContext, useState } from 'react'

export interface ISearchContext {
    searchVal: string,
    setSearchVal: any
}

const SearchContext = createContext<ISearchContext>({
    searchVal: '',
    setSearchVal: () => ''
})

export function SearchContextProvider({ children }: { children: ReactNode }) {
    const [ searchVal, setSearchVal ] = useState<string>('');
  return (
    <SearchContext.Provider value={{ searchVal, setSearchVal }}>
      {children}
    </SearchContext.Provider>
  )
}
export const useSearchContext = () => useContext(SearchContext);
