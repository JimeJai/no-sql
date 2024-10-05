import firestore from "../database";

class AuthModel {
  static async getAll() {
    try {
      
    } catch (error) {
      throw error;
    }
  }

  static async getOne() {
    try {
      
    } catch (error) {
      throw error;
    }
  }

  static async create(data) {
    try {
      const usersRef = firestore.collection("users");

      usersRef.add(data);
    } catch (error) {
      throw error;
    }
  }
}

export default AuthModel;
