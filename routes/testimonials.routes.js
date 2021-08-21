const express = require('express');
const router = express.Router();
let db = require('../db');

router.route('/testimonials').get((req, res) => {
    res.json(db.testimonials);
});

router.route('/testimonials/:id').get((req, res) => {
    res.json(db.testimonials[req.params.id]);
});

router.route('/testimonials/random').get((req, res) => {
    let item = db.testimonials[Math.floor(Math.random() * db.testimonials.length )];
    res.json(item);
});

router.route('/testimonials').post((req, res) => {
    const person = {
        id: (db.testimonials.length + 1),
        author: req.body.author,
        text: req.body.text,
    }
    db.testimonials.push(person);
    return res.json({
        message: 'ok'
    });
});

router.route('/testimonials/:id').put((req, res) => {
    db.testimonials.forEach(person => {
        if(person.id == req.params.id) {
            person.author = req.body.author;
            person.text = req.body.text;
        }
    });
    return res.json({
        message: 'ok'
    });
});

router.route('/testimonials/:id').delete((req, res) => {
    db.testimonials.forEach(person => {
        if(person.id == req.params.id) {
            const index = db.testimonials.indexOf(person);
            db.testimonials.splice(index, 1);
        }
    });
    return res.json({
        message: 'ok'
    });
});

module.exports = router;