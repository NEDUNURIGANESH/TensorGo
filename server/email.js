const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/send', async (req, res) => {
  const { to, subject, text } = req.body;

  try {
    const response = await axios.post('https://api.postmarkapp.com/email', {
      From: 'your@email.com', // Replace with your email
      To: to,
      Subject: subject,
      TextBody: text,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'X-Postmark-Server-Token': process.env.POSTMARK_API_TOKEN,
      },
    });

    // Implement your logic to store the email in the communication history

    res.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error sending email' });
  }
});

module.exports = router;
