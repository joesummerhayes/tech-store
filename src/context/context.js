import React from 'react';
import {linkData} from './linkData';


const ProductContext = React.createContext();



class ProductProvider extends React.Component {

    state = {
        sidebarOpen: false,
        cartOpen: false,
        cartItems: 0,
        links: linkData,
    }

    //handle side bar
    handleSidebar = () => {
        console.log('handle sidebar')
        this.setState({
            sidebarOpen: !this.state.sidebarOpen
        })
    }

    //handle side cart
    handleCart = () => {
        console.log('handle cart')
        this.setState({
            cartOpen: !this.state.sidecartOpen
        })
    }

    // close cart
    closeCart = () => {
        this.setState({cartOpen: false})
    }

    // open cart
    openCart = () => {
        this.setState({cartOpen: true})
    }

    render() {
        return (
            <ProductContext.Provider
                value={{
                    ...this.state,
                    handleSidebar: this.handleSidebar,
                    handleCart: this.handleCart,
                    closeCart: this.closeCart,
                    openCart: this.openCart,

                }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};