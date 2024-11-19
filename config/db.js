const mongoose = require('mongoose');

const local = "mongodb+srv://buiviet289:CJKnGMpCbyuQr3xz@cluster0.3pq0t.mongodb.net/md19304";

const connect = async () => {
    try {
        await mongoose.connect(local);
        console.log('Connect success');
    } catch (error) {
        console.error('Connection to MongoDB failed:', error);
    }
}

module.exports = { connect };
