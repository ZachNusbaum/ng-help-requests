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

router.post('/', (req, res, next) => {
  let newRequest = new helpRequest({
    fullname: req.body.fullname,
    subject: req.body.fullname,
    message: req.body.message,
    urgent: req.body.urgent
  });

  helpRequest.addNew(newRequest, (err, list) => {
    if(err) {
      res.json({success: false, message: `Error! ${err}`});
    } else {
      res.json({success: true, message: 'Added successfully!'});
    }
  });
});

router.delete('/:id', (req, res, next) => {
  let id = req.params.id;

  helpRequest.deleteId(id, (err, request) => {
    if(err) {
      res.json({success: false, message: 'Could not delete.'});
    } else if(request) {
      res.json({success: true, message: 'Deleted!'});
    } else {
      res.json({success: false});
    }
  })
});

module.exports = router;