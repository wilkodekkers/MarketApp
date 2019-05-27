import React, { Component } from 'react'

import ProductListItem from './ProductListItem'

class ProductList extends Component {
    constructor() {
        super();

        this.state = {
            products: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
        }
    }

    render() {
        const list = this.state.products.map((product) => <div className='col s12 m6' key={product} ><ProductListItem /></div>)

        return (
            <div className='row'>
                {list}
            </div>
        )
    }
}

export default ProductList