import axios from 'axios';
import fs from 'fs';
import path from 'path';
// import cambiarMedidasImg from './corregirImgService.js';

const downloadImage = async (url, outputDir, fileName) => {
    if(!fs.existsSync(`${outputDir}/sonJPG`)) {
        fs.mkdirSync(`${outputDir}/sonJPG`, { recursive: true });
    }

    try {
        const response = await axios({
            url,
            responseType: 'stream',
            method: 'GET',
        })
        const nombreArchivo = path.basename(new URL(url).pathname);
        const ext = path.extname(nombreArchivo);
        let filePath = path.join(`${outputDir}/sonJPG`, fileName);
        if (ext !== ".jpg") {
            if(!fs.existsSync(`${outputDir}/noSonJPG`)) {
                fs.mkdirSync(`${outputDir}/noSonJPG`, { recursive: true });
            }
            filePath = path.join(`${outputDir}/noSonJPG`, fileName);
        }
        await response.data.pipe(fs.createWriteStream(filePath));
    
        // await cambiarMedidasImg(`.\\${filePath}`, outEditedImg);
        console.log(`✅ Imagen descargada y procesada: ${filePath}`);


    } catch (error) {
        console.error(`Error descargando imagen desde ${url}:`, error.message);
    }
}



export default downloadImage;