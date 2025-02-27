import React, { useState } from 'react';

const data = [
    "https://plus.unsplash.com/premium_photo-1668024966086-bd66ba04262f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2NlbmVyeXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2NlbmVyeXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1454372182658-c712e4c5a1db?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2NlbmVyeXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNjZW5lcnl8ZW58MHx8MHx8fDA%3D"
]

export const ImageSlider = () => {
    const [active, setActive] = useState(0);
    console.log(active)
    const handlePrevClick = () => {
        
        setActive((active) => ((active-1) < 0) ? data.length-1 : (active -1))
    }
    const handleNextClick = () => {
        
        setActive((active) =>  (active+1)%data.length)
    }
    
  return (
    <div className='flex justify-center items-center ' >
        <div onClick={() => handlePrevClick()} >
            <img className='h-20' src="https://cdn-icons-png.flaticon.com/128/271/271220.png" />
        </div>
        <div className='h-50 flex p-2'>
            
                <img src={data[active]} />
            
        </div>
        <div onClick={handleNextClick} >
            <img className='h-20' src="https://cdn-icons-png.flaticon.com/128/271/271228.png" />
        </div>
    </div>
    
  )
}
