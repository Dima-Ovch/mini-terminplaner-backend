const mongoose = require('mongoose');

const connect = async (uri) => {
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log(" MongoDB erfolgreich verbunden");
};

module.exports = { connect };
