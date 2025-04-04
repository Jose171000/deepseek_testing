import axios from 'axios';
import fs from 'fs';

const downloadImage = async (url, outputDir, sku) => {
    if(!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    if(!fs.existsSync("./noSonJPG")) {
        fs.mkdirSync("./noSonJPG", { recursive: true });
    }

    try {
        const response = await axios({
            url,
            responseType: 'stream',
            method: 'GET',
        })
        const fileName = path.basename(new URL(url).pathname);
        const ext  = path.extname(fileName);
        let filePath = path.join(outputDir, `${sku}${ext}`);
        if(ext !== ".jpg"){
            filePath = path.join("./noSonJPG", `${sku}.jpg`);
        }
        response.data.pipe(fs.createWriteStream(filePath));
        



    } catch (error) {
        
    }
    const writer = fs.createWriteStream(filePath);

    const response = await axios({
        url,
        method: 'GET',
        responseType: 'stream'
    });

    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
        writer.on('finish', resolve);
        writer.on('error', reject);
    });
}