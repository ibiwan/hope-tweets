'use strict'

const mongoose         = require('mongoose')
const {saver, indexer} = require('./schema-util')

const fields = {
    date       : {
        type       : Date,
        required   : true,
        index_part : true,
    },
    created_at : {
        type     : Date,
        default  : Date.now,
        required : true,
    },
    name       : { // 9:00 AM Sunday Worship Service, 10:45 AM Sunday Worship Service, Saturday Night Alive, ...
        type       : String,
        required   : true,
        index_part : true,
    },
    weight     : {
        type     : Number,
        default  : 0,
        required : true,
    },
    venue      : { // Hope UMC Sanctuary, ...
        type       : String,
        required   : true,
        index_part : true,
    },
}

const eventSchema = mongoose.Schema(fields)
const indexFields = indexer(eventSchema, fields)
eventSchema.methods.save_or_make = saver(this, indexFields)

module.exports = {
    model  : mongoose.model('Event', eventSchema),
    schema : eventSchema,
}
