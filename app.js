import OpenAI from "openai";
import { config } from "dotenv";
config();

const openai = new OpenAI({
    baseURL: process.env.OPENAI_API_BASE_URL,
    apiKey: process.env.OPENAI_API_KEY
});

async function obtenerRespuesta(){
    try {
        const response = await openai.chat.completions.create({
            model: "deepseek/deepseek-chat-v3-0324:free",
            messages: [
                { role: "user", content: "cuántas veces puedo usar este token gratuito?" }
            ]
        });
        console.log(response.choices[0].message.content);
    } catch (error) {
        console.error("Error al obtener respuesta:", error);
    }
}

obtenerRespuesta();