const express = require('express');
const app = express();
const router = express.Router();
const db = require('../server/db');

router.get('/biler', (req, res) => {
    db.query('SELECT * FROM ev_range', null, (error, result) => {
        if (error) {
            throw error;
        }
        res.render('biler', {
            data: result.rows
        })
    })
});

module.exports = router;