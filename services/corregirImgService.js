const fs = require('fs');
const path = require('path');
import sharp from 'sharp';

/**
 * Procesa imágenes: redimensiona y cambia el nombre
 * @param {Object} options - Opciones de configuración
 * @param {string} options.inputDir - Directorio de imágenes originales
 * @param {string} options.outputDir - Directorio para imágenes procesadas
 * @param {number} options.width - Ancho deseado (px)
 * @param {number} options.height - Alto deseado (px)
 * @param {string} options.baseName - Base para el nuevo nombre
 * @param {number} options.startingIndex - Número inicial para la secuencia (opcional, default=1)
 * @param {string} options.fit - Método de ajuste de sharp (cover, contain, fill, etc) (opcional, default='cover')
 * @returns {Promise<{total: number, success: number, errors: Array}>} Resultado del procesamiento
 */
async function processImages(options) {
  const {
    inputDir,
    outputDir,
    width,
    height,
    baseName,
    startingIndex = 1,
    fit = 'cover'
  } = options;

  // Validar parámetros requeridos
  if (!inputDir || !outputDir || !width || !height || !baseName) {
    throw new Error('Faltan parámetros requeridos');
  }

  // Crear directorio de salida si no existe
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  let counter = startingIndex;
  let successCount = 0;
  const errorLog = [];

  // Leer directorio
  const files = fs.readdirSync(inputDir);
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp'];

  console.log(`Iniciando procesamiento de ${files.length} archivos...`);

  // Procesar imágenes una por una (en serie)
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    
    if (!imageExtensions.includes(ext)) {
      console.log(`⏩ Saltando ${file} (no es una imagen compatible)`);
      continue;
    }

    const newFileName = `${baseName}_${counter.toString().padStart(3, '0')}${ext}`;
    counter++;

    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, newFileName);

    try {
      await sharp(inputPath)
        .resize(width, height, {
          fit,
          position: 'center'
        })
        .toFile(outputPath);

      console.log(`✅ ${file} -> ${newFileName}`);
      successCount++;
    } catch (err) {
      const errorMsg = `❌ Error procesando ${file}: ${err.message}`;
      console.error(errorMsg);
      errorLog.push({
        file,
        error: err.message
      });
    }
  }

  return {
    total: files.length,
    success: successCount,
    errors: errorLog,
    outputDir: path.resolve(outputDir) // Devuelve la ruta absoluta del directorio de salida
  };
}

module.exports = { processImages };