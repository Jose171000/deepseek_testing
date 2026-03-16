import lectorDeExcel from '../services/lectorDeExcelService.js';
import obtenerRespuesta from '../services/deepseekService.js';
import mostrarProgreso from '../services/mostrarProgreso.js';
import { mostrarProductosAlmacenados, guardarProductos } from '../services/productosProcesados.js';
import * as yujuPrompts from "../prompts-inputs/yujuProducts.js"
import * as yujuOutputs from "../outputs/yujuProducts.js"
import * as falabellaOutputs from '../outputs/falabella.js';
import * as falabellaPrompts from '../prompts-inputs/falabella.js';
import * as intercorpPrompts from '../prompts-inputs/intercorp.js';
import * as intercorpOutputs from '../outputs/intercorp.js';

const manejadorGeneral = (async (fileName = './input.xlsx', inputPrompt, dataOutput) => {
    let arrayGeneral = [];
    const data = lectorDeExcel(fileName);
    const totalProductos = data.length;
    let productosProcesados = 0;
    let productosFallidos = 0;
    let productosAlmacenados = mostrarProductosAlmacenados();

    for (const eachProduct of data) {

        const sku = eachProduct["SKU simple"];
        const productoExistente = productosAlmacenados.find(producto => producto["SKU simple"] === sku);

        mostrarProgreso(productosProcesados, productosFallidos, totalProductos);
        if (productoExistente) {
            console.log(`El producto ${sku} ya ha sido procesado anteriormente.`);
            productosProcesados++;
            continue;
        }
  
        const promptConsolidado = await inputPrompt(eachProduct)
        
        try {
            
            const respuestaConsolidada = await obtenerRespuesta(promptConsolidado, 20000);         

            let jsonStr = respuestaConsolidada.trim();
            if (jsonStr.startsWith('```json')) {
                jsonStr = jsonStr.slice(7);
            }
            if (jsonStr.endsWith('```')) {
                jsonStr = jsonStr.slice(0, -3);
            }
            jsonStr = jsonStr.trim();

            const datos = JSON.parse(jsonStr);

            let datosGenerados = await dataOutput(datos, eachProduct)

            productosAlmacenados.push(datosGenerados);
            arrayGeneral.push(datosGenerados);
            guardarProductos(productosAlmacenados);
            productosProcesados++;
            if (data[data.length - 1] === eachProduct) {
                mostrarProgreso(productosProcesados, productosFallidos, totalProductos);
            }
            await new Promise(resolve => setTimeout(resolve, 1500));
        } catch (error) {
            console.error(`Error procesando el producto ${sku}:`, error);
            productosFallidos++;
            if (error.message.includes('JSON')) {
                console.error(`Error en el formato JSON para el producto ${sku}:`, error.message);
            } else if (error.message.includes('Timeout')) {
                console.error(`Tiempo de espera de respuesta para el producto ${sku} excedido.`);
            } else {
                console.error(`Error inesperado para el producto ${sku}:`, error.message);
            }
            continue;
        }
    }
    return mostrarProductosAlmacenados();

}
);

export default manejadorGeneral;