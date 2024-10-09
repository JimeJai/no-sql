import Users from "../models/users";

class UsersService {
  static async create(data) {
    try {
      const user = Users.create(data);
    } catch (error) {
      throw error;
    }
  }

  static async getAll() {
    try {
      return await Users.getAll();
    } catch (error) {
      throw error;
    }
  }

  static async getByEmail(email) {
    try {
      const user = await Users.getOne("email", email);

      return user;
    } catch (error) {
      throw error;
    }
  }
}

export default UsersService;
