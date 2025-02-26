import React, { useEffect, useState } from 'react';
import { MemeCard } from './MemeCard';
import { Shimmer } from './Shimmer';



export const Body = () => {
    const [meme, setMeme] = useState([]);
    const [showShimmer, setShowShimmer] = useState(false);
    useEffect(() => {
        fetchMemes();
        
        window.addEventListener('scroll', handleScroll);
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    const fetchMemes = async() => {
        setShowShimmer(true);
        const data = await fetch('https://meme-api.com/gimme/10');
        const response = await data.json();
        //console.log(response);
        setShowShimmer(false);
        //here we can use spread operator to add next 20 memes otherwise it will replace the existing 20 meme to new one.
        setMeme((memes) => [...memes, ...response.memes]);
    }

    const handleScroll = () => {
      if(window.scrollY + window.innerHeight >= document.body.scrollHeight) {
        fetchMemes();
      }
    }
  return (
    <div className="flex flex-wrap"> {meme && meme?.map((item, i) => <MemeCard key={i} data={item} />)} {showShimmer && <Shimmer/>} </div>
  )
}
