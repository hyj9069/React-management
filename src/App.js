import "./App.css";
import Customer from "./components/Customer";
import Image1 from "./img/profile(1).jpg";
import Image2 from "./img/profile(1).jpg";
import Image3 from "./img/profile(1).jpg";

function App() {
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

  return (
    <div>
      {customers.map((customer) => (
        <Customer key={customer.id} id={customer.id} image={customer.image} name={customer.name} birthday={customer.birthday} gender={customer.gender} job={customer.job} />
      ))}
    </div>
  );
}

export default App;
