import React from 'react';
import DetailsPerson from '../DetailsPerson/DetailsPerson';

const Cart = (props) => {
    const {personsHandle} = props;
    //total calculation
    const reduceTotal = (previousValue , currentValue) => previousValue + currentValue.salary;
    const total = personsHandle.reduce(reduceTotal ,0);
    return (
        <div className="text-center sticky-top">
            <h3 className="my-3"><i class="fas fa-user"></i> Persons Added : {personsHandle.length}</h3>
            <h4 className="my-3"><b>Total Cost : ${total}</b></h4>
            <button 
        className=
        "btn btn-custom text-center"
        ><i class="fas fa-cart-plus"></i> Buy Now</button>
          <div>
         {personsHandle.map(person => <DetailsPerson
                key={person.id}
                person={person}>
                </DetailsPerson>)}
          </div>
        </div>
    );
};

export default Cart;