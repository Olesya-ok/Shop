import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCAeUoa3QKKvQM5KLgW_CBSQmRokKr6QUs",
    authDomain: "shop-9b17d.firebaseapp.com",
    databaseURL: "https://shop-9b17d-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "shop-9b17d",
    storageBucket: "shop-9b17d.firebasestorage.app",
    messagingSenderId: "419275668956",
    appId: "1:419275668956:web:e1ed2f92ada7f57bcaa319"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export const getProducts = () => {
    const starCountRef = ref(db, 'products/');
    return get(starCountRef); };
