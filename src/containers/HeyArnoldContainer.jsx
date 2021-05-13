import React, { Component } from 'react';
import CartoonList from '../components/cartoons/CartoonList';
import { findAllCartoons } from '../services/heyArnoldApi.js';

export default class HeyArnoldContainer extends Component {
    state = {
        loading: true,
        cartoons: []
    }

    async componentDidMount() {
        const cartoons = await findAllCartoons();

        this.setState({
            cartoons, 
            loading: false,
        });
    }
    render() {
        const { loading, cartoons } = this.state;

        if (loading) return <h1>Loading...</h1>;
        return (
        <>
            <CartoonList cartoons={cartoons} />
        </>
        );
    }
}
