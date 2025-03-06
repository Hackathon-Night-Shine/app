import emailjs from "@emailjs/browser";
import React, { useState } from "react";

// Interface for form data
interface ContactFormData {
  subject: string;
  name: string;
  email: string;
  phone: string;
  description: string;
}

const ContactForm: React.FC = () => {
  const initialState: ContactFormData = {
    subject: "",
    name: "",
    email: "",
    phone: "",
    description: "",
  };
  // State to manage form data
  const [formData, setFormData] = useState<ContactFormData>({
    subject: "",
    name: "",
    email: "",
    phone: "",
    description: "",
  });

  const clearForm = () => {
    setFormData(initialState);
  };

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const templateParams = {
      subject: formData.subject,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      reason: formData.description,
    };

    emailjs
      .send(
        "service_yi6yrws", // Replace with your Service ID
        "template_phxqs63", // Replace with your Template ID
        templateParams,
        "WfB5L62s0B6WFg2el" // Replace with your Public Key
      )
      .then(
        () => {
          alert("Message sent!");
          clearForm();
        },
        (error) => {
          console.error("Failed to send email:", error);
          alert("Something went wrong. Try again.");
        }
      );
  };

  return (
    <div className="contact-form-container" style={containerStyle}>
      <h1>כתבו לנו ונענה בהקדם</h1>
      <form onSubmit={(e) => handleSubmit(e)} style={formStyle}>
        <div style={fieldStyle}>
          <label htmlFor="name">שם:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => handleChange(e)}
            placeholder="Enter your name"
            required
            style={inputStyle}
          />
        </div>

        <div style={fieldStyle}>
          <label htmlFor="email">אימייל:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) => handleChange(e)}
            placeholder="Enter your email"
            required
            style={inputStyle}
          />
        </div>

        <div style={fieldStyle}>
          <label htmlFor="phone">מספר טלפון:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={(e) => handleChange(e)}
            placeholder="Enter your phone number"
            style={inputStyle}
          />
        </div>

        <div style={fieldStyle}>
          <label htmlFor="subject">נושא:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={(e) => handleChange(e)}
            placeholder="Enter your subject"
            required
            style={inputStyle}
          />
        </div>

        <div style={fieldStyle}>
          <label htmlFor="description">תיאור:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={(e) => handleChange(e)}
            placeholder="Enter your message"
            rows={4}
            style={textareaStyle}
          />
        </div>

        <button type="submit" style={buttonStyle}>
          Send
        </button>
      </form>
    </div>
  );
};

// Basic inline styles (you can move these to a separate CSS file)
const containerStyle: React.CSSProperties = {
  maxWidth: "500px",
  margin: "0 auto",
  padding: "20px",
};

const formStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
};

const fieldStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
};

const inputStyle: React.CSSProperties = {
  padding: "8px",
  marginTop: "5px",
  border: "1px solid #ccc",
  borderRadius: "4px",
};

const textareaStyle: React.CSSProperties = {
  padding: "8px",
  marginTop: "5px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  resize: "vertical",
};

const buttonStyle: React.CSSProperties = {
  padding: "10px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  marginTop: "10px",
};

export default ContactForm;
