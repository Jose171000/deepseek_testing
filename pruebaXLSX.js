// import OpenAI from "openai";
import { config } from "dotenv";
import fetch from "node-fetch";
import { AbortController } from "node-abort-controller";
config();

async function obtenerRespuesta(prompt, timeOut = 10000) {
    const controller = new AbortController();
    const timeOutId = setTimeout(() => {
        console.log("🛑 Activando abort controller");
        controller.abort();
    }, timeOut);

    try {
        const fetchPromise = await fetch(process.env.OPENAI_API_BASE_URL + "/chat/completions", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                model: "deepseek/deepseek-chat-v3-0324:free",
                messages: [{ role: "user", content: prompt }],
                // temperature: 0.1,
            }),
            signal: controller.signal
        })

        // Creamos una promesa que se rechaza cuando se aborta
        const abortPromise = new Promise((_, reject) => {
            controller.signal.addEventListener('abort', () => {
                reject(new Error(`Timeout: la solicitud excedió los ${timeOut}ms`));
            });
        });

        const response = await Promise.race([fetchPromise, abortPromise]);
        clearTimeout(timeOutId);

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(`Error HTTP ${response.status}: ${errorData.error?.message || 'Sin detalles'}`);
        }

        const data = await response.json();
        return data.choices[0].message.content;

    } catch (error) {
        if (controller.signal.aborted) {
            console.log("✋ Solicitud cancelada por timeout");
            controller.abort();
            return { error: 'timeout', message: error.message };
        }
        console.error("Error en la API:", error.message);
        return { error: 'api_error', message: error.message };
    } finally {
        clearTimeout(timeOutId); // Limpieza garantizada
        controller.abort(); // Aseguramos que el controlador se aborte
    }
}

// Ejemplo de uso
(async () => {
    const prompt = "¿Cuál es la capital de Francia?";

    // Test con timeout muy corto (1ms) para forzar el abort
    const respuesta = await obtenerRespuesta(prompt, 100);
    console.log(respuesta);

    // Test con timeout normal (10s)
    // const respuesta2 = await obtenerRespuesta(prompt);
    // console.log(respuesta2);
})();
// export default obtenerRespuesta;
