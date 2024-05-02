const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/customers", (req, res) => {
  res.send([
    {
      id: 1,
      image: "Image1",
      name: "홍길동",
      birthday: "980122",
      gender: "남자",
      job: "대학생",
    },
    {
      id: 2,
      image: "Image2",
      name: "이순신",
      birthday: "960727",
      gender: "남자",
      job: "장군",
    },
    {
      id: 3,
      image: "Image3",
      name: "아따맘마",
      birthday: "890205",
      gender: "여자",
      job: "주부",
    },
  ]);
});

app.listen(port, () => console.log(`Listening on ${port}`));
