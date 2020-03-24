const express = require("express");

const helpers = require("./helpers");

const router = express.Router();
const { contactMe } = helpers;

router.post("/contact-me", contactMe);

module.exports = router;
