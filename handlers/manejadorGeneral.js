import lectorDeExcel from '../services/lectorDeExcelService.js';
import scrapeWebAmma from '../services/scrapingWebAmmaService.js';
import obtenerRespuesta from '../services/deepseekService.js';
import downloadImage from '../services/descargarImgService.js';
import path from 'path';

const manejadorGeneral = (async () => {
    // const url = `https://ammabeauty.pe/?s=${skuEAN.SKU}&post_type=product&type_aws=true&aws_id=1&aws_filter=1`
    let arrayGeneral = [];
    const data = lectorDeExcel('./input.xlsx');

    for (const eachProduct of data) {
        const sku = eachProduct.SKU;
        for (let index = 0; index < eachProduct['Imágenes'].split(", ").length; index++) {
            let image = eachProduct['Imágenes'].split(", ")[index];
            let filePath = path.basename(new URL(image).pathname);
            let ext = path.extname(filePath);
            let fileName = `${sku}${ext}`;
            if (index !== 0) {
                fileName = `${sku}__${index + 1}${ext}`;
            }


            console.log(fileName);
            await downloadImage(image, "./imagenes", fileName);
        }
        const {
            description,
            modoDeUso,
            tipoDePiel,
            principalesIngredientes
        } = await scrapeWebAmma(`https://ammabeauty.pe/?s=${sku}&post_type=product&type_aws=true&aws_id=1&aws_filter=1`);
        if (!description) {
            console.log(`No se encontró el producto para el SKU: ${sku}`);
            continue;
        }
        const rsptaDeekSeek = await obtenerRespuesta(`Quiero que me des como resultado únicamente un texto corto y resumido de sus principales características separados por una barra vertical para cada característica específica del producto. Aquí te paso su información del producto: descripción:'${description}', modo de uso: '${modoDeUso}', tipo de piel: '${tipoDePiel}', principales ingredientes: '${principalesIngredientes}'`);


        arrayGeneral.push({ SKU: sku, description, 'modo de uso': modoDeUso, 'Tipo de piel': tipoDePiel, principalesIngredientes });
    }

    // console.log(arrayGeneral);
}

)();