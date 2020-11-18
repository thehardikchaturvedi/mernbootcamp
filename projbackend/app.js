const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
require('dotenv').config({ debug: true });
const app = express();

//Middlewares
app.use(express.json({ extended: false }));
app.use(cookieParser());
app.use(cors());
 
//DB Connection
connectDB();

//My Routes
app.use('/api', authRoutes);
app.use('/api', userRoutes);

//PORT
const PORT = process.env.PORT || 3000;

//Starting The Server
app.listen(PORT, () => {
  console.log(`Server Running at port ${PORT}`);
});
