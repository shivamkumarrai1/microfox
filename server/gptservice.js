import  {Configuration,OpenAIApi} from 'openai';


const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(config);

console.log("Loaded OpenAI Key:", process.env.OPENAI_API_KEYs);


async function generateCode(prompt) {
  const response = await openai.createChatCompletion({
    model: 'gpt-4-turbo',
    messages: [
      { role: 'system', content: 'Write only valid HTML/JS/CSS code in one file. No explanation.' },
      { role: 'user', content: prompt }
    ],
    temperature: 0.2,
  });

  return response.data.choices[0].message.content.trim();
}

export default  { generateCode };
