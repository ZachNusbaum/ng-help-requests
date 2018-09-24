const express = require('express');
const router = express.Router();
//const helpRequests = require('../models/help_requests')

router.get('/', (req, res) => {
  res.json({test: 'success'});
});

module.exports = router;