import * as cheerio from "cheerio";
import axios from "axios";

const scrapeWebAmma = (url) => {
    return new Promise((resolve, reject) => {
        axios.get(url)
            .then((response) => {
                const $ = cheerio.load(response.data);
                const title = $(".product_title").text().trim();
                const shortDescription = $(".woocommerce-product-details__short-description").text().trim();
                const description = $("#tab-description").text().trim();
                const modoDeUso = $("#tab-modo-de-uso").children().slice(1).text().trim();
                const tipoDePiel = $("#tab-title-tipos-de-piel").children().eq(1).text().trim().length > 0 ? $("#tab-title-tipos-de-piel").children().eq(1).text().trim() : $("#tab-tipo-de-piel").children().eq(1).text().trim();
                const principalesIngredientes = $("#tab-principales-ingredientes").children().slice(1)
                    .text()
                    .trim();
                resolve({
                    title,
                    shortDescription,
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

const sortSkuProductsOfBundles = async (sku, quantityProducts = 1) => {
    let allData = "";
    let skus = [];
    let productsNames = "";
    skus = sku.split(',').map(item => item.trim());

    if (quantityProducts == skus.length && skus.length > 1) {
        for (const sku of skus) {

            const {
                title,
                shortDescription,
                description,
                modoDeUso,
                tipoDePiel,
                principalesIngredientes
            } = await scrapeWebAmma(`https://ammabeauty.pe/?s=${sku}&post_type=product&type_aws=true&aws_id=1&aws_filter=1`);
            if (skus.findIndex(n => n == sku) == skus.length - 1) {
                productsNames += title;

            } else {
                productsNames += title + " y ";
            }
            if (!title) {
                new Error(`No se encontró el producto con SKU ${sku}`);
                console.error(`No se encontró el producto con SKU ${sku}`);
                continue;
            }
            allData += `${skus.findIndex(n => n == sku) + 1}) ${title}\n${shortDescription}\n${description}\nModo de uso: ${modoDeUso}\nTipo de piel: ${tipoDePiel}\nPrincipales ingredientes: ${principalesIngredientes}\n\n`;
        }
    } else {
        const {
            title,
            shortDescription,
            description,
            modoDeUso,
            tipoDePiel,
            principalesIngredientes
        } = await scrapeWebAmma(`https://ammabeauty.pe/?s=${sku}&post_type=product&type_aws=true&aws_id=1&aws_filter=1`);

        productsNames = title + " (x" + quantityProducts + ")";
        if (!title) {
            new Error(`No se encontró el producto con SKU: ${sku}`);
            console.error(`No se encontró el producto con SKU: ${sku}`);
        }
        for (let i = 0; i < quantityProducts; i++) {
            allData += `${i + 1}) ${title}\n${shortDescription}\n${description}\nModo de uso: ${modoDeUso}\nTipo de piel: ${tipoDePiel}\nPrincipales ingredientes: ${principalesIngredientes}\n\n`;
        }
    }


    return { allData, productsNames };
}



export { scrapeWebAmma, sortSkuProductsOfBundles };