const express = require('express');
const Quest = require('../models/Quest');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const quests = await Quest.find();
    res.json(quests);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const quest = await Quest.findById(req.params.id);
    res.json(quest);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  const quest = new Quest({
    name: req.body.name,
    description: req.body.description,
  });
  try {
    const newQuest = await quest.save();
    res.status(201).json(newQuest);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const result = await Quest.updateOne(
      { _id: req.params.id },
      req.body,
    );
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const result = await Quest.deleteOne(
      { _id: req.params.id },
    );
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
