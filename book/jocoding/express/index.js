const express = require('express'); // 익스프레스 패키지 불러오기
const cors = require('cors');      // CORS를 위한 middleware
const app = express();              // 서버 역할을 할 앱 생성
const port = 5500;                  // 서버가 요청받을 포트번호

app.use(cors());                     // CORS middleware를 app에 등록

app.get('/', (req, res) => {         // '/' 경로로 GET 요청이 오면
  res.send('Hello World!');           // 'Hello World!' 문자열 전송
});

app.get('/sound/:name', (req, res) => {  // 변수명 형태로 경로 설정
    const { name } = req.params;

    if (name == "dog") {
        res.json({'sound': 'Woof!'});
    } else if (name == 'cat') {
        res.json({'sound': 'Meow!'});
    } else if (name == 'bird') {
        res.json({'sound': 'Chirp!'});
    } else if (name == 'pig') {
        res.json({'sound': 'Oink!'});
    } else {
        res.json({'sound': 'unknown'});
    }
});

app.listen(port, () => {             // 서버 시작
  console.log(`Example app listening on port ${port}`);
});             // 콘솔에 메시지를 띄워 서버의 실행 상태를 표시