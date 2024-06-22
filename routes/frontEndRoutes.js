const express = require('express')
const{home} = require('../controllers/controllersEnd')

const router = express.Router()

router.get('/', home);

module.exports = router;