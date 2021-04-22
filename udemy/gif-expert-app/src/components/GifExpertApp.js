import React, { useState } from 'react'

export const GifExpertApp = () => {

    const [categories, setcategories] = useState(['OnePunch!!!', 'Samuarai X', 'Dragon Ball'])


    const handleAdd = () => {
        setcategories([...categories,'HunterxHunter'])        
    }

    return (
        <>
            <h2>Gif expert App</h2>
            <hr></hr>

            <button onClick={handleAdd}>Agregar</button>
            <ol>
                {
                    categories.map(cat => {
                        return <li key={cat}> {cat}</li>
                    })
                }
            </ol>
        </>
    )
}
