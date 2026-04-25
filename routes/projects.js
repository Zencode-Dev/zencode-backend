const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
  const projects = require(path.join(__dirname, '../projects.json'));
  res.json(projects);
});

module.exports = router;
