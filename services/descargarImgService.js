import axios from 'axios';
import fs from 'fs';
import path from 'path';

const downloadImage = async (url, outputDir, fileName) => {
    if(!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }
    const filePath = path.join(outputDir, fileName);
    const writer = fs.createWriteStream(filePath);

    try {
        const response = await axios({
            url,
            responseType: 'stream',
            method: 'GET',
            timeout: 15000
        })
        
        response.data.pipe(writer);
        
        // Esperar a que la descarga termine
        await new Promise((resolve, reject) => {
            writer.on('finish', () =>{
                if(fs.statSync(filePath).size === 0){
                    return reject(new Error("El archivo descargado está vacío (0 bytes"));
                }
                resolve();
            });

            writer.on('error', (err)=>{
                reject(err);
            })

            response.data.on('error', (err)=>{
                reject(err);
            });
        });
    

    } catch (error) {

        writer.close();
        if(fs.existsSync(filePath)){
            fs.unlinkSync(filePath);
        }
        throw new Error(`Falló e descarga de ${fileName}: ${error.message}`);
    }
}



export default downloadImage;