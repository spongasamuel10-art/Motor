import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
    // sua configuração do Firebase
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export async function enviarComando(valor) {
    try {
        await set(ref(db, "motor"), valor);
        return true;
    } catch (erro) {
        console.error(erro);
        return false;
    }
}
