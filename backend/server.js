const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Resend } = require('resend');
require('dotenv').config();

// Create Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
  origin: 'https://mulliganskamloops.com.com'
}) );
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

// Route to handle form submissions
app.post('/send-email', async (req, res) => {
  try {
    const { name, phone, message } = req.body;
    
    if (!name || !message) {
      return res.status(400).json({ success: false, message: 'Name and message are required' });
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // Use this until your domain is verified
      to: 'mulliganskamloops@gmail.com', // Your business email
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ success: false, message: 'Failed to send email' });
    }
    
    res.status(200).json({ success: true, message: 'Email sent successfully', data });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send email. Please try again later.' });
  }
});

// Simple route for testing
app.get('/', (req, res) => {
  res.send('Email service is running!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
