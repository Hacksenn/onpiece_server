const express = require('express');
const app = express();
const cors = require("cors");

let corsOptions = {
  origin: true,      // 출처 허용 옵션 true 혹은 '*'
  credential: true, // 사용자 인증이 필요한 리소스(쿠키 등) 접근
}

app.use(cors(corsOptions))

require('dotenv').config('');

const port = process.env.PORT;

const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(express.json());

app.use('/api', require('./routes/index'));

//메인화면 설정
app.get("/", (req, res) => {
  res.send("안녕하세요, 항해99 10기 E반 김혜란 입니다.");
});

const ErrorHandler = require('./middleWares/error.handler.middleware');
app.use(ErrorHandler);

app.listen(port, () => {
  console.log(port, '포트로 서버가 열렸어요!');
});

module.exports = app;