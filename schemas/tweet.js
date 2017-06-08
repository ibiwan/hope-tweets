const mongoose   = require('mongoose')
mongoose.Promise = require('bluebird')

const eventSchema = require('./event').schema
const userSchema  = require('./user').schema

const status_draft  = 'draft'
const status_queued = 'queued'
const status_posted = 'posted'

const type_scripture     = 'scripture'
const type_hymn          = 'hymn'
const type_snippet       = 'snippet'
const type_call_response = 'call-response'
const type_prayer        = 'prayer'
const type_formatted     = 'formatted'
const short_text_types   = [type_scripture, type_hymn, type_snippet]
const long_text_types    = [type_call_response, type_prayer, type_formatted]

const tweetSchema = mongoose.Schema({
    event : {
        type     : eventSchema,
        required : true
    },

    weight : {
        type    : Number,
        default : 0
    },

    tweet : {},     // actual twitter tweet object

    type : {
        type     : String,
        required : true,
        enum     : [].concat(short_text_types, long_text_types),
    },

    status : {
        type     : String,
        required : true,
        default  : status_draft,
        enum     : [status_draft, status_queued, status_posted],
    },

    created_at : {
        type    : Date,
        default : Date.now
    },

    created_by : userSchema,
})

tweetSchema.methods.identify = function () {
    console.log([
        'I am scheduled for ' + this.event,
        'I was created at ' + this.created_at,
    ])
}

mongoose.model('Tweet', tweetSchema)
