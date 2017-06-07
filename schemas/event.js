var mongoose     = require('mongoose')
mongoose.Promise = require('bluebird')

var eventSchema = mongoose.Schema({
    date      : Date,
    created_at: {
        type   : Date,
        default: Date.now
    },
    name      : String, // 9:00 AM Sunday Worship Service, 10:45 AM Sunday Worship Service, Saturday Night Alive, ...
    weight    : {
        type   : Number,
        default: 0
    },

})

eventSchema.methods.identify = function () {
    console.log([
        'I am scheduled for ' + this.date,
        'I was created at ' + this.created_at,
    ])
}

var Event = mongoose.model('Event', eventSchema)

module.exports = {
    event_model : Event,
    event_schema: eventSchema,
}


/**
 event_date: date
 type:
 weight: integer
 event:
 event_weight: integer
 status: draft, queued, posted
 created_at: date
 created_by: User
 venue: Hope UMC Sanctuary
 tweet: twitter tweet object
 **/

/**
 String
 Number
 Date
 Buffer
 Boolean
 Mixed
 ObjectId
 Array
 **/
