require("dotenv").config();
const mongoose = require("mongoose");

//default mongo connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("mongodb connection success!");
  } catch (err) {
    console.log("mongodb connection failed!", err.message);
  }
};

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("mongodb connection success!");
//   } catch (err) {
//     console.log("mongodb connection failed!", err.message);
//   }
// };

module.exports = {
  connectDB,
};
