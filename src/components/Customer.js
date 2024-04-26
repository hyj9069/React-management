import React from "react";

function Customer({ name, birthday, gender, job, id, image }) {
  return (
    <div>
      <CustomerProfile id={id} image={image} name={name} />
      <CustomerInfo birthday={birthday} gender={gender} job={job} />
    </div>
  );
}

function CustomerProfile({ image, name, id }) {
  const imgStyle = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
  };
  return (
    <div>
      <img src={image} style={imgStyle} alt="profile"></img>
      <h2>
        {name}({id})
      </h2>
    </div>
  );
}
function CustomerInfo({ birthday, gender, job }) {
  return (
    <div>
      <p>{birthday}</p>
      <p>{gender}</p>
      <p>{job}</p>
    </div>
  );
}
export default Customer;
