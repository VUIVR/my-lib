export default class {
  constructor() {}

  /**
   * конвертирует номер телефона из формата +7 (999) 111-22-33
   * в формат 9991112233
   * @param {string} val - телефон в любом формате
   * @returns {string} - телефон в формате 9991112233
   *
   * @example
   * convertFromPhone('+7 (999) 111-22-33') => '9991112233'
   */
  static convertFromPhone(val) {
    return val.replace("+7", "").replace(/[^0-9.]/g, "");
  }

  /**
   * конвертирует номер телефона из формата 9991112233
   * в формат +7 (999) 111-22-33
   * @param {string} val - телефон в любом формате
   * @returns {string} - телефон в формате +7 (999) 111-22-33
   *
   * @example
   * convertToPhone('9991112233') => '+7 (999) 111-22-33'
   */
  static convertToPhone(val) {
    return val.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, "+7 ($1) $2-$3-$4");
  }
}

