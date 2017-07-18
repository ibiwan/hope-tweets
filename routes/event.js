'use strict'

const express = require('express')
const router  = express.Router()
const orm     = require('../config/orm')
const Event   = orm.model('Event')

const path = '/'

router
    .get(path, function (req, res, next) {
        Promise
            .resolve()
            .then(function () {
                return Event.find()
            })
            .then(function (events) {
                res.send({
                    success: true,
                    count: events.length,
                    events: events
                })
            })
            .catch(function (err) {
                res.send({
                    message : 'error fetching events: ' + err,
                    error   : err,
                })
            })
    })
    .post(path, function (req, res, next) {
        Promise
            .resolve()
            .then(function () {
                let evt = new Event(req.body)
                return evt.save_or_make()
            })
            .then(function (event) {
                res.render('debug', {
                    data : JSON.stringify(event, null, 2),
                })
            })
            .catch(function (err) {
                if (err.message && err.message.startsWith('E11000')) {
                    res.render('error', {
                        message : 'Error: Event Already Exists',
                        error   : err,
                    })
                }
                res.render('error', {
                    message : 'error creating event: ' + err,
                    error   : err,
                })
            })
    })

module.exports = router
