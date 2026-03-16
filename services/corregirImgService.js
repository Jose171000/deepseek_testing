import sharp from "sharp";
import fs from "fs";
import path from "path";

async function cambiarMedidasImg(pathImg, pathOutput) {
  if (!fs.existsSync(pathImg)) {
    throw new Error(`El archivo de origen no existe: ${pathImg}`);
  }

  if (!fs.existsSync(pathOutput)) {
    fs.mkdirSync(pathOutput, { recursive: true });
  }

  try {
    const nombreArchivo = path.basename(pathImg); 
    const rutaFinal = path.join(pathOutput, nombreArchivo);

    const imagen = sharp(pathImg, { failOn: 'truncated' }); // failOn: detecta imágenes cortadas

    await imagen.metadata(); 

    await imagen
      .resize(1000, 1000, {
        fit: "cover",
        position: "center",
      })
      .toFile(rutaFinal);


  } catch (error) {
    // 6. IMPORTANTE: Lanzar el error hacia arriba.
    // No solo imprimas el error aquí, debes avisar al bucle principal que esto falló
    // para que no intente contarla como "exitosa".
    throw new Error(`Fallo en Sharp (${path.basename(pathImg)}): ${error.message}`);
  }
}

// import sharp from "sharp";

// import fs from "fs";

// import path from "path";



// async function cambiarMedidasImg(pathImg, pathOutput) {

//   if (!fs.existsSync(pathImg)) {

//     console.error(`❌ El archivo ${pathImg} no existe.`);

//     return;

//   }

//   if (!fs.existsSync(pathOutput)) {

//     fs.mkdirSync(pathOutput, { recursive: true });

//   }

 

//   try {

//     await sharp(pathImg)

//       .resize(1000, 1000, {

//       fit: "cover",

//       position: "center",

//     })

//     .toFile(pathOutput + "/" + path.basename(pathImg, path.extname(pathImg)) + path.extname(pathImg));

//     // console.log(`✅ ${pathImg} -> ${pathOutput}`);

//   } catch (error) {

//     console.error(`❌ Error procesando ${pathImg}: ${error.message}`);

   

//   }

// }

export default cambiarMedidasImg;