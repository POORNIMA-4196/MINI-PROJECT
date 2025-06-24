const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  res.json({ message: "User logged in (dummy)" });
});

router.post('/register', (req, res) => {
  res.json({ message: "User registered (dummy)" });
});

module.exports = router;