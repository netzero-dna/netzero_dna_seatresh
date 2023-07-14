const express = require('express');
const app = express();
const db = require('./models/index.js');
const {SeaTresh} = db;

// 지역에 따른 데이터 조회
app.get('/api/seatreshes', async (request, response) => {
  const {local} = request.query;
  if (local) {
    const localGroup = await SeaTresh.findAll({where: {local: local}});
    if (localGroup.length === 0) {
      response.status(404).send({message: '존재하지 않는 데이터입니다.'});
    } else {
      response.send(localGroup);
    }
  } else {
    const locals = await SeaTresh.findAll();
    response.send(locals);
  }
});

// 서버 연결
app.listen(3000, () => {
  console.log('Server is listening…');
});