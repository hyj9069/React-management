import React from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
function Customer({ name, birthday, gender, job, id, image }) {
  return (
    <TableRow>
      <TableCell>{id}</TableCell>
      <TableCell>
        <img src={image} alt="profileImg"></img>
      </TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>{birthday}</TableCell>
      <TableCell>{gender}</TableCell>
      <TableCell>{job}</TableCell>
    </TableRow>
    // <div>
    //   <CustomerProfile id={id} image={image} name={name} />
    //   <CustomerInfo birthday={birthday} gender={gender} job={job} />
    // </div>
  );
}

// function CustomerProfile({ image, name, id }) {
//   const imgStyle = {
//     width: "100px",
//     height: "100px",
//     borderRadius: "50%",
//   };
//   return (
//     <div>
//       <img src={image} style={imgStyle} alt="profile"></img>
//       <h2>
//         {name}({id})
//       </h2>
//     </div>
//   );
// }
// function CustomerInfo({ birthday, gender, job }) {
//   return (
//     <div>
//       <p>{birthday}</p>
//       <p>{gender}</p>
//       <p>{job}</p>
//     </div>
//   );
// }
export default Customer;
