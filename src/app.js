const express = require("express");
const app = express();

const cors = require("cors");
const xss = require("xss-clean");
const rateLimiter = require("express-rate-limit");
const routes = require("./routes");
const { error404, errorHandler } = require("./errors");
const views = require("./utils");
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");
const helmet = require("helmet");


// log all requests
app.use(
  morgan("common", {
    stream: fs.createWriteStream(path.join(__dirname, "access.log"), {
      flags: "a",
    }),
  })
);
app.use(morgan("tiny"));

app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 500, // limit each IP to 500 requests per windowMs
  })
);
app.use(express.json({ limit: "100mb", extended: true }));
app.use(helmet());
app.use(cors(
  {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
  }
));
app.use(xss());

app.use(
  express.urlencoded({ limit: "100mb", extended: true, parameterLimit: 500000 })
);

app.use((req, res, next) => {
  console.log("Request received:", req.method, req.url);
  next();
});

// routes
app.get("/", views.home);
app.use("/api", routes);
app.get("/docs", views.docs);
app.use("*", error404);
app.use(errorHandler);

module.exports = app;
