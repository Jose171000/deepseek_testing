import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";
import { manejadorDeImgs, manejadorDeImgsConRegalo, manejadorDeEdicionMasiva } from "./handlers/manejadorDeImg.js";
import { buildPairedPromptOutputs } from "./services/joinningPormpt&Output.js";
import manejadorGeneral from "./handlers/manejadorDeDatosDeProductos.js";
import manejadorDeDatosDePacksAMMA from "./handlers/manejadorDeDatosDePacksAMMA.js";
import generadorDeXLSX from "./services/generadorDeXLSXService.js";
import lectorDeExcel from "./services/lectorDeExcelService.js";
import fs from "fs";
import * as yujuPrompts from "./prompts-inputs/yujuProducts.js"
import * as falabellaPrompts from './prompts-inputs/falabella.js';
import * as intercorpPrompts from './prompts-inputs/intercorp.js';
import * as intercorpYujuYapePrompts from './prompts-inputs/intercorpYujuYape.js';
import * as yujuOutputs from "./outputs/yujuProducts.js"
import * as falabellaOutputs from './outputs/falabella.js';
import * as intercorpOutputs from './outputs/intercorp.js';
import * as intercorpYujuYapeOutputs from './outputs/intercorpYujuYape.js';
import path from "path";

const directorio = "./assets/gifts"
const archivos = fs.readdirSync(directorio);
const rl = readline.createInterface({ input, output });
const pairedFunctions = buildPairedPromptOutputs({
    promptModules: [
        { source: "yuju", prompts: yujuPrompts },
        { source: "falabella", prompts: falabellaPrompts },
        { source: "intercorp", prompts: intercorpPrompts },
        { source: "IntercorpYujuYape", prompts: intercorpYujuYapePrompts }
    ],
    outputModules: [
        { source: "yuju", outputs: yujuOutputs },
        { source: "falabella", outputs: falabellaOutputs },
        { source: "intercorp", outputs: intercorpOutputs },
        { source: "IntercorpYujuYape", outputs: intercorpYujuYapeOutputs }
    ]
})

let toggle = true;

console.log("Bienvenido a la aplicación de creación y gestión de Productos de SYNKRO AI");

async function main() {
    do {
        const respuesta = await rl.question(
            "\nPor favor, selecciona una opción:\n" +
            "1. Procesar datos de productos individuales\n" +
            "2. Procesar datos de productos para bundles o packs\n" +
            "3. Procesar datos de productos para bundles o packs de AMMA Beauty\n" +
            "4. Procesar Imágenes de productos con regalo de AMMA Beauty\n" +
            "5. Corregir el tamaño de las imágenes a 1000x1000px de forma masiva\n" +
            "6. Salir\n> "
        );

        switch (respuesta.trim()) {
            case "1":
                console.log("Has seleccionado procesar datos de productos individuales.");
                await new Promise(resolve => setTimeout(resolve, 800));
                console.log("Selecciona el prompt que usarás para procesar los datos de los productos. Te recomiendo usar para esta opción únicamente los prompts que no contengan 'pack' o 'bundle' en su nombre.\n\n");
                await new Promise(resolve => setTimeout(resolve, 1800));

                pairedFunctions.forEach((pair, index) => {
                    console.log(`${index + 1}) [${pair.source}] ${pair.name}\n`);
                });


                const indicePrompt = await rl.question("\nIngresa el número correspondiente al prompt que deseas usar:\n\n> ");
                const indice = parseInt(indicePrompt.trim(), 10) - 1;
                const promptSeleccionado = pairedFunctions[indice]?.name || "Índice inválido";
                const outputSeleccionado = pairedFunctions[indice]?.outputFn || null;

                console.log(`Has seleccionado el prompt: ${promptSeleccionado} y su función de output asociada ${outputSeleccionado}.\n\n`);
                await new Promise(resolve => setTimeout(resolve, 2000));
                await rl.question("Tener en cuenta que el archivo XLSX se debe llamar 'fichaTecnica.xlsx' y debe contener una sola hoja y las siguientes columnas: 'SKU', 'Nombre', 'Descripción General', 'Categorías'. \n\nPresiona Enter para continuar...\n\n> ");
                const generatedData = await manejadorGeneral('./fichaTecnica.xlsx', pairedFunctions[indice].promptFn, pairedFunctions[indice].outputFn);
                const fileName = await rl.question("Los datos han sido procesados.\nAhora ingrese el nombre del archivo XLSX de salida (sin extensión):\n\n> ");

                generadorDeXLSX(generatedData, `${fileName.trim()}`);
                break;
            case "2":
                console.log("Has seleccionado procesar datos de productos bundles o packs.");
                break;
            case "3":


                console.log("Has seleccionado procesar datos de bundles o packs de AMMA Beauty.\n\n");

                await new Promise(resolve => setTimeout(resolve, 800));
                console.log("Selecciona el prompt que usarás para procesar los datos de los packs. Te recomiendo usar para esta opción únicamente los prompts que contengan 'pack' o 'bundle' en su nombre.\n\n");
                await new Promise(resolve => setTimeout(resolve, 1800));

                pairedFunctions.forEach((pair, index) => {
                    console.log(`${index + 1}) [${pair.source}] ${pair.name}\n`);
                });


                const indicePromptBundle = await rl.question("\nIngresa el número correspondiente al prompt que deseas usar:\n\n> ");
                const indiceBundle = parseInt(indicePromptBundle.trim(), 10) - 1;
                const promptBundleSeleccionado = pairedFunctions[indiceBundle]?.name || "Índice inválido";
                const outputBundleSeleccionado = pairedFunctions[indiceBundle]?.outputFn || null;

                console.log(`Has seleccionado el prompt: ${promptBundleSeleccionado} y su función de output asociada ${outputBundleSeleccionado}.\n\n`);
                await new Promise(resolve => setTimeout(resolve, 2000));
                await rl.question("Tener en cuenta que el archivo XLSX se debe llamar 'bundlesParaCrearAMMA.xlsx' y debe contener una sola hoja y las siguientes columnas: 'SKU simple', 'SKUs de productos (separados por comas)' y 'cantidad de productos por publicacion'. \n\nPresiona Enter para continuar...\n\n> ");
                const dataBundles = await manejadorDeDatosDePacksAMMA('./bundlesParaCrearAMMA.xlsx', pairedFunctions[indiceBundle].promptFn, pairedFunctions[indiceBundle].outputFn);
                const fileNameBundles = await rl.question("Los datos han sido procesados.\nAhora ingrese el nombre del archivo XLSX de salida (sin extensión):\n\n> ");

                generadorDeXLSX(dataBundles, `${fileNameBundles.trim()}`);
                break;
            case "4":
                let giftToggle = true;
                let logoPath = "";
                console.log("Has seleccionado procesar Imágenes de productos con regalo de AMMA Beauty.\n\n");
                console.log("Recuerda que el archivo se debe llamar 'productosConImg.xlsx' y debe tener una columna 'SKU' y una columna 'Imágenes' donde cada fila será un producto con su código SKU y sus imágenes, estas deben estar separadas por comas si es que son más de una y siempre la primera debe ser la imagen principal del producto con fondo blanco.\n\n");

                await new Promise(resolve => setTimeout(resolve, 800));

                console.log("Ahora selecciona la imagen de regalo que deseas agregar en cada imagen de los productos\n");
                archivos.forEach((archivo, index) => {
                    console.log(`${index + 1}. ${archivo}\n`);
                });
                console.log(`${archivos.length + 1}. Volver al menú principal\n`);
                do {
                    const indiceLogo = await rl.question("\nIngresa el número correspondiente a la imagen de regalo:\n\n> ");
                    const indice = parseInt(indiceLogo.trim(), 10) - 1;
                    if (indice === archivos.length) {
                        console.log("Regresando al menú principal...\n");
                        await new Promise(resolve => setTimeout(resolve, 1200));
                        break;
                    }
                    if (indice >= 0 && indice < archivos.length) {
                        logoPath = path.join(directorio, archivos[indice]);
                        console.log(`Has seleccionado la imagen de regalo: ${archivos[indice]}\n`);
                        await new Promise(resolve => setTimeout(resolve, 2000));
                        giftToggle = false;
                    }
                } while (giftToggle);
                if (!giftToggle) {
                    await manejadorDeImgsConRegalo(logoPath = logoPath);
                }
                break;
            case "5":
                console.log("Has seleccionado Corregir el tamaño de las imágenes a 1000x1000px de forma masiva.\n\n");
                console.log("Recuerda que el archivo se debe llamar 'imagenesParaCorregirTamaño.xlsx' y debe tener una columna 'SKU' y una columna 'Imágenes' donde cada fila será un producto con su código SKU y sus imágenes, estas deben estar separadas por comas si es que son más de una y siempre la primera debe ser la imagen principal del producto con fondo blanco.\n\n");

                await new Promise(resolve => setTimeout(resolve, 800));
                await rl.question("Presiona Enter para continuar...\n\n> ")

                await manejadorDeImgs();
                await manejadorDeEdicionMasiva('./imágenesDeProductosParaEditar1000x1000-temporal', './imágenesEditadas1000x1000');

                break;
            case "6":
                console.log("Saliendo de la aplicación. ¡Hasta luego!");
                toggle = false;
                break;

            default:
                console.log("Opción no válida. Por favor, selecciona 1, 2 o 3.");
        }

    } while (toggle);

    rl.close();
}

main();