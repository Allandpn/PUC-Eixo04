const { Router } = require("express");
const path = require("path");

const routes = Router();
routes.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../templates/index.html"));
});
routes.get("/index", (req, res) => {
  res.sendFile(path.join(__dirname, "../../templates/index.html"));
});
routes.get("/dashboard", (req, res) => {
  res.sendFile(path.join(__dirname, "../../templates/dashboard.html"));
});
routes.get("/acervo", (req, res) => {
  res.sendFile(path.join(__dirname, "../../templates/acervo.html"));
});
routes.get("/admin", (req, res) => {
  res.sendFile(path.join(__dirname, "../../templates/admin.html"));
});
routes.get("/alunos", (req, res) => {
  res.sendFile(path.join(__dirname, "../../templates/alunos.html"));
});
routes.get("/backup", (req, res) => {
  res.sendFile(path.join(__dirname, "../../templates/backup.html"));
});
routes.get("/layout", (req, res) => {
  res.sendFile(path.join(__dirname, "../../templates/layout.html"));
});
routes.get("/login1", (req, res) => {
  res.sendFile(path.join(__dirname, "../../templates/login1.html"));
});
routes.get("/novo-usuario", (req, res) => {
  res.sendFile(path.join(__dirname, "../../templates/novo-usuario.html"));
});
routes.get("/recuperando-senha", (req, res) => {
  res.sendFile(path.join(__dirname, "../../templates/novo-usuario.html"));
});

module.exports = routes;
