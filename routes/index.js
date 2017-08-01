'use strict'
var express = require('express');
var router = express.Router();
var db = require('monk')('mongodb://ghulammustafaraz:steel.123@ds143532.mlab.com:43532/my-quiz');
var questionData = db.get('questions')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('asdhhjsdfg');
});

router.get('/get-data', (req, res) => {
    questionData.find()
    .then(data => {
        res.send(data[0]) 
    })
    // res.send({res: 'res'})    
})

router.post('/set-data', (req, res) => {
    // console.log(JSON.parse(req.body))
    let obj = req.body;
    console.log(typeof obj.answers)
    obj.answers = JSON.parse(obj.answers)
    console.log(typeof obj.answers)
    questionData.find()
    .then(data => {
        var copy = Object.assign({}, data[0]);
        var id = copy._id;
        delete copy._id 
        copy.questions.push(obj);
        // console.log(copy)
        questionData.update({_id: db.id(id)},copy)
    })
})

// router.post('/del-data', (req, res) => {
//     let key = req.body.key;
//     console.log(key)
//     questionData.remove({_id: db.id(key)}, (d) => {
//         res.send(d)
//     })
// })

module.exports = router;