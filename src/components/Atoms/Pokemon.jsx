import React from 'react'

const Pokemon = ({ name, link }) => {
    return (
        <>
        <h1>{name}</h1>
        <div>
            <a href={link}>{link}</a>
        </div>
        </>
    )
}

export default Pokemon