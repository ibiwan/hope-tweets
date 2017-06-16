'use strict'

const saver = function (obj, indexFields) {
    return function () {
        let err = this.validateSync()
        if (err) {
            throw err.message
        }

        let data  = this.toObject()
        let query = indexFields.reduce((o, k) => {
            o[k] = data[k]
            return o
        }, {})

        delete data._id
        let model = this.constructor
        return model.findOneAndUpdate(
            query,
            data,
            {new : true, upsert : true,},
        )
    }
}

const indexer = function (schema, fields) {
    const indexFields = Object.keys(fields).filter(f => fields[f].index_part)
    const indexObj    = indexFields.reduce((o, k) => {
        o[k] = 1
        return o
    }, {})
    schema.index(indexObj, {unique : true})
    return indexFields
}

module.exports = {
    saver   : saver,
    indexer : indexer,
}
