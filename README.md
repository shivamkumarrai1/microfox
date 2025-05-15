# 🧠 Coding Agent - AI Code Generator & Deployer

This is a simple **AI-powered coding agent** built using **Node.js**, **Express.js**, and **OpenAI API**, with a frontend built in **HTML/CSS/JavaScript**. It lets users enter prompts, generate HTML/CSS/JS code using GPT, and (optionally) deploy it.

---

## 🚀 Features

- ✍️ Prompt-based code generation using OpenAI GPT API.
- 💡 Simple frontend with input and display.
- ⚙️ Node.js + Express backend API.
- 🔐 Environment variable support via `.env`.
- 🌐 Ready for deployment to Vercel or other platforms.

---

## 🧑‍💻 Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **AI**: OpenAI GPT API
- **Deployment**: Vercel / Render / Railway
- **Environment Config**: dotenv

---

## 📁 Project Structure

coding_agent/
│
├── public/ # Frontend (index.html, script.js, style.css)
│
├── server/ # Backend
│ ├── app.js
│ ├── gptservice.js
│ ├── deployservice.js
│ ├── index.js
│ └── .env # Environment file (DO NOT COMMIT)
│
├── .gitignore
├── .env.example
├── package.json
└── README.md


## ⚙️ Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/shivamkumarrai1/coding_agent.git
cd coding_agent
2. Install Dependencies

cd server
npm install
3. Create .env File
Inside the server/ folder, create a file named .env:

OPENAI_API_KEY=your-openai-api-key
PORT=3000
✅ Do NOT commit this file. It's ignored via .gitignore.

You can also use:

cp .env.example .env
4. Start the Backend Server

cd server
node app.js
The server will run at:
http://localhost:3000

🧪 Testing the API
Use Postman or any REST client:

Method: POST

URL: http://localhost:3000/api/generate-code

Headers: Content-Type: application/json

Body: 
{
  "prompt": "Create a basic HTML page with a red background and a centered title."
}
You’ll get back generated HTML code in the response.

🌐 Deployment Tips
Once tested locally, you can deploy to:

Vercel

Render

Railway

Be sure to set OPENAI_API_KEY in the environment settings of your deployment platform.

🛑 Important Notes
Make sure .env is in .gitignore

Free OpenAI API keys may hit usage limits — consider adding billing

Error 429 = quota limit or too many requests

📄 License
This project is licensed under the MIT License.
Use freely and modify as needed!

💡 Ideas for Improvement
Replace HTML frontend with React UI

Add file upload/code download options

Auto deploy using GitHub Actions

Add user accounts and history
