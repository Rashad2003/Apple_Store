import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
}

const loginUser = async (req, res) => {
  try {
    const {email, password} = req.body;
  
    const user = await userModel.findOne({email});

    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
    const token = createToken(user._id);
    res.status(200).json({ message: "User logged in successfully", token, user: {name: user.name, email: user.email}});
    } else {
      return res.status(400).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

const registerUser = async (req, res) => {
try {
  const { name, email, password } = req.body;

  const exists = await userModel.findOne({email});
  if (exists) {
    return res.status(400).json({ message: "User already exists" });
  }

  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: "Invalid email" });
  }

  if (password.length < 6) {
    return res.status(400).json({ message: "Password must be at least 6 characters" });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = new userModel({
    name,
    email,
    password: hashedPassword
  })

  const user = await newUser.save();

  const token = createToken(user._id)
  res.status(200).json({ message: "User registered successfully", token, user: {name: user.name, email: user.email}});
} catch (error) {
  console.log(error);
  res.status(500).json({ message: "Something went wrong" });
}
};

const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
      const token = jwt.sign(email + password, process.env.JWT_SECRET);
      res.status(200).json({token});
    } else {
      res.status(400).json({ message: "Invalid Credentials" })
    }
  } catch (error) {
    console.log(error);
  res.status(500).json({ message: "Something went wrong" });
  }
};

export { loginUser, registerUser, adminLogin };