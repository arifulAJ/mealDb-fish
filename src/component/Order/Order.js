import React from 'react';

const Order = (props) => {
    console.log(props.cart)
    return (
        <div>
            <h1>Order list</h1>
            <h3>items ordered:{props.cart.length}</h3>
        </div>
    );
};

export default Order;