import xlsx from 'xlsx';

const archivoExcel = xlsx.readFile('prueba1.xlsx');

console.log(archivoExcel.SheetNames);
console.log(archivoExcel.SheetNames.length);
