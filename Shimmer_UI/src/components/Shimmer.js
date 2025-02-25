import React from 'react'

export const Shimmer = () => {
   
  return Array(20).fill(0).map((n,i) => (
    <div>
         <div>
        <div className="p-5 m-5 border border-black rounded-lg">
      <img className="w-64 h-64" alt="meme" />
      <p></p>
    </div>
    </div>
    </div>
  )) 
}
