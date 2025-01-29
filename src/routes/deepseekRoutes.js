const express = require("express");
const OpenAIController = require("../controllers/deepseekController")

const router = express.Router();

router.post("/generate-text", OpenAIController.generateText);

module.exports = router;