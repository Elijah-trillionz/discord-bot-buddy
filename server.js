const express = require('express');
const startBot = require('./app');
const app = express();
const PORT = process.env.PORT || 5000;

startBot();

app.all('/', (req, res) => {
  res.send('Buddy bot is running');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
