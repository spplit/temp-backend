const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;

const cards = [
  {
    id: 0,
    division: "Work",
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
    division: "Bookmark",
    name : "Yoondo Kim",
    job : "Student",
    phone : "010-8921-9552",
    email : "Sukyeong@naver.com",
    tags : ["TOEFL", "IBT", "Develop"],
    notes : "Head Leader of HYU likelion SweetFactory",
    imgUrl : "https://i.pinimg.com/originals/09/ed/e7/09ede7fd884ad8acc0031c7e5a24756f.png"
  },
  {
    id: 2,
    division: "Activity",
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
    division: "Work",
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
    division: "Work",
    name : "Heungmin Son",
    job : "Student",
    phone : "01098745621",
    email : "hmson7@gmail.com",
    tags : ["Donyang", "Future", "Kakao"],
    notes : "transfer meeting with RealMadird",
    imgUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-_ynNxxMDHZ6jvD-M22ObzCsx060Yz23Ykg&usqp=CAU"
  },
  {
    id: 5,
    division: "Activity",
    name : "Mohamed Salah",
    job : "Football Player",
    phone : "01022202825",
    email : "salah19@daum.net",
    tags : ["Liverpool", "Egypt", "Striker"],
    notes : "Liverpool Main Striker",
    imgUrl : "https://file2.nocutnews.co.kr/newsroom/image/2018/07/02/20180702201334542920_0_710_426.jpg"
  },
  {
    id: 6,
    division: "Bookmark",
    name : "Hyeonmin Park",
    job : "Samsung EE Intern",
    phone : "010-4003-4703",
    email : "hyeonmin@naver.com",
    tags : ["Intern", "Tech", "EE"],
    notes : "Samsung Electronics Leadership Center",
    imgUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsIC1iMUwtfdtoeGfXQDJYKZhy9NWr3N92Xg&usqp=CAU"
  },
  {
    id: 7,
    division: "Club",
    name : "LikeLion Hanyang",
    job : "Likelion Management",
    phone : "01095175365",
    email : "zxcvb5434@likelion.org",
    tags : ["Code", "Project", "Service"],
    notes : "Hanyang Univ 9th Club",
    imgUrl : "https://media.vlpt.us/images/sgwon1996/post/a3252495-ba28-4b68-9ec9-f44b34b8f5bf/card.png"
  },
  {
    id: 8,
    division: "Work",
    name : "Jiwon Cha",
    job : "Master of Study",
    phone : "010-3000-1000",
    email : "yourmail@naver.com",
    tags : ["Study", "King", "Master"],
    notes : "Consultation about math class at the main building at 3pm.",
    imgUrl : "https://i.pinimg.com/originals/3b/7b/73/3b7b7373803859ebd471c784bf2b8819.png"
  },
  {
    id: 9,
    division: "Work",
    name : "Johnson Smith",
    job : "Baker",
    phone : "031-378-5557",
    email : "vamoz@naver.com",
    tags : ["Bread", "Florence", "Pan"],
    notes : "Renowned Baker",
    imgUrl : "https://i.pinimg.com/originals/ee/f1/cd/eef1cd57feaabc1e5fc4dfd43b567937.png"
  },
  {
    id: 10,
    division: "Club",
    name : "Sopt",
    job : "IT-Venture Club",
    phone : "010-9876-5432",
    email : "develop@sopt.org",
    tags : ["IT", "Venture", "Business"],
    notes : "Shout Our Passion Together",
    imgUrl : "https://lh3.googleusercontent.com/proxy/IXqt4ffB7TSx259JZ3GDPh3PsW0T7RJZ_yVRaMyDSEf6T4_VteNlYx6sgj-c7RGU4V-QU_Ntwy0LBlFVYPzjOuNyqj6XlzTu7hlHxffxopWx6NUAnpSDN5ZZf23e2xginrtUoTYWOykbaS8"
  },
  {
    id: 11,
    division: "Bookmark",
    name : "Jeongbeom Son",
    job : "Student",
    phone : "01018234467",
    email : "sjb9902@hanyang.ac.kr",
    tags : ["Likelion", "HYU", "Biz"],
    notes : "Likelion Session 7pm",
    imgUrl : "https://lh3.googleusercontent.com/proxy/glrijOf7OPNS8E9tQ9pdRqq1gDq258G34nPcKUAmGuFX2-lw7xjqIxsfudVQ9nvwWEWOxPDv0SUuNVPFpqjwAigMN1lylffAJr2_Q6EaX1zg7u50m-3arAFe0XYa-YcwO_nHrNm_qyLlDiQ"
  },
  {
    id: 12,
    division: "Club",
    name : "Kia Kim",
    job : "Car Manager",
    phone : "010-2282-8119",
    email : "abc123@kia.com",
    tags : ["KIA", "Car", "Manager"],
    notes : "Gold NameCard",
    imgUrl : "https://cdn.imweb.me/thumbnail/20210107/df4f01d984740.jpg"
  }  
];

const mycards = [  {
  id: 0,
  division: "Work",
  name : "Mango Kim",
  job : "Frontend Developer",
  phone : "010-1234-5678",
  email : "mango123@gmail.com",
  tags : ["Kakao", "React", "Kotlin"],
  notes : "3pm meeting with Google",
  imgUrl : "https://file2.nocutnews.co.kr/newsroom/image/2015/10/06/20151006090004712617.jpg"
},
{
  id: 1,
  division: "Bookmark",
  name : "Mango Kim",
  job : "Student",
  phone : "010-8921-9552",
  email : "mango@hanyang.ac.kr",
  tags : ["TOEFL", "IBT", "Develop"],
  notes : "Head Leader of HYU likelion SweetFactory",
  imgUrl : "https://i.pinimg.com/originals/09/ed/e7/09ede7fd884ad8acc0031c7e5a24756f.png"
}];


app.use(cors());
app.options("*", cors());

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/cards", (req, res) => res.json(cards));
app.get("/mycards", (req, res) => res.json(mycards));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));