var express = require('express');
var router = express.Router();
var textToSpeech = require('../helpers/tts');

/* GET home page. */
router.post('/talk', function(req, res, next) {
  textToSpeech(req.body.text, req.body.voice)
  .then(result => {
    res.json(result);    
  })
  .catch(err => {
    res.json({});
  });
});


router.post('/hello', function(req, res, next) {
  console.log(req.body)
  res.json({"respTxt": "This end point has been assecced"});
});

module.exports = router;
