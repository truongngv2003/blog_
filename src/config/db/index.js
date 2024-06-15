const mongoose = require('mongoose');

const uri = `mongodb+srv://truongnguyenmailbka:123FlashIp@cluster0.mgj6dtm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
async function connect() {
    try{
        await mongoose.connect(uri);
        console.log('Connect database successfully');
    } catch (error) {
        console.log('Connect failure');
    }
}

module.exports = { connect };