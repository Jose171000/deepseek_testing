import lectorDeExcel from '../services/lectorDeExcelService.js';
import path from 'path';
import downloadImage from '../services/descargarImgService.js';
import fs from 'fs';
import cambiarMedidasImg from '../services/corregirImgService.js';
import agregarRegaloImgs from '../services/agregarRegaloAImgs.js';

const datosImgConRegalo = lectorDeExcel('./productosConImg.xlsx');
const datosImg = lectorDeExcel("./imagenesParaCorregirTamaño.xlsx")
const esperar = (ms) => new Promise(resolve => setTimeout(resolve, ms));


async function manejadorDeImgsConRegalo(logoPath) {
    for (let producto of datosImgConRegalo) {
        let mainImageUrl = producto['Imágenes']?.split(',')[0].trim();
        let sku = producto['SKU'].trim();
        let fileName = `${sku}.${path.extname(mainImageUrl).split('?')[0].slice(1)}`;
        let filePath = path.join('./imagenesDeProductosAMMABeauty', fileName);
        let filePath_temporal = path.join('./imagenesDeProductosAMMABeauty-temporal', fileName);

        if (fs.existsSync(filePath)) {
            console.log(`✅ Las imágenes para el producto con SKU ${sku} ya han sido descargadas anteriormente.`);
            continue;
        }

        await downloadImage(mainImageUrl, './imagenesDeProductosAMMABeauty-temporal', fileName);
        await cambiarMedidasImg(filePath_temporal, './imagenesDeProductosAMMABeauty');
        await agregarRegaloImgs(filePath, './imagenesConRegaloAMMABeauty', logoPath);
        console.log(`Imagen del producto '${sku} fue procesado correctamente`);

    }
    const tempDir = './imagenesDeProductosAMMABeauty-temporal';
    if (fs.existsSync(tempDir)) {
        try {
            await fs.promises.rm(tempDir, { recursive: true, force: true });
            // console.log(`🧹 Eliminado directorio temporal: ${tempDir}`);
        } catch (err) {
            console.error(`❌ No se pudo eliminar ${tempDir}:`, err);
        }
    }


}


async function manejadorDeImgs() {
    const DIR_SALIDA = './imágenesEditadas1000x1000';
    const DIR_TEMPORAL = './imágenesDeProductosParaEditar1000x1000-temporal';

    console.log(`🛠️ Iniciando corrección masiva para ${datosImg.length} productos...`);

    if (!fs.existsSync(DIR_SALIDA)) fs.mkdirSync(DIR_SALIDA, { recursive: true });
    if (!fs.existsSync(DIR_TEMPORAL)) fs.mkdirSync(DIR_TEMPORAL, { recursive: true });

    for (let producto of datosImg) {

        if (!producto || !producto['SKU']) continue;

        let sku = String(producto['SKU']).trim();
        let rawImages = producto['Imágenes'] ? String(producto['Imágenes']) : "";
        let allProductImages = rawImages.split(',').map(img => img.trim()).filter(img => img.length > 5);

        if (allProductImages.length === 0) continue;

        console.log(`🔹 Revisando SKU: ${sku} (${allProductImages.length} imágenes)`);

        for (let [index, image] of allProductImages.entries()) {
            try {
                let cleanUrl = image.split('?')[0];
                let ext = path.extname(cleanUrl) || '.jpg';
                if (ext.length > 5) ext = '.jpg';
                let suffix = index > 0 ? `_${index}` : "";
                let fileName = `${sku}${suffix}${ext}`;
                let filePathFinal = path.join(DIR_SALIDA, fileName);

                if (fs.existsSync(filePathFinal) || fs.existsSync(path.join(DIR_TEMPORAL, fileName))) {
                    console.log(`Esta image '${fileName}' ya fue descargada`);
                    
                    continue;
                }

                await downloadImage(image, DIR_TEMPORAL, fileName);

                const tiempoDeEspera = Math.floor(Math.random() * 1500) + 1000;

                await esperar(tiempoDeEspera);


            } catch (error) {
                console.error(`   ❌ Error en imagen ${index + 1} de ${sku}: ${error.message}`);
            }
        }
    }


}

async function manejadorDeEdicionMasiva(directorioEntrada, directorioSalida) {
    if (!fs.existsSync(directorioEntrada)) {
        console.log("⚠️ El directorio de entrada no existe.");
        return;
    }

    const allFiles = fs.readdirSync(directorioEntrada).filter(file => {
        return !file.startsWith('.') && (file.endsWith('.jpg') || file.endsWith('.png') || file.endsWith('.jpeg'));
    });

    console.log(`📂 Se encontraron ${allFiles.length} imágenes para procesar.`);
    
    let exitos = 0;

    for (let eachImage of allFiles) {
        try {
            const imagePath = path.join(directorioEntrada, eachImage);
            
            await cambiarMedidasImg(imagePath, directorioSalida);
            
            exitos++;
            console.log(`   ✅ Guardado: ${eachImage}`);

        } catch (error) {
            console.error(`   ❌ Error con ${eachImage}:`, error.message);
        }
    }

    if (exitos === allFiles.length && allFiles.length > 0) {
        try {
            await fs.promises.rm(directorioEntrada, { recursive: true, force: true });
            console.log(`🧹 Limpieza final completada (Temp eliminado).`);
        } catch (err) {
            console.log(`❌ Error borrando carpeta temporal:`, err);
        }
    } else {
        console.log(`⚠️ No se borró el temporal: Se procesaron ${exitos} de ${allFiles.length} imágenes.`);
    }

    console.log("🏁 Proceso finalizado.");
}

// async function manejadorDeEdicionMasiva(directorioEntrada, directorioSalida){
//     const allImage = fs.readdirSync(directorioEntrada);
//     for (let producto of allImage) {
//         let fileName = producto;
//         let filePath = path.join(directorioSalida, fileName);
//         let filePath_temporal = path.join(directorioEntrada, fileName);

//         if (fs.existsSync(filePath)) {
//             console.log(`✅ Las imágenes para el producto con SKU ${fileName} ya han sido descargadas anteriormente.`);
//             continue;
//         }

//         // await downloadImage(mainImageUrl, './imagenesDeProductosAMMABeauty-temporal', fileName);
//         await cambiarMedidasImg(filePath_temporal, directorioSalida);
//         // await agregarRegaloImgs(filePath, './imagenesConRegaloAMMABeauty', logoPath);
//         console.log(`Imagen del producto '${fileName} fue procesado correctamente`);

//     }
//     const tempDir = './imagenesDeProductosAMMABeauty-temporal';
//     if (fs.existsSync(tempDir)) {
//         try {
//             await fs.promises.rm(tempDir, { recursive: true, force: true });
//             // console.log(`🧹 Eliminado directorio temporal: ${tempDir}`);
//         } catch (err) {
//             console.error(`❌ No se pudo eliminar ${tempDir}:`, err);
//         }
//     }

// }

export { manejadorDeImgs, manejadorDeImgsConRegalo, manejadorDeEdicionMasiva };