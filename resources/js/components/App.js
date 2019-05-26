import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header'
import ProductList from './ProductList'
import Test from './Test'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header />
                <div className='container'>
                    <Switch>
                        <Route exact path='/' component={ProductList}></Route>
                        <Route path='/test' component={Test}></Route>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));