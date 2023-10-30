const express = require("express");
const path = require("path");
const routes = require("./routes");

const app = express();
const port = 3001;

app.use(routes);

app.use((req, res) => {
  res.status(404);
  res.send(`<h1>Error 404: Recurso não encontrado</h1>`);
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
