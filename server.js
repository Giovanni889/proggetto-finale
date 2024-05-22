const express = require('express');
const app = express();

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('progetto.db');

const port = 8888;

app.use(express.json());
app.use(express.static(__dirname));

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

app.get('/', (req, res, next) => {
    res.sendFile(__dirname + '/' + 'index.html');
});

app.get('/addquestion', (req, res, next) => {
    res.sendFile(__dirname + '/' + 'addquestion.html');
});

app.get('/listquestions', (req, res, next) => {
    res.sendFile(__dirname + '/' + 'listquestions.html');
});

app.post('/questions', (req, res) => {
    let question = req.body;
    let sql = 'INSERT INTO questions (question, answer, rating) VALUES (?, ?, ?)';
    let values = [question.question, question.answer, question.rating];
    db.run(sql, values, (err, result) => {
      if (err) throw err;
      res.send('Question has been added...');
    });
  });

  app.get('/questions', (req, res) => {
    let sql = 'SELECT id, question, answer, rating FROM questions';
    db.all(sql, (err, results) => {
      if (err) throw err;
      res.send(results);
    }); 
  });

  app.delete('/questions/:id', (req, res) => {
    let sql = `DELETE FROM questions WHERE id=${req.params.id}`;
    db.run(sql, (err, result) => {
      if (err) throw err;
      res.send('Question deleted...');
    });
  });
  
  app.put('/questions/:id', (req, res) => {
    let question = req.body;
    let sql = `UPDATE questions SET question='${question.question}', answer='${question.answer}', rating=${question.rating} WHERE id=${req.params.id}`;
    db.run(sql, (err, result) => {
      if (err) throw err;
      res.send('Question updated...');
    });
  });

  app.get('/random', (req, res) => {
    let sql = 'SELECT * FROM questions ORDER BY RANDOM() LIMIT 1';
    db.all(sql, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  });