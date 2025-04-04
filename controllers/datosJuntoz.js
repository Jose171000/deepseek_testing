import obtenerRespuesta from "../services/deepseekService.js";
import generadorDeXLSX from "../services/generadorDeXLSXService.js";
import lectorDeExcel from "../services/lectorDeExcelService.js";
import scrapeWebAmma from "../services/scrapingWebAmmaService.js";


async function ordenadorDeDatosJuntoz () {
    const datosExcel = lectorDeExcel('./data/AMMA.xlsx');

    datosExcel.forEach(async (elemento) => {
        const { nombre, url } = elemento;
        const { description, modoDeUso, tipoDePiel, principalesIngredientes } = await scrapeWebAmma(url);
        const respuestaDeepSeek = await obtenerRespuesta(description);
        const datosFinales = {
            nombre,
            url,
            description,
            modoDeUso,
            tipoDePiel,
            principalesIngredientes,
            respuestaDeepSeek
        };
        generadorDeXLSX(datosFinales, nombre);
    });
}