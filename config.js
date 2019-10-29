module.exports = {
  ENV: process.env.NODE_ENV || "development",
  PORT: process.env.PORT || 5000,
  URL: process.env.BASE_URL || "http://localhost:3000",
  MONGODB_URI:
    process.env.MONGODB_URI ||
    "mongodb+srv://<username>:<password>cluster0-pwstc.mongodb.net/test?retryWrites=true&w=majority",
  JWT_SECRET: process.env.JWT_SECRET || "superSecret"
};
