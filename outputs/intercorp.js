const celularesBundlesONoOutput = async (aiResponse, productData) => {
    return {
        "Nombre Producto (100 caracteres o menos / obligatorio)": aiResponse['nombre_producto'],
        "Nombre SKU (100 caracteres o menos / obligatorio)": aiResponse['nombre_producto'],
        "Descripción del producto (obligatorio) (32700 caracteres o menos)": aiResponse.html_description,
        "Marca (alta previa / obligatorio)": aiResponse.marca,
        "UPC (número entero / 20 digitos máximo / obligatorio)": productData['SKU simple'],
        "Alto (cm / obligatorio)": aiResponse.alto,
        "Largo (cm / obligatorio)": aiResponse.largo,
        "Peso (gr / obligatorio)": aiResponse.peso_paquete,
        "Ancho (cm / obligatorio)": aiResponse.ancho,
        "Sitios": "Oechsle|Plaza Vea|Promart|RealPlaza",
        "Radio": aiResponse.radio,
        "Compatibilidad": aiResponse.compatibility,
        "Conexión Bluetooth": aiResponse.bluetooth_connection,
        "Marca": aiResponse.marca,
        "Color Principal": aiResponse.main_color,
        "Velocidad Del Procesador": aiResponse.processor_speed,
        "Memoria Interna": aiResponse.internal_memory,
        "Sistema Operativo": aiResponse.operating_system,
        "Cámara Frontal": aiResponse.face_camera,
        "Conexión Wi Fi": aiResponse.wifi_connection,
        "Resistente al agua": aiResponse.water_resistance,
        "Alto": aiResponse.alto_producto,
        "Resolución de pantalla": aiResponse.resolución_de_pantalla,
        "Memoria Expandible": aiResponse.expandable_memory,
        "Memoria RAM": aiResponse.ram_memory,
        "Ancho": aiResponse.ancho_producto,
        "Dual Sim": aiResponse.Dual_Sim,
        "Modelo": aiResponse.product_model,
        "Enfoque Automático": aiResponse.Enfoque_Automático,
        "Núcleos Del Procesador": aiResponse.processor_cores,
        "Batería": aiResponse.bateria,
        "Tecnología Celular": aiResponse.cellphone_technology,
        "Número de piezas": aiResponse.número_piezas,
        "Color": aiResponse.producto_color,
        "Garantía": "12 meses",
        "Tamaño pantalla celulares": aiResponse.screen_size_products,
        "Peso": aiResponse.peso_producto,
        "Incluye": aiResponse.incluye,
        "Incluye Inteligencia Artificial": aiResponse.Inteligencia_Artificial,
        "Tipo de pantalla": aiResponse.screen_type_product,
        "Procesador y generación": aiResponse.processor_generation_product,
        "Profundidad": aiResponse.profundidad_product,
        "Cámara Principal": aiResponse.main_camera
    }
}

const vinoTintoOutput = (aiResponse, productData) => {
    return {
        "SKU simple": productData["SKU simple"],
        "nombre": productData["Nombre"],
        "nombre_llamativo": aiResponse.nombre_llamativo,
        "descripcion_html": aiResponse.descripcion_html,
        "marca": aiResponse.marca,
        "altura_del_paquete_de_envio": aiResponse.altura_del_paquete_de_envio,
        "largo_del_paquete_de_envio": aiResponse.largo_del_paquete_de_envio,
        "peso_del_paquete": aiResponse.peso_del_paquete,
        "anchura_del_paquete_de_envio": aiResponse.anchura_del_paquete_de_envio,
        "ingredientes": aiResponse.ingredientes,
        "condiciones_de_conservacion": aiResponse.condiciones_de_conservacion,
        "tipo_tapa": aiResponse.tipo_tapa,
        "advertencia_consumo": aiResponse.advertencia_consumo,
        "bodega": aiResponse.bodega,
        "volumen_neto": aiResponse.volumen_neto,
        "denominacion_variedad": aiResponse.denominacion_variedad,
        "graduacion_alcoholica": aiResponse.graduacion_alcoholica,
        "cepa": aiResponse.cepa,
        "presentacion": aiResponse.presentacion,
        "temperatura_sugerida": aiResponse.temperatura_sugerida
    }
}

const piscoyBrandyOutput = (aiResponse, productData) => {
    return {
        "SKU simple": productData["SKU simple"],
        "nombre": productData["Nombre"],
        "nombre_llamativo": aiResponse.nombre_llamativo,
        "descripcion_html": aiResponse.descripcion_html,
        "marca": aiResponse.marca,
        "altura_del_paquete_de_envio": aiResponse.altura_del_paquete_de_envio,
        "largo_del_paquete_de_envio": aiResponse.largo_del_paquete_de_envio,
        "peso_del_paquete": aiResponse.peso_del_paquete,
        "anchura_del_paquete_de_envio": aiResponse.anchura_del_paquete_de_envio,
        "ingredientes": aiResponse.ingredientes,
        "condiciones_de_conservacion": aiResponse.condiciones_de_conservacion,
        "tipo_tapa": aiResponse.tipo_tapa,
        "advertencia_consumo": aiResponse.advertencia_consumo,
        "añejado": aiResponse.añejado,
        "volumen_neto": aiResponse.volumen_neto,
        "denominacion_variedad": aiResponse.denominacion_variedad,
        "tiempo_añejamiento": aiResponse.tiempo_añejamiento,
        "graduacion_alcoholica": aiResponse.graduacion_alcoholica,
        "presentacion": aiResponse.presentacion,
        "proceso_añejamiento": aiResponse.proceso_añejamiento,
        "composicion": aiResponse.composicion,
    }
}

const categorizacionAMMABeautyOutput = (aiResponse, productData) => {
    return {
        "SKU simple": productData["SKU simple"],
        "nombre": productData["Nombre"],
        "categoria_intercorp": aiResponse.categoria_intercorp
    }
}

const protectorSolarCorporalAMMABeautyOutput = (aiResponse, productData) => {
    return {
        "SKU simple": productData["SKU simple"],
        "nombre": productData["Nombre"],
        "nombre_producto": aiResponse.nombre_producto,
        "descripcion_html": aiResponse.descripcion_html,
        "marca": aiResponse.marca,
        "altura_del_paquete_de_envio": aiResponse.altura_del_paquete_de_envio,
        "largo_del_paquete_de_envio": aiResponse.largo_del_paquete_de_envio,
        "peso_del_paquete": aiResponse.peso_del_paquete,
        "anchura_del_paquete_de_envio": aiResponse.anchura_del_paquete_de_envio,
        "tipo_producto_intercorp": aiResponse.tipo_producto_intercorp,
        "tono": aiResponse.tono,
        "eco_friendly": aiResponse.eco_friendly,
        "ancho_producto": aiResponse.ancho_producto,
        "modelo": aiResponse.modelo,
        "factor_proteccion_solar": aiResponse.factor_proteccion_solar,
        "zonas_de_aplicacion": aiResponse.zonas_de_aplicacion,
        "vegano": aiResponse.vegano,
        "informacion_adicional": aiResponse.informacion_adicional,
        "genero": aiResponse.genero,
        "hipoalergenico": aiResponse.hipoalergenico,
        "recomendaciones_uso": aiResponse.recomendaciones_uso,
        "sin_perfume": aiResponse.sin_perfume,
        "libre_parabenos": aiResponse.libre_parabenos,
        "presentacion": aiResponse.presentacion,
        "caracteristicas_eco_friendly": aiResponse.caracteristicas_eco_friendly,
        "tipo_de_piel": aiResponse.tipo_de_piel,
        "contenido": aiResponse.contenido,
        "acabado": aiResponse.acabado,
        "alto_producto": aiResponse.alto_producto,
        "edad_recomendada": aiResponse.edad_recomendada,
        "waterproof": aiResponse.waterproof,
        "largo_producto": aiResponse.largo_producto,
    }
}

export { celularesBundlesONoOutput, vinoTintoOutput, piscoyBrandyOutput, categorizacionAMMABeautyOutput, protectorSolarCorporalAMMABeautyOutput };