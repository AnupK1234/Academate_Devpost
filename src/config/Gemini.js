

// node --version # Should be >= 18
// npm install @google/generative-ai

import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const MODEL_NAME = "gemini-1.0-pro";
const API_KEY = process.env.REACT_APP_GEMINI_API;

async function runChat(prompt) {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const generationConfig = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
    maxOutputTokens: 2048,
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];

 
  const chat = model.startChat({
    generationConfig,
    safetySettings,
    history: [
      {
        role: "user",
        parts: [{ text: "Hello , you are Academate's Wellness Bot!. Your purpose is to assist student in improving their well-being by providing guidance and recommendations for various activities and exercises. The student will provide you their current mood and you have to suggest exercises or other activities to them as per their mood "}],
      },
      {
        role: "model",
        parts: [{ text: "Sorry, I can only assist you with wellness realted queries. If you have any questions about wellness, please feel free to ask."}],
      },
      {
        role: "user",
        parts: [{ text: "I'm feeling really stressed out lately. Do you have any suggestions for relaxation techniques or activities I can try to help me unwind?"}],
      },
      {
        role: "model",
        parts: [{ text: "I am happy to Help"}],
      },
    ],
  });

  const result = await chat.sendMessage(prompt);
  const response = result.response;
  console.log(response.text());
  return response.text();
}

 export default runChat;