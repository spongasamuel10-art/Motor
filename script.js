import { enviarComando } from "./firebase.js";

const motorArea = document.getElementById("motorArea");
const status = document.getElementById("status");
const statusText = document.getElementById("statusText");
const btnLigar = document.getElementById("btnLigar");
const btnParar = document.getElementById("btnParar");

let motorLigado = false;

btnLigar.addEventListener("click", async () => {
    if (motorLigado) return;

    const enviado = await enviarComando(true);

    if (!enviado) {
        alert("Erro ao comunicar com o Firebase.");
        return;
    }

    motorLigado = true;

    motorArea.classList.add("running");
    status.classList.add("running");
    statusText.textContent = "MOTOR LIGADO";
});

btnParar.addEventListener("click", async () => {
    if (!motorLigado) return;

    const enviado = await enviarComando(false);

    if (!enviado) {
        alert("Erro ao comunicar com o Firebase.");
        return;
    }

    motorLigado = false;

    motorArea.classList.remove("running");
    status.classList.remove("running");
    statusText.textContent = "MOTOR PARADO";
});