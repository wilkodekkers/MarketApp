import React, { Component } from 'react'

class ProductList extends Component {
    constructor() {
        super();

        this.state = {
            products: [1, 2, 3, 4, 5, 6]
        }
    }

    render() {
        const list = this.state.products.map((product) => <div key={product} className='col s12 m6'>
            <div className="card">
                <div className="card-image">
                    <img src="https://www.apple.com/v/product-red/k/meta/og.png?201811300738" />
                    <span className="card-title">Card Title</span>
                    <a className="btn-floating halfway-fab waves-effect waves-light green"><i className="material-icons">add</i></a>
                </div>
                <div className="card-content">
                    <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                </div>
            </div>
        </div>)

        return (
            <div className='row'>
                {list}
            </div>
        )
    }
}

export default ProductList