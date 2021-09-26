
import "./Persons.css";

const Persons = (props) => {
 
  const { name, role, age, country, img, salary, phone } = props.person;
  return (
    <div className="col ">
      <div class="card h-100  rounded-3 shadow">
        <div class="text-center img-container p-2">
          <img src={img} class="card-img-top rounded-circle " alt="..." />
        </div>
        <div class="card-body text-center">
          <h5 class="card-title">
            <small>
              <b>Name: {name}</b>
            </small>
          </h5>
          <p class="card-text">
            <b>Role: {role}</b>
          </p>
          <p class="card-text">
            <b>Age:{age} </b>
          </p>
          <p class="card-text">
            <b>Country: {country}</b>
          </p>
          <p class="card-text">
            <b>Salary: ${salary} </b>{" "}
          </p>
          <p class="card-text">
            <b>Phone: {phone} </b>{" "}
          </p>
          <div className="d-flex justify-content-evenly">
            <h2>
              <a href="https://www.facebook.com/" target="_blank"  rel="noreferrer">
                <i class="fab fa-facebook"></i>
              </a>
            </h2>
            <h2>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                <i class="fab fa-twitter"></i>
              </a>
            </h2>
          </div>
        </div>
        <div class="card-footer bg-white border-0 text-center">
          <button
            onClick={() => props.handleAddtoPerson(props.person)}
            className="btn btn-custom w-100"
          >
            <i class="fas fa-user-plus"></i> Add Person
          </button>
        </div>
      </div>
    </div>
  );
};

export default Persons;
