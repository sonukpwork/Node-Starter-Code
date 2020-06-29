require('../models/example-model'); // Example Model is being exported from models folder
const express = require('express');

const {
  indexPage,
} = require('../controllers/example-controller'); /* indexPage function exported from controller folder
 in example-Controller file */

const router = express.Router();

router.get('/', indexPage); //  Home Route

module.exports = router;
