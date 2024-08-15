import express, { json, urlencoded } from "express";
import router from "./routes/index.js";
import cors from "cors";

const app = express();
const PORT = process.env.EXPRESS_PORT || 3000;

const corsOrigin = function (origin, callback) {
  callback(null, true);
};

app.use(json());
app.use(urlencoded({ extended: false }));
app.use(
  cors({
    credentials: true,
    origin: corsOrigin,
  })
);

app.use("/api", router);

app.get("/", (req, res) => {
  res.json({ message: "Api Working!" });
});

app.listen(PORT, app.get("host"), () => {
  console.log(`Server running at ${PORT}`);
});
