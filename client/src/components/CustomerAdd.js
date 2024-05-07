import React, { useState } from "react";
import axios from "axios";

const CustomerAdd = () => {
  const [file, setFile] = useState(null);
  const [userName, setUserName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  const [job, setJob] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault(); // 기본 폼 제출 동작 막기
    try {
      const formData = new FormData();
      formData.append("image", file);
      formData.append("name", userName);
      formData.append("birthday", birthday);
      formData.append("gender", gender);
      formData.append("job", job);

      await axios.post("/api/customers", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Customer added successfully!");
      window.location.reload(); // 페이지 새로고침
    } catch (error) {
      console.error("Error adding customer: ", error);
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleValueChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "userName":
        setUserName(value);
        break;
      case "birthday":
        setBirthday(value);
        break;
      case "gender":
        setGender(value);
        break;
      case "job":
        setJob(value);
        break;
      default:
        break;
    }
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <h1>고객 추가</h1>
      프로필 이미지: <input type="file" name="image" onChange={handleFileChange}></input> <br />
      이름: <input type="text" name="userName" value={userName} onChange={handleValueChange}></input> <br />
      생년월일: <input type="text" name="birthday" value={birthday} onChange={handleValueChange}></input> <br />
      성별: <input type="text" name="gender" value={gender} onChange={handleValueChange}></input> <br />
      직업: <input type="text" name="job" value={job} onChange={handleValueChange}></input> <br />
      <button type="submit">추가하기</button>
    </form>
  );
};

export default CustomerAdd;
