const express = require("express");
const path = require("path");
const routes = require("./src/routes");

const app = express();

const port = 3001;
app.use('/static' ,express.static(path.join(__dirname, 'static')))
app.use('/assets' ,express.static(path.join(__dirname, 'assets')))
app.use('/static' ,express.static(path.join(__dirname, 'static')))
app.use(routes);

app.use((req, res) => {
  res.status(404);
  res.send(`<h1>Error 404: Recurso não encontrado</h1>`);
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

