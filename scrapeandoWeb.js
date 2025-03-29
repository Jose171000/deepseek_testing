import cheerio from "cheerio";
import axios from "axios";

const scrapeandoPagina = (url) =>{
    return new Promise((resolve, reject) => {
        axios
            .get(url)
            .then((response)=>{
                const $ = cheerio.load(response.data);

                const nameProduct = $(".product_title").text().trim();
                const description = $("#tab-description").text().trim();
                modoDeUso = $("#tab-modo-de-uso").text().trim();
                const ingredients = $("#tab-principales-ingredientes").text().trim();

                resolve({
                    nameProduct,
                    description,
                    modoDeUso,
                    ingredients
                });
            })
            .catch((error)=>{
                reject(error);
            });
    })
}

