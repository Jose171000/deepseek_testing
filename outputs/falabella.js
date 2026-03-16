const updatingProductDescriptionOutput = async (aiResponse, productData) =>{
    return {
        "SKU simple" : productData['SKU simple'],
        "Descripción Actualizada": aiResponse.description
    }
}

export { updatingProductDescriptionOutput };