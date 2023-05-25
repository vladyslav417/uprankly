const mailgun = require("mailgun-js");
const yup = require("yup");

const API_KEY = "288351fc5f2998266fa5e7c0bc6b9356-e44cc7c1-908e2b5b";
const DOMAIN = "mg.uprankly.com";
const AUTHORIZED_RECIPENTS = "makctg@uprankly.com";

const mg = mailgun({ apiKey: API_KEY, domain: DOMAIN });

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email(),
  subject: yup.string().required(),
  foundUs: yup.string().required(),
  message: yup.string().required(),
});

export default async function sendEmail(req, res) {
  // Process a POST request
  if (req.method !== "POST")
    return res.status(403).json({ status: "must use post method" });

  try {
    // validate contact form data
    await schema.validate(req.body, { abortEarly: false, stripUnknown: true });

    // build the message
    const { name, email, subject, foundUs, message } = req.body;

    const messageText = `
    Name: ${name}

    How did you found us: ${foundUs}

    Message: ${message}`;

    const data = {
      from: email,
      to: AUTHORIZED_RECIPENTS,
      subject: subject,
      text: messageText,
    };

    const body = await mg.messages().send(data);
    res.json(body);
  } catch (error) {
    return res.status(400).json(error);
  }
}
