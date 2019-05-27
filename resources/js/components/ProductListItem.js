import React, { Component } from 'react'

class ProductListItem extends Component {
    constructor() {
        super()

        this.state = {
            liked: false
        }
    }

    handleClickLiked() {
        this.setState({ liked: true })
    }

    render() {
        return (
            <div className="card horizontal">
                <div className="card-image">
                    <img src="https://media.istockphoto.com/photos/cosmetic-products-lipstik-and-perfume-on-gray-background-top-view-picture-id845020772?k=6&m=845020772&s=612x612&w=0&h=_lXnHzVVnij9tHEWr1Avw10ISrhb1SGeGncd_vQO3Rg=" />
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <span className='card-title'>Product Name</span>
                        <p>I am a very simple card. I am good at containing small bits of information.</p>
                    </div>
                    <div className="card-action">
                        <a className='blue-text' href="#">View</a>
                        <a className='red-text right' href="#" onClick={this.handleClickLiked.bind(this)}>
                            {(this.state.liked) ? <i className="material-icons">favorite</i> : <i className="material-icons">favorite_border</i>}
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductListItem