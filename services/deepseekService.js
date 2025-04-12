// import { config } from "dotenv";
// import fetch from "node-fetch";
// import { AbortController } from "node-abort-controller";
// config();


// async function obtenerRespuesta(prompt, msTimeout = 10000) {
//     const controller = new AbortController();
//     const timeOutId = setTimeout(() => controller.abort(), msTimeout)
//     try {
//         const fetchPromise = fetch(process.env.OPENAI_API_BASE_URL + "/chat/completions", {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
//             },
//             body: JSON.stringify({
//                 model: "deepseek/deepseek-chat-v3-0324:free",
//                 messages: [{ role: 'user', content: prompt }]
//             }),
//             signal: controller.signal
//         })

//         const abortPromise = new Promise((resolve) => {
//             controller.signal.addEventListener('abort', () => {
//                 resolve({ timeoutRequest: true });
//             })
//         })

//         const response = await Promise.race([
//             fetchPromise,
//             abortPromise
//         ])

//         clearTimeout(timeOutId);
//         if (controller.signal.aborted) {
//             console.log("✋ Solicitud cancelada por timeout");
//             controller.abort();
//             return { timeoutRequest: true };
//         }

//         if (!response.ok) {
//             const errorData = await response.json().catch(() => { throw new Error('Respuesta JSON no válida') });
//             throw new Error(`Error HTTP ${response.status}: ${errorData.error?.message || 'Sin detalles'}`);
//         }

//         const data = await response.json();
//         if (!data?.choices?.[0]?.message?.content) {
//             throw new Error('No se encontró contenido en la respuesta de la API');
//         }
//         return data.choices[0].message.content;
//     } catch (error) {
//         clearTimeout(timeOutId);
//         console.error("API Error:", error.message);
//         return {
//             error: 'api_error',
//             message: error.message,
//             status: error.response?.status
//         };
//     }
// }

// export default obtenerRespuesta;



import { config } from "dotenv";
import fetch from "node-fetch";
import { AbortController } from "node-abort-controller";
config();

async function obtenerRespuesta(prompt, msTimeout = 10000) {
    const controller = new AbortController();
    const timeOutId = setTimeout(() => controller.abort(), msTimeout);

    try {
        const fetchPromise = fetch(`${process.env.OPENAI_API_BASE_URL}/chat/completions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                model: "deepseek/deepseek-chat-v3-0324:free",
                messages: [{ role: 'user', content: prompt }],
                temperature: 0.7
            }),
            signal: controller.signal
        });

        const abortPromise = new Promise((_, reject) => {
            controller.signal.addEventListener('abort', () => {
                reject(new Error(`Timeout after ${msTimeout}ms`));
            });
        });

        const response = await Promise.race([fetchPromise, abortPromise]);
        clearTimeout(timeOutId);

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(`HTTP ${response.status}: ${errorData.error?.message || 'No details'}`);
        }
        
        
        const data = await response.json();
        console.log(data);
        if (!data?.choices?.[0]?.message?.content) {
            throw new Error(data.error?.message || 'Estructura de respuesta inesperada');
        }

        return data.choices[0].message.content;

    } catch (error) {
        clearTimeout(timeOutId);
        
        if (error.name === 'AbortError' || controller.signal.aborted) {
            console.log(`⏱️ Request timed out after ${msTimeout}ms`);
            return { error: 'timeout', message: error.message };
        }
        
        console.error("API Error:", error.message);
        return { 
            error: 'api_error', 
            message: error.message,
            ...(error.response && { status: error.response.status })
        };
    } finally {
        controller.abort(); // Cleanup garantizado
    }
}

export default obtenerRespuesta;