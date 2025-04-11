import manejadorGeneral from "./handlers/manejadorGeneral.js";
import generadorDeXLSX from "./services/generadorDeXLSXService.js";

const EjecutadorMatriz = (async (matriz) => {
    const datosJuntoz = await manejadorGeneral();
    generadorDeXLSX(datosJuntoz, 'datosJuntoz');

})();