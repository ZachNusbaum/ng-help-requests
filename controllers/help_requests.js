const express = require('express');
const router = express.Router();
const helpRequest = require('../models/helprequest');

router.get('/', (req, res) => {
  helpRequest.getAll((err, reqs) => {
    console.log(reqs);
    if(err) {
      res.json({success: 'false', message: `Failed to load requests. Err: ${err}`});
    } else {
      res.write(JSON.stringify({success: true, reqs: reqs}));
      res.end();
    }
  });
});

module.exports = router;