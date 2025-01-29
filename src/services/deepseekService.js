const OpenAI = require("openai");
const config = require("../config/config");

const openai = new OpenAI({
    apiKey : config.deepseek_key
})


class OpenAIService {
    static async generateText(prompt){
        try {
            const response = await openai.chat.completions.create({
                model:"gpt-4o-mini",
                prompt: prompt,
                max_tokens: 100
            })

            return response.choices[0].text.trim();
        } catch (error) {
            console.error("Error llamando OpenAI API: ", error);
            throw error;
        }
    }
}

module.exports = OpenAIService;