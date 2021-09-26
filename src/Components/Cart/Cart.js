import React from 'react';
import DetailsPerson from '../DetailsPerson/DetailsPerson';
import './Cart.css'

const Cart = (props) => {
    const {personsHandle} = props;
    const reduceTotal = (previousValue , currentValue) => previousValue + currentValue.salary;
    const total = personsHandle.reduce(reduceTotal ,0);
    return (
        <div className="text-center sticky-top">
            <h3><i class="fas fa-user"></i> Persons Added : {personsHandle.length}</h3>
            <h5>Total Cost : ${total}</h5>
            <button 
        className=
        "btn btn-custom text-center"
        >Buy Now</button>
          <div>
         {personsHandle.map(person => <DetailsPerson
                key={person.id}
                person={person}
         ></DetailsPerson>)}
          </div>
        </div>
    );
};

export default Cart;