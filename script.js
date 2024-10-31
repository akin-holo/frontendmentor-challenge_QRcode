
var qrcode = new QRCode(document.getElementById("qr-code"), {
  text: "https://www.frontendmentor.io",
  width: 180,
  height: 190,
  colorDark: "white",
  colorLight: "transparent",
  correctLevel : QRCode.CorrectLevel.H
});