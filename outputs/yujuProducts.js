const protectoresColchonOutput = async (aiResponse, productData) => {
    return {
        "SKU simple": productData['SKU simple'],
        "Nombre": productData['Nombre'],
        "Descripción General": aiResponse["comercial_description"],
        "Tamaño de la cama (bed_size)": aiResponse["bed_size"],
        "Texto personalizado 4 (custom_s4)": aiResponse["custom_s4"],
        "Modelo (model)": aiResponse["model"],
        "Fabricante (manufacturer)": aiResponse["manufacturer"],
        "Texto personalizado 3 (custom_s3)": aiResponse["custom_s3"],
        "Material (material)": aiResponse["material"],
        "Material (Falabella) (material_faxx)": aiResponse["material"],
        "Caracteristicas Cortas (short_features)": aiResponse["short_features"],
        "Caracteristicas Cortas (Falabella) (short_features_faxx)": aiResponse["short_features"],
        "Tamaño cama variant (tamano_cama_variant)": aiResponse["tamano_cama_variant"],
        "Ancho del paquete (package_width)": aiResponse["package_width"],
        "Características del producto (product_features)": aiResponse["characteristics"],
        "Longitud del paquete (package_length)": aiResponse["package_length"],
        "Tags descriptivos (descriptive_tags)": aiResponse["descriptive_tags"],
        "Altura del paquete (package_height)": aiResponse["package_height"],
        "Largo (length)": aiResponse["length"],
        "Anchura del producto (width)": aiResponse["width"],
        "Peso del producto": aiResponse["weight"],
        "Posibles búsquedas": aiResponse["possible_searches"]

    }
}

const respaldosDeCamaOutput = async (aiResponse, productData) => {
    return {
        "SKU simple": productData['SKU simple'],
        "Nombre": productData['Nombre'],
        "Descripción General": aiResponse["comercial_description"],
        "Tamaño de la cama (bed_size)": aiResponse["bed_size"],
        "Texto personalizado 4 (custom_s4)": aiResponse["custom_s4"],
        "Tamano (box_spring_size)": aiResponse["box_spring_size"],
        "Modelo (model)": aiResponse["model"],
        "Variante (variation)": aiResponse["variation"],
        "Material (material)": aiResponse["material"],
        "Ancho del paquete (package_width)": aiResponse["package_width"],
        "Características del producto (product_features)": aiResponse["characteristics"],
        "Longitud del paquete (package_length)": aiResponse["package_length"],
        "Tags descriptivos (descriptive_tags)": aiResponse["descriptive_tags"],
        "Altura del paquete (package_height)": aiResponse["package_height"],
        "Largo (length)": aiResponse["length"],
        "Anchura del producto (width)": aiResponse["width"],
        "Peso del producto": aiResponse["weight"],
        "Posibles búsquedas": aiResponse["possible_searches"],
    }
}

const hidratacionDeLaPielFalabellaOutput = async (aiResponse, productData) => {
    return {
        "SKU simple": productData['SKU simple'],
        "Nombre": productData['Nombre'],
        "tipo de piel": aiResponse["skin_type"],
        "tipo de tratamiento": aiResponse["treatment_type"],
        "cantidad de productos por paquete": aiResponse["number_of_items_in_package"],
        "Es dermatológico": aiResponse["dermatological"],
        "Factor de protección solar": aiResponse["sun_protection_factor"],
        "Modelo": aiResponse["model_name"],
        "característica corta": aiResponse["short_features"],
        "característica corta (Falabella)": aiResponse["short_features"],
        "Formato del medicamento": aiResponse["medicine_format"],
        "Formato del medicamento (Falabella)": aiResponse["medicine_format"],
        "Formato": aiResponse["format"],
        "Formato (Falabella)": aiResponse["format"]
    }
}


const productosDeProteccionSolarFalabellaOutput = async (aiResponse, productData) => {
    return {
        "SKU simple": productData['SKU simple'],
        "tipo de piel": aiResponse["skin_type"],
        "tipo de tratamiento": aiResponse["treatment_type"],
        "cantidad de productos por paquete": aiResponse["number_of_items_in_package"],
        "Es dermatológico": aiResponse["dermatological"],
        "Factor de protección solar": aiResponse["sun_protection_factor"],
        "Modelo": aiResponse["model_name"],
        "característica corta": aiResponse["short_features"],
        "característica corta (Falabella)": aiResponse["short_features"],
        "Formato del medicamento": aiResponse["medicine_format"],
        "Formato del medicamento (Falabella)": aiResponse["medicine_format"],
        "Formato": aiResponse["format"],
        "Formato (Falabella)": aiResponse["format"],
        "Resistente al agua": aiResponse["water_resistant"]
    }
}

const creatingPacks2ProductsOutput = async (aiResponse, productData) => {
    return `Necesito que generes varios datos para el pack en un solo formato JSON.
            Aquí tienes la información del pack:
            - Productos que conforman el pack: '${productData["nombre1"]}' + '${productData["nombre2"]}'
            - Información del producto ${productData["nombre1"]}: '${productData["descripción1"]}'
            - Información del producto ${productData["nombre2"]}: '${productData["descripción2"]}'
            
            Por favor devuelve un JSON con los siguientes campos:
            1. "pack_name": Un nombre del pack que sea llamativo y muy entendible para el usuario (Incluye producto, marca, modelo y destaca sus características principales, debe ser menor de 60 caracteres).
            2. "short_description": Una descripción corta que sea solo el nombre de los productos que conforman el pack.
            3. "pack_description": Una descripción que será un resumen de los productos fácil de leer y entender para el usuario.
            4. "pack_features": Una lista de características principales del pack separadas por comas.
            5. "descriptive_tags": Palabras clave del pack separadas por comas.
            6. "possible_searches": posibles búsquedas que pueda realizar el usuario separadas por comas, incluyendo posibles errores ortográficos (menor a 300 caracteres).
            7. "weight": Peso aproximado del pack en kg (solo el número sin la unidad de medida).
            8. "length": Un aproximado del largo del pack en cm , recuerda devolver solo unidades numéricas(solo el número sin la unidad de medida).
            9. "width": Un aproximado del ancho del pack en cm, recuerda devolver solo unidades numéricas(solo el número sin la unidad de medida).
            10. "height": Un aproximado del alto del pack en cm, recuerda devolver solo unidades numéricas(solo el número sin la unidad de medida).
            11. "usage_instructions": Un modo de uso para este pack.
            12. "main_ingredients": Una lista de principales ingredientes describiendo de forma práctica el motivo de su uso en el producto o pack.
            13. "skin_type_suggestion": Una sugerencia del tipo de piel al que pueda aplicarse este pack (devuelve solo el tipo de piel).
            Solo responde con el JSON, sin comentarios adicionales.

            IMPORTANTE: Responde ÚNICAMENTE con el JSON solicitado, SIN los delimitadores \`\`\`json ni ningún otro texto adicional.
            El JSON debe comenzar directamente con { y terminar con }.`
}

const allCategoriesFalabellaAMMAOutput = async (aiResponse, productData) => {
    return {
        "SKU simple": productData['SKU simple'],
        "Tipo de piel (skin_type)": aiResponse["skin_type"],
        "Tipo de tratamiento (treatment_type)": aiResponse["treatment_type"],
        "Número de artículos en el paquete (number_of_items_in_package)": aiResponse["number_of_items_in_package"],
        "Texto personalizado 4 (custom_s4)": aiResponse["custom_s4"],
        "Tipo de maquillaje (make_up_type)": aiResponse["make_up_type"],
        "Cantidad neta variant (cantidad_neta_variant)": aiResponse["cantidad_neta_variant"],
        "Texto personalizado 3 (custom_s3)": aiResponse["custom_s3"],
        "Tipo de tratamiento (hair_treatment_type)": aiResponse["hair_treatment_type"],
        "Tipo de tratamiento (Falabella) (hair_treatment_type_faxx)": aiResponse["hair_treatment_type"],
        "Nombre del modelo (model_name)": aiResponse["model_name"],
        "Contenido del paquete (package_content)": aiResponse["package_content"],
        "País de producción (production_country)": aiResponse["production_country"],
        "Caracteristicas Cortas (short_features)": aiResponse["short_features"],
        "Caracteristicas Cortas (Falabella) (short_features_faxx)": aiResponse["short_features"],
        "Formato del medicamento (medicine_format)": aiResponse["medicine_format"],
        "Formato del medicamento (Falabella) (medicine_format_faxx)": aiResponse["medicine_format"],
        "Formato (format)": aiResponse["format"],
        "Formato (Falabella) (format_faxx)": aiResponse["format"],
        "Público recomendado (publico_recomendado)": aiResponse["publico_recomendado"],
        "Recomendaciones de almacenamiento (storage_recommendations)": aiResponse["storage_recommendations"]
    }
}

const baseusPowerbandOutput = async (aiResponse, productData) => {
    return {
        "nombre": aiResponse["nombre"],
        "descripcion": aiResponse["descripcion"],
        "anchura_del_paquete_de_envio": aiResponse["anchura_del_paquete_de_envio"],
        "altura_del_paquete_de_envio": aiResponse["altura_del_paquete_de_envio"],
        "largo_del_paquete_de_envio": aiResponse["largo_del_paquete_de_envio"],
        "peso_del_paquete": aiResponse["peso_del_paquete"],
        "genero": aiResponse["genero"],
        "peso_del_producto": aiResponse["peso_del_producto"],
        "garantia_del_producto": aiResponse["garantia_del_producto"],
        "modelo": aiResponse["modelo"],
        "contenido_del_paquete": aiResponse["contenido_del_paquete"],
        "nombre_general_del_producto": aiResponse["nombre_general_del_producto"],
        "contenido_neto": aiResponse["contenido_neto"],
        "color": aiResponse["color"],
        "nombre_de_color": aiResponse["nombre_de_color"],
        "anchura_del_producto": aiResponse["anchura_del_producto"],
        "altura_del_producto": aiResponse["altura_del_producto"],
        "largo_del_producto": aiResponse["largo_del_producto"],
        "material": aiResponse["material"],
        "etiquetas": aiResponse["etiquetas"],
        "volumen": aiResponse["volumen"],
        "estilo": aiResponse["estilo"],
        "capacidad": aiResponse["capacidad"],
        "caracteristicas": aiResponse["caracteristicas"],
        "terminos_de_busqueda": aiResponse["terminos_de_busqueda"],
        "compatibilidad": aiResponse["compatibilidad"],
        "cantidad_de_piezas": aiResponse["cantidad_de_piezas"],
        "requiere_ensamblado": aiResponse["requiere_ensamblado"],
        "potencia": aiResponse["potencia"],
        "titulo_seo": aiResponse["titulo_seo"],
        "fabricante": aiResponse["fabricante"],
        "descripcion_seo": aiResponse["descripcion_seo"],
        "baterias_incluidas": aiResponse["baterias_incluidas"],
        "baterias_requeridas": aiResponse["baterias_requeridas"],
        "tipo_de_bateria": aiResponse["tipo_de_bateria"],
        "largo_del_cable": aiResponse["largo_del_cable"],
        "puertos_hdmi": aiResponse["puertos_hdmi"],
        "puertos_vga": aiResponse["puertos_vga"],
        "capacidad_de_la_bateria": aiResponse["capacidad_de_la_bateria"],
        "puertos_de_red": aiResponse["puertos_de_red"],
        "resolucion_de_camara_delantera": aiResponse["resolucion_de_camara_delantera"],
        "voltaje": aiResponse["voltaje"],
        "megapixeles": aiResponse["megapixeles"],
        "puertos_usb": aiResponse["puertos_usb"]
    }
}

const bundlesCreationCelularesOutput = async (aiResponse, productData) => {
    return {
        "SKU": productData['SKU simple'],
        "nombre": aiResponse["nombre"],
        "descripcion": aiResponse["descripcion"],
        "anchura_del_paquete_de_envio": aiResponse["anchura_del_paquete_de_envio"],
        "altura_del_paquete_de_envio": aiResponse["altura_del_paquete_de_envio"],
        "largo_del_paquete_de_envio": aiResponse["largo_del_paquete_de_envio"],
        "peso_del_paquete": aiResponse["peso_del_paquete"],
        "genero": aiResponse["genero"],
        "peso_del_producto": aiResponse["peso_del_producto"],
        "garantia_del_producto": aiResponse["garantia_del_producto"],
        "modelo": aiResponse["modelo"],
        "contenido_del_paquete": aiResponse["contenido_del_paquete"],
        "nombre_general_del_producto": aiResponse["nombre_general_del_producto"],
        "contenido_neto": aiResponse["contenido_neto"],
        "color": aiResponse["color"],
        "nombre_de_color": aiResponse["nombre_de_color"],
        "anchura_del_producto": aiResponse["anchura_del_producto"],
        "altura_del_producto": aiResponse["altura_del_producto"],
        "largo_del_producto": aiResponse["largo_del_producto"],
        "material": aiResponse["material"],
        "etiquetas": aiResponse["etiquetas"],
        "volumen": aiResponse["volumen"],
        "capacidad": aiResponse["capacidad"],
        "caracteristicas": aiResponse["caracteristicas"],
        "terminos_de_busqueda": aiResponse["terminos_de_busqueda"],
        "compatibilidad": aiResponse["compatibilidad"],
        "cantidad_de_piezas": aiResponse["cantidad_de_piezas"],
        "requiere_ensamblado": aiResponse["requiere_ensamblado"],
        "potencia": aiResponse["potencia"],
        "titulo_seo": aiResponse["titulo_seo"],
        "fabricante": aiResponse["fabricante"],
        "descripcion_seo": aiResponse["descripcion_seo"],
        "baterias_incluidas": aiResponse["baterias_incluidas"],
        "tipo_de_bateria": aiResponse["tipo_de_bateria"],
        "tamaño_de_pantalla": aiResponse["tamaño_de_pantalla"],
        "largo_del_cable": aiResponse["largo_del_cable"],
        "proveedor_de_telefonía": aiResponse["proveedor_de_telefonía"],
        "puertos_hdmi": aiResponse["puertos_hdmi"],
        "puertos_vga": aiResponse["puertos_vga"],
        "capacidad_de_la_bateria": aiResponse["capacidad_de_la_bateria"],
        "puertos_de_red": aiResponse["puertos_de_red"],
        "voltaje": aiResponse["voltaje"],
        "resolucion_de_camara_delantera": aiResponse["resolucion_de_camara_delantera"],
        "voltaje": aiResponse["voltaje"],
        "megapixeles": aiResponse["megapixeles"],
        "puertos_usb": aiResponse["puertos_usb"],
        "sistema_operativo": aiResponse["sistema_operativo"]
    }
}

const motosCreationOutput = async (aiResponse, productData) => {
    return {
        "SKU": productData['SKU simple'],
        "nombre": aiResponse["nombre"],
        "descripcion": aiResponse["descripcion"],
        "anchura_del_paquete_de_envio": aiResponse["anchura_del_paquete_de_envio"],
        "altura_del_paquete_de_envio": aiResponse["altura_del_paquete_de_envio"],
        "largo_del_paquete_de_envio": aiResponse["largo_del_paquete_de_envio"],
        "peso_del_paquete": aiResponse["peso_del_paquete"],
        "peso_del_producto": aiResponse["peso_del_producto"],
        "garantia_del_producto": aiResponse["garantia_del_producto"],
        "modelo": aiResponse["modelo"],
        "contenido_del_paquete": aiResponse["contenido_del_paquete"],
        "nombre_general_del_producto": aiResponse["nombre_general_del_producto"],
        "Rodado": aiResponse["Rodado"],
        "contenido_neto": aiResponse["contenido_neto"],
        "color": aiResponse["color"],
        "nombre_de_color": aiResponse["nombre_de_color"],
        "anchura_del_producto": aiResponse["anchura_del_producto"],
        "altura_del_producto": aiResponse["altura_del_producto"],
        "largo_del_producto": aiResponse["largo_del_producto"],
        "material": aiResponse["material"],
        "etiquetas": aiResponse["etiquetas"],
        "volumen": aiResponse["volumen"],
        "capacidad": aiResponse["capacidad"],
        "caracteristicas": aiResponse["caracteristicas"],
        "terminos_de_busqueda": aiResponse["terminos_de_busqueda"],
        "compatibilidad": aiResponse["compatibilidad"],
        "cantidad_de_piezas": aiResponse["cantidad_de_piezas"],
        "requiere_ensamblado": aiResponse["requiere_ensamblado"],
        "potencia": aiResponse["potencia"],
        "titulo_seo": aiResponse["titulo_seo"],
        "fabricante": aiResponse["fabricante"],
        "descripcion_seo": aiResponse["descripcion_seo"],
        "baterias_incluidas": aiResponse["baterias_incluidas"],
        "tipo_de_bateria": aiResponse["tipo_de_bateria"],
        "capacidad_de_la_bateria": aiResponse["capacidad_de_la_bateria"],
        "voltaje": aiResponse["voltaje"],
        "voltaje": aiResponse["voltaje"],
    }
}

const creacionDeProductosBellezaOutput = async (aiResponse, productData) => {
    return {
        "SKU": productData['SKU simple'],
        "nombre": productData["Nombre"],
        "nombre_comercial": aiResponse.nombre,
        "descripcion_corta": aiResponse.descripcion_corta,
        "categorias": aiResponse.categorias,
        "modo_de_uso": aiResponse.modo_de_uso,
        "tipo_de_piel": aiResponse.tipo_de_piel,
        "principales_ingredientes": aiResponse.principales_ingredientes,
        "descripcion": aiResponse.descripcion,
        "marca": aiResponse.marca,
        "peso_del_paquete": aiResponse.peso_del_paquete,
        "genero": aiResponse.genero,
        "modelo": aiResponse.modelo,
        "contenido_del_paquete": aiResponse.contenido_del_paquete,
        "nombre_general_del_producto": aiResponse.nombre_general_del_producto,
        "contenido_neto": aiResponse.contenido_neto,
        "nombre_de_color": aiResponse.nombre_de_color,
        "anchura_del_producto": aiResponse.anchura_del_producto,
        "altura_del_producto": aiResponse.altura_del_producto,
        "largo_del_producto": aiResponse.largo_del_producto,
        "etiquetas": aiResponse.etiquetas,
        "volumen": aiResponse.volumen,
        "caracteristicas": aiResponse.caracteristicas,
        "terminos_de_busqueda": aiResponse.terminos_de_busqueda,
        "color": aiResponse.color,
        "peso_del_producto": aiResponse.peso_del_producto,
        "titulo_seo": aiResponse.titulo_seo,
        "composicion": aiResponse.composicion,
        "fabricante": aiResponse.fabricante,
        "descripcion_seo": aiResponse.descripcion_seo,
        "aroma": aiResponse.aroma,
        "categoria_meli": aiResponse.categoria_meli,
        "categoria_ripley": aiResponse.categoria_ripley,
        "categoria_falabella": aiResponse.categoria_falabella
    }
}

const categorizacionAMMAWEBOutput = (aiResponse, productData) => {
    return {
        "SKU simple": productData['SKU simple'],
        "Nombre": productData["Nombre"],
        "categorias": aiResponse.categorias,
        "modo_de_uso": aiResponse.modo_de_uso,
        "tipo_de_piel": aiResponse.tipo_de_piel,
        "principales_ingredientes": aiResponse.principales_ingredientes,
    }
}

const categorizacionAMMARipleyOutput = (aiResponse, productData) => {
    return {
        "SKU simple": productData['SKU simple'],
        "Nombre": productData["Nombre"],
        "categoria": aiResponse.categoria
    }
}

const bundlesCreationSkinProductsAMMAOutput = (aiResponse, productData) => {
    return {
        "SKU simple": productData['SKU simple'],
        "nombre": aiResponse.nombre,
        "descripcion_corta": aiResponse.descripcion_corta,
        "categorias": aiResponse.categorias,
        "modo_de_uso": aiResponse.modo_de_uso,
        "tipo_de_piel": aiResponse.tipo_de_piel,
        "principales_ingredientes": aiResponse.principales_ingredientes,
        "descripcion": aiResponse.descripcion,
        "marca": aiResponse.marca,
        "peso_del_paquete": aiResponse.peso_del_paquete,
        "genero": aiResponse.genero,
        "modelo": aiResponse.modelo,
        "contenido_del_paquete": aiResponse.contenido_del_paquete,
        "nombre_general_del_producto": aiResponse.nombre_general_del_producto,
        "contenido_neto": aiResponse.contenido_neto,
        "nombre_de_color": aiResponse.nombre_de_color,
        "anchura_del_producto": aiResponse.anchura_del_producto,
        "altura_del_producto": aiResponse.altura_del_producto,
        "largo_del_producto": aiResponse.largo_del_producto,
        "etiquetas": aiResponse.etiquetas,
        "volumen": aiResponse.volumen,
        "caracteristicas": aiResponse.caracteristicas,
        "terminos_de_busqueda": aiResponse.terminos_de_busqueda,
        "color": aiResponse.color,
        "peso_del_producto": aiResponse.peso_del_producto,
        "titulo_seo": aiResponse.titulo_seo,
        "composicion": aiResponse.composicion,
        "fabricante": aiResponse.fabricante,
        "descripcion_seo": aiResponse.descripcion_seo,
        "aroma": aiResponse.aroma,
        "categoria_meli": aiResponse.categoria_meli,
        "categoria_ripley": aiResponse.categoria_ripley,
        "categoria_falabella": aiResponse.categoria_falabella,
    }
}

const datosFalabellaAMMABeautyOutput = (aiResponse, productData) => {
    return {
        "SKU simple": productData['SKU simple'],
        "skin_type": aiResponse.skin_type,
        "tipo_de_crema": aiResponse.tipo_de_crema,
        "treatment_type": aiResponse.treatment_type,
        "variation": aiResponse.variation,
        "format": aiResponse.format,
        "model_name": aiResponse.model_name,
        "number_of_items_in_package": aiResponse.number_of_items_in_package,
        "package_content": aiResponse.package_content,
        "sun_protection_factor": aiResponse.sun_protection_factor,
    }
}

export { protectoresColchonOutput, respaldosDeCamaOutput, hidratacionDeLaPielFalabellaOutput, creatingPacks2ProductsOutput, productosDeProteccionSolarFalabellaOutput, allCategoriesFalabellaAMMAOutput, baseusPowerbandOutput, bundlesCreationCelularesOutput, motosCreationOutput, creacionDeProductosBellezaOutput, categorizacionAMMAWEBOutput, categorizacionAMMARipleyOutput, bundlesCreationSkinProductsAMMAOutput, datosFalabellaAMMABeautyOutput }