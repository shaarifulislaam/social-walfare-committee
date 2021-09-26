import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // console.log(props.personsHandle);
    const {personsHandle} = props;
    const reduceTotal = (previousValue , currentValue) => previousValue + currentValue.salary;
    const total = personsHandle.reduce(reduceTotal ,0);
    const name =personsHandle.map(person => person.name)
    return (
        <div>
            {}
            <h3> Persons Added : {personsHandle.length}</h3>
            <h5>Total Cost : {total}</h5>
          <div className="bg-primary border-2">
          <h5><small>Name: {name}</small></h5>
         
          </div>
        </div>
    );
};

export default Cart;