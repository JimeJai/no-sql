import Users from "../services/users";

class UsersController {
  static async getAll(req, res, next) {
    try {
      const users = await Users.getAll();

      res.status(200).json({ data: users });
    } catch (error) {
      next(error);
    }
  }

  static async create(req, res, next) {
    try {
      await Users.create();

      res.status(200).send();
    } catch (error) {
      next(error);
    }
  }
}

export default UsersController;
