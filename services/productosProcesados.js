import fs from 'fs';

const archivoAlmacenamiento = './productosProcesados.json';

const mostrarProductosAlmacenados = () =>{
    try {
        if(fs.existsSync(archivoAlmacenamiento)){
            const contenido = fs.readFileSync(archivoAlmacenamiento, 'utf-8');
            return JSON.parse(contenido);
        }
    } catch (error) {
        console.error('Error leyendo el archivo de almacenamiento:', error);
    }

    return [];
}

const guardarProductos = (productos) =>{
    try {
        fs.writeFileSync(archivoAlmacenamiento, JSON.stringify(productos, null, 2), 'utf-8');
        console.log(`\nArchivo actualizado con ${productos.length} productos`);
    } catch (error) {
        console.error('Error guardando los productos:', error);
    }
}

export {mostrarProductosAlmacenados, guardarProductos};
