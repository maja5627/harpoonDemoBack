const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: { type: String, required: true },
    position: { type: String, required: true },
});

schema.set('toJSON', { virtuals: true, versionKey: false  });

module.exports = mongoose.model('Record', schema);