'use strict'

const express = require('express')
const router  = express.Router()
const orm     = require('../config/orm')
const Tweet   = orm.model('Tweet')
const Event   = orm.model('Event')

const path = '/'

router
    .get(path, function (req, res, next) {
        Promise
            .resolve()
            .then(() =>
                orm.model('Event').create(
                    {
                        some:'data',
                        /* some data here */
                    }
                )
            )
            .then(event =>
                orm.model('Tweet').create(
                    {
                        event : event,
                        type  : 'snippet',
                    })
            )
            .then(function (tweet) {
                console.log({TWEET : tweet})
            })
            .catch(function (err) {
                console.log('CAUGHT ormcreate', err)
            })

        res.render('index', {
            title : 'Express',
        })
    })
    .post(path, function (req, res, next) {
        res.render('debug', {
            data : JSON.stringify(req.body, null, 2),
        })
    })

module.exports = router
