var mongoose = require('mongoose')

var eventSchema = mongoose.Schema({
    date       : Date,
    created_at : {
        type    : Date,
        default : Date.now
    },
    name       : String, // 9:00 AM Sunday Worship Service, 10:45 AM Sunday Worship Service, Saturday Night Alive, ...
    weight     : {
        type    : Number,
        default : 0
    },
    venue      : String, // Hope UMC Sanctuary, ...
})

eventSchema.methods.identify = function () {
    console.log([
        'I am scheduled for ' + this.date,
        'I was created at ' + this.created_at,
    ])
}

var Event = mongoose.model('Event', eventSchema)

module.exports = {
    model  : Event,
    schema : eventSchema,
}