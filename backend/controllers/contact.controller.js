import ContactModel from "../models/contact.model.js";

const submitContactForm = async (req, res) => {
  try {
    const { username, email, message } = req.body;

    if (!username || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newMessage = new ContactModel({ username, email, message });
    await newMessage.save();

    res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong", error: error.message });
  }
};

// Fetch all contact messages
const getAllMessages = async (req, res) => {
  try {
    const messages = await ContactModel.find().sort({ date: -1 }); // Get all messages, newest first
    res.status(200).json(messages);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong", error: error.message });
  }
};

export { submitContactForm, getAllMessages };
