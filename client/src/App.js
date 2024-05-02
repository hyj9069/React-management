import React, { useState, useEffect } from "react";
import "./App.css";
import Customer from "./components/Customer";
import Image1 from "./img/profile(1).jpg";
import Image2 from "./img/profile(1).jpg";
import Image3 from "./img/profile(1).jpg";
import { Paper, Table, TableHead, TableBody, TableCell, TableRow } from "@mui/material";
import { styled } from "@mui/material/styles";

const RootPaper = styled(Paper)(({ theme }) => ({
  width: "100%",
  marginTop: theme.spacing(3),
  overflowX: "auto",
}));

const RootTable = styled(Table)(() => ({
  minWidth: 1080,
}));

function App() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    callApi();
  }, []);

  const callApi = async () => {
    try {
      //비동기적으로 접속하고자하는 api주소를 넣기
      const response = await fetch("/api/customers");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const body = await response.json(); //json형태로 body변수에 담기
      setCustomers(body);
    } catch (error) {
      console.log("Error fetching data : ", error);
    }
  };
  return (
    <RootPaper>
      <RootTable>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map((customer) => (
            <Customer key={customer.id} id={customer.id} image={getImagePath(customer.id)} name={customer.name} birthday={customer.birthday} gender={customer.gender} job={customer.job} />
          ))}
        </TableBody>
      </RootTable>
    </RootPaper>
  );
}

function getImagePath(id) {
  switch (id) {
    case 1:
      return Image1;
    case 2:
      return Image2;
    case 3:
      return Image3;
    default:
      return "";
  }
}

export default App;
