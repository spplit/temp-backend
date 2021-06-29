const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;

const cards = [
  {
    id: 0,
    division: "bookmark",
    name : "Jihye Ryu",
    job : "consultant",
    phone : "01012345678",
    email : "jihyeryu@gmail.com",
    tags : ["kakao", "pangyo", "abc"],
    notes : "3pm tea meeting in Starbucks",
    imgUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrOH9hpWx5u8nd1x5wVNZLNWK8m_mh1M3WdQ&usqp=CAU"
  },
  {
    id: 1,
    division: "hobby",
    name : "Jeongbeom Son",
    job : "student",
    phone : "01098446598",
    email : "sjb@gmail.com",
    tags : ["hyu", "likelion", "def"],
    notes : "tomorrow",
    imgUrl : ""
  },
  {
    id: 2,
    division: "work",
    name : "jason park",
    job : "frontend developer",
    phone : "01018234467",
    email : "jpark@gmail.com",
    tags : ["aomg", "naver", "xyz"],
    notes : "im livin in a paranoid",
    imgUrl : ""
  }
];


app.use(cors());
app.options("*", cors());

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/cards", (req, res) => res.json(cards));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));