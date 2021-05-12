import React, { Component } from 'react'

export default class HeyArnoldContainer extends Component {
    state = {
        loading: true,
        cartoons: []
    }
    render() {
        const { loading, cartoons } = this.state;

        if (loading) return <h1>Loading</h1>;
        return <CartoonList cartoons={cartoons} />
    }
}
