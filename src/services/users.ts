import Users from "../models/users";

class UsersService {
  static async create(data) {
    try {
      const user = Users.create(data)
     
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
      const user = await Users.getOne();
      const userRoom = (await user.room.get()).data();

      return { ...user, room: userRoom.name };
    } catch (error) {
      throw error;
    }
  }
}

export default UsersService;
