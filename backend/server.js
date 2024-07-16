const express = require("express");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
  res.send("SMILE! :D");
});

app.listen(port, function () {
  console.log(`SkillSwap server listening on port ${port}`);
});

app.post("/api/sign-up", async function (req, res) {
  console.log("Sign up request received");
  const username = req.body.username;
  const password = req.body.password;

  if (!username || !password) {
    return res.status(400).send("Username and password are required");
  }

  const userExists = await database.userExists(username);
  if (userExists) {
    return res.status(400).send("Username is already taken");
  }

  res.send("Sign up successful!");
});
