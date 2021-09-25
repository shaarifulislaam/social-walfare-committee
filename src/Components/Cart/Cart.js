import React from 'react';
import './Cart.css'

const Cart = (props) => {
    console.log(props.personsHandle);
    const {personsHandle} = props;
    const reduceTotal = (previousValue , currentValue) => previousValue + currentValue.salary;
    const total = personsHandle.reduce(reduceTotal ,0);
    return (
        <div>
             <h3> Persons Added : {personsHandle.length}</h3>
            <h5>Total Cost : {total}</h5>
        </div>
    );
};

export default Cart;