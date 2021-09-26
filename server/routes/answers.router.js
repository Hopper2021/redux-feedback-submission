const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.post('/', (req, res) => {
    const answer = req.body;
    console.log(req.body);
    
    const sqlText = `INSERT INTO "feedback" 
        ("feeling", "understanding", "support", "comments")
        VALUES ($2, $3, $4, $5)`;
    pool.query(sqlText, 
        [answer[0], answer[1], answer[2], answer[3]])
        .then((result) => {
            console.log(`Added answers to the database`, answer);
            res.sendStatus(200);            
        }).catch((error) => {
            console.log('Error adding answers to database. Error:', error);
            res.sendStatus(500);
        })
})

module.exports = router;