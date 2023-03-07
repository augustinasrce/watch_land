import { IProfile } from "../../redux/specs/authSpecs";

export class AuthSessions {
  static session_methods_key = "auth_methods";

  static getMethods() {
    let sessionMethods = window.sessionStorage.getItem(this.session_methods_key);
    if (!sessionMethods) return [];
    const methods = [...JSON.parse(sessionMethods)];
    return methods;
  }

  static setMethods(methods: IProfile[]) {
    const sessionStorage = window.sessionStorage;
    const methodsString = JSON.stringify(methods);
    sessionStorage.setItem(this.session_methods_key, methodsString);
  }

  static updateMethods(method: IProfile) {
    const sessionMethods = this.getMethods();
    sessionMethods.push(method);
    this.setMethods(sessionMethods);
  }
}
