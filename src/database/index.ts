import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const secret = require("./secret.json");

initializeApp({
  credential: cert(secret),
});

const firestore = getFirestore();

export default firestore;
