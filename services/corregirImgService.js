import sharp from "sharp";
import fs from "fs";
import path from "path";

async function cambiarMedidasImg(pathImg, pathOutput) {
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
      .resize(1000, 1000, {
        fit: "cover",
        position: "center",
      })
      .toFile(outputPath + "/" + path.basename(inputPath, path.extname(inputPath)) + path.extname(inputPath));

    console.log(`✅ ${inputPath} -> ${outputPath}`);
  } catch (error) {
    console.error(`❌ Error procesando ${pathImg}: ${error.message}`);
  }
}


const prueba = (async () => {
  const pathImg = "./prueba/152-001-011.jpg";
  const pathOutput = "./1000x1000NoJPG";
  // const absolutePath = path.resolve(pathImg);
  await cambiarMedidasImg(pathImg, pathOutput);
})();

export default cambiarMedidasImg;