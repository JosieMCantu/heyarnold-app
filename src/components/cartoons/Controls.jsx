import React from 'react'
import PropTypes from 'prop-types'

function Controls({cartoonName, onCartoonNameChange,onSubmit}) {
    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="cartoon-name">Cartoon Name</label>

            <input id="cartoon-name" value={cartoonName} type="text" onChange={onCartoonNameChange} />

            <button aria-label=
            "search">Search</button>
            
        </form>
    )
}

Controls.propTypes = {
    cartoonName: PropTypes.string.isRequired,
    onCartoonNameChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default Controls;

