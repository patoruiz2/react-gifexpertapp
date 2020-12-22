import React  from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'

import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {


    const {data:images,loading} = useFetchGifs(category);
    

    

    return (
        <>
            <h2 className="animate__animated animate__heartBeat">{category}</h2>

            {loading &&<p className= "animate__animated animate__flash">loading...</p> }
            {<div className="card-grid">
            
             
                {
                    images.map(img => {
                        return(
                            <GifGridItem 
                                {...img}
                                key={img.id}
                            />
                        )
                    })
                }
                

           
            </div>}
        </>
    )
}
