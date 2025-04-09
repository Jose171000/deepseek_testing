import axios from 'axios';
import fs from 'fs';
import path from 'path';
// import cambiarMedidasImg from './corregirImgService.js';

const downloadImage = async (url, outputDir, sku) => {
    let outEditedImg = "./1000x1000JPG";
    if(!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    if (!fs.existsSync("./noSonJPG")) {
        fs.mkdirSync("./noSonJPG", { recursive: true });
    }

    try {
        const response = await axios({
            url,
            responseType: 'stream',
            method: 'GET',
        })
        const fileName = path.basename(new URL(url).pathname);
        const ext = path.extname(fileName);
        let filePath = path.join(outputDir, `${sku}${ext}`);
        if (ext !== ".jpg") {
            filePath = path.join("./noSonJPG", `${sku}.jpg`);
            outEditedImg = "./1000x1000NoJPG";
        }
        await response.data.pipe(fs.createWriteStream(filePath));
    
        // await cambiarMedidasImg(`.\\${filePath}`, outEditedImg);
        console.log(`✅ Imagen descargada y procesada: ${filePath}`);


    } catch (error) {
        console.error(`Error descargando imagen desde ${url}:`, error.message);
    }
}

const prueba = (async () => {
    const url = "https://ammabeauty.pe/wp-content/uploads/2025/04/152-001-011_regaloAbril.jpg";
    const outputDir = "./prueba";
    const sku = "152-001-011";

    await downloadImage(url, outputDir, sku);
})();



export default downloadImage;