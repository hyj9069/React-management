import React from "react";
import "./App.css";
import Customer from "./components/Customer";
import Image1 from "./img/profile(1).jpg";
import Image2 from "./img/profile(1).jpg";
import Image3 from "./img/profile(1).jpg";
import { Paper, Table, TableHead, TableBody, TableCell, TableRow } from "@mui/material";
import { styled } from "@mui/material/styles";

// customers 배열 정의
const customers = [
  {
    id: 1,
    image: Image1,
    name: "홍길동",
    birthday: "980122",
    gender: "남자",
    job: "대학생",
  },
  {
    id: 2,
    image: Image2,
    name: "이순신",
    birthday: "960727",
    gender: "남자",
    job: "장군",
  },
  {
    id: 3,
    image: Image3,
    name: "아따맘마",
    birthday: "890205",
    gender: "여자",
    job: "주부",
  },
];

// RootPaper, RootTable 컴포넌트는 여전히 사용 가능합니다.
const RootPaper = styled(Paper)(({ theme }) => ({
  width: "100%",
  marginTop: theme.spacing(3),
  overflowX: "auto",
}));

const RootTable = styled(Table)(() => ({
  minWidth: 1080,
}));

function App() {
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
            <Customer key={customer.id} id={customer.id} image={customer.image} name={customer.name} birthday={customer.birthday} gender={customer.gender} job={customer.job} />
          ))}
        </TableBody>
      </RootTable>
    </RootPaper>
  );
}

export default App;
