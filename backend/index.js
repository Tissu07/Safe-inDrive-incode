





const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');

const app = express();
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3001');
  res.header('Access-Control-Allow-Methods', 'POST');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});


// Configure Twilio API credentials
const accountSid = "";
const authToken = '';
const twilioClient = twilio(accountSid, authToken);

// Schedule message endpoint
app.post('/schedule-message', async (req, res) => {
  const { recipient } = req.body;
  
  try {
    await twilioClient.messages.create({
      body: 'message from indrive: Your loved one didnt click our safty confirmation, you should check once',
      from: '',
      to: recipient,
    });
  } catch (error) {
    console.error(`Failed to send message to ${recipient}.`, error);
  } 
});


app.post('/caution', async (req, res) => {
  const { recipient } = req.body;
  
  try {
    await twilioClient.messages.create({
      body: 'message from indrive: Driver: Abhishek, vehicle No. DL 10A 2587 , Journey Duration: 2min, for more detail you can contact us',
      from: '',
      to: recipient,
    });
  } catch (error) {
    console.error(`Failed to send message to ${recipient}.`, error);
  } 
});




// otp

let otpStorage = "";

// Generate OTP
function generateOTP() {
  // Implement your OTP generation logic here
  // Return the generated OTP
  const digits = '0123456789';
  let otp = '';
  for (let i = 0; i < 6; i++) {
    otp += digits[Math.floor(Math.random() * digits.length)];
  }
  return otp;
}

// POST endpoint for OTP verification
app.post('/verify-otp', (req, res) => {
  const { otp } = req.body;

  // Implement your OTP verification logic here
  // Compare the received OTP with the one previously sent to the user

  if (otpStorage === otp) { 
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

// GET endpoint for OTP generation and sending
app.get('/generate-otp', async(req, res) => {
  const phoneNumber = req.query.phoneNumber;
  const generatedOTP = generateOTP();
  otpStorage = generatedOTP;
  

  await twilioClient.messages
    .create({
      body: `Your OTP is: ${generatedOTP}`,
      from: '' ,
      to: phoneNumber,
    })
    .then(() => {
      res.json({ success: true });
    })
    .catch((error) => {
      console.error('Error sending OTP', error);
      res.status(500).json({ success: false });
    });
});




// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
