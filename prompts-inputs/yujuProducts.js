const protectoresColchonPrompt = async (productData) => {
        return `Necesito que generes varios datos para el producto "${productData.Nombre}" en un solo formato JSON.
            Aquí tienes la información del producto:
            - Nombre: '${productData.Nombre}'
            - Descripción: '${productData["Descripción General"]}'
            - Categoría en yuju: '${productData.Categorías}'
            
            Por favor devuelve un JSON con los siguientes campos:
            1. "characteristics": Una lista de características principales de
            2. "descriptive_tags": Palabras clave separadas por comas.
            3. "comercial_description": Una descripción del producto que sea más comercial y llamativo para el cliente, este debe incluir información escencial para que esté seguro de su compra, como datos técnicos y etc.
            4. "bed_size": Debes escoger la opción más adecuada entre '|Falabella|1 plaza', '|Falabella|1,5 plazas', '|Falabella|2 plazas', '|Falabella|Infantil', '|Falabella|King', '|Falabella|Queen'.
            5. "custom_s4": Escoge la opción más adecuada entre '|Falabella|Amarillo', '|Falabella|Azul', '|Falabella|Beige', '|Falabella|Blanco', '|Falabella|Burdeo', '|Falabella|Café', '|Falabella|Dorado', '|Falabella|Gris', '|Falabella|Morado', '|Falabella|Naranjo', '|Falabella|Negro', '|Falabella|Plateado', '|Falabella|Rojo', '|Falabella|Rosado', '|Falabella|Verde'.
            6. "model": Cuando tu marca está dividida en amplios segmentos, un producto puede estar individualizado en primera instancia para identificar a cual pertenece. Ésto lo hacen por modelos. Ejemplo 1: La marca es Seat, y el modelo es Ibiza, o León. Ejemplo 2:  La marca es Apple y el modelo es iPhone 6S.
            7. "manufacturer": Es el fabricante del producto, sino indica información del fabricante puedes poner 'Rivesi Home - Nacional'.
            8. "custom_s3": Escoge una opción más adecuada para el producto entre las opciones como '|Falabella|Amarillo', '|Falabella|Azul', '|Falabella|Beige', '|Falabella|Blanco', '|Falabella|Bronce', '|Falabella|Burdeo', '|Falabella|Café', '|Falabella|Cromo', '|Falabella|Dorado', '|Falabella|Dorado', '|Falabella|Gris', '|Falabella|Morado', '|Falabella|Naranjo', '|Falabella|Negro', '|Falabella|Plateado', '|Falabella|Rojo', '|Falabella|Rosado', '|Falabella|Verde'.
            9. "material": Ahora quiero que escojas el material del producto más adecuado entre las opciones como '|Falabella|Madera', '|Falabella|MDF', '|Falabella|MDP', '|Falabella|Melamina', '|Falabella|Metal', '|Falabella|Fierro', '|Falabella|Acero', '|Falabella|Aluminio', '|Falabella|Espuma', '|Falabella|Poliuretano', '|Falabella|Viscoelástica', '|Falabella|Resortes', '|Falabella|Látex', '|Falabella|Poliéster', '|Falabella|Algodón', '|Falabella|Polialgodón', '|Falabella|Microfibra', '|Falabella|Chenille', '|Falabella|Lona', '|Falabella|Tela', '|Falabella|Sintético', '|Falabella|Cuero sintético', '|Falabella|Terciopelo', '|Falabella|Algodón peruano', '|Falabella|Algodón pima', '|Falabella|Franela', '|Falabella|Lino', '|Falabella|Satén', '|Falabella|Fibra sintética', '|Falabella|Pluma sintética', '|Falabella|Espuma de polietileno', '|Falabella|Thermicfiber', '|Falabella|Thermoloe', '|Falabella|Yute', '|Falabella|MDF biselado tamburato', '|Falabella|Tela de punto', '|Falabella|MDP con melamina'.
            10. "short_features": Escoge la característica corta más adecuada para este producto, las opciones disponibles son '|Falabella|Altura regulable', '|Falabella|Antiadherente', '|Falabella|Antideslizante', '|Falabella|Apto para cocina de inducción', '|Falabella|Apto para horno', '|Falabella|Apto para lavavajillas', '|Falabella|Apto para microondas', '|Falabella|Apto para vajillas', '|Falabella|Carro metálico', '|Falabella|Con fondo difusor', '|Falabella|Control de temperatura', '|Falabella|Cuenta con independencia de lechos', '|Falabella|Cuenta con posición fija', '|Falabella|Cuenta con ruedas', '|Falabella|Duradero', '|Falabella|Elaborado de una sola pieza', '|Falabella|Espacio entre suelo y base', '|Falabella|Expandible', '|Falabella|Funda', '|Falabella|Funda desmontable', '|Falabella|Hipoalergénico', '|Falabella|Hoja completa', '|Falabella|Incluye cubierta', '|Falabella|Incluye sistema de vibromasaje', '|Falabella|Luz en el horno', '|Falabella|Luz indicador de encendido', '|Falabella|Método de trituración', '|Falabella|Nivelación de altura', '|Falabella|Patas desmontables', '|Falabella|Pillow top', '|Falabella|Plegable', '|Falabella|Posiciones del respaldo', '|Falabella|Requiere armado', '|Falabella|Resistencia al agua', '|Falabella|Respaldo reclinable', '|Falabella|Reversible', '|Falabella|Ruedas con freno', '|Falabella|Sistema de ventilación', '|Falabella|Termostato', '|Falabella|Timer'
            11. "tamano_cama_variant": Escoge una opción que sea más adecuada para el producto, aquí te paso las opciones 'Doble', 'Full', 'Infantil', 'King', 'Queen', 'Semidoble', 'Sencillo', 'Super king'.
            12. "package_width": Estima el ancho del paquete en centímetros, recuerda devolver solo unidades numéricas(solo el número sin la unidad de medida).
            13. "package_length": Estima la longitud del paquete en centímetros, recuerda devolver solo unidades numéricas(solo el número sin la unidad de medida).
            14. "possible_searches": posibles búsquedas que pueda realizar el usuario separadas por comas, incluyendo posibles errores ortográficos (menor a 300 caracteres).
            15. "package_height": Estima la altura del paquete en centímetros, recuerda devolver solo unidades numéricas(solo el número sin la unidad de medida)(solo el número sin la unidad de medida).
            16. "length": Estima el largo del producto en centímetros, recuerda devolver solo unidades numéricas(solo el número sin la unidad de medida).
            17. "width": Estima el ancho del producto en centímetros, recuerda devolver solo unidades numéricas(solo el número sin la unidad de medida).
            18. "weight": Peso aproximado del producto en kg (solo el número sin la unidad de medida)
            Solo responde con el JSON, sin comentarios adicionales.

            IMPORTANTE: Responde ÚNICAMENTE con el JSON solicitado, SIN los delimitadores \`\`\`json ni ningún otro texto adicional.
            El JSON debe comenzar directamente con { y terminar con }.`
}

const respaldosDeCamaPrompt = async (productData) => {
        return `Necesito que generes varios datos para el producto "${productData.Nombre}" en un solo formato JSON.
            Aquí tienes la información del producto:
            - Nombre: '${productData.Nombre}'
            - Descripción: '${productData["Descripción General"]}'
            - Categoría en yuju: '${productData.Categorías}'
            
            Por favor devuelve un JSON con los siguientes campos:
            1. "characteristics": Una lista de características principales de
            2. "descriptive_tags": Palabras clave separadas por comas.
            3. "comercial_description": Una descripción del producto que sea más comercial y llamativo para el cliente, este debe incluir información escencial para que el cliente esté seguro de su compra, como datos técnicos y etc.
            4. "bed_size": Debes escoger la opción más adecuada entre '|Falabella|1 plaza', '|Falabella|1,5 plazas', '|Falabella|2 plazas', '|Falabella|Infantil', '|Falabella|King', '|Falabella|Queen'.
            5. "custom_s4": Escoge la opción más adecuada entre '|Falabella|Amarillo', '|Falabella|Azul', '|Falabella|Beige', '|Falabella|Blanco', '|Falabella|Burdeo', '|Falabella|Café', '|Falabella|Dorado', '|Falabella|Gris', '|Falabella|Morado', '|Falabella|Naranjo', '|Falabella|Negro', '|Falabella|Plateado', '|Falabella|Rojo', '|Falabella|Rosado', '|Falabella|Verde'.
            6. "model": Cuando tu marca está dividida en amplios segmentos, un producto puede estar individualizado en primera instancia para identificar a cual pertenece. Ésto lo hacen por modelos. Ejemplo 1: La marca es Seat, y el modelo es Ibiza, o León. Ejemplo 2:  La marca es Apple y el modelo es iPhone 6S.
            7. "weight": Peso aproximado del producto en kg (solo el número sin la unidad de medida)
            Solo responde con el JSON, sin comentarios adicionales.
            8. "variation": Indica aquellas características que pueden variar en el producto, diferenciándolo de otros del mismo modelo. Ejemplo: color, sabor o atributo especial. Retorna solo 1 opción.
            9. "material": Ahora quiero que escojas el material del producto más adecuado.
            10. "max_weight_supported": El peso máximo soportado por el producto, indicadondo las unidades de medidad.
            11. "box_spring_size": Escoge el tamaño general del producto, me refiero a un tamaño que pueda entender claro el cliente, como 2 plazas, o algún otro que pueda entender claro el usuario que corresponda al producto.
            12. "package_width": Estima el ancho del paquete en centímetros, recuerda devolver solo unidades numéricas(solo el número sin la unidad de medida).
            13. "package_length": Estima la longitud del paquete en centímetros, recuerda devolver solo unidades numéricas(solo el número sin la unidad de medida).
            14. "possible_searches": posibles búsquedas que pueda realizar el usuario separadas por comas, incluyendo posibles errores ortográficos (menor a 300 caracteres).
            15. "package_height": Estima la altura del paquete en centímetros, recuerda devolver solo unidades numéricas(solo el número sin la unidad de medida)(solo el número sin la unidad de medida).
            16. "length": Estima el largo del producto en centímetros, recuerda devolver solo unidades numéricas(solo el número sin la unidad de medida).
            17. "width": Estima el ancho del producto en centímetros, recuerda devolver solo unidades numéricas(solo el número sin la unidad de medida).

            IMPORTANTE: Responde ÚNICAMENTE con el JSON solicitado, SIN los delimitadores \`\`\`json ni ningún otro texto adicional.
            El JSON debe comenzar directamente con { y terminar con }.`
}

const beautyCategoriesFalabellaPrompt = async (productData) => {
        return `Necesito que selecciones la categoría más adecuada para este producto "${productData.Nombre}" y me devuelvas un solo formato JSON.
    Aquí tienes la información del producto:
            - Nombre: '${productData.Nombre}'
            - Descripción: '${productData["Descripción General"]}'
            - Categoría en la web: '${productData.Categorías}'

    Por favor devuelve un JSON con los siguientes campos:
      1. categoria_falabella: Escoge la categoría más adecuada para este producto y devuelve únicamente el código numérico de la categoría, las categorías disponibles son las sigueiente: 
         -'Productos para la piel >Cuidado de la piel >Accesorios para el cuidado de la piel' (1049)
         -'Productos para la piel >Cuidado de la piel >Bálsamo labial' (2662)
         -'Productos para la piel >Cuidado de la piel >Cuidado de la piel|después del afeitado' (644)
         -'Productos para la piel >Cuidado de la piel >Cuidado de la piel|hidratación de la piel' (2257)
         -'Productos para la piel >Cuidado de la piel >Exfoliantes|máscaras' (1451)
         -'Productos para la piel >Cuidado de la piel >Hidratantes after-sun' (3064)
         -'Productos para la piel >Cuidado de la piel >Limpiadores|desmaquilladores eléctricos' (137)
         -'Productos para la piel >Cuidado de la piel >Limpiadores|desmaquilladores no eléctricos' (1754)
         -'Productos para la piel >Cuidado de la piel >Otros productos para el cuidado de la piel' (948)
         -'Productos para la piel >Cuidado de la piel >Productos para secar la piel' (2561)
         -'Productos para la piel >Cuidado de la piel >Productos antimanchas eléctricos' (543)
         -'Productos para la piel >Cuidado de la piel >Productos antimanchas no eléctricos' (2157)
         -'Productos para la piel >Cuidado de la piel >Tónicos|astringentes' (1351)
         -'Productos para la piel >Cuidado de la piel >Vaporizadores para refrescar el cuerpo|la cara' (2964)
         -'Productos para la piel >Lavado corporal >Accesorios de limpieza|lavado personal' (1956)
         -'Productos para la piel >Lavado corporal >Aditivos de baño' (1150)
         -'Productos para la piel >Lavado corporal >Jabones para la limpieza|lavado del cuerpo' (2763)
         -'Productos para la piel >Lavado corporal >Otros productos de aseo corporal' (745)
         -'Productos para la piel >Lavado corporal >Toallitas húmedas para cuerpo' (2358)
         -'Productos para la piel >Productos de protección solar y bronceado para la piel >Bronceado artificial eléctrico' (3165)
         -'Productos para la piel >Productos de protección solar y bronceado para la piel >Bronceado artificial|uso oral no eléctrico' (88)
         -'Productos para la piel >Productos de protección solar y bronceado para la piel >Bronceado artificial|uso tópico no eléctrico' (1703)
         -'Productos para la piel >Productos de protección solar y bronceado para la piel >Otros productos para el bronceado para la piel' (897)
         -'Productos para la piel >Productos de protección solar y bronceado para la piel >Productos aceleradores del bronceado' (2510)
         -'Productos para la piel >Productos de protección solar y bronceado para la piel >Productos de protección solar' (492)
         -'Productos para la piel >Productos de protección solar y bronceado para la piel >Repuestos para productos de bronceado para la piel' (2106)
         -'Productos para el cabello >Productos para el cuidado del cabello >Cabello|acondicionadores|tratamientos' (770)
         -'Productos para el cabello >Productos para el cuidado del cabello >Cabello|champús' (3190)
         -'Productos de higiene personal >Higiene personal general >Antitranspirantes|desodorantes' (669)
         -'Productos de higiene personal >Higiene personal general >Otros productos de higiene personal general' (1476)
         -'Tratamientos|cuidados para la salud >Productos para el cuidado de la piel|cuero cabelludo >Productos antimicóticos' (2599)
         -'Tratamientos|cuidados para la salud >Productos para el cuidado de la piel|cuero cabelludo >Tratamientos contra el acné y rosácea' (581)
         -'Tratamientos|cuidados para la salud >Productos para el cuidado de la piel|cuero cabelludo >Tratamientos contra la caída del cabello' (2194)
         -'Tratamientos|cuidados para la salud >Productos para el cuidado de la piel|cuero cabelludo >Tratamientos multiusos|generales para el cuero cabelludo|piel' (3001)
         -'Tratamientos|cuidados para la salud >Productos para el cuidado de la piel|cuero cabelludo >Tratamientos para cuero cabelludo|piel seca|eczemas|soriasis' (1993)
         -'Cosméticos|fragancias >Productos cosméticos >Aclaradores de piel' (524)
         -'Cosméticos|fragancias >Productos cosméticos >Cosméticos|labios' (1332)
         -'Cosméticos|fragancias >Productos cosméticos >Cosméticos|ojos' (2945)
         -'Cosméticos|fragancias >Productos cosméticos >Cosméticos|rostro' (320)
         -'Cosméticos|fragancias >Cuidado de uñas >Productos para el cuidado de uñas' (3146)

         Solo responde con el JSON, sin comentarios adicionales.

            IMPORTANTE: Responde ÚNICAMENTE con el JSON solicitado, SIN los delimitadores \`\`\`json ni ningún otro texto adicional.
            El JSON debe comenzar directamente con { y terminar con }.
    `
}

const cosmeticosOjosFalabellaPrompt = async (productData) => {
        return `Necesito que generes varios datos para el producto "${productData.Nombre}" en un solo formato JSON.
            Aquí tienes la información del producto:
            - Nombre: '${productData.Nombre}'
            - Descripción: '${productData["Descripción General"]}'
            - Categoría en yuju: '${productData.Categorías}'
            
            Por favor devuelve un JSON con los siguientes campos:
            1. "skin_type": escoge únicamente la opción más adecuada entre '|Falabella|Grasa', '|Falabella|Mixta', '|Falabella|Normal', '|Falabella|Sensible', '|Falabella|Seca', '|Falabella|Todo tipo de piel'.
            2. "number_of_items_in_package": devuelve un valor numérico de la cantidad de artículos que viene en el paquete, si es un pack analiza la cantidad de productos que lo conforman.
            3. "custom_s4": Un texto personalizado del producto que sea súper corto pero que describa muy bien al producto.
            4. "make_up_type": Debes escoger la opción más adecuada entre '|Falabella|Corrector de ojeras', '|Falabella|Cuidado de pestañas y cejas', '|Falabella|Delineador de cejas', '|Falabella|Delineador de ojos', '|Falabella|Fijador de cejas', '|Falabella|Iluminador de ojos', '|Falabella|Lápiz de cejas', '|Falabella|Máscara de pestañas', '|Falabella|Pegamento de pestañas', '|Falabella|Primer para ojos', '|Falabella|Set de maquillaje de ojos', '|Falabella|Sombra de cejas', '|Falabella|Sombra de ojos'.
            5. "custom_s4": Escoge la opción más adecuada entre '|Falabella|Amarillo', '|Falabella|Azul', '|Falabella|Beige', '|Falabella|Blanco', '|Falabella|Burdeo', '|Falabella|Café', '|Falabella|Dorado', '|Falabella|Gris', '|Falabella|Morado', '|Falabella|Naranjo', '|Falabella|Negro', '|Falabella|Plateado', '|Falabella|Rojo', '|Falabella|Rosado', '|Falabella|Verde'.
            6. "model": Cuando tu marca está dividida en amplios segmentos, un producto puede estar individualizado en primera instancia para identificar a cual pertenece. Ésto lo hacen por modelos. Ejemplo 1: La marca es Seat, y el modelo es Ibiza, o León. Ejemplo 2:  La marca es Apple y el modelo es iPhone 6S.
            7. "manufacturer": Es el fabricante del producto, sino indica información del fabricante puedes poner 'Rivesi Home - Nacional'.
            8. "custom_s3": Escoge una opción más adecuada para el producto entre las opciones como '|Falabella|Amarillo', '|Falabella|Azul', '|Falabella|Beige', '|Falabella|Blanco', '|Falabella|Bronce', '|Falabella|Burdeo', '|Falabella|Café', '|Falabella|Cromo', '|Falabella|Dorado', '|Falabella|Dorado', '|Falabella|Gris', '|Falabella|Morado', '|Falabella|Naranjo', '|Falabella|Negro', '|Falabella|Plateado', '|Falabella|Rojo', '|Falabella|Rosado', '|Falabella|Verde'.
            9. "material": Ahora quiero que escojas el material del producto más adecuado entre las opciones como '|Falabella|Madera', '|Falabella|MDF', '|Falabella|MDP', '|Falabella|Melamina', '|Falabella|Metal', '|Falabella|Fierro', '|Falabella|Acero', '|Falabella|Aluminio', '|Falabella|Espuma', '|Falabella|Poliuretano', '|Falabella|Viscoelástica', '|Falabella|Resortes', '|Falabella|Látex', '|Falabella|Poliéster', '|Falabella|Algodón', '|Falabella|Polialgodón', '|Falabella|Microfibra', '|Falabella|Chenille', '|Falabella|Lona', '|Falabella|Tela', '|Falabella|Sintético', '|Falabella|Cuero sintético', '|Falabella|Terciopelo', '|Falabella|Algodón peruano', '|Falabella|Algodón pima', '|Falabella|Franela', '|Falabella|Lino', '|Falabella|Satén', '|Falabella|Fibra sintética', '|Falabella|Pluma sintética', '|Falabella|Espuma de polietileno', '|Falabella|Thermicfiber', '|Falabella|Thermoloe', '|Falabella|Yute', '|Falabella|MDF biselado tamburato', '|Falabella|Tela de punto', '|Falabella|MDP con melamina'.
            10. "short_features": Escoge la característica corta más adecuada para este producto, las opciones disponibles son '|Falabella|Altura regulable', '|Falabella|Antiadherente', '|Falabella|Antideslizante', '|Falabella|Apto para cocina de inducción', '|Falabella|Apto para horno', '|Falabella|Apto para lavavajillas', '|Falabella|Apto para microondas', '|Falabella|Apto para vajillas', '|Falabella|Carro metálico', '|Falabella|Con fondo difusor', '|Falabella|Control de temperatura', '|Falabella|Cuenta con independencia de lechos', '|Falabella|Cuenta con posición fija', '|Falabella|Cuenta con ruedas', '|Falabella|Duradero', '|Falabella|Elaborado de una sola pieza', '|Falabella|Espacio entre suelo y base', '|Falabella|Expandible', '|Falabella|Funda', '|Falabella|Funda desmontable', '|Falabella|Hipoalergénico', '|Falabella|Hoja completa', '|Falabella|Incluye cubierta', '|Falabella|Incluye sistema de vibromasaje', '|Falabella|Luz en el horno', '|Falabella|Luz indicador de encendido', '|Falabella|Método de trituración', '|Falabella|Nivelación de altura', '|Falabella|Patas desmontables', '|Falabella|Pillow top', '|Falabella|Plegable', '|Falabella|Posiciones del respaldo', '|Falabella|Requiere armado', '|Falabella|Resistencia al agua', '|Falabella|Respaldo reclinable', '|Falabella|Reversible', '|Falabella|Ruedas con freno', '|Falabella|Sistema de ventilación', '|Falabella|Termostato', '|Falabella|Timer'
            11. "tamano_cama_variant": Escoge una opción que sea más adecuada para el producto, aquí te paso las opciones 'Doble', 'Full', 'Infantil', 'King', 'Queen', 'Semidoble', 'Sencillo', 'Super king'.
            12. "package_width": Estima el ancho del paquete en centímetros, recuerda devolver solo unidades numéricas(solo el número sin la unidad de medida).
            13. "package_length": Estima la longitud del paquete en centímetros, recuerda devolver solo unidades numéricas(solo el número sin la unidad de medida).
            14. "possible_searches": posibles búsquedas que pueda realizar el usuario separadas por comas, incluyendo posibles errores ortográficos (menor a 300 caracteres).
            15. "package_height": Estima la altura del paquete en centímetros, recuerda devolver solo unidades numéricas(solo el número sin la unidad de medida)(solo el número sin la unidad de medida).
            16. "length": Estima el largo del producto en centímetros, recuerda devolver solo unidades numéricas(solo el número sin la unidad de medida).
            17. "width": Estima el ancho del producto en centímetros, recuerda devolver solo unidades numéricas(solo el número sin la unidad de medida).
            18. "weight": Peso aproximado del producto en kg (solo el número sin la unidad de medida)
            Solo responde con el JSON, sin comentarios adicionales.

            IMPORTANTE: Responde ÚNICAMENTE con el JSON solicitado, SIN los delimitadores \`\`\`json ni ningún otro texto adicional.
            El JSON debe comenzar directamente con { y terminar con }.`
}

const hidratacionDeLaPielFalabellaPrompt = async (productData) => {
        return `Necesito que generes varios datos para el producto "${productData.Nombre}" en un solo formato JSON.
            Aquí tienes la información del producto:
            - Nombre: '${productData.Nombre}'
            - Descripción: '${productData["Descripción General"]}'
            - Categoría en yuju: '${productData.Categorías}'
            
            Por favor devuelve un JSON con los siguientes campos:
            1. "skin_type": escoge únicamente la opción más adecuada entre '|Falabella|Grasa', '|Falabella|Mixta', '|Falabella|Normal', '|Falabella|Sensible', '|Falabella|Seca', '|Falabella|Todo tipo de piel'.
            2. "treatment_type": Escoge la opción más adecuada entre '|Falabella|Brazos', '|Falabella|Caderas', '|Falabella|Contorno de ojos', '|Falabella|Cuello', '|Falabella|Cuero cabelludo', '|Falabella|Cuerpo', '|Falabella|Espalda', '|Falabella|Gluteos', '|Falabella|Hombros', '|Falabella|Labios', '|Falabella|Manos', '|Falabella|Pecho', '|Falabella|Pestañas', '|Falabella|Piernas', '|Falabella|Pies', '|Falabella|Rodillas', '|Falabella|Rostro', '|Falabella|Uñas', '|Falabella|Zona íntima'.
            3. "number_of_items_in_package": devuelve un valor numérico de la cantidad de artículos que viene en el paquete, si es un pack analiza la cantidad de productos que lo conforman. 
            4. "dermatological": Escoge la opción más adecuada entre 'No', 'Sí'.
            5. "sun_protection_factor": Escoge el factor de protección solar más adecuado para este producto solo si consideras que aplica. Si no aplica déjalo vacío.
            6. "model_name": Escribe el modelo del producto, el que consideres más adecuado a base del nombre.
            7. "short_features": Escoge la característica corta más adecuada para este producto, las opciones disponibles son '|Falabella|Alivio del dolor', '|Falabella|Antiinflamatorio', '|Falabella|Antioxidante', '|Falabella|Antiséptico', '|Falabella|Blanqueador dental', '|Falabella|Brillo', '|Falabella|Cicatrizante', '|Falabella|Crecimiento', '|Falabella|Cuenta con cabezal giratorio', '|Falabella|Cuenta con diseño ergonómico', '|Falabella|Cuidado del cuero cabelludo', '|Falabella|Duradero', '|Falabella|Fijación', '|Falabella|Fortalecedor', '|Falabella|Humectante', '|Falabella|Libre de parabenos', '|Falabella|Ligero', '|Falabella|Luminosidad', '|Falabella|Natural', '|Falabella|Orgánico', '|Falabella|Perfumado', '|Falabella|Protección del calor', '|Falabella|Protección del color', '|Falabella|Refrescante', '|Falabella|Relajante muscular', '|Falabella|Sin perfumar', '|Falabella|Temporizador', '|Falabella|Ultrasónico', '|Falabella|Vegano', '|Falabella|Volumen'.
            8. "medicine_format": Escoge la opción más adecuada entre '|Falabella|Aceite', '|Falabella|Barra', '|Falabella|Bruma', '|Falabella|Comprimido', '|Falabella|Crema', '|Falabella|Cápsula', '|Falabella|Emulsión', '|Falabella|Espuma', '|Falabella|Gel', '|Falabella|Gotas', '|Falabella|Inhalador', '|Falabella|Jarabe', '|Falabella|Loción', '|Falabella|Líquido', '|Falabella|Parche', '|Falabella|Pastilla', '|Falabella|Polvo', '|Falabella|Pomada', '|Falabella|Solución', '|Falabella|Supositorio', '|Falabella|Sérum', '|Falabella|Sólido', '|Falabella|Toallita', '|Falabella|Óvulos'.
            9. "format": Escoge la opción más adecuada entre '|Falabella|Aerosol', '|Falabella|Ampolla', '|Falabella|Blister', '|Falabella|Botella', '|Falabella|Caja', '|Falabella|Cartucho', '|Falabella|Crayon', '|Falabella|Doypack', '|Falabella|Estuche', '|Falabella|Frasco', '|Falabella|Lata', '|Falabella|Lápiz', '|Falabella|Paquete', '|Falabella|Roll-on', '|Falabella|Sachet', '|Falabella|Set', '|Falabella|Sobre', '|Falabella|Spray', '|Falabella|Stick', '|Falabella|Tableta', '|Falabella|Tarro', '|Falabella|Tubo'.
            Solo responde con el JSON, sin comentarios adicionales.

            IMPORTANTE: Responde ÚNICAMENTE con el JSON solicitado, SIN los delimitadores \`\`\`json ni ningún otro texto adicional.
            El JSON debe comenzar directamente con { y terminar con }.`
}

const productosDeProteccionSolarFalabellaPrompt = async (productData) => {
        return `Necesito que generes varios datos para el producto "${productData.Nombre}" en un solo formato JSON.
            Aquí tienes la información del producto:
            - Nombre: '${productData.Nombre}'
            - Descripción: '${productData["Descripción General"]}'
            - Categoría en yuju: '${productData.Categorías}'
            
            Por favor devuelve un JSON con los siguientes campos:
            1. "skin_type": escoge únicamente la opción más adecuada entre '|Falabella|Grasa', '|Falabella|Mixta', '|Falabella|Normal', '|Falabella|Sensible', '|Falabella|Seca', '|Falabella|Todo tipo de piel'.
            2. "treatment_type": Escoge la opción más adecuada entre '|Falabella|Brazos', '|Falabella|Caderas', '|Falabella|Contorno de ojos', '|Falabella|Cuello', '|Falabella|Cuero cabelludo', '|Falabella|Cuerpo', '|Falabella|Espalda', '|Falabella|Gluteos', '|Falabella|Hombros', '|Falabella|Labios', '|Falabella|Manos', '|Falabella|Pecho', '|Falabella|Pestañas', '|Falabella|Piernas', '|Falabella|Pies', '|Falabella|Rodillas', '|Falabella|Rostro', '|Falabella|Uñas', '|Falabella|Zona íntima'.
            3. "number_of_items_in_package": devuelve un valor numérico de la cantidad de artículos que viene en el paquete, si es un pack analiza la cantidad de productos que lo conforman. 
            4. "dermatological": Escoge la opción más adecuada entre 'No', 'Sí'.
            5. "water_resistant": Escoge la opción más adecuada entre las siguientes 'IP48', 'IP58', 'IP68 (Protegido contra inmersión)', 'IPX0 (Sin protección especial)', 'IPX1 (Protegido contra el agua vertida: goteo)', 'IPX2 (Protegido contra el agua vertida: goteo, cua', 'IPX3 (Protegido contra el agua rociada: spray)', 'IPX4 (Protegido contra las salpicaduras de agua)', 'IPX5 (Protegido contra el agua en chorros a presió', 'IPX6 (Protegido contra chorros a alta presión)', 'IPX7 (Protegido contra los efectos de la inmersión', 'IPX8 (Protegido contra inmersión)', 'No'.
            6. "model_name": Escribe el modelo del producto, el que consideres más adecuado a base del nombre.
            7. "short_features": Escoge la característica corta más adecuada para este producto, las opciones disponibles son '|Falabella|Alivio del dolor', '|Falabella|Antiinflamatorio', '|Falabella|Antioxidante', '|Falabella|Antiséptico', '|Falabella|Blanqueador dental', '|Falabella|Brillo', '|Falabella|Cicatrizante', '|Falabella|Crecimiento', '|Falabella|Cuenta con cabezal giratorio', '|Falabella|Cuenta con diseño ergonómico', '|Falabella|Cuidado del cuero cabelludo', '|Falabella|Duradero', '|Falabella|Fijación', '|Falabella|Fortalecedor', '|Falabella|Humectante', '|Falabella|Libre de parabenos', '|Falabella|Ligero', '|Falabella|Luminosidad', '|Falabella|Natural', '|Falabella|Orgánico', '|Falabella|Perfumado', '|Falabella|Protección del calor', '|Falabella|Protección del color', '|Falabella|Refrescante', '|Falabella|Relajante muscular', '|Falabella|Sin perfumar', '|Falabella|Temporizador', '|Falabella|Ultrasónico', '|Falabella|Vegano', '|Falabella|Volumen'.
            8. "medicine_format": Escoge la opción más adecuada entre '|Falabella|Aceite', '|Falabella|Barra', '|Falabella|Bruma', '|Falabella|Comprimido', '|Falabella|Crema', '|Falabella|Cápsula', '|Falabella|Emulsión', '|Falabella|Espuma', '|Falabella|Gel', '|Falabella|Gotas', '|Falabella|Inhalador', '|Falabella|Jarabe', '|Falabella|Loción', '|Falabella|Líquido', '|Falabella|Parche', '|Falabella|Pastilla', '|Falabella|Polvo', '|Falabella|Pomada', '|Falabella|Solución', '|Falabella|Supositorio', '|Falabella|Sérum', '|Falabella|Sólido', '|Falabella|Toallita', '|Falabella|Óvulos'.
            9. "format": Escoge la opción más adecuada entre '|Falabella|Aerosol', '|Falabella|Ampolla', '|Falabella|Blister', '|Falabella|Botella', '|Falabella|Caja', '|Falabella|Cartucho', '|Falabella|Crayon', '|Falabella|Doypack', '|Falabella|Estuche', '|Falabella|Frasco', '|Falabella|Lata', '|Falabella|Lápiz', '|Falabella|Paquete', '|Falabella|Roll-on', '|Falabella|Sachet', '|Falabella|Set', '|Falabella|Sobre', '|Falabella|Spray', '|Falabella|Stick', '|Falabella|Tableta', '|Falabella|Tarro', '|Falabella|Tubo'.
            Solo responde con el JSON, sin comentarios adicionales.

            IMPORTANTE: Responde ÚNICAMENTE con el JSON solicitado, SIN los delimitadores \`\`\`json ni ningún otro texto adicional.
            El JSON debe comenzar directamente con { y terminar con }.`
}

const creatingPacks2ProductsPrompt = async (productData) => {
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

const allCategoriesFalabellaAMMAPrompt = async (productData) => {
        return `Necesito que generes varios datos para el producto "${productData.Nombre}" en un solo formato JSON.
            Aquí tienes la información del producto:
            - Nombre: '${productData.Nombre}'
            - Descripción: '${productData["Descripción General"]}'
            - Categoría en yuju: '${productData.Categorías}'

            INSTRUCCIONES GENERALES:
            - Devuelve únicamente un JSON que empiece con { y termine con }.
            - No incluyas comentarios, explicaciones ni bloques \`\`\`json.
            - Siempre escoge la opción más adecuada basándote en el nombre, descripción y categoría.
            
            Por favor devuelve un JSON con los siguientes campos:
            1. "skin_type": escoge únicamente la opción más adecuada entre '|Falabella|Grasa', '|Falabella|Mixta', '|Falabella|Normal', '|Falabella|Sensible', '|Falabella|Seca', '|Falabella|Todo tipo de piel'.
            2. "treatment_type": Escoge la opción más adecuada entre '|Falabella|Brazos', '|Falabella|Caderas', '|Falabella|Contorno de ojos', '|Falabella|Cuello', '|Falabella|Cuero cabelludo', '|Falabella|Cuerpo', '|Falabella|Espalda', '|Falabella|Gluteos', '|Falabella|Hombros', '|Falabella|Labios', '|Falabella|Manos', '|Falabella|Pecho', '|Falabella|Pestañas', '|Falabella|Piernas', '|Falabella|Pies', '|Falabella|Rodillas', '|Falabella|Rostro', '|Falabella|Uñas', '|Falabella|Zona íntima'.
            3. "number_of_items_in_package": devuelve un valor numérico de la cantidad de artículos que viene en el paquete, si es un pack analiza la cantidad de productos que lo conforman.
            4. "custom_s4": Selecciona una opción de las siguientes disponibles '|Falabella|Beige', '|Falabella|Blanco', '|Falabella|Burdeo', '|Falabella|Café', '|Falabella|Dorado', '|Falabella|Naranja', '|Falabella|Plateado', '|Falabella|Rojo', '|Falabella|Rosado', '|Falabella|Terracota'.
            5. "make_up_type": Debes escoger la opción más adecuada entre '|Falabella|Corrector de ojeras', '|Falabella|Cuidado de pestañas y cejas', '|Falabella|Delineador de cejas', '|Falabella|Delineador de ojos', '|Falabella|Fijador de cejas', '|Falabella|Iluminador de ojos', '|Falabella|Lápiz de cejas', '|Falabella|Máscara de pestañas', '|Falabella|Pegamento de pestañas', '|Falabella|Primer para ojos', '|Falabella|Set de maquillaje de ojos', '|Falabella|Sombra de cejas', '|Falabella|Sombra de ojos'.
            6. "cantidad_neta_variant": Escoge la opción más adecuada para este producto de entre las siguientes opciones '1 L', '1.2 L', '1.5 L', '100 ml', '120 ml', '150 ml', '180 ml', '2 L', '200 ml', '250 ml', '3 L', '30 ml', '300 ml', '350 ml', '400 ml', '50 ml', '500 ml', '60 ml', '75 ml', '750 ml'.
            7. "custom_s3": Escoge la opción más adecuada entre '|Falabella|Amarillo', '|Falabella|Azul', '|Falabella|Beige', '|Falabella|Blanco', '|Falabella|Burdeo', '|Falabella|Café', '|Falabella|Dorado', '|Falabella|Gris', '|Falabella|Morado', '|Falabella|Naranja', '|Falabella|Negro', '|Falabella|Plateado', '|Falabella|Rojo', '|Falabella|Rosado', '|Falabella|Verde'.
            8. "hair_treatment_type": Escoge la opción más adecuada entre '|Falabella|Aceites capilares', '|Falabella|Acondicionadores', '|Falabella|Cremas de masaje capilar', '|Falabella|Cremas para peinar', '|Falabella|Mascarillas capilares', '|Falabella|Nutrición', '|Falabella|Protector de calor', '|Falabella|Reparación', '|Falabella|Sérums', '|Falabella|Tónicos'.
            9. "model_name": Cuando tu marca está dividida en amplios segmentos, un producto puede estar individualizado en primera instancia para identificar a cual pertenece. Ésto lo hacen por modelos. Ejemplo 1: La marca es Seat, y el modelo es Ibiza, o León. Ejemplo 2:  La marca es Apple y el modelo es iPhone 6S.
            10. "package_content": Describe el contenido del paquete de forma clara y concisa en muy pocas palabras.
            11. "production_country": Indica el país de producción del producto, si no especifica déjalo en blanco ''.
            12. "short_features": Escoge la característica corta más adecuada para este producto, las opciones disponibles son '|Falabella|Alivio del dolor', '|Falabella|Antiinflamatorio', '|Falabella|Antioxidante', '|Falabella|Antiséptico', '|Falabella|Blanqueador dental', '|Falabella|Brillo', '|Falabella|Cicatrizante', '|Falabella|Crecimiento', '|Falabella|Cuenta con cabezal giratorio', '|Falabella|Cuenta con diseño ergonómico', '|Falabella|Cuidado del cuero cabelludo', '|Falabella|Duradero', '|Falabella|Fijación', '|Falabella|Fortalecedor', '|Falabella|Humectante', '|Falabella|Libre de parabenos', '|Falabella|Ligero', '|Falabella|Luminosidad', '|Falabella|Natural', '|Falabella|Orgánico', '|Falabella|Perfumado', '|Falabella|Protección del calor', '|Falabella|Protección del color', '|Falabella|Refrescante', '|Falabella|Relajante muscular', '|Falabella|Sin perfumar', '|Falabella|Temporizador', '|Falabella|Ultrasónico', '|Falabella|Vegano', '|Falabella|Volumen'.
            13. "medicine_format": Escoge la opción más adecuada entre '|Falabella|Aceite', '|Falabella|Barra', '|Falabella|Bruma', '|Falabella|Comprimido', '|Falabella|Crema', '|Falabella|Cápsula', '|Falabella|Emulsión', '|Falabella|Espuma', '|Falabella|Gel', '|Falabella|Gotas', '|Falabella|Inhalador', '|Falabella|Jarabe', '|Falabella|Loción', '|Falabella|Líquido', '|Falabella|Parche', '|Falabella|Pastilla', '|Falabella|Polvo', '|Falabella|Pomada', '|Falabella|Solución', '|Falabella|Supositorio', '|Falabella|Sérum', '|Falabella|Sólido', '|Falabella|Toallita', '|Falabella|Óvulos'.
            14. "format": Escoge la opción más adecuada entre '|Falabella|Aerosol', '|Falabella|Ampolla', '|Falabella|Blister', '|Falabella|Botella', '|Falabella|Caja', '|Falabella|Cartucho', '|Falabella|Crayon', '|Falabella|Doypack', '|Falabella|Estuche', '|Falabella|Frasco', '|Falabella|Lata', '|Falabella|Lápiz', '|Falabella|Paquete', '|Falabella|Roll-on', '|Falabella|Sachet', '|Falabella|Set', '|Falabella|Sobre', '|Falabella|Spray', '|Falabella|Stick', '|Falabella|Tableta', '|Falabella|Tarro', '|Falabella|Tubo'.
            15. "storage_recommendations": Proporciona recomendaciones claras y concisas sobre cómo almacenar el producto para mantener su calidad y eficacia. 
            16. "publico_recomendado": Escoge la opción más adecuada entre 'Adultos', 'Infantil', 'Todas las edades'.
            
            Solo responde con el JSON, sin comentarios adicionales.

            IMPORTANTE: Responde ÚNICAMENTE con el JSON solicitado, SIN los delimitadores \`\`\`json ni ningún otro texto adicional.
            El JSON debe comenzar directamente con { y terminar con }.`
}

const baseusPowerbandPrompt = async (productData) => {
        return `Actúa como un asistente experto en procesamiento de datos y catalogación de productos.

Tu tarea es extraer información de un texto de producto y estructurarla en un objeto JSON estricto orientado, en español y teniendo en cuenta que es para un mercado hispanohablante latinoamericano.

Reglas de Llenado por Campo:
- Formato General: Si un dato no aparece, usa 'null'. No inventes información.
- Unidades: Estandariza todas las medidas de peso a "kg" y dimensiones a "cm" si es posible.
- Booleanos: Para campos de sí/no (como 'baterias_incluidas'), usa 'true' o 'false'.

Definiciones Específicas:
1.  nombre: El nombre del producto debería decir exactamente lo que es el producto sin ambigüedad en Español. Usa una oración clara y directa. Puedes añadir adjetivos para describir el producto. El nombre debe ser el mismo para todas las variaciones del mismo producto. Ejemplo: Colchón Spring Air Advantage..
2.  descripcion: Describe el producto de una manera muy detallada y clara. Puedes incluir en la descripción los siguientes temas: Nombre del producto, Descripción de las características del producto (modelo, tamaño, color, …), Proceso de fabricación (con qué es hecho el producto, …), Ventajas por comprar este producto, Empezar y/o terminar la descripción con una frase de llamativa. Te recomendamos un mínimo de 100 caracteres para motivar al usuario de comprar el producto y que el usuario entienda bien lo que es. Poner espacio entre cada concepto..
3.  anchura/altura/largo_del_paquete: Se refiere al anchura/altura/largo de la caja en la que se enviará el producto. Ingresar el valor sin coma y añadir un punto de separación sólo si hay decimales. Sin unidad de medida. Ejemplo: 26. La anchura/altura/largo del paquete de envío debe ser el mismo para todas las variaciones del mismo producto.
4.  peso_del_paquete/producto: Es importante añadir un peso a los productos. Poner el valor sin coma y añadir un punto de separación sólo si hay decimales. Sin unidad de peso. Ejemplo 1: Si un producto pesa 3 kilos: 3. Ejemplo 2: Si un producto pesa 750 gramos: 0.750. El peso debe ser el mismo para todas las variaciones del producto.
5.  contenido_neto: Cantidad específica (ej: "100 ml", "500 g").
6.  etiquetas: Una lista de palabras clave separadas por comas.
7.  compatibilidad: Lista de dispositivos compatibles (ej: "iPhone 13, Samsung S21").
8.  baterias_incluidas: Solo escoge entre (Sí/No).
9.  garantia_del_producto: Tiempo en meses (ej: "12 meses").
10. modelo: Cuando tu marca está dividida en amplios segmentos, un producto puede estar individualizado en primera instancia para identificar a cual pertenece. Ésto lo hacen por modelos. Ejemplo 1: La marca es Seat, y el modelo es Ibiza, o León. Ejemplo 2:  La marca es Apple y el modelo es iPhone 6S.
11. color: Escoge la opción más adecuada entre 'Agua', 'Amarillo', 'Azul', 'Azul acero', 'Azul cielo', 'Azul marino', 'Azul oscuro', 'Azul petróleo', 'Beige', 'Blanco', 'Café', 'Celeste', 'Crema', 'Dorado', 'Esmeralda', 'Fucsia', 'Fucsia oscuro', 'Gris', 'Lavanda', 'Lila', 'Naranja', 'Negro', 'Ocre', 'Piel', 'Plateado', 'Purpura', 'Rojo', 'Rosa', 'Salmón', 'Terracota', 'Verde', 'Verde claro', 'Verde oscuro', 'Vino', 'Violeta', 'Violeta oscuro', 'Multicolor', 'Caqui', 'Chocolate', 'Coral', 'Coral claro', 'Cyan', 'Dorado oscuro', 'Gris oscuro', 'Marrón', 'Marrón claro', 'Naranja claro', 'Naranja oscuro', 'Rosa claro', 'Suela', 'Turquesa', 'Verde lima'.
12. nombre_de_color: Puedes agregar un color de forma libre.
13. material: Es el material con el que está hecho el producto.
14. largo_del_producto: Unidades permitidas: cm, ft, km, m. Ejemplo: 2 m
15. terminos_de_busqueda: Posibles términos de búsqueda separadas por comas.

Estructura de Salida (JSON):
Devuelve ÚNICAMENTE este JSON completado:

{
  "nombre": "",
  "descripcion": "",
  "anchura_del_paquete_de_envio": "",
  "altura_del_paquete_de_envio": "",
  "largo_del_paquete_de_envio": "",
  "peso_del_paquete": "",
  "genero": "",
  "peso_del_producto": "",
  "garantia_del_producto": "",
  "modelo": "",
  "contenido_del_paquete": "",
  "nombre_general_del_producto": "",
  "contenido_neto": "",
  "color": "",
  "nombre_de_color": "",
  "anchura_del_producto": "",
  "altura_del_producto": "",
  "largo_del_producto": "",
  "material": "",
  "etiquetas": "",
  "volumen": "",
  "estilo": "",
  "capacidad": "",
  "caracteristicas": "",
  "terminos_de_busqueda": "",
  "compatibilidad": "",
  "cantidad_de_piezas": "",
  "requiere_ensamblado": "",
  "potencia": "",
  "titulo_seo": "",
  "fabricante": "",
  "descripcion_seo": "",
  "baterias_incluidas": null,
  "baterias_requeridas": null,
  "tipo_de_bateria": "",
  "largo_del_cable": "",
  "puertos_hdmi": 0,
  "puertos_vga": 0,
  "capacidad_de_la_bateria": "",
  "puertos_de_red": 0,
  "resolucion_de_camara_delantera": "",
  "voltaje": "",
  "megapixeles": "",
  "puertos_usb": 0
}
Aquí tienes la información del producto:
        - Nombre: '${productData.Nombre}'
        - Descripción: '${productData["Descripción General"]}'
        - Categoría en yuju: '${productData.Categorías}'`
}

const bundlesCreationCelularesPrompt = async (productData) => {
        return `Actúa como un asistente experto en procesamiento de datos y catalogación de productos.

Tu tarea es extraer información de un texto de bundle y estructurarla en un objeto JSON estricto orientado, en español y teniendo en cuenta que es para un mercado hispanohablante latinoamericano.

Reglas de Llenado por Campo:
- Formato General: Si consideras que una publicación no debe llevar un dato que solicita, usa 'null'. No inventes información que no sea necesaria.
- Unidades: Estandariza todas las medidas de peso a "kg" y dimensiones a "cm" si es posible.
- Booleanos: Para campos de sí/no (como 'baterias_incluidas'), usa 'true' o 'false'.

Definiciones Específicas:
1.  nombre: El nombre del producto debería decir exactamente lo que es el producto sin ambigüedad en Español. Usa una oración clara y directa. Puedes añadir adjetivos para describir el producto. El nombre debe ser el mismo para todas las variaciones del mismo producto. Ejemplo: Colchón Spring Air Advantage..
2.  descripcion: Describe el producto de una manera muy detallada y clara. Puedes incluir en la descripción los siguientes temas: Nombre del producto, Descripción de las características del producto (modelo, tamaño, color, …), Proceso de fabricación (con qué es hecho el producto, …), Ventajas por comprar este producto, Empezar y/o terminar la descripción con una frase de llamativa. Te recomendamos un mínimo de 100 caracteres para motivar al usuario de comprar el producto y que el usuario entienda bien lo que es. Poner espacio entre cada concepto..
3.  anchura/altura/largo_del_paquete: Se refiere al anchura/altura/largo de la caja en la que se enviará el producto. Ingresar el valor sin coma y añadir un punto de separación sólo si hay decimales. Sin unidad de medida. Ejemplo: 26. La anchura/altura/largo del paquete de envío debe ser el mismo para todas las variaciones del mismo producto.
4.  peso_del_paquete/producto: Es importante añadir un peso a los productos. Poner el valor sin coma y añadir un punto de separación sólo si hay decimales. Sin unidad de peso. Ejemplo 1: Si un producto pesa 3 kilos: 3. Ejemplo 2: Si un producto pesa 750 gramos: 0.750. El peso debe ser el mismo para todas las variaciones del producto.
5.  contenido_neto: Cantidad específica (ej: "100 ml", "500 g").
6.  etiquetas: Una lista de palabras clave separadas por comas.
7.  compatibilidad: Lista de dispositivos compatibles (ej: "iPhone 13, Samsung S21").
8.  baterias_incluidas: Solo escoge entre (Sí/No).
9.  garantia_del_producto: Tiempo en meses (ej: "12 meses").
10. modelo: Cuando tu marca está dividida en amplios segmentos, un producto puede estar individualizado en primera instancia para identificar a cual pertenece. Ésto lo hacen por modelos. Ejemplo 1: La marca es Seat, y el modelo es Ibiza, o León. Ejemplo 2:  La marca es Apple y el modelo es iPhone 6S.
11. color: Escoge la opción más adecuada entre 'Agua', 'Amarillo', 'Azul', 'Azul acero', 'Azul cielo', 'Azul marino', 'Azul oscuro', 'Azul petróleo', 'Beige', 'Blanco', 'Café', 'Celeste', 'Crema', 'Dorado', 'Esmeralda', 'Fucsia', 'Fucsia oscuro', 'Gris', 'Lavanda', 'Lila', 'Naranja', 'Negro', 'Ocre', 'Piel', 'Plateado', 'Purpura', 'Rojo', 'Rosa', 'Salmón', 'Terracota', 'Verde', 'Verde claro', 'Verde oscuro', 'Vino', 'Violeta', 'Violeta oscuro', 'Multicolor', 'Caqui', 'Chocolate', 'Coral', 'Coral claro', 'Cyan', 'Dorado oscuro', 'Gris oscuro', 'Marrón', 'Marrón claro', 'Naranja claro', 'Naranja oscuro', 'Rosa claro', 'Suela', 'Turquesa', 'Verde lima'.
12. nombre_de_color: Puedes agregar un color de forma libre.
13. material: Es el material con el que está hecho el producto.
14. largo_del_producto: Unidades permitidas: cm, ft, km, m. Ejemplo: 2 m
15. terminos_de_busqueda: Posibles términos de búsqueda separadas por comas.
16. caracteristicas: Una lista de características principales del pack separadas por comas pero en un solo texto.
17. tamaño de pantalla: la medida más exacta posible en pulgadas. Incluye el símbolo de pulgadas.
18. Largo del cable: Unidades permitidas: cm, ft, km, m. Ejemplo: 2 m
19. peso_del_paquete: es un valor requerido, por lo que te pido que lo completes con un valor aproximado o preciso si te indica en la información dada, en kg (solo el número sin la unidad de medida).
Estructura de Salida (JSON):
Devuelve ÚNICAMENTE este JSON completado:

{
  "nombre": "",
  "descripcion": "",
  "anchura_del_paquete_de_envio": "",
  "altura_del_paquete_de_envio": "",
  "largo_del_paquete_de_envio": "",
  "peso_del_paquete": "",
  "genero": "",
  "peso_del_producto": "",
  "garantia_del_producto": "",
  "modelo": "",
  "contenido_del_paquete": "",
  "nombre_general_del_producto": "",
  "contenido_neto": "",
  "color": "",
  "nombre_de_color": "",
  "anchura_del_producto": "",
  "altura_del_producto": "",
  "largo_del_producto": "",
  "material": "",
  "etiquetas": "",
  "volumen": "",
  "capacidad": "",
  "caracteristicas": "",
  "terminos_de_busqueda": "",
  "compatibilidad": "",
  "cantidad_de_piezas": "",
  "requiere_ensamblado": "",
  "potencia": "",
  "titulo_seo": "",
  "fabricante": "",
  "descripcion_seo": "",
  "baterias_incluidas": null,
  "tipo_de_bateria": "",
  "tamaño_de_pantalla": "";
  "largo_del_cable": "",
  "proveedor_de_telefonía":"",
  "puertos_hdmi": 0,
  "puertos_vga": 0,
  "capacidad_de_la_bateria": "",
  "puertos_de_red": 0,
  "voltaje": "",
  "resolucion_de_camara_delantera": "",
  "voltaje": "",
  "megapixeles": "",
  "puertos_usb": 0,
  "sistema_operativo":""
}
Aquí tienes la información del pack:
        - Nombre referente del pack: '${productData.Nombre}'
        - Descripción de los productos: '${productData["Descripción General"]}'
        - Categoría en yuju: '${productData.Categorías}'`
}

const motosCreationPrompt = async (productData) => {
        return `Actúa como un asistente experto en procesamiento de datos y catalogación de productos.

Tu tarea es extraer información de un texto de bundle y estructurarla en un objeto JSON estricto orientado, en español y teniendo en cuenta que es para un mercado hispanohablante latinoamericano.

Reglas de Llenado por Campo:
- Formato General: Si consideras que una publicación no debe llevar un dato que solicita, usa 'null'. No inventes información que no sea necesaria.
- Unidades: Estandariza todas las medidas de peso a "kg" y dimensiones a "cm" si es posible.
- Booleanos: Para campos de sí/no (como 'baterias_incluidas'), usa 'true' o 'false'.

Definiciones Específicas:
1.  nombre: El nombre del producto debería decir exactamente lo que es el producto sin ambigüedad en Español. Usa una oración clara y directa. Puedes añadir adjetivos para describir el producto. El nombre debe ser el mismo para todas las variaciones del mismo producto. Ejemplo: Colchón Spring Air Advantage..
2.  descripcion: Describe el producto de una manera muy detallada y clara. Puedes incluir en la descripción los siguientes temas: Nombre del producto, Descripción de las características del producto (modelo, tamaño, color, …), Proceso de fabricación (con qué es hecho el producto, …), Ventajas por comprar este producto, Empezar y/o terminar la descripción con una frase de llamativa. Te recomendamos un mínimo de 100 caracteres para motivar al usuario de comprar el producto y que el usuario entienda bien lo que es. Poner espacio entre cada concepto..
3.  anchura/altura/largo_del_paquete: Se refiere al anchura/altura/largo de la caja en la que se enviará el producto. Ingresar el valor sin coma y añadir un punto de separación sólo si hay decimales. Sin unidad de medida. Ejemplo: 26. La anchura/altura/largo del paquete de envío debe ser el mismo para todas las variaciones del mismo producto.
4.  peso_del_paquete/producto: Es importante añadir un peso a los productos. Poner el valor sin coma y añadir un punto de separación sólo si hay decimales. Sin unidad de peso. Ejemplo 1: Si un producto pesa 3 kilos: 3. Ejemplo 2: Si un producto pesa 750 gramos: 0.750. El peso debe ser el mismo para todas las variaciones del producto.
5.  contenido_neto: Cantidad específica (ej: "100 ml", "500 g").
6.  etiquetas: Una lista de palabras clave separadas por comas.
7.  compatibilidad: Lista de dispositivos compatibles (ej: "iPhone 13, Samsung S21").
8.  baterias_incluidas: Solo escoge entre (Sí/No).
9.  garantia_del_producto: Tiempo en meses (ej: "12 meses").
10. modelo: Cuando tu marca está dividida en amplios segmentos, un producto puede estar individualizado en primera instancia para identificar a cual pertenece. Ésto lo hacen por modelos. Ejemplo 1: La marca es Seat, y el modelo es Ibiza, o León. Ejemplo 2:  La marca es Apple y el modelo es iPhone 6S.
11. color: Escoge la opción más adecuada entre 'Agua', 'Amarillo', 'Azul', 'Azul acero', 'Azul cielo', 'Azul marino', 'Azul oscuro', 'Azul petróleo', 'Beige', 'Blanco', 'Café', 'Celeste', 'Crema', 'Dorado', 'Esmeralda', 'Fucsia', 'Fucsia oscuro', 'Gris', 'Lavanda', 'Lila', 'Naranja', 'Negro', 'Ocre', 'Piel', 'Plateado', 'Purpura', 'Rojo', 'Rosa', 'Salmón', 'Terracota', 'Verde', 'Verde claro', 'Verde oscuro', 'Vino', 'Violeta', 'Violeta oscuro', 'Multicolor', 'Caqui', 'Chocolate', 'Coral', 'Coral claro', 'Cyan', 'Dorado oscuro', 'Gris oscuro', 'Marrón', 'Marrón claro', 'Naranja claro', 'Naranja oscuro', 'Rosa claro', 'Suela', 'Turquesa', 'Verde lima'.
12. nombre_de_color: Puedes agregar un color de forma libre.
13. material: Es el material con el que está hecho el producto.
14. largo_del_producto: Unidades permitidas: cm, ft, km, m. Ejemplo: 2 m
15. terminos_de_busqueda: Posibles términos de búsqueda separadas por comas.
16. caracteristicas: Una lista de características principales del pack separadas por comas pero en un solo texto.
17. Volumen: el volumen del motor en centímetros cúbicos (cc).
18. Rodado: El tamaño de las ruedas de la moto en pulgadas.
19. peso_del_paquete: es un valor requerido, por lo que te pido que lo completes con un valor aproximado o preciso si te indica en la información dada, en kg (solo el número sin la unidad de medida).
Estructura de Salida (JSON):
Devuelve ÚNICAMENTE este JSON completado:

{
  "nombre": "",
  "descripcion": "",
  "anchura_del_paquete_de_envio": "",
  "altura_del_paquete_de_envio": "",
  "largo_del_paquete_de_envio": "",
  "peso_del_paquete": "",
  "peso_del_producto": "",
  "garantia_del_producto": "",
  "modelo": "",
  "contenido_del_paquete": "",
  "nombre_general_del_producto": "",
  "Rodado":"",
  "contenido_neto": "",
  "color": "",
  "nombre_de_color": "",
  "anchura_del_producto": "",
  "altura_del_producto": "",
  "largo_del_producto": "",
  "material": "",
  "etiquetas": "",
  "volumen": "",
  "capacidad": "",
  "caracteristicas": "",
  "terminos_de_busqueda": "",
  "compatibilidad": "",
  "cantidad_de_piezas": "",
  "requiere_ensamblado": "",
  "potencia": "",
  "titulo_seo": "",
  "fabricante": "",
  "descripcion_seo": "",
  "baterias_incluidas": null,
  "tipo_de_bateria": "",
  "capacidad_de_la_bateria": "",
  "voltaje": "",
  "voltaje": "",
}
Aquí tienes la información del pack:
        - Nombre referente del pack: '${productData.Nombre}'
        - Descripción de los productos: '${productData["Descripción General"]}'
        - Categoría en yuju: '${productData.Categorías}'`
}

const bundlesCreationSkinProductsAMMAPrompt = async (productData) => {
        return `Actúa como un asistente experto en procesamiento de datos y catalogación de productos para e-commerce y marketplaces.
Tu tarea es extraer información de un texto de entrada y estructurarla en un objeto JSON estricto, en español y optimizado para un mercado hispanohablante latinoamericano.

Reglas de Llenado por Campo:
- Formato General: Si la información no está disponible o no aplica, usa 'null'. No inventes información.
- Unidades Numéricas: Devuelve solo el número (integer o float) sin símbolos de unidad en los campos de medidas.
- Estandarización: Peso en "kg", Dimensiones en "cm", Volumen en "mL".

Definiciones Específicas para la extracción:

1. descripcion: Describe el producto de una manera muy detallada y clara. Debes incluir: Nombre del producto, características (modelo, tamaño, color), proceso de fabricación o materiales, y ventajas de compra. Empieza y/o termina con una frase llamativa de venta. Mínimo 100 caracteres. Pon espacio entre cada concepto.
2. marca: La marca oficial del producto.
3. peso_del_paquete: Un estimado del peso total del bulto de envío en kg. Solo el número (ej: 0.5).
4. genero: Escoge estrictamente entre: 'Bebés', 'Bebés niño', 'Niña', 'Niño', 'Masculino', 'Femenino', 'Unisex'. Si no aplica, usa 'Unisex' o null.
5. modelo: El código o nombre del modelo específico (suele estar en el nombre).
6. contenido_del_paquete: Lista detallada de qué incluye la caja.
7. nombre_general_del_producto: Cómo se conoce comúnmente al producto (ej: "Crema hidratante", "Zapatillas deportivas").
8. contenido_neto: Cantidad específica declarada (ej: "500 g", "10 pzas").
9. nombre_de_color: El nombre del color tal cual lo define la marca (ej: "Rojo Fuego", "Azul Medianoche").
10. anchura/altura/largo_del_producto: Estimado de las dimensiones del producto físico (fuera de la caja) en cm. Solo números.
11. etiquetas: Lista de palabras clave relevantes separadas por comas.
12. volumen: Estimado del volumen en mL (solo número). Útil para líquidos.
13. caracteristicas: Lista de las principales características técnicas o funcionales, separadas por comas.
14. terminos_de_busqueda: Palabras que usaría un cliente para buscar este producto, separadas por comas.
15. color: Clasifica el tono en una de estas opciones estándar: 'Agua', 'Amarillo', 'Azul', 'Beige', 'Blanco', 'Café', 'Celeste', 'Crema', 'Dorado', 'Fucsia', 'Gris', 'Lila', 'Naranja', 'Negro', 'Plateado', 'Rojo', 'Rosa', 'Transparente', 'Verde', 'Violeta', 'Multicolor'. Si no tiene color, usa null.
16. peso_del_producto: Estimado del peso del artículo en sí (sin embalaje) en kg. Solo el número.
17. titulo_seo: Un título optimizado para buscadores (Producto + Marca + Modelo + Característica clave). Máximo 60 caracteres.
18. composicion: Ingredientes o materiales del producto con una breve explicación de su uso o beneficio.
19. fabricante: Nombre de la empresa fabricante (solo si se menciona explícitamente).
20. descripcion_seo: Meta descripción para posicionamiento. Resumen atractivo de 150-160 caracteres.
21. aroma: Indica el aroma o fragancia solo si se especifica en la descripción.
22. categorias: Selecciona 3 categorías y sepáralas en comas en un solo texto donde la primera debe ser la más relevante, las categorías disponibles son las siguientes 'Accesorios UV', 'Ampollas', 'Anti Acné', 'Antiarrugas', 'Anticaída', 'Anticaspa', 'Antiedad', 'Antiinﬂamatorias', 'Antimanchas', 'Antiojeras', 'Antipigmento', 'Bebé', 'Cabello Debilitado', 'Calmante', 'Capilar', 'Cicatrizante', 'Corporal', 'Corrector', 'Cuello', 'Cuero cabelludo sensible', 'Exfoliante', 'Facial', 'Hidratante', 'Humectantes', 'Labios', 'Limpiadores', 'Manos', 'Micelar', 'Niños', 'Ojos', 'Orgánico', 'Pestañas y Cejas', 'Piel acneica', 'Piel Atópica', 'Piel grasa', 'Piel mixta', 'Piel seca', 'Roll on', 'SolaresHacer principal', 'Tratamiento'.
23. modo_de_uso: Aquí quiero que detalles en un solo texto el modo de uso del producto que se le haga fácil de entender al cliente paso a paso y enuméralo.
24. tipo_de_piel: Solo quiero que devuelvas un tipo de piel en el que recomiendas, de acuerdo a la información del producto, aplicar el producto (ejemplo de tipo de piel: 'Todo tipo de piel', 'Piel Seca', 'Piel grasa', 'Piel Sensible', 'Piel Mixta', 'Piel Normal', 'Piel Acneica', 'Piel Madura', 'Piel Normal a Seca', 'Piel Normal a Grasa', 'Piel Normal a Mixta', 'Piel Normal a Sensible').
25. principales_ingredientes: Una lista separada en comas en un solo texto donde indiques los principales ingredientes y la función que tiene en el producto que sea fácil de entender y leer para el usuario.
26. categoria_meli: Escoge una categoría en la que mejor encaje el producto según la información dada, entre las siguientes opciones: 'Cremas, Pomadas y Aceites', 'Higiene y Cuidado del Bebé > Shampoos y Acondicionadores', 'Bálsamos Labiales', 'Cuidado Corporal', 'Cuidado Facial', 'Kit de Cuidado de la Piel', 'Desmaquillantes', 'Bronceadores', 'Shampoos y Acondicionadores', 'Desodorantes', 'Jabones > Líquido', 'Tratamientos para Manos y Pies > Cremas', 'Máscaras de Pestañas', 'Ojos, Pestañas y Cejas > Tratamientos', 'Iluminadores y Rubores', 'Otros Productos', 'Voluminizadores de Labios > Bálsamos y Geles'.
27. categoria_ripley: Escoge una categoría en la que mejor encaje el producto según la información dada, entre las siguientes opciones: 'BAÑO Y SPA > EXFOLIANTE', 'BAÑO Y SPA > GEL DE DUCHA', 'BAÑO Y SPA > JABONES Y CREMAS', 'SHAMPOO Y ACONDICIONADORES', 'MAQUILLAJE > LABIOS', 'MAQUILLAJE > OJOS Y CEJAS', 'MAQUILLAJE > ROSTRO > BB CREAMS', 'TRATAMIENTOS Y DERMOCOSMETICA > ACCESORIOS', 'BRONCEADORES', 'TRATAMIENTOS Y DERMOCOSMETICA > DERMOCOSMETICA', 'TRATAMIENTOS Y DERMOCOSMETICA > LIMPIEZA', 'MASCARILLAS FACIALES', 'PROTECTORES SOLARES', 'REDUCTORES Y REAFIRMANTES', 'SETS DE TRATAMIENTO', 'TRATAMIENTOS Y DERMOCOSMETICA'.
28. categoria_falabella: Escoge una categoría en la que mejor encaje el producto según la información dada, entre las siguientes opciones: 'Cosméticos|ojos', 'Cosméticos|rostro', 'Cabello|acondicionadores|tratamientos', 'Cabello|champús', 'Bálsamo labial', 'Cuidado de la piel|hidratación de la piel', 'Exfoliantes|máscaras', 'Hidratantes after-sun', 'Limpiadores|desmaquilladores eléctricos', 'Limpiadores|desmaquilladores no eléctricos', 'Otros productos para el cuidado de la piel', 'Productos antimanchas no eléctricos', 'Vaporizadores para refrescar el cuerpo|la cara', 'Productos de protección solar', 'Tratamientos contra el acné y rosácea', 'Tratamientos contra la caída del cabello', 'Tratamientos multiusos|generales para el cuero cabelludo|piel'.
29. nombre: Es el nombre comercial del pack, primero hacer entender al usuario que es un pack, luego la marca y finalmente los productos que contiene el pack. Si puedes añadir alguna característica especial del pack, mejor.
30. descripcion_corta: En esta descripción vas a decir exactamente los productos que contiene el pack sin texto extra.

Estructura de Salida (JSON):
Devuelve ÚNICAMENTE este objeto JSON completado:

{
  "nombre": "",
  "descripcion_corta": "",
  "categorias" : "",
  "modo_de_uso" : "",
  "tipo_de_piel" : "",
  "principales_ingredientes" : "",
  "descripcion": "",
  "marca": "",
  "peso_del_paquete": 0.0,
  "genero": "",
  "modelo": "",
  "contenido_del_paquete": "",
  "nombre_general_del_producto": "",
  "contenido_neto": "",
  "nombre_de_color": "",
  "anchura_del_producto": 0.0,
  "altura_del_producto": 0.0,
  "largo_del_producto": 0.0,
  "etiquetas": "",
  "volumen": 0.0,
  "caracteristicas": "",
  "terminos_de_busqueda": "",
  "color": "",
  "peso_del_producto": 0.0,
  "titulo_seo": "",
  "composicion": "",
  "fabricante": "",
  "descripcion_seo": "",
  "aroma": "",
  "categoria_meli": "",
  "categoria_ripley": "",
  "categoria_falabella": ""
}

Aquí tienes la información del pack a procesar:
        - Productos que conforman este pack: '${productData.Nombre}'
        - Descripción de los productos: '${productData["Descripción General"]}'`
}

const creacionDeProductosBellezaPrompt = async (productData) => {
        return `Actúa como un asistente experto en procesamiento de datos y catalogación de productos para e-commerce y marketplaces.
Tu tarea es extraer información de un texto de entrada y estructurarla en un objeto JSON estricto, en español y optimizado para un mercado hispanohablante latinoamericano.

Reglas de Llenado por Campo:
- Formato General: Si la información no está disponible o no aplica, usa 'null'. No inventes información.
- Unidades Numéricas: Devuelve solo el número (integer o float) sin símbolos de unidad en los campos de medidas.
- Estandarización: Peso en "kg", Dimensiones en "cm", Volumen en "mL".

Definiciones Específicas para la extracción:

1. descripcion: Describe el producto de una manera muy detallada y clara. Debes incluir: Nombre del producto, características (modelo, tamaño, color), proceso de fabricación o materiales, y ventajas de compra. Empieza y/o termina con una frase llamativa de venta. Mínimo 100 caracteres. Pon espacio entre cada concepto.
2. marca: La marca oficial del producto.
3. peso_del_paquete: Un estimado del peso total del bulto de envío en kg. Solo el número (ej: 0.5).
4. genero: Escoge estrictamente entre 'Bebés', 'Bebés niño', 'Niña', 'Niño', 'Masculino', 'Femenino', 'Unisex'. Si no aplica, usa 'Unisex' o null.
5. modelo: El código o nombre del modelo específico (suele estar en el nombre).
6. contenido_del_paquete: Lista detallada de qué incluye la caja.
7. nombre_general_del_producto: Cómo se conoce comúnmente al producto (ej: "Crema hidratante", "Zapatillas deportivas").
8. contenido_neto: Cantidad específica declarada (ej: "500 g", "10 pzas").
9. nombre_de_color: El nombre del color tal cual lo define la marca (ej: "Rojo Fuego", "Azul Medianoche").
10. anchura/altura/largo_del_producto: Estimado de las dimensiones del producto físico (fuera de la caja) en cm. Solo números.
11. etiquetas: Lista de palabras clave relevantes separadas por comas.
12. volumen: Estimado del volumen en mL (solo número). Útil para líquidos.
13. caracteristicas: Lista de las principales características técnicas o funcionales, separadas por comas.
14. terminos_de_busqueda: Palabras que usaría un cliente para buscar este producto, separadas por comas.
15. color: Clasifica el tono en una de estas opciones estándar: 'Agua', 'Amarillo', 'Azul', 'Beige', 'Blanco', 'Café', 'Celeste', 'Crema', 'Dorado', 'Fucsia', 'Gris', 'Lila', 'Naranja', 'Negro', 'Plateado', 'Rojo', 'Rosa', 'Transparente', 'Verde', 'Violeta', 'Multicolor'. Si no tiene color, usa null.
16. peso_del_producto: Estimado del peso del artículo en sí (sin embalaje) en kg. Solo el número.
17. titulo_seo: Un título optimizado para buscadores (Producto + Marca + Modelo + Característica clave). Máximo 60 caracteres.
18. composicion: Ingredientes o materiales del producto con una breve explicación de su uso o beneficio.
19. fabricante: Nombre de la empresa fabricante (solo si se menciona explícitamente).
20. descripcion_seo: Meta descripción para posicionamiento. Resumen atractivo de 150-160 caracteres.
21. aroma: Indica el aroma o fragancia solo si se especifica en la descripción.
22. categorias: Selecciona 3 categorías y sepáralas en comas en un solo texto donde la primera debe ser la más relevante, las categorías disponibles son las siguientes 'Accesorios UV', 'Ampollas', 'Anti Acné', 'Antiarrugas', 'Anticaída', 'Anticaspa', 'Antiedad', 'Antiinﬂamatorias', 'Antimanchas', 'Antiojeras', 'Antipigmento', 'Bebé', 'Cabello Debilitado', 'Calmante', 'Capilar', 'Cicatrizante', 'Corporal', 'Corrector', 'Cuello', 'Cuero cabelludo sensible', 'Exfoliante', 'Facial', 'Hidratante', 'Humectantes', 'Labios', 'Limpiadores', 'Manos', 'Micelar', 'Niños', 'Ojos', 'Orgánico', 'Pestañas y Cejas', 'Piel acneica', 'Piel Atópica', 'Piel grasa', 'Piel mixta', 'Piel seca', 'Roll on', 'SolaresHacer principal', 'Tratamiento'.
23. modo_de_uso: Aquí quiero que detalles en un solo texto el modo de uso del producto que se le haga fácil de entender al cliente paso a paso y enuméralo.
24. tipo_de_piel: Solo quiero que devuelvas un tipo de piel en el que recomiendas, de acuerdo a la información del producto, aplicar el producto (ejemplo de tipo de piel: 'Todo tipo de piel', 'Piel Seca', 'Piel grasa', 'Piel Sensible', 'Piel Mixta', 'Piel Normal', 'Piel Acneica', 'Piel Madura', 'Piel Normal a Seca', 'Piel Normal a Grasa', 'Piel Normal a Mixta', 'Piel Normal a Sensible').
25. principales_ingredientes: Una lista separada en comas en un solo texto donde indiques los principales ingredientes y la función que tiene en el producto que sea fácil de entender y leer para el usuario.
26. categoria_meli: Escoge una categoría en la que mejor encaje el producto según la información dada, entre las siguientes opciones: 'Cremas, Pomadas y Aceites', 'Higiene y Cuidado del Bebé > Shampoos y Acondicionadores', 'Bálsamos Labiales', 'Cuidado Corporal', 'Cuidado Facial', 'Kit de Cuidado de la Piel', 'Desmaquillantes', 'Bronceadores', 'Shampoos y Acondicionadores', 'Desodorantes', 'Jabones > Líquido', 'Tratamientos para Manos y Pies > Cremas', 'Máscaras de Pestañas', 'Ojos, Pestañas y Cejas > Tratamientos', 'Iluminadores y Rubores', 'Otros Productos', 'Voluminizadores de Labios > Bálsamos y Geles'.
27. categoria_ripley: Escoge una categoría en la que mejor encaje el producto según la información dada, entre las siguientes opciones: 'BAÑO Y SPA > EXFOLIANTE', 'BAÑO Y SPA > GEL DE DUCHA', 'BAÑO Y SPA > JABONES Y CREMAS', 'SHAMPOO Y ACONDICIONADORES', 'MAQUILLAJE > LABIOS', 'MAQUILLAJE > OJOS Y CEJAS', 'MAQUILLAJE > ROSTRO > BB CREAMS', 'TRATAMIENTOS Y DERMOCOSMETICA > ACCESORIOS', 'BRONCEADORES', 'TRATAMIENTOS Y DERMOCOSMETICA > DERMOCOSMETICA', 'TRATAMIENTOS Y DERMOCOSMETICA > LIMPIEZA', 'MASCARILLAS FACIALES', 'PROTECTORES SOLARES', 'REDUCTORES Y REAFIRMANTES', 'SETS DE TRATAMIENTO', 'TRATAMIENTOS Y DERMOCOSMETICA'.
28. categoria_falabella: Escoge una categoría en la que mejor encaje el producto según la información dada, entre las siguientes opciones: 'Cosméticos|ojos', 'Cosméticos|rostro', 'Cabello|acondicionadores|tratamientos', 'Cabello|champús', 'Bálsamo labial', 'Cuidado de la piel|hidratación de la piel', 'Exfoliantes|máscaras', 'Hidratantes after-sun', 'Limpiadores|desmaquilladores eléctricos', 'Limpiadores|desmaquilladores no eléctricos', 'Otros productos para el cuidado de la piel', 'Productos antimanchas no eléctricos', 'Vaporizadores para refrescar el cuerpo|la cara', 'Productos de protección solar', 'Tratamientos contra el acné y rosácea', 'Tratamientos contra la caída del cabello', 'Tratamientos multiusos|generales para el cuero cabelludo|piel'.
29. nombre: Es el nombre comercial del producto, primero la marca. Si puedes añadir alguna característica especial del producto.
30. descripcion_corta: Descripción corta del producto, resumiendo sus características principales.

Estructura de Salida (JSON):
Devuelve ÚNICAMENTE este objeto JSON completado:

{
  "nombre": "",
  "descripcion_corta": "",
  "categorias" : "",
  "modo_de_uso" : "",
  "tipo_de_piel" : "",
  "principales_ingredientes" : "",
  "descripcion": "",
  "marca": "",
  "peso_del_paquete": 0.0,
  "genero": "",
  "modelo": "",
  "contenido_del_paquete": "",
  "nombre_general_del_producto": "",
  "contenido_neto": "",
  "nombre_de_color": "",
  "anchura_del_producto": 0.0,
  "altura_del_producto": 0.0,
  "largo_del_producto": 0.0,
  "etiquetas": "",
  "volumen": 0.0,
  "caracteristicas": "",
  "terminos_de_busqueda": "",
  "color": "",
  "peso_del_producto": 0.0,
  "titulo_seo": "",
  "composicion": "",
  "fabricante": "",
  "descripcion_seo": "",
  "aroma": "",
  "categoria_meli": "",
  "categoria_ripley": "",
  "categoria_falabella": ""
}

Aquí tienes la información del producto:
        - Nombre: '${productData.Nombre}'
        - Descripción: '${productData["Descripción General"]}'
        - Categoría: '${productData.Categorías}'`
}

const categorizacionAMMAWEBPrompt = (productData) => {
        return `Necesito que me ayudes generando cierta información de producto '${productData.Nombre}' y retornando un objeto JSON.
        Aquí te paso la información del producto:
        Nombre: '${productData.Nombre}'.
        Descripción general: '${productData['Descripción General']}'.
        Categoría genérica: '${productData.Categorías}'.

        Devuelve ÚNICAMENTE este objeto JSON completado:
        {
          "categorias" : Selecciona 3 categorías y sepáralas en comas en un solo texto donde la primera debe ser la más relevante, las categorías disponibles son las siguientes 'Accesorios UV', 'Ampollas', 'Anti Acné', 'Antiarrugas', 'Anticaída', 'Anticaspa', 'Antiedad', 'Antiinﬂamatorias', 'Antimanchas', 'Antiojeras', 'Antipigmento', 'Bebé', 'Cabello Debilitado', 'Calmante', 'Capilar', 'Cicatrizante', 'Corporal', 'Corrector', 'Cuello', 'Cuero cabelludo sensible', 'Exfoliante', 'Facial', 'Hidratante', 'Humectantes', 'Labios', 'Limpiadores', 'Manos', 'Micelar', 'Niños', 'Ojos', 'Orgánico', 'Pestañas y Cejas', 'Piel acneica', 'Piel Atópica', 'Piel grasa', 'Piel mixta', 'Piel seca', 'Roll on', 'SolaresHacer principal', 'Tratamiento'.
          "modo_de_uso" : Aquí quiero que detalles en un solo texto el modo de uso del producto que se le haga fácil de entender al cliente paso a paso y enuméralo.
          "tipo_de_piel" : Solo quiero que devuelvas un tipo de piel en el que recomiendas, de acuerdo a la información del producto, aplicar el producto (ejemplo de tipo de piel: 'Todo tipo de piel', 'Piel Seca', 'Piel grasa', 'Piel Sensible', 'Piel Mixta', 'Piel Normal', 'Piel Acneica', 'Piel Madura', 'Piel Normal a Seca', 'Piel Normal a Grasa', 'Piel Normal a Mixta', 'Piel Normal a Sensible').
          "principales_ingredientes" : Una lista separada en comas en un solo texto donde indiques los principales ingredientes y la función que tiene en el producto que sea fácil de entender y leer para el usuario.
        }

        IMPORTANTE: Responde ÚNICAMENTE con el JSON solicitado, SIN los delimitadores \`\`\`json ni ningún otro texto adicional.
        El JSON debe comenzar directamente con { y terminar con }.

        `
}

const categorizacionAMMARipleyPrompt = (productData) => {
        return `Necesito que me ayudes generando cierta información del producto '${productData.Nombre}' y retornando un objeto JSON.
        Aquí te paso la información del producto:
        Nombre: '${productData.Nombre}'.
        Descripción general: '${productData['Descripción General']}'.
        Categoría genérica: '${productData.Categorías}'.

        Devuelve ÚNICAMENTE este objeto JSON completado:
        {
          "categoria" : Selecciona una categoría en la que mejor encaje el producto de acuerdo a su información, las opciones de categorías son las siguientes 'BAÑO Y SPA > EXFOLIANTE', 'BAÑO Y SPA > GEL DE DUCHA', 'BAÑO Y SPA > JABONES Y CREMAS', 'CAPILAR > SHAMPOO Y ACONDICIONADORES', 'MAQUILLAJE > LABIOS', 'MAQUILLAJE > OJOS Y CEJAS', 'MAQUILLAJE > ROSTRO > BB CREAMS', 'TRATAMIENTOS Y DERMOCOSMETICA > ACCESORIOS', 'TRATAMIENTOS Y DERMOCOSMETICA > BRONCEADORES', 'TRATAMIENTOS Y DERMOCOSMETICA > DERMOCOSMETICA', 'TRATAMIENTOS Y DERMOCOSMETICA > LIMPIEZA', 'TRATAMIENTOS Y DERMOCOSMETICA > MASCARILLAS FACIALES', 'TRATAMIENTOS Y DERMOCOSMETICA > PROTECTORES SOLARES', 'TRATAMIENTOS Y DERMOCOSMETICA > REDUCTORES Y REAFIRMANTES', 'TRATAMIENTOS Y DERMOCOSMETICA > SETS DE TRATAMIENTO', 'TRATAMIENTOS Y DERMOCOSMETICA > TRATAMIENTOS Y DERMOCOSMETICA'. Si crees que el producto no pertenece a ninguna categoría mencionada pon 'Investigar otra categoría para este producto'.
        }

        IMPORTANTE: Responde ÚNICAMENTE con el JSON solicitado, SIN los delimitadores \`\`\`json ni ningún otro texto adicional.
        El JSON debe comenzar directamente con { y terminar con }.

        `
}

const datosFalabellaAMMABeautyPrompt = (productData) => {
        return `Necesito que me ayudes generando cierta información del producto '${productData.Nombre}' y retornando un objeto JSON.
        Aquí tienes la información del o los productos a procesar:
        - Productos: '${productData.Nombre}'
        - Descripción de los productos: '${productData["Descripción General"]}'

        Devuelve ÚNICAMENTE este objeto JSON completado:
        {
                "skin_type" : Selecciona la mejor opción posible para este producto entre las siguientes opciones: '|Falabella|Grasa', '|Falabella|Mixta', '|Falabella|Normal', '|Falabella|Seca', '|Falabella|Sensible', '|Falabella|Todo tipo de piel'.
                "tipo_de_crema" : Selecciona la mejor opción posible para este producto entre las siguientes opciones: '|Falabella|BB Cream', '|Falabella|CC Cream', '|Falabella|Contorno de ojos', '|Falabella|Crema aclarante', '|Falabella|Crema antiedad', '|Falabella|Crema antimanchas', '|Falabella|Crema de día', '|Falabella|Crema de noche', '|Falabella|Crema exfoliante', '|Falabella|Crema hidratante', '|Falabella|Crema nutritiva', '|Falabella|Crema para celulitis', '|Falabella|Crema para el acné', '|Falabella|Crema para estrías', '|Falabella|Crema reductora', '|Falabella|Peeling', '|Falabella|Sérum'.
                "treatment_type" : Selecciona únicamente la mejor opción posible para este producto entre las siguientes opciones: '|Falabella|Brazos', '|Falabella|Caderas', '|Falabella|Contorno de ojos', '|Falabella|Cuello', '|Falabella|Cuero cabelludo', '|Falabella|Cuerpo', '|Falabella|Espalda', '|Falabella|Glúteos', '|Falabella|Hombros', '|Falabella|Labios', '|Falabella|Manos', '|Falabella|Pecho', '|Falabella|Pestañas', '|Falabella|Piernas', '|Falabella|Pies', '|Falabella|Rodillas', '|Falabella|Rostro', '|Falabella|Uñas', '|Falabella|Zona íntima'.
                "variation" : Indica aquellas características que pueden variar en el producto, diferenciándolo de otros del mismo modelo (máximo 3, no necesariamente 3 y separado por comas). Ejemplo: Color, sabor o atributo especial.
                "format" : Selecciona la mejor opción para detallar el formato del producto entre las siguientes opciones: '|Falabella|Aerosol', '|Falabella|Ampolla', '|Falabella|Blister', '|Falabella|Botella', '|Falabella|Caja', '|Falabella|Cartucho', '|Falabella|Crayon', '|Falabella|Doypack', '|Falabella|Estuche', '|Falabella|Frasco', '|Falabella|Lata', '|Falabella|Lápiz', '|Falabella|Paquete', '|Falabella|Roll-on', '|Falabella|Sachet', '|Falabella|Set', '|Falabella|Sobre', '|Falabella|Spray', '|Falabella|Stick', '|Falabella|Tableta', '|Falabella|Tarro', '|Falabella|Tubo'.
                "model_name" : Indica el nombre del modelo del producto, normalmente está en el nombre. Si son varios productos sepáralos por 'y' sin apostrofe. Ejemplo: Crema facial y crema corporal.
                "number_of_items_in_package" : Indica el número de unidades que vienen en el paquete. Si el producto es una sola unidad, pon 1. Si el producto es un pack de varias unidades, pon el número total de unidades que vienen en el paquete (solo números).
                "package_content" : Detalla el contenido del paquete, es decir, qué productos específicos vienen en el paquete. Ejemplo: Crema facial de 50 ml y crema corporal de 200 ml.
                "sun_protection_factor" : Si el producto tiene factor de protección solar, indícalo con un número (ejemplo: 50). Si el producto no tiene factor de protección solar déjalo vacío.
        }

        IMPORTANTE: Responde ÚNICAMENTE con el JSON solicitado, SIN los delimitadores \`\`\`json ni ningún otro texto adicional.
        El JSON debe comenzar directamente con { y terminar con }.

        `
}


export { protectoresColchonPrompt, respaldosDeCamaPrompt, hidratacionDeLaPielFalabellaPrompt, creatingPacks2ProductsPrompt, productosDeProteccionSolarFalabellaPrompt, allCategoriesFalabellaAMMAPrompt, baseusPowerbandPrompt, bundlesCreationCelularesPrompt, motosCreationPrompt, creacionDeProductosBellezaPrompt, categorizacionAMMAWEBPrompt, categorizacionAMMARipleyPrompt, bundlesCreationSkinProductsAMMAPrompt, datosFalabellaAMMABeautyPrompt }