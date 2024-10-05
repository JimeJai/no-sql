import Auth from "../models/auth";
import UsersService from "./users";

class AuthService {
  static async register(data) {
    try {
      const user = UsersService.create(data)
            
      //const roomRef = await Auth.getDocReference("1");
      //return await Auth.register({ ...data, room: roomRef });
    } catch (error) {
      throw error;
    }
  }

  static async login() {
    try {
      return await Auth.login();
    } catch (error) {
      throw error;
    }
  }

  static async logout() {
    try {
      const user = await Auth.logout();
      const userRoom = (await user.room.get()).data();

      return { ...user, room: userRoom.name };
    } catch (error) {
      throw error;
    }
  }
}

export default AuthService;
