// user.js
const express = require("express");
const zod = require("zod");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const { User } = require("../db/schema");

const router = express.Router();

const emailschema = zod.string().email();
const passwordschema = zod.string().min(6);

router.post("/signup", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;

  const emailresponse = emailschema.safeParse(email);
  const passwordresponse = passwordschema.safeParse(password);
  
  if (!emailresponse.success || !passwordresponse.success) {
    return res.status(411).send("Incorrect input or email already taken");
  }

  await User.create({
    password: password,
    email: email,
    firstname: firstname,
    lastname: lastname,
  });

  const token = jwt.sign({ password }, JWT_SECRET);
  return res.send({ msg: "User saved successfully", token });
});

router.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });
    if (!user) {
      return res.status(404).send("User not found");
    }

    const token = jwt.sign({ password }, JWT_SECRET);
    return res.send({ token });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

module.exports = router; // Export the router
