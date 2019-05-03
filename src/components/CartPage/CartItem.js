import React from 'react';
import {
    FaTrash, FaChevronCircleUp, FaChevronCircleDown 
} from 'react-icons/fa';

export default function CartItem({cartItem, increment, decrement, removeItem}) {
    const {id, title, price, count, total, image} = cartItem;
    return (
        <div className="row mt-5 mt-lg-0 text-capitalize text-center align-items-center">
            {/* image start */}
            <div className="col-10 mx-auto col-lg-2 pb-2">
                <img src={image} width="60" className="img-fluid" alt="product" />
            </div>
            {/* image end */}
            {/* title start */}
            <div className="col-10 mx-auto col-lg-2 pb-2">
                <span className="d-lg-none">product: </span>{title}
            </div>
            {/* title end */}
            {/* price start */}
            <div className="col-10 mx-auto col-lg-2 pb-2">
                <span className="d-lg-none">price: </span>£{price}
            </div>
            {/* price end */}
            {/* count controls start */}
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <FaChevronCircleDown className="text-primary cart-icon" onClick={()=>{decrement(id)}} />
                    <span className="text-title text-muted mx-3">{count}</span>
                    <FaChevronCircleUp className="text-primary cart-icon" onClick={()=>{increment(id)}} />
                </div>
            </div>
            {/* count controls end */}
            {/* removeItem start */}
            <div className="col-10 mx-auto col-lg-2 pb-2">
                <FaTrash className="cart-icon text-danger" onClick={()=> {removeItem(id)}} />
            </div>
            {/* removeitem end */}
             {/* item total start */}
             <div className="col-10 mx-auto col-lg-2">
                <strong className="text-muted"> item total: £{total}</strong>
            </div>
            {/* item total end */}
        </div>
    )
}