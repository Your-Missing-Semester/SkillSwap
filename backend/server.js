const express = require("express");
const session = require("express-session");
const bcrypt = require("bcrypt");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");

const app = express();
const port = 8000;

app.get("/", function (req, res) {
  res.send("SMILE! :D");
});

// ____________________________________________________________________________
// SIGN UP
// ____________________________________________________________________________

app.post("/api/sign-up", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!username || !password || !confirmPassword) {
    return res.status(400).send("Username and password are required");
  }

  if (password !== confirmPassword) {
    return res.send("Passwords do not match!");
  }
  try {
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
        salt: salt,
      },
    });

    // Remove password and salt from response
    const { password: _, salt: __, ...userWithoutPassword } = newUser;

    res
      .status(200)
      .json({ ...userWithoutPassword, message: "Sign Up Successful!" });
  } catch (err) {
    console.error("Error during sign up:", err);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`SkillSwap server listening on port ${PORT}`);
});
