import lectorDeExcel from '../services/lectorDeExcelService.js';
import scrapeWebAmma from '../services/scrapingWebAmmaService.js';
import obtenerRespuesta from '../services/deepseekService.js';
import downloadImage from '../services/descargarImgService.js';
import path from 'path';
import generadorDeXLSX from '../services/generadorDeXLSXService.js';
import { mostrarProductosAlmacenados, guardarProductos } from '../services/productosProcesados.js';

const manejadorGeneral = (async () => {
    // const url = `https://ammabeauty.pe/?s=${skuEAN.SKU}&post_type=product&type_aws=true&aws_id=1&aws_filter=1`
    let arrayGeneral = [];
    const data = lectorDeExcel('./input.xlsx');
    const totalProductos = data.length;
    let productosProcesados = 0;
    let productosFallidos = 0;
    let productosAlmacenados = mostrarProductosAlmacenados();


    // Función para mostrar el progreso
    const mostrarProgreso = () => {
        const porcentaje = ((productosProcesados + productosFallidos) / totalProductos * 100).toFixed(2);
        console.log(`Progreso: ${productosProcesados + productosFallidos}/${totalProductos} (${porcentaje}%) | Éxitos: ${productosProcesados} | Fallos: ${productosFallidos}`);
    };

    for (const eachProduct of data) {

        const sku = eachProduct.SKU;
        const productoExistente = productosAlmacenados.find(producto => producto.SKU === sku);
        let nombreDelProducto = eachProduct.Nombre;

        mostrarProgreso();
        if (productoExistente) {
            console.log(`El producto ${sku} ya ha sido procesado anteriormente.`);
            productosProcesados++;
            continue;
        }
        const {
            description,
            modoDeUso,
            tipoDePiel,
            principalesIngredientes
        } = await scrapeWebAmma(`https://ammabeauty.pe/?s=${sku}&post_type=product&type_aws=true&aws_id=1&aws_filter=1`);


        if (!description) {
            console.log(`No se encontró el producto disponible para el SKU: ${sku}`);
            productosFallidos++;
            continue;
        }


        // for (let index = 0; index < eachProduct['Imágenes'].split(", ").length; index++) {
        //     let image = eachProduct['Imágenes'].split(", ")[index];
        //     let filePath = path.basename(new URL(image).pathname);
        //     let ext = path.extname(filePath);
        //     let fileName = `${sku}${ext}`;
        //     if (index !== 0) {
        //         fileName = `${sku}__${index + 1}${ext}`;
        //     }


        //     console.log(fileName);
        //     await downloadImage(image, "./imagenes", fileName);
        // }
        const promptConsolidado = `Necesito que generes varios datos para el producto "${eachProduct.Nombre}" en un solo formato JSON.
            Aquí tienes la información del producto:
            - Descripción: '${description}'
            - Modo de uso: '${modoDeUso}'
            - Tipo de piel: '${tipoDePiel}'
            - Principales ingredientes: '${principalesIngredientes}'
            
            Por favor devuelve un JSON con los siguientes campos:
            1. "caracteristicas": Una lista de características principales separadas por '|'
            2. "palabras_clave": Palabras clave separadas por comas, incluyendo posibles errores ortográficos (menor a 300 caracteres)
            3. "nombre_corto": Versión resumida del nombre (menos de 70 caracteres) si es necesario
            4. "peso": Peso aproximado en kg (solo el número sin la unidad de medida)
            5. "Largo": Un aproximado del largo del producto en cm (solo el número sin la unidad de medida)
            6. "Ancho": Un aproximado del ancho del producto en cm (solo el número sin la unidad de medida)
            7. "Alto": Un aproximado del alto del producto en cm (solo el número sin la unidad de medida)
            Solo responde con el JSON, sin comentarios adicionales.

            IMPORTANTE: Responde ÚNICAMENTE con el JSON solicitado, SIN los delimitadores \`\`\`json ni ningún otro texto adicional.
            El JSON debe comenzar directamente con { y terminar con }.`;
        try {
            const respuestaConsolidada = await obtenerRespuesta(promptConsolidado, 20000);

            if (respuestaConsolidada.timeoutRequest) {
                productosFallidos++;
                console.error(`Tiempo de espera de respuesta para el producto ${sku} excedido.`);
                continue;
            }

            let jsonStr = respuestaConsolidada.trim();
            if (jsonStr.startsWith('```json')) {
                jsonStr = jsonStr.slice(7);
            }
            if (jsonStr.endsWith('```')) {
                jsonStr = jsonStr.slice(0, -3);
            }
            jsonStr = jsonStr.trim();

            const datos = JSON.parse(jsonStr);

            if (nombreDelProducto.length < 70) {
                datos.nombre_corto = nombreDelProducto;
            }

            let datosGenerados = {
                SKU: sku,
                ProductName: datos.nombre_corto,
                BrandName: eachProduct.Marca,
                Price: eachProduct['Precio normal'],
                Stock: eachProduct.Inventario,
                ProductBullets: datos.caracteristicas,
                ProductDescription: description,
                MetaKeywords: datos.palabras_clave,
                ProductWeight: datos.peso,
                ProductLength: datos.Largo,
                ProductWidth: datos.Ancho,
                ProductHeight: datos.Alto,
                PackageWeight: datos.peso + 0.01,
                PackageLength: 12,
                PackageWidth: 20,
                PackageHeight: 7
            }

            productosAlmacenados.push(datosGenerados);
            arrayGeneral.push(datosGenerados);
            guardarProductos(productosAlmacenados);
            productosProcesados++;
            if (data[data.length - 1] === eachProduct) {
                mostrarProgreso();
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
    return arrayGeneral;

}
);

export default manejadorGeneral;