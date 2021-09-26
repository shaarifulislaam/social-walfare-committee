import './Persons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Persons = (props) => {
    // console.log(props.person);
    const {name,role,age,country,img,salary,phone}=props.person;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
       
  <div className="col ">
    <div class="card h-100  rounded-3 shadow">
     <div class="text-center img-container p-2">
     <img src={img} class="card-img-top rounded-circle "  alt="..."/>
     </div>
      <div class="card-body text-center">
        <h5 class="card-title"><small><b>Name: {name}</b></small></h5>
        <p class="card-text"><b>Role: {role}</b></p>
        <p class="card-text"><b>Age:{age} </b></p>
        <p class="card-text"><b>Country:  {country}</b></p>
        <p class="card-text"><b>Salary: ${salary} </b> </p>
        <p class="card-text"><b>Phone: {phone} </b> </p>
      <div className="d-flex justify-content-evenly">
      <h2><a href=""><i class="fab fa-facebook"></i></a></h2>
       <h2><a href=""><i class="fab fa-twitter"></i></a></h2>
      </div>
      </div>
      <div class="card-footer card-container border-0 text-center">
        <button 
        onClick={ ()=> props.handleAddtoCart(props.person)}
        className=
        "btn btn-custom w-100"
        >{element} Add Person</button>
      </div>
    </div>
  </div>

    );
};

export default Persons;