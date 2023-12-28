const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://ashraf13506:<password>@hostapplication.t4iqw8l.mongodb.net/PatientDatabase?retryWrites=true&w=majority'; // Replace with your MongoDB connection URL




mongoose.connect(mongoURI).then(() => {
  console.log('MongoDB connected');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

module.exports = mongoose.connection;
