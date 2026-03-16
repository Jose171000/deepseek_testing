const rascadorHierbaDeGatosPrompt = async (productData) => {
   return `Actúa como un asistente experto en procesamiento de datos y catalogación de productos para e-commerce y marketplaces.
              Tu tarea es extraer información de un texto de entrada y estructurarla en un objeto JSON estricto, en español y optimizado para un mercado hispanohablante latinoamericano.

              Aquí tienes la información del producto o bundle a procesar:
                - Nombre referente: '${productData.Nombre}'
                - Información general de los productos: '${productData["Descripción General"]}'
                - Categoría: '${productData.Categorías}'

             Reglas de Llenado por Campo:
                - Unidades Numéricas: Devuelve solo el número (integer o float) sin símbolos de unidad en los campos de medidas a menos que se solicite.
                - Estandarización: Peso en "kg", Dimensiones en "cm", Volumen en "mL" a menos que se indique alguna medida específica.
            
             Por favor devuelve un JSON con los siguientes campos:
             1. "descripcion" : Describe el producto de una manera muy detallada y clara. Debes incluir: Nombre del producto, características (modelo, tamaño, color), proceso de fabricación o materiales, y ventajas de compra. Empieza y/o termina con una frase llamativa de venta. Mínimo 100 caracteres. Pon espacio entre cada concepto.
             2. "descripcion_html": Una descripción del producto con etiquetas HTML, donde siga el siguiente orden: Título con el nombre comercial del producto o bundle, un párrafo que describa el producto o productos de manera clara y precisa, una lista con las principales características del producto o productos del bundle.
             3. "marca" : La marca oficial del producto.
             4. "anchura_del_paquete_de_envio" : Estimado de la anchura del paquete de envío en cm. Solo números.
             5. "altura_del_paquete_de_envio" : Estimado de la altura del paquete de envío en cm. Solo números.
             6. "largo_del_paquete_de_envio" : Estimado del largo del paquete de envío en cm. Solo números.
             7. "peso_del_paquete" : Un estimado del peso total del bulto de envío en kg. Solo el número (ej: 0.5).
             8. "genero" : Escoge estrictamente entre: 'Bebés', 'Bebés niño', 'Niña', 'Niño', 'Masculino', 'Femenino', 'Unisex'. Si no aplica, usa 'Unisex' o null.
             9. "peso_del_producto" : Estimado del peso del artículo en sí (sin embalaje) en kg. Solo el número.
             10. "modelo" : El código o nombre del modelo específico (suele estar en el nombre).
             11. "contenido_del_paquete" : Lista detallada de qué incluye la caja.
             12. "nombre_general_del_producto" : Cómo se conoce comúnmente al producto (ej: "Crema hidratante", "Zapatillas deportivas").
             13. "contenido_neto" : Cantidad específica declarada (ej: "500 g", "10 pzas").
             14. "nombre_de_color" : El nombre del color tal cual lo define la marca (ej: "Rojo Fuego", "Azul Medianoche").
             15. "anchura_del_producto" : Estimado de la anchura del producto físico (fuera de la caja) en cm. Solo números.
             16. "altura_del_producto" : Estimado de la altura del producto físico (fuera de la caja) en cm. Solo números.
             17. "largo_del_producto" : Estimado del largo del producto físico (fuera de la caja) en cm. Solo números.
             18. "material" : Ingredientes o materiales del producto.
             19. "etiquetas" : Lista de palabras clave relevantes separadas por comas.
             20. "volumen" : Estimado del volumen en mL (solo número). Útil para líquidos.
             21. "caracteristicas" : Lista de las principales características técnicas o funcionales, separadas por comas.
             22. "terminos_de_busqueda" : Palabras que usaría un cliente para buscar este producto, separadas por comas.
             23. "titulo_seo" : Un título optimizado para buscadores (Producto + Marca + Modelo + Característica clave). Máximo 60 caracteres.
             24. "fabricante" : Nombre de la empresa fabricante (solo si se menciona explícitamente).
             25. "descripcion_seo" : Meta descripción para posicionamiento. Resumen atractivo de 150-160 caracteres.
             26. "unidades_por_paquete" : Número de unidades que vienen en el paquete.
             27. "color_principal" : Escoge y devuelve únicamente una de esta opciones 'Aleatorio', 'Amarillo', 'Azul', 'Beige', 'Blanco', 'Celeste', 'Gris', 'Incoloro', 'Marrón', 'Morado', 'Multicolor', 'Naranja', 'Negro', 'Oro', 'Plata', 'Rojo', 'Rosa', 'Transparente', 'Verde', 'Violeta'.
             28. "adevertencias_de_almacenamiento" : Instrucciones o advertencias sobre cómo almacenar el producto correctamente.
             29. "descripcion_técnica" : Descripción detallada de las propiedades técnicas del producto, incluyendo materiales, procesos de fabricación y características funcionales.
             30. "sabor" : Indica el sabor solo si se especifica en la descripción.
             31. "beneficios_nutricionales" : Beneficios nutricionales del producto, si aplica.
             32. "formato_mascotas" : Escoge y devuelve únicamente una opción de las siguientes 'Snacks', 'Alimento Húmedo', 'Alimento Seco', 'Alimento Medicado', 'Alimento Barf'.
             33. "presentacion" : Escoge y devuelve únicamente una opción de las siguientes 'Paquete', 'Botella', 'Frasco', 'Bolsa', 'Pack', 'Pack Botella', 'Caja', 'Doypack', 'Pote', 'Lata', 'Sobre', 'Botella De Vidrio', 'Vaso', 'Talco', 'Máquina de Afeitar', 'Aerosol', 'Blister', 'Barra', 'Bidón', 'Pack Lata', 'Tubo', 'Sachet', 'Rollo', 'Trozos', 'Repuesto', 'Galonera', 'Estuche', 'Pomo', 'Bandeja', 'Dispensador', 'Deshuesadas', 'Paquete Lata', 'Spray', 'Roll On', 'Táper', 'Piezas', 'Botella En Caja', 'Botella Con Tapa Sport', 'Botella de plastico', 'Enteras', 'Rellenas', 'Botella con atomizador', 'Balde', 'Galón', 'Botella plástica', 'Saco', 'Tarro', 'Botella con dosificador', 'Dispensador eléctrico', 'Botella de 1 L', '100 gr', 'Barril', 'Individual', 'Set', 'Polvo'.

             IMPORTANTE: Responde ÚNICAMENTE con el JSON solicitado, SIN los delimitadores \`\`\`json ni ningún otro texto adicional.
             El JSON debe comenzar directamente con { y terminar con }.`
}

const celularesPrompt = async (productData) => {
   return `Actúa como un asistente experto en procesamiento de datos y catalogación de productos para e-commerce y marketplaces.
              Tu tarea es extraer información de un texto de entrada y estructurarla en un objeto JSON estricto, en español y optimizado para un mercado hispanohablante latinoamericano.

              Aquí tienes la información del producto o bundle a procesar:
                - Nombre referente: '${productData.Nombre}'
                - Información general de los productos: '${productData["Descripción General"]}'
                - Categoría: '${productData.Categorías}'

             Reglas de Llenado por Campo:
                - Unidades Numéricas: Devuelve solo el número (integer o float) sin símbolos de unidad en los campos de medidas a menos que se solicite.
                - Estandarización: Peso en "kg", Dimensiones en "cm", Volumen en "mL" a menos que se indique alguna medida específica.
            
             Por favor devuelve un JSON con los siguientes campos:
              1. "descripcion" : Describe el producto de una manera muy detallada y clara en varios párrafos (mínimo 2). Debes incluir: Nombre del producto, características (modelo, tamaño, color), proceso de fabricación o materiales, y ventajas de compra. Empieza y/o termina con una frase llamativa de venta. Mínimo 100 caracteres. Pon espacio entre cada concepto.
              2. "descripcion_html": Una descripción del producto con etiquetas HTML, donde siga el siguiente orden: Título con el nombre comercial del producto o bundle, un párrafo que describa el producto o productos de manera clara y precisa, una lista con las principales características del producto o productos del bundle. Además, no incluyas las palabras 'ideal', 'perfecto', 'excelente' y 'redes'.
              3. "marca" : La marca oficial del producto.
              4. "anchura_del_paquete_de_envio" : Estimado de la anchura del paquete de envío en cm. Solo números.
              5. "altura_del_paquete_de_envio" : Estimado de la altura del paquete de envío en cm. Solo números.
              6. "largo_del_paquete_de_envio" : Estimado del largo del paquete de envío en cm. Solo números.
              7. "peso_del_paquete" : Un estimado del peso total del bulto de envío en kg. Solo el número (ej: 0.5).
              8. "genero" : Escoge estrictamente entre: 'Bebés', 'Bebés niño', 'Niña', 'Niño', 'Masculino', 'Femenino', 'Unisex'. Si no aplica, usa 'Unisex' o null.
              9. "peso_del_producto" : Estimado del peso del artículo en sí (sin embalaje) en kg. Solo el número.
             10. "modelo" : El código o nombre del modelo específico (suele estar en el nombre).
             11. "contenido_del_paquete" : Lista detallada de qué incluye en la caja separado por comas (ejemplo: teléfono, cargador y etc).
             12. "nombre_general_del_producto" : Cómo se conoce comúnmente al producto (ej: "Crema hidratante", "Zapatillas deportivas").
             13. "contenido_neto" : Cantidad específica declarada (ej: "500 g", "10 pzas").
             14. "nombre_de_color" : El nombre del color tal cual lo define la marca (ej: "Rojo Fuego", "Azul Medianoche").
             15. "anchura_del_producto" : Estimado de la anchura del producto físico (fuera de la caja) en cm. Solo números.
             16. "altura_del_producto" : Estimado de la altura del producto físico (fuera de la caja) en cm. Solo números.
             17. "largo_del_producto" : Estimado del largo del producto físico (fuera de la caja) en cm. Solo números.
             18. "etiquetas" : Lista de palabras clave relevantes separadas por comas.
             19. "capacidad" : Capacidad de almacenamiento del producto.
             20. "caracteristicas" : Lista de las principales características técnicas o funcionales, separadas por comas.
             21. "terminos_de_busqueda" : Palabras que usaría un cliente para buscar este producto, separadas por comas.
             22. "compatibilidad" : con qué otros productos o sistemas son compatibles (separado por comas).
             23. "titulo_seo" : Un título optimizado para buscadores (Producto + Marca + Modelo + Característica clave). Máximo 60 caracteres.
             24. "fabricante" : Nombre de la empresa fabricante (solo si se menciona explícitamente).
             25. "descripcion_seo" : Meta descripción para posicionamiento. Resumen atractivo de 150-160 caracteres.
             26. "tipo_batería" : Tipo de batería del teléfono.
             27. "tamaño_pantalla" : tamaño de la pantalla del teléfono en pulgadas.
             28. "largo_cable" : largo del cable en metros.
             29. "capacidad_de_batería" : capacidad de carga de la batería en mAh.
             30. "sistema_operativo" : sistema operativo con su versión.
             31. "camara_frontal": escoge y devuelve únicamente la mejor opción entre '0.3 MP', '0.9 MP', '1.2 MP', '1.3 MP', '2 MP', '3 MP', '4 MP', '5 MP', '5.8 MP', '6 MP', '7 MP', '8 MP', '9 MP', '10 MP', '11 MP', '12 MP', '13 MP', '14 MP', '15 MP', '16 MP', '17 MP', '18 MP', '19 MP', '20 MP', '24 MP', '25 MP', '32 MP', '33 MP', '34 MP', '35 MP', '36 MP', '37 MP', '38 MP', '39 MP', '40 MP', '48 MP', '50 MP', '108 MP', '200 MP'
             32. "camara_principal" : escoge y devuelve únicamente la mejor opción entre '0.9 MP', '1.2 MP', '1.3 MP', '2 MP', '3 MP', '4 MP', '5 MP', '5.8 MP', '6 MP', '7 MP', '8 MP', '9 MP', '10 MP', '11 MP', '12 MP', '13 MP', '14 MP', '15 MP', '16 MP', '17 MP', '18 MP', '19 MP', '20 MP', '24 MP', '25 MP', '32 MP', '33 MP', '34 MP', '35 MP', '36 MP', '37 MP', '38 MP', '39 MP', '40 MP', '50 MP'.
             33. "capacidad_yape" : Escoge y devuelve la opción más precisa entre '1 GB', '2 GB', '4 GB', '8 GB', '16 GB', '30 GB', '32 GB', '50 GB', '64 GB', '80 GB', '120 GB', '128 GB', '128 GB chip M1', '160 GB', '240 GB', '250 GB', '256 GB', '256 GB chip M1', '320 GB', '480 GB', '500 GB', '512 GB', '750 GB', '825 GB', '960 GB', '1 TB', '1.5 TB', '2 TB', '2.5 TB', '3 TB', '4 TB', '5 TB o más', 'No aplica'.
             34. "garantia" : tiempo en años de la garantía: ejemplo: 1 año. 
             35. "memoria_ram" : Escoge y devuelve la opción más precisa de las opciones '1 GB', '2 GB', '4 GB', '8 GB', '16 GB', '30 GB', '32 GB', '50 GB', '64 GB', '80 GB', '120 GB', '128 GB', '128 GB chip M1', '160 GB', '240 GB', '250 GB', '256 GB', '256 GB chip M1', '320 GB', '480 GB', '500 GB', '512 GB', '750 GB', '825 GB', '960 GB', '1 TB', '1.5 TB', '2 TB', '2.5 TB', '3 TB', '4 TB', '5 TB o más', 'No aplica', '3 GB'
             36. "procesador" : Escoge y devuelve la opción más precisa de las opciones 'AMD a10', 'AMDa12', 'AMD a4', 'AMD a6', 'AMD a9', 'AMD a-series', 'AMD Athlon', 'AMD c-series', 'AMD e2', 'AMD epyc', 'AMD e-series', 'AMD fx-series', 'AMD opteron', 'AMD phenom', 'AMD radeon', 'AMD ryzen Threadripper', 'AMD Sompron', 'AMD v-series', 'Apple serie a', 'ARM cortex-a', 'ARM cortex-m', 'ARM Mali', 'Intel Atom', 'Mediatek', 'Mediatek helio', 'Nvidia tegra', 'Qualcomm', 'Qualcomm snapdragon', 'Rockchip', 'Samsung exynos', 'Spreadtrum', 'Unisoc Tiger'.
             37. "sistema_operativo_yape": Escoge la mejor opción 'IOS', 'Android', 'otro', 'de fabricante', 'Harmony OS'.
             38. "tamaño_pantalla_yape" : Escoge y devuelve la opción que más se aproxime a la opción real de las siguientes opciones '5.1', '5.2', '5.3', '5.4', '5.5', '5.6', '5.7', '5.8', '5.9', '6', '6.1', '6.2', '6.3', '6.4', '6.5', '6.6', '6.7', '6.8', '6.9', '7', '7.1', '7.2', '7.3', '7.4', '7.5'.
             39. "tipo_producto_intercorp" : Escoge la opción más adecuada entre 'Celulares', 'Smartphones', 'Teléfonos', 'Packs', 'Kits', 'Audífonos'.
             40. "color_principal" : Escoge y devuelve únicamente una de esta opciones 'Aleatorio', 'Amarillo', 'Azul', 'Beige', 'Blanco', 'Celeste', 'Gris', 'Incoloro', 'Marrón', 'Morado', 'Multicolor', 'Naranja', 'Negro', 'Oro', 'Plata', 'Rojo', 'Rosa', 'Transparente', 'Verde', 'Violeta'.
             41. "bluetooth" : Solo responder 'Sí' o 'No'.
             42. "cantidad_camaras_intercorp" : Indica en números enteros la cantidad de cámaras del teléfono, solo números del 1 al 10.
             43. "memoria_interna_intercorp" : Selecciona solo la opción adecuada '1GB', '4GB', '8GB', '16GB', '32GB', '64GB', '128GB', '32MB', '124MB', '128MB', '256GB', '512GB', '1TB', '2TB', '256MB', '1.5GB', '2GB', '512MB'.
             44. "sistema_operativo_intercorp" : Escoge únicamente la opción más adecuada con respecto a la descripción general del producto, las opciones son 'Android', 'Android/iOS', 'EMUI', 'FreeRTOS', 'iOS', 'Linux', 'LiteOS', 'MIUI', 'Nucleus', 'Tizen', 'Ubuntu', 'WearOS', 'Windows'.
             45. "wifi" : Solo responde 'Sí' o 'No'.
             46. "color_intercorp" : Escoge la opción más adecuada para el teléfono dentro de las siguientes opciones 'Amarillo', 'Azul', 'Blanco', 'Café', 'Celeste', 'Cian', 'Dorado', 'Fucsia', 'Gris', 'Magenta', 'Marrón', 'Morado', 'Naranja', 'Negro', 'Plata', 'Plateado', 'Púrpura', 'Rojo', 'Rosado', 'Turquesa', 'Verde', 'Violeta', 'Plomo'.
             47. "resistente_agua" : Solo responde 'Sí' o 'No'.
             48. "tipo_pantalla" : Indica el tipo de pantalla del teléfono.
             49. "resolucion_pantalla" : indica la resolción más precisa de la pantalla en px (incluye la unidad).
             50. "ram_intercorp": selecciona únicamente la opción adecuada de acuerdo a la información brindada, las opciones son '1.5GB', '10GB', '128GB', '12GB', '14GB', '16GB', '1GB', '256GB', '2GB', '32GB', '32MB', '3GB', '4GB', '6GB', '8GB', '2.5GB', '4.5GB', '5.5GB', '512MB', '513MB', '5GB', '768MB', '24GB', '64GB', '48GB', '40GB', '28GB'.
             51. "duracion_bateria_intercorp": Indica en horas la duración de la batería del dispositivo de acuerdo a los especificado en la descripción, si no se menciona quiero que lo infieras pero siendo lo más preciso posible.
             52. "modelo_procesador_intercorp" : Indica el modelo del procesador del teléfono.
             53. "sim_card_intercorp" : Selecciona únicamente la opción más adecuada para el teléfono entre 'Doble SIM', 'eSIM', 'Single SIM'.
             54. "enfoque_automatico_intercorp" : Solo responde 'Sí' o 'No' dependiendo de si el teléfono tiene enfoque automático o no.
             55. "rango_pantalla_intercorp" : Selecciona el rango de tamaño de pantalla más adecuado para el teléfono entre las siguientes opciones 'Hasta 5.9', '6.0 a 6.3', '6.4 a 6.6', '6.7 a 6.9', '7 a más'.
             56. "bateria_intercorp" : Indica el tipo y la capacidad de la batería del teléfono en mAh.
             57. "flash_intercorp" : Solo responde 'Sí' o 'No' dependiendo de si el teléfono tiene flash o no.
             58. "incluye_cargador_intercorp" : Solo responde 'Sí' o 'No' dependiendo de si el teléfono incluye cargador o no en el paquete.
             59. "zoom_digital_intercorp" : Solo responde 'Sí' o 'No' dependiendo de si el teléfono tiene zoom digital o no.
             60. "formato_videos_intercorp" : Selecciona el formato del video del teléfono entre las siguientes opciones 'MP4', 'MOV', 'WMV', 'AVI', 'AVCHD', 'FLV', 'F4V y SWF', 'MKV', 'WEBM o HTML5', 'MPEG-2'.
             61. "velocidad_cpu_intercorp" : Indica la velocidad del procesador del teléfono en GHz (incluye la unidad).
             62. "tamaño_pantalla_intercorp" : Selecciona únicamente el tamaño de pantalla más adecuado para el dispositivo, si no hay la opción precisa quiero que escojas el que más se acerca, las opciones son '0.96"', '1.2"', '1.4"', '1.47"', '1.55"', '1.56"', '1.64"', '1.77"', '1.8"', '2.4"', '3.5"', '4.7"', '5"', '5.2"', '5.3"', '5.34"', '5.45"', '5.5"', '5.6"', '5.7"', '5.8"', '5.84"', '5.86"', '5.97"', '6"', '6.09"', '6.1"', '6.15"', '6.2"', '6.22"'
             63. "tipo_conector_intercorp" : Indica el tipo de conector de carga del teléfono, por ejemplo 'USB-C', 'Lightning', 'Micro USB', 'No tiene'.
             64. "lector_huella_intercorp" : Solo responde 'Sí' o 'No' dependiendo de si el teléfono tiene lector de huella o no.
             65. "localizacion_intercorp" : Indica si el teléfono tiene GPS o no, solo responde 'Sí' o 'No'.
             66. "inteligencia_artificial_intercorp" : Indica si el teléfono tiene funciones de inteligencia artificial o no, solo responde 'Sí' o 'No'.
             67. "procesador_generacion" : Indica el procesador y la generación del procesador.
             68. "entrada_audio_intercorp" : Especifica el tipo de entrada de audio del teléfono, por ejemplo 'Jack 3.5mm', 'USB-C', 'Lightning', 'No tiene'.
             69. "nfc_intercorp" : Indica si el teléfono tiene NFC o no, solo responde 'Sí' o 'No'.
             70. "nombre_llamativo" : Este nombre debe ser preciso para búsquedas, debe incluir marca, y varios adjetivos relevantes que describan al producto, debe ser de máximo 100 carácteres pero mínimo 50 caracteres y recuerda que es para un público latino hispanohablante.

             IMPORTANTE: Responde ÚNICAMENTE con el JSON solicitado, SIN los delimitadores \`\`\`json ni ningún otro texto adicional.
             El JSON debe comenzar directamente con { y terminar con }.`
}

const motosPrompt = async (productData) => {
   return `Actúa como un asistente experto en procesamiento de datos y catalogación de productos para e-commerce y marketplaces.
              Tu tarea es extraer información de un texto de entrada y estructurarla en un objeto JSON estricto, en español y optimizado para un mercado hispanohablante latinoamericano.

              Aquí tienes la información del producto o bundle a procesar:
                - Nombre referente: '${productData.Nombre}'
                - Información general de los productos: '${productData["Descripción General"]}'
                - Categoría: '${productData.Categorías}'

             Reglas de Llenado por Campo:
                - Unidades Numéricas: Devuelve solo el número (integer o float) sin símbolos de unidad en los campos de medidas a menos que se solicite.
                - Estandarización: Peso en "kg", Dimensiones en "cm", Volumen en "mL" a menos que se indique alguna medida específica.
            
             Por favor devuelve un JSON con los siguientes campos:
              1. "descripcion" : Describe el producto de una manera muy detallada y clara en varios párrafos (mínimo 2). Debes incluir: Nombre del producto, características (modelo, tamaño, color), proceso de fabricación o materiales, y ventajas de compra. Empieza y/o termina con una frase llamativa de venta. Mínimo 100 caracteres. Pon espacio entre cada concepto.
              2. "descripcion_html": Una descripción del producto con etiquetas HTML, donde siga el siguiente orden: Título con el nombre comercial del producto o bundle, un párrafo que describa el producto o productos de manera clara y precisa, una lista con las principales características del producto o productos del bundle. Además, no incluyas las palabras 'ideal', 'perfecto', 'excelente' y 'redes'.
              3. "marca" : La marca oficial del producto.
              4. "anchura_del_paquete_de_envio" : Estimado de la anchura del paquete de envío en cm. Solo números.
              5. "altura_del_paquete_de_envio" : Estimado de la altura del paquete de envío en cm. Solo números.
              6. "largo_del_paquete_de_envio" : Estimado del largo del paquete de envío en cm. Solo números.
              7. "peso_del_paquete" : Un estimado del peso total del bulto de envío en kg. Solo el número (ej: 0.5).
              8. "genero" : Escoge estrictamente entre: 'Bebés', 'Bebés niño', 'Niña', 'Niño', 'Masculino', 'Femenino', 'Unisex'. Si no aplica, usa 'Unisex' o null.
              9. "peso_del_producto" : Estimado del peso del artículo en sí (sin embalaje) en kg. Solo el número.
             10. "modelo" : El código o nombre del modelo específico (suele estar en el nombre).
             11. "contenido_del_paquete" : Lista detallada de qué incluye en la caja separado por comas (ejemplo: juego de llaves, casco).
             12. "nombre_general_del_producto" : Cómo se conoce comúnmente al producto (ej: "Crema hidratante", "Zapatillas deportivas").
             13. "rodado" : Indica el rodado lo más específico posible de la moto
             14. "contenido_neto" : Cantidad específica declarada (ej: "500 g", "10 pzas").
             15. "color" : Inidica el color general del producto, si es rojo metálico simplemente indica rojo y que inicie con mayúscula que sea en español.
             16. "nombre_de_color" : El nombre del color tal cual lo define la marca (ej: "Rojo Fuego", "Azul Medianoche").
             17. "anchura_del_producto" : Estimado de la anchura del producto físico (fuera de la caja) en cm. Solo números.
             18. "altura_del_producto" : Estimado de la altura del producto físico (fuera de la caja) en cm. Solo números.
             19. "largo_del_producto" : Estimado del largo del producto físico (fuera de la caja) en cm. Solo números.
             20. "material" : Indica el material del que está hecho el producto, ya sea acero, plástico pvc u otros.
             21. "etiquetas" : Lista de palabras clave relevantes que puedan describir al producto separadas por comas.
             22. "capacidad" : Capacidad máxima de carga de la moto en kg.
             23. "caracteristicas" : Lista de las principales características técnicas o funcionales, separadas por comas.
             24. "terminos_de_busqueda" : Palabras que usaría un cliente para buscar este producto, separadas por comas.
             25. "compatibilidad" : con qué otros productos o sistemas son compatibles (separado por comas).
             26. "voltaje" : Un estimado del voltaje de la batería de la moto.
             27. "potencia" : Indica la potencia de la moto en HP.
             28. "titulo_seo" : Un título optimizado para buscadores (Producto + Marca + Modelo + Característica clave). Máximo 60 caracteres.
             29. "fabricante" : Nombre de la empresa fabricante (solo si se menciona explícitamente).
             30. "descripcion_seo" : Meta descripción para posicionamiento. Resumen atractivo de 150-160 caracteres.
             31. "tipo_batería" : Tipo de batería que se puede usar en la moto.
             32. "color_telefono" : Indica el color que sea más específico en español.
             33. "nombre_llamativo" : Este nombre debe ser preciso para búsquedas, debe incluir marca, y varios adjetivos relevantes que describan al producto, debe ser de máximo 100 carácteres pero mínimo 50 caracteres.
             34. "transmision_primaria" : Responder con 'Sí' o 'No'.
             35. "refrigeracion" : Responder con 'Sí' o 'No'.
             36. "color_principal" : Indicar únicamente el color más adecuado para el producto, las opciones son las siguientes 'Aleatorio', 'Amarillo', 'Azul', 'Beige', 'Blanco', 'Celeste', 'Gris', 'Incoloro', 'Marrón', 'Morado', 'Multicolor', 'Naranja', 'Negro', 'Oro', 'Plata', 'Rojo', 'Rosa', 'Transparente', 'Verde', 'Violeta'.
             37. "tipo_encendido": Indica únicamente el tipo de encendido de la moto, las opciones disponibles son las siguientes 'Manual', 'Eléctrico', 'Eléctrico en Hornillas y Horno', 'Eléctrico sólo en Hornillas', 'Automático', 'Automático en Hornillas y Eléctrico en el Horno', 'Eléctrico en Hornillas y Manual Horno', 'Eléctroautomático', 'Electromanual'.
             38. "alimentacion_diametro" : Indica el valor que consideres más adecuado, ya sea numérico, si es numérico solo indica el número redondeado a número entero.
             39. "distribucion" : Indica la distribuición de la moto.
             40. "embrague" : Responder con 'Sí' o 'No'.
             41. "arranque" : Detalla el tipo  de arranque de la moto.
             42. "numero_de_cilindros" : Indica un valor numérico entero de la cantidad de cilindros que tiene la moto.
             43. "tipo_de_alimentacion" : Indica el tipo de alimentación de la moto.
             44. "cilindrada" : Indica la cilindrada en cc incluye la unidad 'cc'.
             
             IMPORTANTE: Responde ÚNICAMENTE con el JSON solicitado, SIN los delimitadores \`\`\`json ni ningún otro texto adicional.
             El JSON debe comenzar directamente con { y terminar con }.`
}

const audifonosPrompt = (productData) => {
   return `Actúa como un asistente experto en procesamiento de datos y catalogación de productos para e-commerce y marketplaces.
              Tu tarea es extraer información de un texto de entrada y estructurarla en un objeto JSON estricto, en español y optimizado para un mercado hispanohablante latinoamericano.

              Aquí tienes la información del producto o bundle a procesar:
                - Nombre referente: '${productData.Nombre}'
                - Información general de los productos: '${productData["Descripción General"]}'
                - Categoría: '${productData.Categorías}'

             Reglas de Llenado por Campo:
                - Unidades Numéricas: Devuelve solo el número (integer o float) sin símbolos de unidad en los campos de medidas a menos que se solicite.
                - Estandarización: Peso en "kg", Dimensiones en "cm", Volumen en "mL" a menos que se indique alguna medida específica.
            
             Por favor devuelve un JSON con los siguientes campos:
              1. "descripcion" : Describe el producto de una manera muy detallada y clara en varios párrafos (mínimo 2). Debes incluir: Nombre del producto, características (modelo, tamaño, color), proceso de fabricación o materiales, y ventajas de compra. Empieza y/o termina con una frase llamativa de venta. Mínimo 100 caracteres. Pon espacio entre cada concepto.
              2. "descripcion_html": Una descripción del producto con etiquetas HTML, donde siga el siguiente orden: Título con el nombre comercial del producto o bundle, un párrafo que describa el producto o productos de manera clara y precisa, una lista con las principales características del producto o productos del bundle.
              3. "marca" : La marca oficial del producto.
              4. "anchura_del_paquete_de_envio" : Estimado de la anchura del paquete de envío en cm. Solo números.
              5. "altura_del_paquete_de_envio" : Estimado de la altura del paquete de envío en cm. Solo números.
              6. "largo_del_paquete_de_envio" : Estimado del largo del paquete de envío en cm. Solo números.
              7. "peso_del_paquete" : Un estimado del peso total del bulto de envío en kg. Solo el número (ej: 0.5).
              8. "genero" : Escoge estrictamente entre: 'Bebés', 'Bebés niño', 'Niña', 'Niño', 'Masculino', 'Femenino', 'Unisex'. Si no aplica, usa 'Unisex' o null.
              9. "peso_del_producto" : Estimado del peso del artículo en sí (sin embalaje) en kg. Solo el número.
             10. "modelo" : El código o nombre del modelo específico (suele estar en el nombre).
             11. "contenido_del_paquete" : Lista detallada de qué incluye en la caja separado por comas (ejemplo: audifono, cable, manual).
             12. "nombre_general_del_producto" : Cómo se conoce comúnmente al producto (ej: "Crema hidratante", "Zapatillas deportivas").
             13. "contenido_neto" : Cantidad específica declarada (ej: "500 g", "10 pzas").
             14. "color" : Inidica el color general del producto, si es rojo metálico simplemente indica rojo y que inicie con mayúscula que sea en español.
             15. "nombre_de_color" : El nombre del color tal cual lo define la marca (ej: "Rojo Fuego", "Azul Medianoche").
             16. "anchura_del_producto" : Estimado de la anchura del producto físico (fuera de la caja) en cm. Solo números.
             17. "altura_del_producto" : Estimado de la altura del producto físico (fuera de la caja) en cm. Solo números.
             18. "largo_del_producto" : Estimado del largo del producto físico (fuera de la caja) en cm. Solo números.
             19. "material" : Indica el material del que está hecho el producto, ya sea acero, plástico pvc u otros.
             20. "etiquetas" : Lista de palabras clave relevantes que puedan describir al producto separadas por comas.
             21. "estilo" : Indica el estilo de los audífonos según la descripción, ya sea 'Clip-on', 'Over-ear', 'In-ear' o cualquier otro que puedas inferir según la descripción.
             22. "caracteristicas" : Lista de las principales características técnicas o funcionales, separadas por comas.
             23. "terminos_de_busqueda" : Palabras que usaría un cliente para buscar este producto, separadas por comas.
             24. "compatibilidad" : con qué otros productos o sistemas son compatibles (separado por comas).
             25. "potencia" : Potencia de los audífonos.
             26. "titulo_seo" : Un título optimizado para buscadores (Producto + Marca + Modelo + Característica clave). Máximo 60 caracteres.
             27. "fabricante" : Nombre de la empresa fabricante (solo si se menciona explícitamente).
             28. "descripcion_seo" : Meta descripción para posicionamiento. Resumen atractivo de 150-160 caracteres.
             29. "tipo_batería" : Tipo de batería que se puede usar en la moto.
             30. "largo_cable" : Indica una referencia del largo del cable de carga del producto.
             31. "capacidad_bateria" : Indica la capacidad de la batería en mAh.
             32. "puertos_usb" : Indica la cantidad de puertos USB que tiene este producto solo si lo menciona en la información general.
             33. "voltaje" : Un estimado del voltaje de la batería del producto.
             34. "bluetooth" : Responde con 'Si' o 'No'.
             35. "color_yape" : Escoge el color más adecuado para el producto dentro de las siguientes opciones 'BLANCO', 'NEGRO', 'ROJO', 'VERDE', 'AMARILLO', 'AZUL', 'PURPURA', 'NARANJA', 'MARRÓN', 'GRIS', 'ROSADO', 'DORADO', 'MULTICOLOR'.
             36. "conectividad_yape" : Indica la conectividad de los audífonos, si son varias opciones que sean separados por comas.
             37. "microfono_yape" : Responde con 'Si' o 'No', si es que tiene o no tiene micrófono integrado.
             38. "resistencia_al_agua_yape" : Responde con 'Si' o 'No', a si los audífonos son o no son resistentes al agua.
             39. "sensibilidad_de_audio_yape" : Indica la sensibilidad de audio de los audífonos en dB (solo el valor numérico sin la unidad). 
             40. "nombre_llamativo" : Este nombre debe ser preciso para búsquedas, debe incluir marca, y varios adjetivos relevantes que describan al producto, debe ser de máximo 100 carácteres pero mínimo 50 caracteres y recuerda que es para un público latino hispanohablante.
             41. "bluetooth_intercorp" : Responder con 'Sí' o 'No' a si tiene conexión bluetooth.
             42. "color_principal" : Indicar únicamente el color más adecuado para el producto, las opciones son las siguientes 'Aleatorio', 'Amarillo', 'Azul', 'Beige', 'Blanco', 'Celeste', 'Gris', 'Incoloro', 'Marrón', 'Morado', 'Multicolor', 'Naranja', 'Negro', 'Oro', 'Plata', 'Rojo', 'Rosa', 'Transparente', 'Verde', 'Violeta'.
             43. "wifi_intercorp": Responder con 'Sí' o 'No' a si tiene conexión WiFi.
             44. "control_remoto" : Selecciona el valor que más encaje con el producto de las siguientes opciones 'Básico', 'One Remote', 'Magic Remote', 'Mi Smart Control', 'One Remote Solar', 'Smart Control'.
             45. "capacidad_intercorp" : Indica la capacidad de los audífonos solo si lo indica en la descripción general.
                         
             IMPORTANTE: Responde ÚNICAMENTE con el JSON solicitado, SIN los delimitadores \`\`\`json ni ningún otro texto adicional.
             El JSON debe comenzar directamente con { y terminar con }.
             `
}

const powerBankYBateriasPortatilesPrompt = (productData) => {
   return `Actúa como un asistente experto en procesamiento de datos y catalogación de productos para e-commerce y marketplaces.
              Tu tarea es extraer información de un texto de entrada y estructurarla en un objeto JSON estricto, en español y optimizado para un mercado hispanohablante latinoamericano.

              Aquí tienes la información del producto o bundle a procesar:
                - Nombre referente: '${productData.Nombre}'
                - Información general de los productos: '${productData["Descripción General"]}'
                - Categoría: '${productData.Categorías}'

             Reglas de Llenado por Campo:
                - Unidades Numéricas: Devuelve solo el número (integer o float) sin símbolos de unidad en los campos de medidas a menos que se solicite.
                - Estandarización: Peso en "kg", Dimensiones en "cm", Volumen en "mL" a menos que se indique alguna medida específica.
            
             Por favor devuelve un JSON con los siguientes campos:
              1. "nombre_llamativo" : Este nombre debe ser preciso para búsquedas, debe incluir marca, y varios adjetivos relevantes que describan al producto, debe ser de máximo 100 carácteres pero mínimo 50 caracteres y recuerda que es para un público latino hispanohablante.
              2. "descripcion" : Describe el producto de una manera muy detallada y clara en varios párrafos (mínimo 2). Debes incluir: Nombre del producto, características (modelo, tamaño, color), proceso de fabricación o materiales, y ventajas de compra. Empieza y/o termina con una frase llamativa de venta. Mínimo 100 caracteres. Pon espacio entre cada concepto.
              3. "descripcion_html": Una descripción del producto con etiquetas HTML, donde siga el siguiente orden: Título con el nombre comercial del producto o bundle, un párrafo que describa el producto o productos de manera clara y precisa, una lista con las principales características del producto o productos del bundle. Además, no incluyas las palabras 'ideal', 'perfecto' y 'excelente'.
              4. "marca" : La marca oficial del producto.
              5. "anchura_del_paquete_de_envio" : Estimado de la anchura del paquete de envío en cm. Solo números.
              6. "altura_del_paquete_de_envio" : Estimado de la altura del paquete de envío en cm. Solo números.
              7. "largo_del_paquete_de_envio" : Estimado del largo del paquete de envío en cm. Solo números.
              8. "peso_del_paquete" : Un estimado del peso total del bulto de envío en kg. Solo el número (ej: 0.5).
              9. "genero" : Escoge estrictamente entre: 'Bebés', 'Bebés niño', 'Niña', 'Niño', 'Masculino', 'Femenino', 'Unisex'. Si no aplica, usa 'Unisex' o null.
             10. "peso_del_producto" : Estimado del peso del artículo en sí (sin embalaje) en kg. Solo el número.
             11. "modelo" : El código o nombre del modelo específico (suele estar en el nombre).
             12. "contenido_del_paquete" : Lista detallada de qué incluye en la caja separado por comas (ejemplo: audifono, cable, manual).
             13. "nombre_general_del_producto" : Cómo se conoce comúnmente al producto (ej: "Crema hidratante", "Zapatillas deportivas").
             14. "contenido_neto" : Cantidad específica declarada (ej: "500 g", "10 pzas").
             15. "color" : Inidica el color general del producto, si es rojo metálico simplemente indica rojo y que inicie con mayúscula que sea en español.
             16. "nombre_de_color" : El nombre del color tal cual lo define la marca (ej: "Rojo Fuego", "Azul Medianoche").
             17. "anchura_del_producto" : Estimado de la anchura del producto físico (fuera de la caja) en cm. Solo números.
             18. "altura_del_producto" : Estimado de la altura del producto físico (fuera de la caja) en cm. Solo números.
             19. "largo_del_producto" : Estimado del largo del producto físico (fuera de la caja) en cm. Solo números.
             20. "material" : Indica el material del que está hecho el producto, ya sea acero, plástico pvc u otros.
             21. "etiquetas" : Lista de palabras clave relevantes que puedan describir al producto separadas por comas.
             22. "volumen" : Un estimado del volumen en mL tomando en cuenta las medidas que generaste para el producto y también considerando que todos son prismas rectangulares.
             23. "estilo" : Indica el estilo del producto según la descripción, cualquiera que puedas inferir según la descripción.
             24. "capacidad" : Indica la capacidad de la batería en mAh, incluye la unidad de medida.
             25. "caracteristicas" : Lista de las principales características técnicas o funcionales, separadas por comas.
             26. "terminos_de_busqueda" : Palabras que usaría un cliente para buscar este producto, separadas por comas.
             27. "compatibilidad" : con qué otros productos o sistemas son compatibles (separado por comas).
             28. "potencia" : Potencia de la batería en W incluye la unidad de medida.
             29. "composicion" : Indica los componentes de la batería separados por comas y detalla el motivo del uso de cada ingrediente (no seas tan minucioso con información general es suficiente).
             30. "titulo_seo" : Un título optimizado para buscadores (Producto + Marca + Modelo + Característica clave). Máximo 60 caracteres.
             31. "fabricante" : Nombre de la empresa fabricante (solo si se menciona explícitamente).
             32. "descripcion_seo" : Meta descripción para posicionamiento. Resumen atractivo de 150-160 caracteres.
             33. "tipo_batería" : Tipo de batería del producto.
             34. "largo_cable" : Indica una referencia del largo del cable de carga del producto.
             35. "capacidad_bateria" : Indica la capacidad de la batería en mAh.
             36. "puertos_usb" : Indica la cantidad de puertos USB que tiene este producto solo si lo menciona en la información general.
             37. "voltaje" : Indica el voltaje del producto (sé lo más preciso posible).
             38. "capacidad_yape" : Selecciona la capacidad de la batería que sea más precisa de las siguientes opciones '30000 mAh', '25000 mAh', '20000 mAh', '10000 mAh', '15000 mAh', '5020 mAh', '4000 mAh', '4323 mAh', '2716 mAh', '3110 mAh', '2942 mAh', '3174 mAh', '1960 mAh', '3400 mAh', '4500 mAh'.
             39. "color_yape" : Escoge el color más adecuado para el producto dentro de las siguientes opciones 'BLANCO', 'NEGRO', 'ROJO', 'VERDE', 'AMARILLO', 'AZUL', 'PURPURA', 'NARANJA', 'MARRÓN', 'GRIS', 'ROSADO', 'DORADO', 'MULTICOLOR'.
             40. "inalambrico_yape" : Responde 'Si' o 'No' a si el producto es inalámbrico.
             41. "tipo_entrada_yape" : Selecciona el tipo de entrada que mejor encaje con el producto, las opciones son 'usbc', 'usb', 'tipoo c', 'lightning'.
             42. "color_principal" : Indicar únicamente el color más adecuado para el producto, las opciones son las siguientes 'Aleatorio', 'Amarillo', 'Azul', 'Beige', 'Blanco', 'Celeste', 'Gris', 'Incoloro', 'Marrón', 'Morado', 'Multicolor', 'Naranja', 'Negro', 'Oro', 'Plata', 'Rojo', 'Rosa', 'Transparente', 'Verde', 'Violeta'.
             43. "duracion_bateria" : Indica la duración de la batería en horas, incluye la unidad.
             44. "tipo_conector_intercorp" : Indica el tipo de conector que tiene el producto, si son varios sepáralos por coma
                         
             IMPORTANTE: Responde ÚNICAMENTE con el JSON solicitado, SIN los delimitadores \`\`\`json ni ningún otro texto adicional.
             El JSON debe comenzar directamente con { y terminar con }.
             `
}

const camarasYAccesoriosPrompt = (productData) => {
   return `Actúa como un asistente experto en procesamiento de datos y catalogación de productos para e-commerce y marketplaces.
              Tu tarea es extraer información de un texto de entrada y estructurarla en un objeto JSON estricto, en español y optimizado para un mercado hispanohablante latinoamericano.

              Aquí tienes la información del producto o bundle a procesar:
                - Nombre referente: '${productData.Nombre}'
                - Información general de los productos: '${productData["Descripción General"]}'
                - Categoría: '${productData.Categorías}'

             Reglas de Llenado por Campo:
                - Unidades Numéricas: Devuelve solo el número (integer o float) sin símbolos de unidad en los campos de medidas a menos que se solicite.
                - Estandarización: Peso en "kg", Dimensiones en "cm", Volumen en "mL" a menos que se indique alguna medida específica.
            
             Por favor devuelve un JSON con los siguientes campos:
              1. "nombre_llamativo" : Este nombre debe ser preciso para búsquedas, debe incluir marca, y varios adjetivos relevantes que describan al producto, debe ser de máximo 100 carácteres pero mínimo 50 caracteres y recuerda que es para un público latino hispanohablante.
              2. "descripcion" : Describe el producto de una manera muy detallada y clara en varios párrafos (mínimo 2). Debes incluir: Nombre del producto, características (modelo, tamaño, color), proceso de fabricación o materiales, y ventajas de compra. Empieza y/o termina con una frase llamativa de venta. Mínimo 100 caracteres. Pon espacio entre cada concepto.
              3. "descripcion_html": Una descripción del producto con etiquetas HTML, donde siga el siguiente orden: Título con el nombre comercial del producto o bundle, un párrafo que describa el producto o productos de manera clara y precisa, una lista con las principales características del producto o productos del bundle. Además, no incluyas las palabras 'ideal', 'perfecto' y 'excelente'.
              4. "marca" : La marca oficial del producto.
              5. "anchura_del_paquete_de_envio" : Estimado de la anchura del paquete de envío en cm. Solo números.
              6. "altura_del_paquete_de_envio" : Estimado de la altura del paquete de envío en cm. Solo números.
              7. "largo_del_paquete_de_envio" : Estimado del largo del paquete de envío en cm. Solo números.
              8. "peso_del_paquete" : Un estimado del peso total del bulto de envío en kg. Solo el número (ej: 0.5).
              9. "genero" : Escoge estrictamente entre: 'Bebés', 'Bebés niño', 'Niña', 'Niño', 'Masculino', 'Femenino', 'Unisex'. Si no aplica, usa 'Unisex' o null.
             10. "peso_del_producto" : Estimado del peso del artículo en sí (sin embalaje) en kg. Solo el número.
             11. "modelo" : El código o nombre del modelo específico (suele estar en el nombre).
             12. "contenido_del_paquete" : Lista detallada de qué incluye en la caja separado por comas (ejemplo: audifono, cable, manual).
             13. "nombre_general_del_producto" : Cómo se conoce comúnmente al producto (ej: "Crema hidratante", "Zapatillas deportivas").
             14. "contenido_neto" : Cantidad específica declarada (ej: "500 g", "10 pzas").
             15. "color" : Inidica el color general del producto, si es rojo metálico simplemente indica rojo y que inicie con mayúscula que sea en español.
             16. "nombre_de_color" : El nombre del color tal cual lo define la marca (ej: "Rojo Fuego", "Azul Medianoche").
             17. "anchura_del_producto" : Estimado de la anchura del producto físico (fuera de la caja) en cm. Solo números.
             18. "altura_del_producto" : Estimado de la altura del producto físico (fuera de la caja) en cm. Solo números.
             19. "largo_del_producto" : Estimado del largo del producto físico (fuera de la caja) en cm. Solo números.
             20. "material" : Indica el material del que está hecho el producto, ya sea acero, plástico pvc u otros.
             21. "etiquetas" : Lista de palabras clave relevantes que puedan describir al producto separadas por comas.
             22. "volumen" : Un estimado del volumen en mL tomando en cuenta las medidas que generaste para el producto y también considerando que todos son prismas rectangulares.
             23. "estilo" : Indica el estilo de los productos según la descripción, cualquiera que puedas inferir según la descripción.
             24. "capacidad" : Indica la capacidad del producto, incluye la unidad de medida.
             25. "caracteristicas" : Lista de las principales características técnicas o funcionales, separadas por comas.
             26. "terminos_de_busqueda" : Palabras que usaría un cliente para buscar este producto, separadas por comas.
             27. "compatibilidad" : con qué otros productos o sistemas son compatibles (separado por comas).
             28. "potencia" : Potencia del producto en W incluye la unidad de medida.
             29. "titulo_seo" : Un título optimizado para buscadores (Producto + Marca + Modelo + Característica clave). Máximo 60 caracteres.
             30. "composicion" : Indica los componentes del producto separados por comas y detalla el motivo del uso de cada ingrediente (no seas tan minucioso, con información general es suficiente).
             31. "fabricante" : Nombre de la empresa fabricante (solo si se menciona explícitamente).
             32. "descripcion_seo" : Meta descripción para posicionamiento. Resumen atractivo de 150-160 caracteres.
             33. "bateria_incluida" : Responde 'Si' o 'No' a si el producto incluye batería.
             34. "bateria_requerida" : Responde 'Si' o 'No' a si el producto requiere batería para funcionar.
             35. "tipo_batería" : Tipo de batería del producto.
             36. "largo_cable" : Indica una referencia del largo del cable de carga del producto.
             37. "puertos_hdmi" : Indica la cantidad de puertos HDMI que tiene este producto solo si lo menciona en la información general (solo números).
             38. "puertos_vga" : Indica la cantidad de puertos VGA que tiene este producto solo si lo menciona en la información general (solo números).
             39. "capacidad_bateria" : Indica la capacidad de la batería en mAh.
             40. "puertos_red" : Indica la cantidad de puertos de red que tiene este producto solo si lo menciona en la información general (solo números).
             41. "resolucion_camara_delantera" : Indica la resolución de la cámara delantera en megapíxeles (incluye unidades en MP).
             42. "volataje" : Indica el voltaje del producto (sé lo más preciso posible solo si lo menciona en la descripción).
             43. "puertos_usb" : Indica la cantidad de puertos USB que tiene este producto solo si lo menciona en la información general.
             44. "tipo_producto_intercorp" : Selecciona la mejor opción que describa al producto dentro de las siguientes opciones 'Accesorios Cómputo', 'Accesorios Cámaras', 'Accesorios Seguridad', 'Adaptadores', 'Cables', 'Capturadoras de Video', 'Cámaras', 'Cámaras Espías', 'Cámaras Seguridad', 'Cámaras Web', 'Conectores', 'Convertidores', 'Docking Station', 'Extensores', 'Hubs', 'Infrarrojos', 'Interfaces', 'Intercomunicadores', 'Kits Cámaras', 'Multitaps', 'Pasacables', 'Plugs', 'Seguridad Inteligente', 'Sensores', 'Splitters', 'Soportes', 'Switches'.
             45. "conectividad_intercorp" : Selecciona la opción de conectividad que mejor encaje con el producto, las opciones son 'USB', 'USB 3.0', 'USB-C', 'USB 3.2', 'USB 4 tipo C', 'Micro USB', 'Hi-Speed USB', 'Puerto USB', 'Wi-Fi', 'Conexión Wi Fi', 'WiFi 6', 'Wi-Fi Direct', '2.4 GHz/5 GHz', 'Ethernet', 'Puerto LAN', 'RJ45', 'Puerto Ethernet', 'Bluetooth', 'Bluetooth 5.0', 'Inalámbrico', 'Plug and play', 'Micro SD', 'Lector de tarjeta de memoria', 'HDMI', 'Salida HDMI', 'LTE', '4G LTE', 'Red'.
             46. "incluye_microfono_intercorp" : Responde 'Sí' o 'No' a si el producto incluye micrófono integrado.
             47. "administracion_con_smartphone_intercorp" : Responde 'Sí' o 'No' a si el producto se puede administrar o controlar mediante un smartphone.
             48. "angulo_giro_intercorp" : Indica el ángulo de giro del producto en grados solo si lo menciona en la descripción general (incluye las unidades).
             49. "funciones_intercorp" : Lista de las funciones del producto separadas por comas.
             50. "vision_nocturna_intercorp" : Responde 'Sí' o 'No' a si el producto tiene visión nocturna.
             51. "grabacion_color_intercorp" : Responde 'Sí' o 'No' a si el producto tiene grabación a color.
             52. "resistente_al_agua_intercorp" : Responde 'Sí' o 'No' a si el producto es resistente al agua.
             53. "resolucion_pantalla_intercorp" : Indica la resolución de la pantalla del producto en píxeles (incluye unidades en px).
             54. "temperatura_maxima_operacion_intercorp" : Indica la temperatura máxima de operación del producto en grados Celsius (incluye unidades en °C).
             55. "cantidad_piezas_intercorp" : Indica la cantidad de piezas que incluye el producto solo si lo menciona en la descripción general (solo números).
             56. "capacidad_almacenamiento_intercorp" : Selecciona la capacidad de almacenamiento del producto entre las siguientes opciones '1 GB', '16 GB', '2 GB', '32 GB', '4 GB', '6 GB', '8 GB', '64 GB', '256GB', '825GB'.
             57. "advertencias_uso_intercorp" : Lista de advertencias de uso del producto separadas por comas.
             58. "inalambrico_intercorp" : Responde 'Sí' o 'No' a si el producto es inalámbrico.
             59. "instrucciones_uso_intercorp" : Lista de instrucciones de uso del producto separadas por comas.
             60. "control_remoto_intercorp" : Selecciona la opción que más se relacione al producto entre las siguientes opciones 'Básico', 'One Remote', 'Magic Remote', 'Mi Smart Control', 'One Remote Solar', 'Smart Control'.
             61. "incluye_cable_alimentacion_intercorp" : Responde 'Sí' o 'No' a si el producto incluye cable de alimentación.
             62. "color_yape" : Escoge el color más adecuado para el producto dentro de las siguientes opciones 'BLANCO', 'NEGRO', 'ROJO', 'VERDE', 'AMARILLO', 'AZUL', 'PURPURA', 'NARANJA', 'MARRÓN', 'GRIS', 'ROSADO', 'DORADO', 'MULTICOLOR'.
             63. "inalambrico_yape" : Responde 'Si' o 'No' a si el producto es inalámbrico.
             64. "tipo_entrada_yape" : Selecciona el tipo de entrada que mejor encaje con el producto, las opciones son 'usbc', 'usb', 'tipoo c', 'lightning'.
             65. "color_principal" : Indicar únicamente el color más adecuado para el producto, las opciones son las siguientes 'Aleatorio', 'Amarillo', 'Azul', 'Beige', 'Blanco', 'Celeste', 'Gris', 'Incoloro', 'Marrón', 'Morado', 'Multicolor', 'Naranja', 'Negro', 'Oro', 'Plata', 'Rojo', 'Rosa', 'Transparente', 'Verde', 'Violeta'.
             66. "duracion_bateria" : Indica la duración de la batería en horas, incluye la unidad.
                         
             IMPORTANTE: Responde ÚNICAMENTE con el JSON solicitado, SIN los delimitadores \`\`\`json ni ningún otro texto adicional.
             El JSON debe comenzar directamente con { y terminar con }.
             `
}

export { rascadorHierbaDeGatosPrompt, celularesPrompt, motosPrompt, audifonosPrompt, powerBankYBateriasPortatilesPrompt, camarasYAccesoriosPrompt};