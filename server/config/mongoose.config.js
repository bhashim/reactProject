const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/reactProject', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
});