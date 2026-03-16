const updatingProductDescriptionPrompt = async (productData) => {
    return `Necesito que generes varios datos para el producto "${productData.Nombre}" en un solo formato JSON.
            Aquí tienes la información del producto:
            - Nombre: '${productData.Nombre}'
            - Descripción: '${productData["Descripción General"]}'
            - Categoría en yuju: '${productData.Categorías}'
            
            Por favor devuelve un JSON con los siguientes campos:
            1. "description": Se debe ampliar la descripción, haciendo mención a las características y beneficios o usos del producto, con el fin de cumplir con los rangos estipulados en el puntaje de contenido. Tiene que ser extensa pero no más de 3000 caracteres.

            IMPORTANTE: Responde ÚNICAMENTE con el JSON solicitado, SIN los delimitadores \`\`\`json ni ningún otro texto adicional.
            El JSON debe comenzar directamente con { y terminar con }.`
}

export { updatingProductDescriptionPrompt};