import React from 'react';
import CartSection from "../components/CartPage";
import cartBcg from '../images/storeBcg.jpeg';
import Hero from '../components/Hero';


export default function CartPage(props) {
    console.log(props);
    return (
        <>
        <Hero img={cartBcg} />
        <CartSection history={props}/>
        </>
    );
}