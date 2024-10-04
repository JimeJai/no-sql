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

  static async getOne() {
    try {
      const usersRef = firestore
        .collection("users")
        .doc("ncqJZwlsSnfFyRhSgWDU");

      const user = (await usersRef.get()).data();

      const userRoom = (await user.room.get()).data();

      return { ...user, room: userRoom.name };
    } catch (error) {
      throw error;
    }
  }

  static async create(data) {
    try {
      const usersRef = firestore.collection("users");
      const roomRef = firestore.collection("rooms").doc("1");

      usersRef.add({ ...data, roomId: roomRef });
    } catch (error) {
      throw error;
    }
  }
}

export default UsersModel;
