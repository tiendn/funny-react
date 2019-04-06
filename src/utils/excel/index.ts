import IOExcel from "./IOExcel";

export default class ExcelUtils {
  static insertProductImages(fileName: string) {
    IOExcel.readFile(fileName);
  }
}
