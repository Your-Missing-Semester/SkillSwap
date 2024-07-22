// require("dotenv").config();
const express = require("express");
const app = express();
const axios = require("axios");
const session = require("express-session");
const bcrypt = require("bcrypt");

const { PrismaSessionStore } = require("@quixo3/prisma-session-store");
const { PrismaClient } = require("@prisma/client");
const prisma = require("./db/db.js");

const PORT = 8080;

app.get("/", function (req, res) {
  res.send("SMILE! :D");
  console.log("Hello World!");
});

app.listen(PORT, function () {
  console.log(`SkillSwap server listening on port ${PORT}`);
});

// Sign Up

app.get("/sign-up", async function (req, res) {
  console.log("Sign up page requested");
  res.status(200).send({
    tshirt: "Sign up page",
    something: "Sign up page",
  });
});

app.post("/sign-up", async function (req, res) {
  console.log("Sign up request received");
  const username = req.body.username;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;

  if (!username || !password || !confirmPassword) {
    return res.status(400).send("Username and password are required");
  }

  if (password !== confirmPassword) {
    return res.send("Passwords do not match!");
  }

  const userExists = await prisma.user.findFirst({
    where: {
      email: username,
    },
  });

  if (userExists) {
    return res.status(400).send("Username is already taken");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const newUser = await prisma.user.create({
    data: {
      email: username,
      password: hashedPassword,
      salt,
    },
  });

  // req.session.trainerId = newTrainer.id;

  const _updatedSession = await req.session.save();

  res.send(_.omit(newUser, password, salt));

  return res.status(200).send("Sign up successful!");
});
