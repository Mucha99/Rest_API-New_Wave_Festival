const express = require('express');
const router = express.Router();

const ConcertController = require('../controllers/concerts.controller');

router.get('/concerts', ConcertController.getAll);
router.get('/concerts/:id', ConcertController.getOne);
router.post('/concerts', ConcertController.post);
router.put('/concerts/:id', ConcertController.put);
router.route('/concerts/:id', ConcertController.delete);

module.exports = router;