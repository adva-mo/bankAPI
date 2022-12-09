import express from "express";
import { usersRouter } from "./routes/users.route.js";
import { accountsRouter } from "./routes/accounts.routes.js";

const PORT = 1234;
const app = express();

app.use(express.json());

app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    return res.status(400).send({ status: 404, message: err.message }); // Bad request
  }
  next();
});

app.use("/users", usersRouter);
app.use("/accounts", accountsRouter);

app.listen(PORT, () => {
  console.log("server is up on port " + PORT);
});
