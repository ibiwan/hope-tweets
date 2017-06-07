var express  = require('express')
var router   = express.Router()
var dbconfig = require('../config/db')

const path = '/'

/* GET home page. */
router
    .get(path, function (req, res, next) {
        var mongoose     = require('mongoose')
        mongoose.Promise = require('bluebird')

        var Tweet = require('../schemas/tweet').model

        mongoose.connect(dbconfig.url)
        console.log(mongoose)

        var db = mongoose.connection
        db.on('error', console.error.bind(console, 'connection error:'))
        db.once('open', function () {
            // we're connected!
            console.log('connected!')

            callback = function (err, kittens) {
                console.log('search results', err, kittens)
                kittens.forEach(function (x) {
                    x.identify()
                })

                db.close()
            }

            var fluffy = new Tweet({
                event_date : Date.now(),
            })
            console.log('first identity')
            fluffy.identify() // "Meow name is fluffy"
            console.log('saving')
            fluffy.save(function (err, fluffy) {
                if (err) {
                    return console.error(err)
                }
                console.log('second identity')
                fluffy.identify()

                Tweet.find({
                    // name: /^fluff/
                }, callback)


            })
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
