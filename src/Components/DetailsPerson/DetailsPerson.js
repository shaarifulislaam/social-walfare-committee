import React from 'react';

const DetailsPerson = (props) => {
    const {name,img,role} =props.person
    return (
        <div class="card my-3 shadow">
  <div class="row g-0">
    <div class="col-md-3 text-center p-2 justify-content-center align-items-center">
      <img src={img} class="img-fluid rounded-circle " alt="..." />
    </div>
    <div class="col-md-9">
      <div class="card-body">
        <p class="card-title"><small><b>Name : {name}</b></small></p>
        <p class="card-text"><small><b>Role: {role}</b></small></p>
      </div>
    </div>
  </div>
</div>
    );
};

export default DetailsPerson;