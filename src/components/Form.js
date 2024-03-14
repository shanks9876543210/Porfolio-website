import React, { useState } from 'react';
import './FormStyles.css';

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if all fields are completed
    if (formData.fullName && formData.email && formData.subject && formData.message) {
      alert("Your message submitted.");
      // Reset form after submission
      setFormData({
        fullName: '',
        email: '',
        subject: '',
        message: ''
      });
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <div className="form-container">
      <form>
        <label>Full Name:</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label>Subject:</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <label>Message:</label>
        <textarea
          rows="6"
          name="message"
          placeholder="Enter your message."
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button onClick={handleSubmit} className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
