import Auth from "../services/auth";

class AuthController {
  static async register(req, res, next) {
    try {
      const auth = await Auth.register(req.body);

      res.status(200).json({ data: auth });
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      const auth = await Auth.login();

      res.status(200).json({ data: auth });
    } catch (error) {
      next(error);
    }
  }

  static async logout(req, res, next) {
    try {
      //await Auth.logout(req.body);

      res.status(200).send();
    } catch (error) {
      next(error);
    }
  }
}

export default AuthController;
