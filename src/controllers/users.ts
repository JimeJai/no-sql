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

  static async getOne(req, res, next) {
    try {
      const user = await Users.getOne();

      res.status(200).json({ data: user });
    } catch (error) {
      next(error);
    }
  }

  static async create(req, res, next) {
    try {
      await Users.create(req.body);

      res.status(200).send();
    } catch (error) {
      next(error);
    }
  }
}

export default UsersController;
