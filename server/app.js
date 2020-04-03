const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

const indexRouter = require('./routes/index');
const questsRouter = require('./routes/quests');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// db connection
mongoose.connect(
  'mongodb://db:27017/quests',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.info('Connected to database!'));

app.use('/', indexRouter);
app.use('/quests', questsRouter);

module.exports = app;
