const express = require('express');
const cors = require('cors');
const connection = require('./db/connection');
const Routes = require('./router/router');
const app = express();
const PORT = 8000;
app.use(express.json());
app.use(cors());
app.use('/', Routes);
connection();

app.get('/get', (req, resp) => {
  resp.json('working fine');
});

app.listen(PORT, () => {
  console.log('server is live');
});
