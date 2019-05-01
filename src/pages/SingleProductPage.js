import React from 'react';
import {Link} from 'react-router-dom';
import Hero from '../components/Hero';
import singleProductImage from '../images/singleProductBcg.jpeg';
import {ProductConsumer} from '../context';


export default function SingleProductPage() {
    return (
        <>
        <Hero title="single product" img={singleProductImage}/>
        <ProductConsumer>
            {value => {
                const {singleProduct, addToCart, loading} = value;

                if(loading) {
                    console.log('hello from loading');
                    return <h2>product loading...</h2>
                }
                const {company, description, price, id, title, image} = singleProduct;
                return <section className="py-5">
                            <div className="container">
                                <div className="row">
                                    <img src={`../${image}`} alt="single product" className="img-fluid" />
                                </div>
                                <div className="col-10 mx-auto col-sm-8 col-md3 my-3">
                                <h5 className="text-title mb-4">model: {title}</h5>
                                <h5 className="text-capitalize text-muted mb-4">company: {company}</h5>
                                <h5 className="text-main text-capitalize mb-4">price: {price}</h5>
                                <p className="text-capitalize text-title mt-3">some info about the product:</p>
                                <p>{description}</p>
                                <button type="button"
                                className="main-link"
                                style={{margin:"0.75rem"}}
                                onClick={()=> addToCart(id)}
                                >
                                add to cart
                                </button>
                                <Link
                                to='/products'
                                className="main-link"
                                style={{margin:"0.75rem"}}
                                >
                                back to products
                                </Link>
                                </div>
                            </div>
                        </section>
            }}
        </ProductConsumer>
        </>
    );
}