const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([{ id: 1, title: "Sample Note", content: "This is a note", category: "Work" }]);
});

router.post('/', (req, res) => {
  res.json({ message: "Note created (dummy)" });
});

router.put('/:id', (req, res) => {
  res.json({ message: `Note ${req.params.id} updated (dummy)` });
});

router.delete('/:id', (req, res) => {
  res.json({ message: `Note ${req.params.id} deleted (dummy)` });
});

module.exports = router;