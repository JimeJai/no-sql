import Users from "../models/users";

class UsersService {
  static async create(data) {
    try {
      return await Users.create(data);
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

  static async getOne() {
    try {
      return await Users.getOne();
    } catch (error) {
      throw error;
    }
  }
}

export default UsersService;
