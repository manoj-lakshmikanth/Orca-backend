const express = require('express');
const { nrcDetails, getDetails } = require('../controller/controller');

const router = express.Router();

router.post('/nrcDetails', nrcDetails);
router.get('/getDetails', getDetails);

module.exports = router;
