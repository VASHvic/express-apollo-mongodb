const {connect} = require('mongoose');

const connectDB = async () => {
  try {
    await connect('mongodb://localhost/apollo-tasks');
    console.log('mongodb connected');
  } catch (err) {
    console.log(err);
  }
};
module.exports = {connectDB};
