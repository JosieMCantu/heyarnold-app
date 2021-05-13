import React from 'react'
import PropTypes from 'prop-types'

function Controls({cartoonName}) {
    return (
        <form>
            <label htmlFor="cartoon-name">Cartoon Name</label>
            <input id="cartoon-name" value={cartoonName} type="text" />
            <button aria-label=
            "search">Search</button>
        </form>
    )
}

Controls.propTypes = {
    cartoonName: PropTypes.string.isRequired,
};

export default Controls;

