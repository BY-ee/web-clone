const express = require('express');
const path = require('path');
const app = express();
const port = 5500;
let comments = []; // 댓글 데이터가 담기는 배열을 comments 변수에 할당
let nextId = 0;    // 댓글이 등록될 때마다 데이터가 변경되므로 변수 상자 let 사용

app.use(express.json()); // 요청 본문에 포함된 JSON 데이터를 해석할 수 있도록 만들기
app.use(express.urlencoded({ extended: true })); // form으로 입력받은 요청 데이터를 처리할 수 있도록 만들기

// app.set('views', path.join(__dirname)); // views 경로를 현재 경로로 설정
app.set('view engine', 'ejs'); // 템플릿 엔진으로 EJS 사용
app.get('/', (req, res) => {   // '/' 경로로 접속하면 index.ejs 내용을 웹 브라우저에 표시
    res.render('index', { comments });
});
app.post('/create', (req, res) => {   // '/create' 경로로 들어오는 POST 요청을
    console.log(req.body);            // 처리할 수 있는 코드 추가
    const { content } = req.body;  // content를 name으로 갖는 데이터 가져오기
    comments.push({ id: nextId++, content});        // comments 배열에 데이터 넣어주기
    res.redirect('/');             // post 요청이 정상 처리되면 '/' 경로로 페이지 이동
});
app.post('/update/:index', (req, res) => {
    const { index } = req.params;
    const { content } = req.body;
    comments[index].content = content;
    res.redirect('/');
});
app.post('/delete/:index', (req, res) => {
    const index = req.params.index;
    comments.splice(index, 1);
    res.redirect('/');
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
