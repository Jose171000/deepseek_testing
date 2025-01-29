const OpenAIService = require("../services/deepseekService")

class OpenAIController {
    static async generateText(req, res){
        const {prompt} = req.body;

        if(!prompt){
            return res.status(400).json({error:"El campo 'prompt' es requerido."});
        }

        try {
            const generatedText = await OpenAIService.generateText(prompt);
            res.json({generatedText});
        } catch (error) {
            res.status(500).json({error: "Error interno al generar el texto."});
        }
    }
}

module.exports = OpenAIController;