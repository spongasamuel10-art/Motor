import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";

import {
    getDatabase,
    ref,
    set
} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyDhtqlOgH09L8SG5cbZ1SV1tt7IRd8e394",
    authDomain: "esp32-luz-c6ad9.firebaseapp.com",
    databaseURL: "https://esp32-luz-c6ad9-default-rtdb.firebaseio.com",
    projectId: "esp32-luz-c6ad9",
    storageBucket: "esp32-luz-c6ad9.firebasestorage.app",
    messagingSenderId: "291050299879",
    appId: "1:291050299879:web:788343d4fe86d403e99d42"
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export async function enviarComando(comando) {
    try {
        await set(
            ref(database, "motor/comando"),
            comando
        );

        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}