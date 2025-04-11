const obtenerRespuestaConTimeout = (async (prompt, sku, maxRetries = 2, timeout = 5000) => {
    let retries = 0;
    let lastError = null;
    while (retries <= maxRetries) {
        
        const timeoutPromise = new Promise((resolve, reject) => {
            setTimeout(() => resolve({activadorDeError: true}), timeout*(retries+1));
        });

        const pruebaPeticionAPI = new Promise((resolve, reject) => {
           setTimeout( ()=> resolve("gané yo, el original DeepSeek"), 5000);
        });
        
        const respuesta = await Promise.race([timeoutPromise, pruebaPeticionAPI]);
        console.log(respuesta?.activadorDeError);
        
        if (respuesta?.activadorDeError) {
            console.log("entré por timeoutPromise");
            retries++;
            
        }else{
            return "Hola mundo";
        }
        
        retries++;
        
    }
})

const prueba = async () => {
    const resultado = await obtenerRespuestaConTimeout('Hola', '1234', 2, 3000);
    console.log(resultado);
}
prueba();