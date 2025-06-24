const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json(["Work", "Personal", "Ideas"]);
});

router.post('/', (req, res) => {
  res.json({ message: "Category added (dummy)" });
});

module.exports = router;