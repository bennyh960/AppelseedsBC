const express = require("express");
const cors = require("cors");
const userRouter = require("./routers/user.router.js");
require("./db/mongoose.js");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(userRouter);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
