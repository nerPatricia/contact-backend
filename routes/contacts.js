var express = require("express");
var db = require("../database.js");
var router = express.Router();

router.get("/get-person", function(req, res, next) {
  res.send({ person: db.contacts.listPerson() });
});

router.get("/get-company", function(req, res, next) {
  res.send({ company: db.contacts.listCompany() });
});

router.get("/get-allcontacts", function(req, res, next) {
  res.send({ allcontacts: db.contacts.listAllContacts() });
});

router.post("/register-person", function(req, res, next) {
  res.send({ data: db.contacts.addPerson(req.body.person) });
});

router.post("/register-company", function(req, res, next) {
  res.send({
    data: db.contacts.addCompany(req.body.company)
  });
});

router.put("/update-person/:id", function(req, res, next) {
  res.send({
    data: db.contacts.setPerson(req.params.id, req.body.person)
  });
});

router.put("/:id", function(req, res, next) {
  res.send({
    data: db.contacts.setCompany(
      req.params.item,
      req.body.title,
      req.body.completed
    )
  });
});

router.delete("/:contact", function(req, res, next) {
  res.send({ data: db.contacts.deletePerson(req.params.item) });
});

router.delete("/:contact", function(req, res, next) {
  res.send({ data: db.contacts.deleteCompany(req.params.item) });
});

module.exports = router;
