const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoUri');
//DB Connection
const connectDB = async () => {
  try {
    await mongoose
      .connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      })
      .then(() => {
        console.log('Congratulations! MongoDB is Connected');
      });
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};
module.exports = connectDB;
