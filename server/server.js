const express = require('express');
const app = express();

app.use(express.json());

let emails = [];

app.get('/emails', (req, res) => {
  res.json(emails);
});

app.post('/emails', (req, res) => {
  const email = req.body.email;
  if (!emails.includes(email)) {
    emails.push(email);
    res.status(201).send('E-mail cadastrado com sucesso!');
  } else {
    res.status(400).send('E-mail já cadastrado!');
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
