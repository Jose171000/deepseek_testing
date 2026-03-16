const celularesBundlesONoPrompt = async (productData) => {
        return `Actúa como un asistente experto en procesamiento de datos y catalogación de productos.

Tu tarea es extraer información de un texto de bundle y estructurarla en un objeto JSON estricto orientado, en español y teniendo en cuenta que es para un mercado hispanohablante latinoamericano.

Reglas de Llenado por Campo:
- Formato General: Si consideras que una publicación no debe llevar un dato que solicita, usa 'null'. No inventes información que no sea necesaria.
- Unidades: Estandariza todas las medidas de peso a "kg" y dimensiones a "cm" si es posible.
- Booleanos: Para campos de sí/no (como 'baterias_incluidas'), usa 'true' o 'false'.

Definiciones Específicas:
1. nombre_producto: Este nombre debe incluir marca, alguna característica principal y algún adjetivo principal, no debe exceder de los 100 caracteres. 
2. html_description: Una descripción del producto con etiquetas HTML, donde siga el siguiente orden: Título con el nombre comercial del producto o bundle, un párrafo que describa el producto o productos de manera clara y precisa, una lista con las principales características del producto o productos del bundle.
3. Alto/Largo/Ancho/Peso: Colocar solo valor numérico, la unidad de medida es cm para dimensiones y g para peso (requeridos).
4. radio: Sí o No.
5. compatibility: Escoge una de todas las siguientes opciones que están separadas por comas: Automóvil,Cable Hdmi,Computadoras Y Similares,Computadoras/Dvr,Computadoras/Smartphone,Cámaras,Cámaras/Dvr,Cámaras/Telefonos Fijos Y Similares,Dispositivos Android,Dispositivos Apple,Dispositivos Apple Y Android,Dispositivos Con Conexión Wifi,No Aplica,Pcs,Laptops,Servidores,Impresoras,Smartphones,Tablets,Reproductores Mp3,Tv Digital/Tv Análogo,Tv/Vcr/Cable/Dvd/Aux/Sat/Dvb-T,Tvs,Tvs Hd Y Sd.,Router,Modem Router Y Access Pont,Tvs/Computadoras,Tvs/Vcr/Cable/Dvd/Aux,Windows/Mac Os/Android Os.
6. bluetooth_connection: Sí o No.
7. main_color: Escoge una de las siguientes opciones que están separadas por comas: Aleatorio,Amarillo,Azul,Beige,Blanco,Celeste,Gris,Incoloro,Marrón,Morado,Multicolor,Naranja,Negro,Oro,Plata,Rojo,Rosa,Transparente,Verde,Violeta
8. Processor_speed.
9. internal_memory: Escoge una de las siguientes opciones que están separadas por comas: 1GB,4GB,8GB,16GB,32GB,64GB,128GB,32MB,124MB,128MB,256GB,512GB,1TB,2TB,256MB,1.5GB,2GB,512MB.
10. operating_system: Escoge una de las siguientes opciones que están separadas por comas: Android,Android TV,Android/iOS,Chrome Free,Chrome OS,EMUI,FreeDOS,FreeRTOS,GNU General Public License,GNU/Linux,Google TV,iOS,Linux,Linux Shapi,LiteOS,macOS,MIUI,No Aplica,Nucleus,ROKU TV,Saphi,Solaris,Tizen,Ubuntu,UNIX,VIDAA,WearOS,WebOS,Windows,Windows 10,Windows 10 Home,Windows 10 Pro,Windows 11,Windows 11 Home,Xmart UI,Xmart-C.
11. face_camera: en MP.
12. wifi_connection: Sí o No.
13. water_resistance: Sí o No.
14. alto_producto: Colocar solo valor numérico, la unidad de medida es cm.
15. resolución_de_pantalla: en px.
16. expandable_memory: en GB o TB.
17. ram_memory: Escoge una de las siguientes opciones separadas por comas: 1.5GB,10GB,128GB,12GB,14GB,16GB,1GB,256GB,2GB,32GB,32MB,3GB,4GB,6GB,8GB,2.5GB,4.5GB,5.5GB,512MB,513MB,5GB,768MB,24GB,64GB,48GB,40GB,28GB.
18. ancho_producto: Colocar solo valor numérico, la unidad de medida es cm
19. Dual Sim: Sí o No.
20. product_model: modelo del producto o productos que conformen el pack.
21. Enfoque Automático: Sí o No.
22. processor_cores: Escoge una opción de las siguientes opciones que están separadas por comas: 4,6,1,10,11,12,13,14,2,21,3,40,5,7,8,9,No,16,24.
23. bateria: en mAh.
24. cellphone_technology: Escoge una opción de las siguientes opciones separadas por comas: 4G,3G,5G,2G.
25. producto_color: Escoge el color más adecuado para el producto o bundle.
26. screen_size_products: Escoge estrictamente la opción que más se acerque a la realidad, las opciones están separadas por comas y son las siguientes: 0.96",1.2",1.4",1.47",1.55",1.56",1.64",1.77",1.8",2.4",3.5",4.7",5",5.2",5.3",5.34",5.45",5.5",5.6",5.7",5.8",5.84",5.86",5.97",6",6.09",6.1",6.15",6.2",6.22",6.26",6.3",6.39",6.4",6.43",6.47",6.49",6.5",6.52",6.53",6.55",6.58",6.59",6.6",6.62",6.64",6.67",6.7",6.72",6.75",6.78",6.8",6.9",7.6".
27. Inteligencia_Artificial: Sí o No.
28. screen_type_product: tipo de pantalla del dispositivo.
29. processor_generation_product: Procesador y generación del dispositivo.
30. profundidad_product: Solo colocar valores numéricos. Unidad de medida: cm
31. main_camera: en MP.
32. número_piezas: Cantidad de productos que incluye en la caja.
33. peso_producto: Solo colocar valores numéricos del producto. Unidad de medida: Kg y enteros.
34. incluye: Qué productos incluyen en el paquete.

Estructura de Salida (JSON):
Devuelve ÚNICAMENTE este JSON completado:

{
    "nombre_producto": "",
    "html_description": "",
    "alto": "",
    "largo": "",
    "peso_paquete": "",
    "ancho": "",
    "radio": "",
    "compatibility": "",
    "marca":"",
    "bluetooth_connection": "",
    "main_color": "",
    "processor_speed": "",
    "internal_memory": "",
    "operating_system": "",
    "face_camera": "",
    "wifi_connection": "",
    "water_resistance": "",
    "alto_producto": "",
    "resolución_de_pantalla": "",
    "expandable_memory": "",
    "ram_memory": "",
    "ancho_producto": "",
    "Dual_Sim": "",
    "product_model": "",
    "Enfoque_Automático": "",
    "processor_cores": "",
    "bateria": "",
    "cellphone_technology": "",
    "número_piezas": "",
    "incluye": "",
    "peso_producto": "",
    "producto_color": "",
    "screen_size_products": "",
    "Inteligencia_Artificial": "",
    "screen_type_product": "",
    "processor_generation_product": "",
    "profundidad_product": "",
    "main_camera": "",
  
}
Aquí tienes la información del pack:
        - Nombre referente del pack: '${productData.Nombre}'
        - Descripción de los productos: '${productData["Descripción General"]}'
        - Categoría en yuju: '${productData.Categorías}'`
}

const vinoTintoPrompt = (productData) => {
        return `Actúa como un asistente experto en procesamiento de datos y catalogación de bebidas alcohólicas para e-commerce y marketplaces.
              Tu tarea es extraer información de un texto de entrada y estructurarla en un objeto JSON estricto, en español y optimizado para un mercado hispanohablante latinoamericano, pero debes actuar como un experto en vinos, piscos y brandies.

              Aquí tienes la información del producto o bundle a procesar:
                - Nombre referente: '${productData.Nombre}'
                - Información general de los productos: '${productData["Descripción General"]}'
                - Categoría: '${productData.Categorías}'

             Reglas de Llenado por Campo:
                - Unidades Numéricas: Devuelve solo el número (integer o float) sin símbolos de unidad en los campos de medidas a menos que se solicite algo distinto.
                - Estandarización: Peso en "kg", Dimensiones en "cm", Volumen en "mL" a menos que se indique alguna medida específica con una unidad específica.
            
                Por favor devuelve un JSON con los siguientes campos:
                  1. "nombre_llamativo" : Este nombre debe ser preciso para búsquedas, debe incluir marca, y varios adjetivos relevantes que describan al producto, debe ser de máximo 100 carácteres pero mínimo 50 caracteres y recuerda que es para un público latino hispanohablante.
                  2. "descripcion_html": Una descripción del producto con etiquetas HTML, donde siga el siguiente orden: Título con el nombre comercial del producto o bundle, un párrafo que describa el producto o productos de manera clara y precisa, una lista con las principales características del producto o productos del bundle. Además, no incluyas las palabras 'ideal', 'perfecto' y 'excelente'.
                  3. "marca" : La marca oficial del producto.
                  4. "altura_del_paquete_de_envio" : Estimado de la altura del paquete de envío en cm. Solo números.
                  5. "largo_del_paquete_de_envio" : Estimado del largo del paquete de envío en cm. Solo números.
                  6. "peso_del_paquete" : Un estimado del peso total del bulto de envío en gramos. Solo el número (ej: 0.5).
                  7. "anchura_del_paquete_de_envio" : Estimado de la anchura del paquete de envío en cm. Solo números.
                  8. "ingredientes" : Detalla los ingredientes del producto y su calidad, también una breve explicación de su inclusión en la preparación.
                  9. "condiciones_de_conservacion" : Indicar la forma o condiciones de conservación del producto en un solo texto.
                 10. "tipo_tapa" : El tipo de la tapa del producto, en este caso selecciona la opción más adecuada entre las siguientes 'Corcho', 'Tapa rosca', 'Dura', 'Plastificada', 'Extra Dura', 'Suave', 'Chapa', 'Extra Gruesa', 'Extra Rígida', 'Gruesa', 'Tapón', 'Rígida'.
                 11. "advertencia_consumo" : Adeventencias del consumo de esta bebida en un breve texto.
                 12. "bodega" : Escoge la opción más adecuada de entre las siguientes opciones ' 'Nieto Senetiner', 'Mauricio Lorca', 'Norton', 'Garcia Carrion', 'Tabernero', 'Santa Carolina', 'Riccadonna', 'Herencia', 'Catena', 'Escorihuela Gascon', 'Robert Mondavi', 'Concha Y Toro', 'Santiago Queirolo', 'Tosti', 'Santiago Queirolo', 'Domaine Bousquet', 'Marqués De La Concordia', 'J.Bouchon', 'Volver', 'Bell'S', 'Misiones De Rengo', 'Obikwa', 'Las Moras', 'Ocucaje', 'Septima', 'Tacama', 'Trivento', 'Zuccardi', 'Doña Paula', 'Rutini', 'Matarromera', 'El Coto De Rioja', 'Luis Felipe Edwards', 'E.Copello', 'Marqués De Riscal', 'Luigi Bosca', 'Trapiche', 'Najar', 'Torres', 'Lolea', 'Freixenet', 'Undurraga', 'Marqués De Cáceres', 'Mosquita Muerta', 'Finca Rotondo', 'Lan', 'Honoro Vera', 'Marques del Atrio', 'Sokatira', 'El Enemigo', 'Mayor de Castilla', 'Viu Manent', 'Barefoot', 'Santa Julia', 'Lagarde', 'Santa Ema', 'Marques De Riscal', 'Emiliana', 'Kaiken', 'Finca La Escondida', 'Cadus', 'Cousiño Macul', 'Protos', 'Navarro Correas', 'Casa Silva', 'Santa Helena', 'Otaviano Y Viñedo', 'Argento', 'Sonsierra', 'La Celia', 'San Pedro', 'Mascota', 'Altos Las Hormigas', 'Irreverente', 'Santa Emiliana', 'El Corte Inglés', 'Ruffino', 'Bodega', 'San Huberto', 'Martin Codax', 'Viña Los Reyes', 'Pascual Toso', 'Castillo Perelada', 'Viña Cobos', 'Finca Flichman', 'Martini & RosSI', 'Moët Chandon', 'Farnese', 'Los Haroldos', 'Miguel Torres', 'Zumuva', 'Errazuriz', 'Mistrosanti', 'La Rural', 'Sombrero', 'Mateus', 'Valdivieso', 'Estancia Mendoza', 'Resero', 'Codorníu Raventós', 'Montes', 'Paz Soldan'.
                 13. "volumen_neto" : Indica el volumen neto del producto, si son 2 productos indícalo para cada uno separado por 'y'.
                 14. "denominacion_variedad" : Indica la denominación o variedad del producto.
                 15. "graduacion_alcoholica" : Indica la graduación alcohólica de la bebida o bedidas de forma separada en el mismo texto.
                 16. "cepa" : Selecciona la mejor opción para el producto de entre las siguientes opciones 'Albariño', 'Albilla', 'Blend', 'Bonarda', 'Borgoña', 'Cabernet Franc', 'Cabernet Merlot', 'Cabernet Sauvignon', 'Carmenere', 'Chardonnay', 'Chenin Blanc', 'Cinsault', 'Garnacha', 'Garnacha Tempranillo', 'Macabeo', 'Malbec', 'Merlot', 'Moscatel De Alejandría', 'Moscato', 'Muscat De Alejandría', 'Pinot Grigio', 'Pinot Noir', 'Rivaner', 'Rosado', 'Sangiovese', 'Sauvignon Blanc', 'Shiraz', 'Syrah', 'Tannat', 'Tempranillo', 'Torrontés', 'Torrontés Riojano', 'Verdejo', 'Viognier', 'Viura', 'Zinfandel', 'Moscatel', 'Pais', 'Petit verdot', 'Pinotage', 'Moscato Bianco'
                 17. "presentacion" : Escoge la mejor opción entre las siguientes opciones 'Paquete', 'Botella', 'Frasco', 'Bolsa', 'Pack', 'Pack Botella', 'Caja', 'Doypack', 'Pote', 'Lata', 'Sobre', 'Botella De Vidrio', 'Vaso', 'Talco', 'Máquina de Afeitar', 'Aerosol', 'Blister', 'Barra', 'Bidón', 'Pack Lata', 'Tubo', 'Sachet', 'Rollo', 'Trozos', 'Repuesto', 'Galonera', 'Estuche', 'Pomo', 'Bandeja', 'Dispensador', 'Deshuesadas', 'Paquete Lata', 'Spray', 'Roll On', 'Táper', 'Piezas', 'Botella En Caja', 'Botella Con Tapa Sport', 'Botella de plastico', 'Enteras', 'Rellenas', 'Botella con atomizador', 'Balde', 'Galón', 'Botella plástica', 'Saco', 'Tarro', 'Botella con dosificador', 'Dispensador eléctrico', 'Botella de 1 L', '100 gr', 'Barril', 'Individual', 'Set', 'Polvo'.
                 18. "temperatura_sugerida" : Indica la temperatura sugerida de la bebida o las bebidas en grados celsius, si son varias bebidas distintas indícalo para cada uno.
                         
             IMPORTANTE: Responde ÚNICAMENTE con el JSON solicitado, SIN los delimitadores \`\`\`json ni ningún otro texto adicional.
             El JSON debe comenzar directamente con { y terminar con }.
             `
}

const piscoyBrandyPrompt = (productData) => {
        return `Actúa como un asistente experto en procesamiento de datos y catalogación de bebidas alcohólicas para e-commerce y marketplaces.
              Tu tarea es extraer información de un texto de entrada y estructurarla en un objeto JSON estricto, en español y optimizado para un mercado hispanohablante latinoamericano, pero debes actuar como un experto en vinos, piscos y brandies.

              Aquí tienes la información del producto o bundle a procesar:
                - Nombre referente: '${productData.Nombre}'
                - Información general de los productos: '${productData["Descripción General"]}'
                - Categoría: '${productData.Categorías}'

             Reglas de Llenado por Campo:
                - Unidades Numéricas: Devuelve solo el número (integer o float) sin símbolos de unidad en los campos de medidas a menos que se solicite algo distinto.
                - Estandarización: Peso en "kg", Dimensiones en "cm", Volumen en "mL" a menos que se indique alguna medida específica con una unidad específica.
            
                Por favor devuelve un JSON con los siguientes campos:
                  1. "nombre_llamativo" : Este nombre debe ser preciso para búsquedas, debe incluir marca, y varios adjetivos relevantes que describan al producto, debe ser de máximo 100 carácteres pero mínimo 50 caracteres y recuerda que es para un público latino hispanohablante.
                  2. "descripcion_html": Una descripción del producto con etiquetas HTML, donde siga el siguiente orden: Título con el nombre comercial del producto o bundle, un párrafo que describa el producto o productos de manera clara y precisa, una lista con las principales características del producto o productos del bundle. Además, no incluyas las palabras 'ideal', 'perfecto' y 'excelente'.
                  3. "marca" : La marca oficial del producto.
                  4. "altura_del_paquete_de_envio" : Estimado de la altura del paquete de envío en cm. Solo números.
                  5. "largo_del_paquete_de_envio" : Estimado del largo del paquete de envío en cm. Solo números.
                  6. "peso_del_paquete" : Un estimado del peso total del bulto de envío en gramos. Solo el número (ej: 0.5).
                  7. "anchura_del_paquete_de_envio" : Estimado de la anchura del paquete de envío en cm. Solo números.
                  8. "ingredientes" : Detalla los ingredientes del producto y su calidad, también una breve explicación de su inclusión en la preparación.
                  9. "condiciones_de_conservacion" : Indicar la forma o condiciones de conservación del producto en un solo texto.
                 10. "tipo_tapa" : El tipo de la tapa del producto, en este caso selecciona la opción más adecuada entre las siguientes 'Corcho', 'Tapa rosca', 'Dura', 'Plastificada', 'Extra Dura', 'Suave', 'Chapa', 'Extra Gruesa', 'Extra Rígida', 'Gruesa', 'Tapón', 'Rígida'.
                 11. "advertencia_consumo" : Adeventencias del consumo de esta bebida en un breve texto.
                 12. "añejado" : Responder 'Sí' o 'No' a que si es añejado o no.
                 13. "volumen_neto" : Indica el volumen neto del producto, si son 2 productos distintos indícalo para cada uno separado por 'y'.
                 14. "denominacion_variedad" : Indica la denominación o variedad del producto.
                 15. "tiempo_añejamiento" : Indica el tiempo que ha sido añejado el producto, incluye la unidad.
                 16. "graduacion_alcoholica" : Indica la graduación alcohólica de la bebida o bedidas de forma separada en el mismo texto.
                 17. "presentacion" : Escoge la mejor opción entre las siguientes opciones 'Paquete', 'Botella', 'Frasco', 'Bolsa', 'Pack', 'Pack Botella', 'Caja', 'Doypack', 'Pote', 'Lata', 'Sobre', 'Botella De Vidrio', 'Vaso', 'Talco', 'Máquina de Afeitar', 'Aerosol', 'Blister', 'Barra', 'Bidón', 'Pack Lata', 'Tubo', 'Sachet', 'Rollo', 'Trozos', 'Repuesto', 'Galonera', 'Estuche', 'Pomo', 'Bandeja', 'Dispensador', 'Deshuesadas', 'Paquete Lata', 'Spray', 'Roll On', 'Táper', 'Piezas', 'Botella En Caja', 'Botella Con Tapa Sport', 'Botella de plastico', 'Enteras', 'Rellenas', 'Botella con atomizador', 'Balde', 'Galón', 'Botella plástica', 'Saco', 'Tarro', 'Botella con dosificador', 'Dispensador eléctrico', 'Botella de 1 L', '100 gr', 'Barril', 'Individual', 'Set', 'Polvo'.
                 18. "proceso_añejamiento" : Indica el proceso de añejamiento que pasó el producto, si son varios productos distintos que no pasa por un proceso de añejamiento no indiques nada para ese producto.
                 19. "composicion" : Indica la composición del producto.
                         
             IMPORTANTE: Responde ÚNICAMENTE con el JSON solicitado, SIN los delimitadores \`\`\`json ni ningún otro texto adicional.
             El JSON debe comenzar directamente con { y terminar con }.
             `
}


const categorizacionAMMABeautyPrompt = (productData) => {
        return `Quiero que te conviertas en un experto en categorización de productos de belleza. Basándote en los datos del producto proporcionados, categoriza el producto correctamente siguiendo las categorías existentes en el catálogo. Tu tarea es extraer información de un texto de entrada y estructurarla en un objeto JSON estricto.
        Aquí te paso la información del producto:
        - Nombre referente del producto: '${productData.Nombre}'
        - Descripción general del producto: '${productData["Descripción General"]}'

        Devuelve un JSON con el siguiente formato:
        {
        categoria_intercorp : selecciona la categoría correcta entre las categorías disponibles.
        }

        Las categorías disponibles son:
        'Cuidado Capilar > Aceite para El Cabello',
        'Cuidado Capilar > Ampollas y Tratamientos Capilares',
        'Cuidado Capilar > Cremas para Peinar',
        'Cuidado Capilar > Gel de Cabello',
        'Cuidado Capilar > Mascarillas para El Cabello',
        'Cuidado Capilar > Tintes para El Cabello',
        'Cuidado Capilar > Tónicos Capilares',
        'Cuidado Corporal > Autobronceador Corporal',
        'Cuidado Corporal > Crema para Las Estrías',
        'Cuidado Corporal > Crema para Las Manos',
        'Cuidado Corporal > Crema para Las Piernas',
        'Cuidado Corporal > Crema para Los Pies',
        'Cuidado Corporal > Crema para Regenerar la Piel',
        'Cuidado Corporal > Cremas Corporales',
        'Cuidado Corporal > Cremas Hidratantes para El Cuerpo',
        'Cuidado Corporal > Sets de Cuidado Corporal',
        'Cuidado Facial > Contorno de Ojos',
        'Cuidado Facial > Crema Facial',
        'Cuidado Facial > Exfoliante Facial',
        'Cuidado Facial > Limpieza Facial',
        'Cuidado Facial > Mascarillas Faciales',
        'Cuidado Facial > Sérum para El Rostro',
        'Cuidado Facial > Sets de Cuidado Facial',
        'Depilación y Afeitado > Afeitado > Cuidado de la Barba',
        'Depilación y Afeitado > Afeitado > Espumas y Geles',
        'Depilación y Afeitado > Afeitado > Lociones y Bálsamos',
        'Depilación y Afeitado > Depilación > Cremas Depilatorias Faciales y Corporales',
        'Higiene del Cabello > Acondicionador',
        'Higiene del Cabello > Shampoo',
        'Higiene Personal > Colonias',
        'Higiene Personal > Desodorantes',
        'Higiene Personal > Gel Antibacterial',
        'Higiene Personal > Gel de Ducha',
        'Higiene Personal > Jabones',
        'Higiene Personal > Talcos y Desodorantes para Pies',
        'Maquillaje y Cosméticos > Accesorios de Maquillaje',
        'Maquillaje y Cosméticos > Maquillaje de Labios > Delineadores de Labios',
        'Maquillaje y Cosméticos > Maquillaje de Labios > Labiales en Barra',
        'Maquillaje y Cosméticos > Maquillaje de Labios > Labiales Líquidos',
        'Maquillaje y Cosméticos > Maquillaje de Ojos > Delineadores de Ojos',
        'Maquillaje y Cosméticos > Maquillaje de Ojos > Maquillaje de Cejas',
        'Maquillaje y Cosméticos > Maquillaje de Ojos > Máscara de Pestañas',
        'Maquillaje y Cosméticos > Maquillaje de Ojos > Paletas de Maquillaje',
        'Maquillaje y Cosméticos > Maquillaje de Ojos > Sombras de Ojos',
        'Maquillaje y Cosméticos > Maquillaje de Rostro > Bases',
        'Maquillaje y Cosméticos > Maquillaje de Rostro > Bronzers',
        'Maquillaje y Cosméticos > Maquillaje de Rostro > Correctores',
        'Maquillaje y Cosméticos > Maquillaje de Rostro > Iluminadores de Rostro',
        'Maquillaje y Cosméticos > Maquillaje de Rostro > Primer',
        'Maquillaje y Cosméticos > Maquillaje de Rostro > Rubores',
        'Maquillaje y Cosméticos > Maquillaje de Uñas > Accesorios para el Cuidado de Uñas',
        'Maquillaje y Cosméticos > Maquillaje de Uñas > Tratamientos de Uñas',
        'Maquillaje y Cosméticos > Sets de Maquillaje',
        'Protección Solar > After Sun',
        'Protección Solar > Bronceadores',
        'Protección Solar > Protector de Labios',
        'Protección Solar > Protector Solar Corporal',
        'Protección Solar > Protector Solar Facial'.

        IMPORTANTE: Responde ÚNICAMENTE con el JSON solicitado, SIN los delimitadores \`\`\`json ni ningún otro texto adicional.
        El JSON debe comenzar directamente con { y terminar con }.`
}

const protectorSolarCorporalAMMABeautyPrompt = (productData) => {
        return `Actúa como un asistente experto en procesamiento de datos y catalogación de bebidas alcohólicas para e-commerce y marketplaces.
              Tu tarea es extraer información de un texto de entrada y estructurarla en un objeto JSON estricto, en español y optimizado para un mercado hispanohablante latinoamericano, pero debes actuar como un experto en vinos, piscos y brandies.

              Aquí tienes la información del producto o bundle a procesar:
                - Nombre referente: '${productData.Nombre}'
                - Información general de los productos: '${productData["Descripción General"]}'
                - Categoría: '${productData.Categorías}'

             Reglas de Llenado por Campo:
                - Unidades Numéricas: Devuelve solo el número (integer o float) sin símbolos de unidad en los campos de medidas a menos que se solicite algo distinto.
                - Estandarización: Peso en "kg", Dimensiones en "cm", Volumen en "mL" a menos que se indique alguna medida específica con una unidad específica.
            
                Por favor devuelve un JSON con los siguientes campos:
                  1. "nombre_producto" : Este nombre debe ser preciso para búsquedas, debe incluir el nombre del producto, marca, modelo y 1 o 2 atributos resaltantes, debe ser de máximo 100 carácteres pero mínimo 50 caracteres y recuerda que es para un público latino hispanohablante.
                  2. "descripcion_html" : Una descripción del producto con etiquetas HTML, donde siga el siguiente orden: Título con el nombre comercial del producto o bundle (h2), un párrafo que describa el producto o productos de manera clara y precisa, una lista con las principales características del producto o productos del bundle, una lista del 'Modo de uso' paso a paso enumerado con un subtitulo, Tipo de piel donde se aplica y una lista de principales ingredientes donde se describa el motivo de cada ingrediente donde también tenga un subtítulo de 'Principales ingredientes'. Además, no incluyas las palabras 'ideal', 'perfecto' y 'excelente'.
                  3. "marca" : La marca oficial del producto.
                  4. "altura_del_paquete_de_envio" : Estimado de la altura del paquete de envío en cm. Solo números.
                  5. "largo_del_paquete_de_envio" : Estimado del largo del paquete de envío en cm. Solo números.
                  6. "peso_del_paquete" : Un estimado del peso total del bulto de envío en gramos. Solo el número (ej: 500).
                  7. "anchura_del_paquete_de_envio" : Estimado de la anchura del paquete de envío en cm. Solo números.
                  8. "tipo_producto_intercorp" : Escoge la opción más adecuada para el producto entre las siguientes opciones 'Accesorios Cabello', 'Accesorios Cuidado Personal', 'Accesorios Maquillaje', 'Accesorios Uñas', 'Aceite Corporal', 'Acondicionadores', 'Agua Micelar', 'Alisadoras', 'Antitranspirantes', 'BB Creams', 'Barbería', 'Bloqueadores Solares', 'Bronceadores', 'Broncedadores', 'Ceras', 'Colonias', 'Cremas', 'Cremas para peinar', 'Delineadores', 'Depiladoras', 'Desmaquillantes', 'Desodorantes', 'Desenredantes', 'Esmalte de Uñas', 'Esmaltes Uñas', 'Espuma Limpiadora', 'Exfoliante Corporal', 'Exfoliantes', 'Fragancias', 'Gel Antibacterial', 'Gel Corporal', 'Gel de Ducha', 'Hisopos Limpieza', 'Iluminadores', 'Jabones', 'Labiales', 'Lacas', 'Lima de Uñas', 'Limas', 'Limpieza Facial', 'Lociones', 'Manteca Corporal', 'Maquillaje', 'Mascarillas Capilares', 'Mascarillas Faciales', 'Mist', 'Moños', 'Muestrario Uñas', 'Organizadores de Maquillaje', 'Peines', 'Perfumeros', 'Perfumes', 'Pinzas Depiladoras', 'Polvos Compactos', 'Protector de Labios', 'Productos Afeitar', 'Quitaesmaltes', 'Rímel', 'Rizadores', 'Sales Baño', 'Secador de Cabello', 'Secadoras Cabello', 'Serúms', 'Sérums', 'Shampoos', 'Sombra de Ojos', 'Splash', 'Talcos y Desodorantes para Pies', 'Tintes', 'Toallitas Húmedas', 'Tratamiento', 'Tratamientos Anti-Imperfecciones', 'Tratamientos Anti-edad', 'Tratamientos Anti-pigmentación', 'Tratamientos Antioxidantes', 'Tratamientos Faciales', 'Vinchas'.
                  9. "tono" : Indica el tono del producto solo si se menciona en la descripción, si no se menciona el tono no indiques nada en este campo.
                 10. "eco_friendly" : Responde 'Sí' o 'No' a si el producto es eco friendly o no.
                 11. "ancho_producto" : Colocar solo valor numérico, la unidad de medida es cm y tiene que ser entero.
                 12. "modelo" : El modelo del producto, normalmente se encuentra en el nombre.
                 13. "factor_proteccion_solar" : Selecciona la mejor opción para el producto entre las siguientes opciones 'Menor a SPF 15', 'No contiene', 'SPF 15', 'SPF 20', 'SPF 25', 'SPF 30', 'SPF 50', 'SPF 50+', 'SPF 40', 'SPF 100'.
                 14. "zonas_de_aplicacion" : Indica la mejor opción para la zona de aplicación del producto entre las siguientes opciones 'Axilas', 'Brazos', 'Cabello', 'Cejas', 'Contorno de labios', 'Contorno de ojos', 'Cuerpo', 'Espalda', 'Espalda y cuello', 'Labios', 'Manos', 'Ojos', 'Orejas', 'Pestañas', 'Piernas', 'Pies', 'Rostro', 'Rostro y Cuello'.
                 15. "vegano" : Responde 'Sí' o 'No' a si el producto es vegano o no.
                 16. "informacion_adicional" : Información adicional relevante del producto.
                 17. "genero" : Selecciona la mejor opción para el producto entre las siguientes opciones 'Mujer', 'Hombre', 'Bebé Niña', 'Bebé Niño', 'Niña', 'Niño', 'Unisex', 'Teen Niña', 'Teen Niño'.
                 18. "hipoalergenico" : Responde 'SÍ' o 'No' a si el producto es hipoalergénico o no.
                 19. "recomendaciones_uso" : Recomendaciones de uso del producto en un breve texto.
                 20. "sin_perfume" : Responde 'Sí' o 'No' a si el producto es sin perfume o no.
                 21. "libre_parabenos" : Responde 'Sí' o 'No' a si el producto es libre de parabenos o no.
                 22. "presentacion" : Escoge la mejor opción entre las siguientes opciones 'Paquete', 'Botella', 'Frasco', 'Bolsa', 'Pack', 'Pack Botella', 'Caja', 'Doypack', 'Pote', 'Lata', 'Sobre', 'Botella De Vidrio', 'Vaso', 'Talco', 'Máquina de Afeitar', 'Aerosol', 'Blister', 'Barra', 'Bidón', 'Pack Lata', 'Tubo', 'Sachet', 'Rollo', 'Trozos', 'Repuesto', 'Galonera', 'Estuche', 'Pomo', 'Bandeja', 'Dispensador', 'Deshuesadas', 'Paquete Lata', 'Spray', 'Roll On', 'Táper', 'Piezas', 'Botella En Caja', 'Botella Con Tapa Sport', 'Botella de plastico', 'Enteras', 'Rellenas', 'Botella con atomizador', 'Balde', 'Galón', 'Botella plástica', 'Saco', 'Tarro', 'Botella con dosificador', 'Dispensador eléctrico', 'Botella de 1 L', '100 gr', 'Barril', 'Individual', 'Set', 'Polvo'.
                 23. "caracteristicas_eco_friendly" : Características que hacen que el producto sea eco friendly, solo si el producto es eco friendly, si no es eco friendly no indiques nada en este campo.
                 24. "tipo_de_piel" : Indica el tipo de piel para el cual es adecuado el producto, solo si se menciona en la descripción, si no se menciona el tipo de piel no indiques nada en este campo.
                 25. "contenido" : Indica el contenido del producto o paquete, todo lo que incluye el producto.
                 26. "acabado" : Selecciona la mejor opción para el acabado del producto dentro de las siguientes opciones 'Acabadas', 'Aluminizado', 'Áspero', 'Barniz/Poliuretano', 'Brillante', 'Brillante/Cromado', 'Brillante/Transparente', 'Bronceado', 'Cromado', 'Cromado/Pulido', 'Cromado/Satinado', 'Cuero Pu', 'Empastado', 'Esmaltado', 'Esmaltado/Brillante', 'Esmaltado/Cromado', 'Esmaltado/Mate', 'Esmaltado/Mate/Brillante', 'Felpa', 'Laca Piroxilina', 'Laca Piroxilina/Barniz/Poliuretano', 'Laca Piroxilina/Barniz/Poliuretano/Látex', 'Laca Piroxilina/Barniz/Poliuretano/Pintura al Aceite', 'Lacado', 'Latinado/Pulido', 'Liso', 'Liso/Rugoso', 'Maderado', 'Marmolizado', 'Mate', 'Mate/Brillante', 'Mate/Cromado', 'Mate/Galvanizado', 'Mate/Liso', 'Mate/Natural', 'Mate/Pulido', 'Mate/Satinado', 'Matizado', 'Melamine', 'Melamine/Brillante', 'Metal', 'Metalizado', 'Natural', 'Niquelado', 'Niquelado/Pulido', 'Niquelado/Satinado', 'No aplica', 'Opaco', 'Papel Finish Foil', 'Pavonado', 'Petrificado', 'Pintado', 'Pintura al horno', 'Pintura UV', 'Pintura UV - Brillante', 'Pintura UV - Mate', 'Plastificado', 'Plateado', 'Poliester', 'Poroso', 'Poroso - Abierto', 'Poroso - Cerrado', 'Poroso - Semi Abierto', 'Pre acabado', 'Primer UV', 'Pulido', 'Pulido/Cromado', 'Quemado', 'Satinado', 'Satinado/Cromado', 'Semi-Mate', 'Semibrillante', 'Suave', 'Tela', 'Texturizado', 'Texturizado - Brillante', 'Texturizado - Mate', 'Texturizado - Satinado', 'Tramado', 'Transparente', 'Tropicalizado', 'Vidriado', 'Vitrificado', 'Zincado'.
                 27. "alto_producto" : Colocar solo valor numérico, la unidad de medida es cm y tiene que ser entero.
                 28. "edad_recomendada" : Indica una opción de la edad recomendada para el uso del producto entre las siguientes opciones '+1 mes', '+2 meses', '+3 meses', '+4 meses', '+5 meses', '+6 meses', '+7 meses', '+8 meses', '+9 meses', '+10 meses', '+11 meses', '+12 meses', '+18 meses', '+24 meses', '+36 meses', '+4 años', '+5 años', '+6 años', '+7 año', '18 a más'.
                 29. "waterproof" : Responde 'Sí' o 'No' a si el producto es resistente al agua o no.
                 30. "largo_producto" : Colocar solo valor numérico, la unidad de medida es cm y tiene que ser entero.
                         
             IMPORTANTE: Responde ÚNICAMENTE con el JSON solicitado, SIN los delimitadores \`\`\`json ni ningún otro texto adicional.
             El JSON debe comenzar directamente con { y terminar con }.
             `
}

export { celularesBundlesONoPrompt, vinoTintoPrompt, piscoyBrandyPrompt, categorizacionAMMABeautyPrompt, protectorSolarCorporalAMMABeautyPrompt };