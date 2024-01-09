const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const route = require('./routes/');
require('dotenv').config();

const PORT = 3000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));
app.use('/api', route);

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB).then(() => {
      console.log('Connected to MongoDB');
    });

    app.listen(PORT, () => {
      console.log(`listening on port ${PORT}`);
    });
  } catch (error) {
    console.error(error.message);
  }
};

start();
