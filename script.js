let qrImg = document.getElementById("qr-code-img")
let qrBtn = document.getElementById("btn-qr");
let qrInput = document.querySelector("#input-qr");


qrBtn.addEventListener("click", newQr)

function newQr() {
    let qrVal = qrInput.value;
    if (!qrVal) return
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrVal}`;
    qrImg.style.cssText = "display: block;"
    qrBtn.textContent = "Generate New Qr"
    qrInput.value = " ";
}

window.addEventListener("keydown", (e) => {
    if (e.keyCode == 13) {
        newQr();
        qrInput.value = " ";

    }
})