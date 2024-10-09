import Auth from "../models/auth";
import UsersService from "./users";

class AuthService {
  static async register(data) {
    try {
      const { email } = data;
      let exist: boolean;
      try {
        await UsersService.getByEmail(email); //--esto devuelve un usuario..?
        exist = true;

        //se queda aca si encontro un usuario
      } catch (error) {
        exist = false;
        //entra aca si no encontro ese usuario
      }
      if (exist) {
        throw new Error("El usuario ya esta registrado");
      }
      const user = await UsersService.create(data); //chequear q no exista el email,
    } catch (error) {
      throw error;
    }
  }

  static async login() {
    try {
      //   return await Auth.login();
    } catch (error) {
      throw error;
    }
  }

  static async logout() {
    try {
      // const user = await Auth.logout();
    } catch (error) {
      throw error;
    }
  }
}

export default AuthService;
