const mongoose   = require('mongoose')
mongoose.Promise = require('bluebird')
const url        = require('../config/db').url

const blah = mongoose.connect(url, a => null)

//.then(
//    function fulfill() {
//            console.log('fulfill')
//    },
//    function reject() {
//            console.log('reject')
//    })
//.catch(
//    function () {
//            console.log('reject')
//    })

console.log('mongoose connect result: ', blah)

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))

module.exports = db
