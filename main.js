let motorRunning = false;

const motorArea = document.getElementById("motorArea");
const status = document.getElementById("status");
const statusText = document.getElementById("statusText");


/* ACIONAR MOTOR */

function startMotor() {

    if (motorRunning) {
        return;
    }

    motorRunning = true;

    motorArea.classList.add("running");

    status.classList.add("running");

    statusText.innerText = "MOTOR LIGADO";

    sendToESP32("start");
}


/* PARAR MOTOR */

function stopMotor() {

    if (!motorRunning) {
        return;
    }

    motorRunning = false;

    motorArea.classList.remove("running");

    status.classList.remove("running");

    statusText.innerText = "MOTOR PARADO";

    sendToESP32("stop");
}


/* COMUNICAÇÃO COM ESP32 */

function sendToESP32(command) {

    console.log("Comando enviado:", command);


    /*
     * QUANDO FOR INTEGRAR AO ESP32,
     * substitua pelo código abaixo:
     *
     * fetch("/motor?command=" + command)
     *
     *     .then(response => response.text())
     *
     *     .then(data => {
     *         console.log("ESP32:", data);
     *     })
     *
     *     .catch(error => {
     *         console.error("Erro:", error);
     *     });
     */

}