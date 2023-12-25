const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://ashraf13506:VQqSX3lVqIETUGKW@hostapplication.t4iqw8l.mongodb.net/?retryWrites=true&w=majority'; // Replace with your MongoDB connection URL

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // Additional options if needed
}).then(() => {
  console.log('MongoDB connected');
}).catch(err => {
  console.error('MongoDB connection error:', err.message);
});

module.exports = mongoose.connection;
