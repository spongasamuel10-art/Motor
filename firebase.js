import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
apiKey: "AIzaSyDhtqlOgH09L8SG5cbZ1SV1tt7IRd8e394",
authDomain: "esp32-luz-c6ad9.firebaseapp.com",
databaseURL: "https://esp32-luz-c6ad9-default-rtdb.firebaseio.com",
projectId: "esp32-luz-c6ad9",
storageBucket: "esp32-luz-c6ad9.firebasestorage.app",
messagingSenderId: "291050299879",
appId: "1:291050299879:web:788343d4fe86d403e99d42",
measurementId: "G-F32MEXWB9G"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export async function enviarComando(valor) {
    try {
        await set(ref(db, "motor"), valor);
        return true;
    } catch (erro) {
        console.error("Erro Firebase:", erro);
        return false;
    }
}
