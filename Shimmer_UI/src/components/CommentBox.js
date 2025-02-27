import React from 'react'

export const CommentBox = ({data}) => {
    console.log(data)
  return (
    <div>
        {
            data.map((item, index) => (
                <div className='border-l-2 p-0' >
                    <div style={{padding: '10px'}} >
                        <div className='bg-gray-400' > {item.username} </div>
                        <div className='bg-gray-200'> {item.comment} </div>
                    </div>
                    <div style={{padding: '10px'}}>
                        {item?.replies &&  <CommentBox data={item.replies} /> }
                    </div>
                </div>
                
            ))
        }
    </div>
  )
}
