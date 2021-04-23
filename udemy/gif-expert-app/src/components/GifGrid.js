import React, { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({ category }) => {

    const [images, setimages] = useState([])

    //para que se renderize una unica vez
    useEffect(() => {
        getFGifts()
    }, [])

    const getFGifts = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?api_key=IrJwy71enEpDaAVanUv2AWa7QamoITgN&q=Rick and morthy&limit=100'

        const resp = await fetch(url)
        const { data } = await resp.json();
        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
        console.log(gifs);
        setimages(gifs)
    }

    return (
        <>
            <h3> {category} </h3>
            <div className='card-grid'>
                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}