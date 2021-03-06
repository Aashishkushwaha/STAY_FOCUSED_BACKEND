const whitelist = [
  "http://localhost:5000",
  "http://localhost:3000",
  "https://stay-focused.vercel.app",
  "https://stay--focused.herokuapp.com/",
];

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      // callback(new Error("Not allowed by CORS"));
      callback("Not allowed by CORS");
    }
  },
};

module.exports = corsOptions;
