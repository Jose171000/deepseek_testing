import sharp from "sharp";
import fs from "fs";
import path from "path";

async function agregarRegaloImgs(pathImg, pathOutput, logoPath) {
  let logoName = path.basename(logoPath, path.extname(logoPath));
  if (!fs.existsSync(pathImg)) {
    console.error(`❌ El archivo ${pathImg} no existe.`);
    return;
  }
  if (!fs.existsSync(pathOutput)) {
    fs.mkdirSync(pathOutput, { recursive: true });
  }

  try {
    const inputPath = pathImg;
    const outputPath = pathOutput;

    await sharp(inputPath)
      .resize(1000, 1000)
      .composite([
        {
          input: await sharp(logoPath)
            .resize(480, 480)
            .png()
            .toBuffer(),
          left: 20,
          top: (500)
        }
      ])
      .jpeg({ quality: 90 })
      .toFile(outputPath + "/" + path.basename(inputPath, path.extname(inputPath)) + "_" + logoName + path.extname(inputPath));

    // console.log(`✅ ${inputPath} -> ${outputPath}`);
  } catch (error) {
    console.error(`❌ Error procesando ${pathImg}: ${error.message}`);
  }
}

// agregarRegaloImgs("./001-001-015.jpg", "./imagenConRegaloPrueba");

export default agregarRegaloImgs;

