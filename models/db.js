const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {
    useUnifiedTopology : true,
    useNewUrlParser : true
}, (err) => {
    if (!err) { console.log('MongoDB connected Sucessfully!');}
    else {
        console.log('Errer in MongoDB connection :'+ JSON.stringify(err, undefined, 2));
    }
});

require('./user.model');