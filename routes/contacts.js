var express = require("express");
var db = require("../database.js");
var router = express.Router();

router.get("/get-person", function(req, res, next) {
  res.send({ person: db.contacts.listUser() });
});

router.get("/get-company", function(req, res, next) {
  res.send({ company: db.contacts.listCompany() });
});

router.post("/register-person", function(req, res, next) {
  res.send({ data: db.contacts.addUser(req.body.person) });
});

router.post("/register-company", function(req, res, next) {
  res.send({
    data: db.contacts.addCompany(req.body.company)
  });
});

router.put("/:item", function(req, res, next) {
  res.send({
    data: db.contacts.setUser(
      req.params.item,
      req.body.title,
      req.body.completed
    )
  });
});

router.put("/:item", function(req, res, next) {
  res.send({
    data: db.contacts.setCompany(
      req.params.item,
      req.body.title,
      req.body.completed
    )
  });
});

router.delete("/:item", function(req, res, next) {
  res.send({ data: db.contacts.deleteUser(req.params.item) });
});

router.delete("/:item", function(req, res, next) {
  res.send({ data: db.contacts.deleteCompany(req.params.item) });
});

module.exports = router;
