const Concert = require('../models/concerts.model');

exports.getPerformer = async (req, res) => {
    try {
        const con = await Concert.find({ performer: req.params.performer });
        if(!con) res.status(404).json({ message: 'Not found' });
        else res.json(con);
    }
    catch(err) {
        res.status(500).json({ message: err });
    }
};

exports.getGenre = async (req, res) => {
    try {
        const con = await Concert.find({ genre: req.params.genre });
        if(!con) res.status(404).json({ message: 'Not found' });
        else res.json(con);
    }
    catch(err) {
        res.status(500).json({ message: err });
    }
};

exports.getPrice = async (req, res) => {
    try {
        const con = await Concert.find({ price : {
            $gte: req.params.price_min, 
            $lte: req.params.price_max} 
        });
        if(!con) res.status(404).json({ message: 'Not found' });
        else res.json(con);
    }
    catch(err) {
        res.status(500).json({ message: err });
    }
};

exports.getDay = async (req, res) => {
    try {
        const con = await Concert.find({ day: req.params.day });
        if(!con) res.status(404).json({ message: 'Not found' });
        else res.json(con);
    }
    catch(err) {
        res.status(500).json({ message: err });
    }
};