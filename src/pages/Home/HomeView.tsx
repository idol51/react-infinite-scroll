import React from 'react'
import MovieBox from '../../components/MovieBox'
import { IPageData } from '.'

export interface HomeViewProps {}

export default function HomeView({ data, searchVal }: { data: IPageData, searchVal: string }) {
  return (
    <div className='grid grid-cols-2 gap-x-3 p-3 gap-y-3'>
        { data.map((dataItem, i) => {
            if (!searchVal.length || dataItem.name.replace(/ /g, '').search(new RegExp(`${searchVal.replace(/ /g, '')}`, 'i')) !== -1) {
                return <MovieBox key={i} name={dataItem.name} image={dataItem['poster-image']} />
            }
            else {
                return null
            }
        }) }
    </div>
  )
}
