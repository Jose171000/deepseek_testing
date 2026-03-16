import xlsx from 'xlsx';

const generadorDeXLSX = (data, nombreDeArchivo) => {
    try {
        const hojaDeTrabajo = xlsx.utils.json_to_sheet(data);
        const libroDeTrabajo = xlsx.utils.book_new();
        xlsx.utils.book_append_sheet(libroDeTrabajo, hojaDeTrabajo, 'processedData');
        xlsx.writeFile(libroDeTrabajo, nombreDeArchivo + '.xlsx');
    } catch (error) {
        console.error("Error al generar el archivo " + nombreDeArchivo + ".xlsx :", error);
    }
}

export default generadorDeXLSX;