require("dotenv").config();
const express = require("express");
const cors = require("cors");
// const bodyParser = require('body-parser');
const passport = require("passport");
const authRoute = require("./routes/auth");
const cookieSession = require("cookie-session");
const passportStrategy = require("./passport");
//const communicationRoutes = require('./communication');
//const emailRoutes = require('./email');
// const postmark = require('postmark');
const app = express();
// app.use(bodyParser.json());
// const mongoose=require('mongoose');
// const MONGODB_URI = 'mongodb+srv://ganeshnedunuri3339:H7aJcfUKyumxzQ7A@cluster0.cvovkx6.mongodb.net/?retryWrites=true&w=majority';

// MongoDB Setup
// mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
// const communicationHistorySchema = new mongoose.Schema({
//   userId: String,
//   type: String,
//   content: String,
// });
// const CommunicationHistory = mongoose.model('CommunicationHistory', communicationHistorySchema);


app.use(
	cookieSession({
		name: "session",
		keys: ["cyberwolve"],
		maxAge: 24 * 60 * 60 * 100,
	})
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
	cors({
		origin: "http://localhost:3000",
		methods: "GET,POST,PUT,DELETE",
		credentials: true,
	})
);

app.use("/auth", authRoute);
//app.use('/communication', communicationRoutes);
//app.use('/email', emailRoutes);

// const postmarkClient = new postmark.ServerClient(process.env.POSTMARK_API_TOKEN);

// app.get('/send-email', async (req, res) => {
// 	// Example endpoint to send emails using Postmark
// 	try {
// 	  const message = {
// 		From: 'ugs205140_cse.ganesh@cbit.org.in',
// 		To: 'ugs205140_cse.ganesh@cbit.org.in',
// 		Subject: 'Test Email',
// 		HtmlBody: '<p>Hello, this is a test email!</p>',
// 	  };
  
// 	  const response = await postmarkClient.sendEmail(message);
	  
// 	  // Save the sent email to communication history
// 	  await CommunicationHistory.create({
// 		userId: req.user.id, // assuming you have a user ID in the Google profile
// 		type: 'sent',
// 		content: JSON.stringify(response),
// 	  });
  
// 	  res.send('Email sent successfully');
// 	} catch (error) {
// 	  console.error(error);
// 	  res.status(500).send('Internal Server Error');
// 	}
//   });
  


const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listenting on port ${port}...`));
