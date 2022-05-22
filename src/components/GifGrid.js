import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid =  ( { category }) => {

    // const [images, setImages] = useState([]);
    const { data: images, loading } = useFetchGifs( category );


    
    

    
  return (
      <>
        <h3 className='animate__animated animate__fadeIn'> { category } </h3>

        { loading && <p className='animate__animated animate__hinge animate__delay-2s'>Loading...</p> }
        
        <div className='card-grid'>
        

            { 
                images.map( img => (
                    <GifGridItem 
                        key = { img.id } 
                        { ...img }
                    />
                ) )
            }
            
        {/* <h3> { count } </h3>
        <button onClick={ () => setCount( count + 1 )} >Sumar</button> */}

        {/* <ol>
            { 
                images.map( gif =>{
                     return <li key={ gif.id }> { gif.title }</li>
                } )
            }
        </ol> */}
        </div> 
    </>
    
  )
}















