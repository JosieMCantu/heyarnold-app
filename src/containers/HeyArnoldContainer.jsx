import React, { Component } from 'react';
import CartoonList from '../components/cartoons/CartoonList';
import Controls from '../components/cartoons/Controls';
import { findAllCartoons, fetchCartoonByName } from '../services/heyArnoldApi.js';

export default class HeyArnoldContainer extends Component {
    state = {
        loading: true,
        cartoons: [],
        cartoonName: ''
    }

    async componentDidMount() {
        const cartoons = await findAllCartoons();

        this.setState({
            cartoons, 
            loading: false,
        });
    }

    handleCartoonNameChange = async ({ target }) => {
        this.setState({ cartoonName: target.value })
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        this.setState({ loading: true });
        const cartoons = await fetchCartoonByName(this.state.cartoonName);
        this.setState({
            loading: false,
            cartoons,
        });
    };

    render() {
        const { loading, cartoons, cartoonName } = this.state;

        if (loading) return <h1>Loading...</h1>;
        return (
        <>
            <Controls cartoonName={cartoonName} onCartoonNameChange={this.handleCartoonNameChange} onSubmit={this.handleSubmit} />
            <CartoonList cartoons={cartoons} />
        </>
        );
    }
}
