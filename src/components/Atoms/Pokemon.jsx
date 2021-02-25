import React from 'react'

const Pokemon = ({ name, link }) => {
    return (
        <>
            <h1 style={{color: 'green'}}>{name}</h1>
            <div>
                <img src={link} alt="Pokemon sprite"></img>
            </div>
        </>
    )
}

export default Pokemon