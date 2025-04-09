import xlsx from 'xlsx';

const lectorDeExcel = (filePath) => {
  const workbook = xlsx.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];

  const data = xlsx.utils.sheet_to_json(sheet);

  return data;
}

// console.log(lectorDeExcel('./input.xlsx')[1]['Imágenes'].split(", "));

export default lectorDeExcel;