const express = require('express');
const mongoose = require('mongoose');
const categoryRoutes = require('./routes/categoryRoutes');
const app = express();

app.use(express.json());
app.use('/api', categoryRoutes);

mongoose.connect('mongodb+srv://Matheesha:math123@weddingplanner.crwciem.mongodb.net')
  .then(() => app.listen(5002, () => console.log('Category Service on 5002')))
  .catch(console.error);
