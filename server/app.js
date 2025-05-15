import express from 'express';
import cors  from 'cors';
import dotenv from 'dotenv';
import gptService from './gptservice.js';
import deployService from './deployservice.js';
import fs from 'fs';
import path from 'path';

dotenv.config();
console.log("Loaded OpenAI Key:", process.env.OPENAI_API_KEY );



const app=express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post('/api/generate-code', async (req, res) => {
  const { prompt } = req.body;

  try {
    const code = await gptService.generateCode(prompt);

    // Create folder
    const dir = path.join(__dirname, '../generated-site');
    if (!fs.existsSync(dir)) fs.mkdirSync(dir);
    
    // Save code to index.html
    fs.writeFileSync(path.join(dir, 'index.html'), code);

    // Deploy
    const url = await deployService.deployToVercel(dir);

    res.status(200).json({ code, url });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: error.message });
  }
});

const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});

export default  app;