const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;

const cards = [
  {
    id: 0,
    division: "work",
    name : "Jimmy Lim",
    job : "Frontend Developer",
    phone : "01098446598",
    email : "minsukim@gmail.com",
    tags : ["Kakao", "React", "Kotlin"],
    notes : "3pm meeting with Google",
    imgUrl : "https://file2.nocutnews.co.kr/newsroom/image/2015/10/06/20151006090004712617.jpg"
  },
  {
    id: 1,
    division: "work",
    name : "Jeongbeom Son",
    job : "Student",
    phone : "01018234467",
    email : "sjb9902@hanyang.ac.kr",
    tags : ["Likelion", "HYU", "Biz"],
    notes : "Likelion Session 7pm",
    imgUrl : "data:image/jpeg;base64,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"
  },
  {
    id: 2,
    division: "football",
    name : "Mason Mount",
    job : "Football Player",
    phone : "01012345678",
    email : "mm19@gmail.com",
    tags : ["Chelsea", "England", "Ace"],
    notes : "0630 1am vs German Euro2020",
    imgUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrOH9hpWx5u8nd1x5wVNZLNWK8m_mh1M3WdQ&usqp=CAU"
  },
  {
    id: 3,
    division: "work",
    name : "Hyebin Lee",
    job : "Designer",
    phone : "01098446598",
    email : "leehb0513@naver.com",
    tags : ["Kakao", "UIUX", "Zeplin"],
    notes : "nothing to note",
    imgUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcft75cl5kXXR0tvDbL0xMaDyEcRMhKvIEzw&usqp=CAU"
  },
  {
    id: 4,
    division: "work",
    name : "Heungmin Son",
    job : "Student",
    phone : "01098745621",
    email : "hmson7@gmail.com",
    tags : ["Donyang", "Future", "Kakao"],
    notes : "transfer meeting with RealMadird",
    imgUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-_ynNxxMDHZ6jvD-M22ObzCsx060Yz23Ykg&usqp=CAU"
  },
];


app.use(cors());
app.options("*", cors());

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/cards", (req, res) => res.json(cards));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));