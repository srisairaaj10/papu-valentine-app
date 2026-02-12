function showMessage(type) {
  const popup = document.getElementById("popup");

  let message = "";

  if (type === "letter") {
    message = "My Papu ❤️ From the day you came into my life, everything became beautiful. I love you endlessly 💖";
  }

  if (type === "reasons") {
    message = "I love your smile 😊 your voice 🎶 your care 🤗 and everything about you Papu 💕";
  }

  if (type === "secret") {
    message = "Secret ah? 😌 I am going to love you forever no matter what 💍";
  }

  popup.innerHTML = message;
  popup.style.display = "block";
}

function finalAsk() {
  alert("Will you be my Valentine forever Papu? 💖🌹");
}
