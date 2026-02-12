/* Loading screen */
setTimeout(() => {
  document.getElementById("loading").style.display = "none";
  document.getElementById("app").classList.remove("hidden");
}, 2500);

/* Typewriter */
const text =
  "From the moment you came into my life Papu… everything became magical 💖";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typeText").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}
typeWriter();

/* Heart rain */
setInterval(() => {
  const heart = document.createElement("div");
  heart.innerHTML = "💖";
  heart.className = "heart";
  heart.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}, 300);

/* Love letter */
function showLoveLetter() {
  showPopup(
    "My Papu ❤️ You are my happiness, my peace, my everything. I love you endlessly 💘"
  );
}

/* Reasons */
function showReasons() {
  showPopup(
    "I love your smile 😊 your voice 🎶 your care 🤗 and every little thing about you 💖"
  );
}

/* Popup */
function showPopup(msg) {
  const popup = document.getElementById("popup");
  popup.innerHTML = msg;
  popup.style.display = "block";
  setTimeout(() => (popup.style.display = "none"), 4000);
}

/* Game */
let score = 0;

function startGame() {
  const heart = document.createElement("div");
  heart.innerHTML = "💖";
  heart.style.position = "absolute";
  heart.style.left = Math.random() * 80 + "vw";
  heart.style.top = Math.random() * 80 + "vh";
  heart.style.fontSize = "30px";
  heart.style.cursor = "pointer";

  heart.onclick = () => {
    score++;
    showPopup("You caught my love " + score + " times 💘");
    heart.remove();
    startGame();
  };

  document.body.appendChild(heart);
}

/* Password */
function checkPass() {
  const pass = document.getElementById("pass").value;

  if (pass === "iloveyoupapu") {
    showPopup("Forever yours 💖");
  } else {
    showPopup("Wrong password 😝 Try again");
  }
}

/* Proposal */
function proposal() {
  document.body.innerHTML =
    "<h1 style='margin-top:20%;font-size:3rem;'>Will You Be Mine Forever Papu? 💖🌹</h1>";
}
