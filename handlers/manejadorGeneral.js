import lectorDeExcel from '../services/lectorDeExcelService.js';
import scrapeWebAmma from '../services/scrapingWebAmmaService.js';
import obtenerRespuesta from '../services/deepseekService.js';

const manejadorGeneral = (async () => {
    // const url = `https://ammabeauty.pe/?s=${skuEAN.SKU}&post_type=product&type_aws=true&aws_id=1&aws_filter=1`
    let arrayGeneral = [];
    const data = lectorDeExcel('./input.xlsx');

    data.forEach(async (eachProduct) => {
        const sku = eachProduct.SKU;
        const {
            description,
            modoDeUso,
            tipoDePiel,
            principalesIngredientes
        } = await scrapeWebAmma(`https://ammabeauty.pe/?s=${sku}&post_type=product&type_aws=true&aws_id=1&aws_filter=1`);

        const rsptaDeekSeek = await obtenerRespuesta(`Quiero que me des como resultado únicamente un texto corto y resumido de sus principales características separados por una barra vertical para cada característica. Aquí te paso su información del producto: '${description}', '${modoDeUso}'`);
        console.log({SKU: sku, características: rsptaDeekSeek});
        
        arrayGeneral.push({SKU: sku, características: rsptaDeekSeek});
    })

    console.log(arrayGeneral);
})();