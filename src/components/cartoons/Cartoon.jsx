import React from 'react'
import PropTypes from 'prop-types'

function Cartoon({id, name, image}) {
    return (
        <>
        <p>{id}</p>
        <p>{name}</p>
        <img src={image} alt={name} />
        </>
    )
}

Cartoon.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}

export default Cartoon

