var express = require('express')
var router  = express.Router()
var db      = require('../config/orm')
var Tweet   = require('../schemas/tweet').model
var Event   = require('../schemas/event').model

const path = '/'

/* GET home page. */
router
    .get(path, function (req, res, next) {
        console.log('db-ing')
        db.once('open', function () {
            // we're connected!
            console.log('connected!')
            return

            var nine_am = new Event({})
            var fluffy  = new Tweet({
                event_date : Date.now(),

            })
            nine_am
                .save(function (err, nine_am) {
                    return nine_am
                })
                .then(function (nine_am) {
                    fluffy.save(function (err, fluffy) {
                        if (err) {
                            return console.error(err)
                        }
                        console.log('second identity')
                        fluffy.identify()

                        Tweet.find({
                            // name: /^fluff/
                        }, function (err, kittens) {
                            console.log('search results', err, kittens)
                            kittens.forEach(function (x) {
                                x.identify()
                            })
                            db.close()
                        })
                    })
                })
                .fail(function () {
                    console.log('fail')
                })
                .error(function () {
                    console.log('error')
                })
        })

        console.log('after db.once')

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
