import React from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
function Customer({ name, birthday, gender, job, id, image }) {
  const imgStyle = {
    width: "64px",
    height: "64px",
  };
  return (
    <TableRow>
      <TableCell>{id}</TableCell>
      <TableCell>
        <img src={image} style={imgStyle} alt="profileImg"></img>
      </TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>{birthday}</TableCell>
      <TableCell>{gender}</TableCell>
      <TableCell>{job}</TableCell>
    </TableRow>
  );
}
export default Customer;
