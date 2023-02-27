const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app');

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(process.env.DATABASE_LOCAL, {
    // for local host
    // .connect(DB, { // for cloud host
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('DB connection successul');
  })
  .catch((err) => console.log('error'));

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`app running on ${port}...`);
});

process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);
  console.log('Unhandled Rejection');
  server.close(() => {
    process.exit(1);
  });
});

process.on('uncaughtException', (err) => {
  console.log(err.name, err.message);
  console.log('Uncaught Exception');
  server.close(() => {
    process.exit(1);
  });
});
