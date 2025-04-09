import * as cheerio from "cheerio";
import axios from "axios";

const scrapeWebAmma = (url) => {
    return new Promise((resolve, reject) => {
        axios.get(url)
            .then((response) => {
                const $ = cheerio.load(response.data);
                const description = $("#tab-description").text().trim();
                const modoDeUso = $("#tab-modo-de-uso p").text().trim();
                const tipoDePiel = $("#tab-tipo-de-piel p").text().trim();
                const principalesIngredientes = $("#tab-principales-ingredientes p")
                    .text()
                    .trim();
                resolve({
                    description,
                    modoDeUso,
                    tipoDePiel,
                    principalesIngredientes
                })
            })
            .catch((error) => {
                console.error("Error al obtener datos de la página:", error);
                reject(error);
            })
    })
}

export default scrapeWebAmma;