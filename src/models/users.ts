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

  static async getOne(prop: string, value) {
    try {
      const usersRef = firestore.collection("users");

      const snapshot = await usersRef.where(prop, "==", value).get();
      if (snapshot.empty) {
        console.log("No matching documents.");
        throw new Error("No matching documents.");
      }
      return snapshot.docs[0].data();
    } catch (error) {
      throw error;
    }
  }

  // static async getOne() { //byId?
  //   try {
  //     const usersRef = firestore
  //       .collection("users")
  //       .doc("ncqJZwlsSnfFyRhSgWDU");

  //     const user = (await usersRef.get()).data();

  //     return user;
  //   } catch (error) {
  //     throw error;
  //   }
  // }

  static async create(data) {
    try {
      const usersRef = firestore.collection("users");

      usersRef.add(data);
    } catch (error) {
      throw error;
    }
  }

  static async getDocReference(docId: string) {
    try {
      return firestore.collection("rooms").doc(docId); // esto debe ir en el model de rooms
    } catch (error) {
      throw error;
    }
  }
}

export default UsersModel;
