
import './Persons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Persons = (props) => {
    // console.log(props.person);
    const {name,role,age,country,img,salary,phone}=props.person;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
       
  <div class="col">
    <div class="card h-100">
      <img src={img} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title"><small><b>Name:</b>{name}</small></h5>
        <p class="card-text"><b>Role:</b>{role}</p>
        <p class="card-text"><b>Age:</b>{age}</p>
        <p class="card-text"><b>Country:</b> {country}</p>
        <p class="card-text"><b>Salary:</b> {salary}</p>
        <p class="card-text"><b>Phone:</b> {phone}</p>
      </div>
      <div class="card-footer bg-white border-0">
        <button 
        onClick={ ()=> props.handleAddtoCart(props.persons)}
        className=
        "btn btn-success"
        >{element} Add to cart</button>
      </div>
    </div>
  </div>

    );
};

export default Persons;