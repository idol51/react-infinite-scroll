import React, { useEffect, useRef, useState } from 'react'
import HomeView from './HomeView'
import axios from 'axios'
import { useTitleContext } from '../../contexts/TitleContext';
import { useSearchContext } from '../../contexts/SearchContext';

export type IPageData = {
    name: string,
    ["poster-image"]: string
}[];

export default function Home() {
    const { setTitle } = useTitleContext();
    const { searchVal } = useSearchContext();

    const isLoading = useRef<boolean>(true);
    const maxPageNum = 3;

    const [ pageNum, setPageNum ] = useState<number>(1);
    const [ pageData, setPageData ] = useState<IPageData>([]);


    const getData = async () => {
        try {
            const data = await axios.get(`${process.env.REACT_APP_BASE_URL}/data/page${pageNum}.json`);
            const { page } = data.data;

            setTitle(page?.title);
            setPageData((prev) => [ ...prev, ...page?.["content-items"]["content"]])
            isLoading.current = false
        }
        catch (err) {
            console.log('Error while fetching data', err);
            isLoading.current = false
        }
    }

    const handleScroll = () => {
        const scrollOffsetReached = (window.innerHeight + document.documentElement.scrollTop) >= (document.documentElement.offsetHeight - 1000);

        if (scrollOffsetReached && !isLoading.current && pageNum < maxPageNum) {
            isLoading.current = true;
            setPageNum((prevPage) => ++prevPage);
        }
        
    }
    
    useEffect(() => {
        getData();

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [pageNum])

  return (
    <HomeView data={pageData} searchVal={searchVal} />
  )
}
