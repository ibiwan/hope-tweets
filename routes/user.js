const express = require('express')
const router  = express.Router()

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send({
        success : true,
        count   : 2,
        users   : [
            {
                username   : 'jkent',
                first_name : 'jeremie'
            },
            {
                username   : 'ibiwan',
                first_name : 'old bin'
            }
        ]
    })
})

module.exports = router
