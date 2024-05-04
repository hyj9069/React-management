import React, { useState, useEffect } from "react";
import "./App.css";
import Customer from "./components/Customer";
// import Image1 from "./img/profile(1).jpg";
// import Image2 from "./img/profile(1).jpg";
// import Image3 from "./img/profile(1).jpg";
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
      setIsLoading(false); // 데이터 로딩이 완료되면 isLoading 상태를 false로 업데이트
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
          {isLoading && ( // isLoading 상태가 true인 경우에만 프로그레스 바를 렌더링
            <TableRow>
              <TableCell colSpan="6" align="center">
                <ProgressBar />
              </TableCell>
            </TableRow>
          )}
          {!isLoading &&
            customers.map(
              (
                customer // 데이터 로딩이 완료된 후에는 테이블 데이터를 렌더링
              ) => <Customer key={customer.id} id={customer.id} image={customer.image} name={customer.name} birthday={customer.birthday} gender={customer.gender} job={customer.job} />
            )}
        </TableBody>
      </RootTable>
    </RootPaper>
  );
}

// function getImagePath(id) {
//   switch (id) {
//     case 1:
//       return Image1;
//     case 2:
//       return Image2;
//     case 3:
//       return Image3;
//     default:
//       return "";
//   }
// }

export default App;
