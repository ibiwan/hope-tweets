const express = require('express')
const router  = express.Router()

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('app', {
        //data : JSON.stringify(req.body, null, 2),
    })})

module.exports = router
