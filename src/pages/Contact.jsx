import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ShopContext } from "../context/shop_context";
import { toast } from "react-toastify";

export const Contact = () => {
  const { backendUrl } = useContext(ShopContext);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });

  // Load user details from localStorage on page load
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setFormData((prevData) => ({
        ...prevData,
        username: user.name || "", // Auto-fill name
        email: user.email || "", // Auto-fill email
      }));
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.username || !formData.email || !formData.message) {
      toast.error("All fields are required!");
      return;
    }

    try {
      await axios.post(backendUrl + "/api/contact/message", formData); // Send data to backend
      toast.success("Message sent successfully!");
      setFormData({ username: "", email: "", message: "" }); // Clear form after submission
    } catch (error) {
      console.error("Error submitting contact form:", error);
      toast.error("Failed to send message. Try again later.");
    }
  };

  return (
    <>
      <section className="section-contact">
        <div className="container">
          <h2 className="section-common--heading">Contact Us</h2>
          <p className="section-common--subheading">
            Get in touch with us. We are always here to help you.
          </p>
        </div>

        <div className="container grid grid-two--cols">
          <div className="contact-content">
            <form onSubmit={handleSubmit}>
              <div>
                <div className="mb-3">
                  <label htmlFor="username">Full Name</label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    required
                    autoComplete="off"
                    placeholder="Enter full name"
                    value={formData.username}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    autoComplete="off"
                    placeholder="abc@Apple.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  cols="10"
                  rows="2"
                  placeholder="We are always here to help you."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="mt-3">
                <button type="submit" className="btn contact-btn">
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2613173278896!2d73.91411937501422!3d18.562253982539413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20Pune!5e0!3m2!1sen!2sin!4v1696124215167!5m2!1sen!2sin"
              width="100%"
              height="auto"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};
