import React from 'react';
import PropTypes from 'prop-types';
import Cartoon from './Cartoon';

const CartoonList = ({ cartoons }) => (<ul aria-label="cartoons">

    {cartoons.map((cartoon) => (<li key={`${cartoon.id}-${cartoon.name}-${cartoon.image}`}>

    <Cartoon
        id={cartoon.id}
        name={cartoon.name}
        image={cartoon.image}/>
    </li>
    
    ))}</ul>
);

CartoonList.propTypes = {
    cartoons: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default CartoonList;

