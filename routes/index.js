var express = require('express');
var router = express.Router();
var dbconfig = require('../config/db')

/* GET home page. */
router.get('/', function(req, res, next) {




    var mongoose = require('mongoose');
    mongoose.Promise = require('bluebird');

    var Tweet = require('../schemas/tweet');

    mongoose.connect(dbconfig.url);

    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        // we're connected!
        console.log('connected!');

        callback = function(err, kittens) {
            console.log('search results', err, kittens)
            kittens.forEach(x => x.identify())
        }

        var fluffy = new Tweet({
            event_date: Date.now()
        });
        console.log('first identity')
        fluffy.identify(); // "Meow name is fluffy"
        console.log('saving')
        fluffy.save(function(err, fluffy) {
            if (err) return console.error(err);
            console.log('second identity')
            fluffy.identify();

            Tweet.find({
                // name: /^fluff/
            }, callback);

        });
    });






    res.render('index', {
        title: 'Express'
    });
});

router.post('/', function(req, res, next) {
    res.render('debug', {datas:JSON.stringify(req.body)})
})

module.exports = router;
