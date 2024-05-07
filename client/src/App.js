import React, { useState, useEffect } from "react";
import "./App.css";
import CustomerAdd from "./components/CustomerAdd";
import Customer from "./components/Customer";
import { Paper, Table, TableHead, TableBody, TableCell, TableRow } from "@mui/material";
import { styled } from "@mui/material/styles";
import CircularProgress from "@mui/material/CircularProgress";

const RootPaper = styled(Paper)(({ theme }) => ({
  width: "100%",
  marginTop: theme.spacing(3),
  overflowX: "auto",
}));

const RootTable = styled(Table)(() => ({
  minWidth: 1080,
}));

const ProgressBar = styled(CircularProgress)(({ theme }) => ({
  margin: theme.spacing(2),
}));

function App() {
  const [customers, setCustomers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    callApi();
  }, []);

  const callApi = async () => {
    try {
      const response = await fetch("/api/customers");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const body = await response.json();
      setCustomers(body);
      setIsLoading(false);
    } catch (error) {
      console.log("Error fetching data : ", error);
    }
  };

  const handleAddCustomer = async (formData) => {
    try {
      const response = await fetch("/api/customers", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const newCustomers = await response.json();
      setCustomers(newCustomers);
    } catch (error) {
      console.error("Error adding customer: ", error);
    }
  };

  return (
    <div>
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
            {isLoading && (
              <TableRow>
                <TableCell colSpan="6" align="center">
                  <ProgressBar />
                </TableCell>
              </TableRow>
            )}
            {!isLoading &&
              customers.map((customer) => (
                <Customer key={customer.id} id={customer.id} image={customer.image} name={customer.name} birthday={customer.birthday} gender={customer.gender} job={customer.job} />
              ))}
          </TableBody>
        </RootTable>
      </RootPaper>
      <CustomerAdd onAddCustomer={handleAddCustomer} />
    </div>
  );
}

export default App;
