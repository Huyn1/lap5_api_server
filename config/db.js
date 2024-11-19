const mongoose = require('mongoose');

const local = "mongodb+srv://Huynv:ejARnB05IeMNj8Qn@cluster0.77mq5.mongodb.net/API_md19304";

const connect = async () => {
    try {
        await mongoose.connect(local);
        console.log('Connect success');
    } catch (error) {
        console.error('Connection to MongoDB failed:', error);
    }
}

module.exports = { connect };
