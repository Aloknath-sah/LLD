import React from 'react'

export const MemeCard = ({data}) => {
    const {author,  title, url } = data;
  return (
    <div>
        <div className="p-5 m-5 border border-black rounded-lg">
      <img className="w-64 h-64" alt="meme" src={url} />
      <p>{author}</p>
    </div>
    </div>
  )
}
