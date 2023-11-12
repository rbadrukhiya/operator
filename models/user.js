const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    id: ({
        type: String
    }),
    title: ({
        type: String
    }),
    price: ({
        type: String
    }),
    description: ({
        type: String
    }),
    category: ({
        type: String
    }),
    rating:[{
        "rating":String,
        "count":String
    }]
})

const MyModel = mongoose.model('oper', schema);
module.exports = MyModel
