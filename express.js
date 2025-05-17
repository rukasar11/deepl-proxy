// Express.js example
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors()); // Allow CORS for frontend clients
app.use(express.json());

app.post('/nvidia-chat', async (req, res) => {
  try {
    const response = await axios.post(
      'https://integrate.api.nvidia.com/v1/chat/completions',
      req.body,
      {
        headers: {
          'Authorization': 'Bearer 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',
          'Content-Type': 'application/json',
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error('NVIDIA API Error:', error.response?.data || error.message);
    res.status(500).send('NVIDIA API Error');
  }
});

app.listen(3000, () => console.log('Proxy running on http://localhost:3000'));
