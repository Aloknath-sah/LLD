import React from 'react'

export const ProductCard = ({title, price, id}) => {
  return (
    <div className='border p-2 m-2 w-50 h-50' >
        <div>{id} {title} </div>
        <div>{price} </div>
    </div>
  )
}
