const mostrarProgreso = (productosProcesados, productosFallidos, totalProductos) => {
    const porcentaje = ((productosProcesados + productosFallidos) / totalProductos * 100).toFixed(2);
    console.log(`Progreso: ${productosProcesados + productosFallidos}/${totalProductos} (${porcentaje}%) | Éxitos: ${productosProcesados} | Fallos: ${productosFallidos}`);
};

export default mostrarProgreso;