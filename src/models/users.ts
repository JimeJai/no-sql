import firestore from "../database";

class UsersModel {
  static async getAll() {
    try {
      const usersRef = firestore.collection("users");

      const snapshot = await usersRef.get();

      //  const docs = [];

      // snapshot.forEach((doc) => {
      //   docs.push(doc.data());
      // });

      const docs = snapshot.docs.map((doc) => {
        return doc.data();
      });

      return docs;
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

export default UsersModel;
