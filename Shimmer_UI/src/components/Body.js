import React, { useEffect, useState } from 'react';
import { MemeCard } from './MemeCard';
import { Shimmer } from './Shimmer';



export const Body = () => {
    const [meme, setMeme] = useState([]);
    const [showShimmer, setShowShimmer] = useState(false);
    useEffect(() => {
        fetchMemes();
    }, [])

    const fetchMemes = async() => {
        setShowShimmer(true);
        const data = await fetch(' https://meme-api.com/gimme/10');
        const response = await data.json();
        //console.log(response);
        setShowShimmer(false);
        setMeme(response.memes);
    }
  return (
    <div className="flex flex-wrap"> {meme && meme?.map((item, i) => <MemeCard key={i} data={item} />)} {showShimmer && <Shimmer/>} </div>
  )
}
