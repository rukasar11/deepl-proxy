const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const DEEPL_API_KEY = '01d25672-2d78-49ab-89e4-e00c70d6e3b0:fx'; // Replace with your DeepL API Key

app.post('/translate', async (req, res) => {
  try {
    const params = new URLSearchParams(req.body).toString();

    const response = await axios.post(
      'https://api-free.deepl.com/v2/translate',
      params,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `DeepL-Auth-Key ${DEEPL_API_KEY}`
        }
      }
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log('DeepL proxy server running on http://localhost:3000');
});
