require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { createClient } = require('@supabase/supabase-js');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

app.post('/submit-form', async (req, res) => {
  try {
    const { name, company, jobprofile, linkedin, placementtype, companytype, video_url } = req.body;

    if (!name || !company || !jobprofile || !linkedin || !placementtype || !companytype) {
      return res.status(400).json({ success: false, error: "Missing required fields." });
    }

    const { data, error } = await supabase
      .from('experiences')
      .insert([{ name, company, jobprofile, linkedin, placementtype, companytype, video_url }]);

    if (error) {
      console.error('Supabase insert error:', error);
      return res.status(500).json({ success: false, error: error.message });
    }

    return res.status(200).json({ success: true, data });
  } catch (err) {
    console.error('Unexpected server error:', err);
    return res.status(500).json({ success: false, error: 'Internal server error.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
