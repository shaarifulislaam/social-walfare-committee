import React, { useState } from 'react';
import Persons from '../Persons/Persons';
import Cart from '../Cart/Cart';

const Committee = () => {
    const [persons , setPersons] = useState([]);
    const [personsHandle,setPersonsHandle] = useState([]);
    useState(()=>{
        fetch('./Persons.json')
        .then(res => res.json())
        .then(data => setPersons(data))
    },[]);
    //handle add person
   const handleAddtoPerson = person => {
       const newPersons = [...personsHandle, person];
       setPersonsHandle(newPersons);
   }
    return (
        <div className="row mt-4 mx-3">
           <div className="col-md-9 order-1 order-lg-0  border border-end-1 border-top-0  border-start-0  border-bottom-0">
               <div className="row container row-cols-1 row-cols-md-3 g-4">
             {persons.map(person => <Persons
                    key={person.id}
                    person={person}
                    handleAddtoPerson={handleAddtoPerson}> 
             </Persons>)}
               </div>
           </div>
           <div className="col-md-3 order-0 order-lg-1 container">
              <Cart
                personsHandle={personsHandle}
                >
                </Cart>
           </div>
        </div>
    );
};

export default Committee;