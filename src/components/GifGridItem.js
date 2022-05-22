import React from 'react'

export const GifGridItem = ( { id, title, url } ) => {

    // console.log( id, title, url );

  return (
    // <div className='card animate__animated animate__rubberBand'>
    // <div className='card animate__animated animate__flip'>
    <div className='card animate__animated animate__jackInTheBox'>

    


      
        <img src={ url } alt={title} />
        <p>{title}</p>
    </div>
  )
}
