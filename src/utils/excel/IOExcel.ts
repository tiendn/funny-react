import ExcelJS from "exceljs/dist/es5/exceljs.browser";

export default class IOExcel {
  static workbook = new ExcelJS.Workbook();

  static readFile(filename) {
    console.log(filename, this.workbook.xlsx);
    this.workbook.xlsx.readFile(filename).then(data => {
      // use workbook
      console.log(data);
    });
  }
}
