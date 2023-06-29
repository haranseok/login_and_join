export class MobileCheck {
  static android() {
    return navigator.userAgent.match(/Android/i) === null ? false : true;
  }
  static blackBerry() {
    return navigator.userAgent.match(/BlackBerry/i) === null ? false : true;
  }
  static ios() {
    return navigator.userAgent.match(/iPhone|iPad|iPot/i) === null
      ? false
      : true;
  }
  static opera() {
    return navigator.userAgent.match(/Opera Mini/i) === null ? false : true;
  }
  static windows() {
    return navigator.userAgent.match(/IEMobile/i) === null ? false : true;
  }
  static any() {
    return (
      MobileCheck.android() ||
      MobileCheck.blackBerry() ||
      MobileCheck.ios() ||
      MobileCheck.opera() ||
      MobileCheck.windows()
    );
  }
}
