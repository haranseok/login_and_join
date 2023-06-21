export class RegExpCheck {
  static idRegExpCheck(id: string) {
    const idRegExp = /^[a-zA-Z].{6,15}/;
    if (idRegExp.test(id)) {
      return true;
    } else {
      return false;
    }
  }

  static pwRegExpCheck(pw: string) {
    const pwRegExp =
      /(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,20}$/;
    if (pwRegExp.test(pw)) {
      return true;
    } else {
      return false;
    }
  }

  static spaceRegExpCheck(val: string) {
    const space = /\s/g;
    if (val.match(space)) {
      return true;
    } else {
      return false;
    }
  }
}
