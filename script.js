/* Loading */
setTimeout(() => {
  document.getElementById("loading").style.display = "none";
  document.getElementById("app").classList.remove("hidden");
}, 2500);

/* Typewriter */
const text =
  "From the moment you entered my life Papu… you became my happiness, my peace, my forever 💖";
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

/* Gift */
function openGift() {
  showPopup(
    "You are the best thing that ever happened to me ❤️"
  );
}

/* Love meter */
let love = 0;

function fillLove() {
  if (love < 100) {
    love += 20;
    document.getElementById("fill").style.width = love + "%";
  } else {
    showPopup("My love for you is infinite Papu ♾️💖");
  }
}

/* Love letter */
function showLoveLetter() {
  showPopup(
    "My Papu ❤️ I promise to stand with you, love you, and make you smile every single day 💘"
  );
}

function showPopup(msg) {
  const popup = document.getElementById("popup");

  popup.innerHTML = msg;
  popup.style.display = "block";

  // Fade in effect
  popup.style.opacity = "0";
  popup.style.transform = "translate(-50%, 40px)";

  setTimeout(() => {
    popup.style.opacity = "1";
    popup.style.transform = "translate(-50%, 0)";
  }, 50);

  // Auto close
  setTimeout(() => {
    popup.style.opacity = "0";
    popup.style.transform = "translate(-50%, 40px)";
  }, 3500);

  setTimeout(() => {
    popup.style.display = "none";
  }, 4000);
}


/* Game */
function startGame() {
  const heart = document.createElement("div");
  heart.innerHTML = "💖";
  heart.style.position = "absolute";
  heart.style.left = Math.random() * 80 + "vw";
  heart.style.top = Math.random() * 80 + "vh";
  heart.style.fontSize = "30px";
  heart.style.cursor = "pointer";

  heart.onclick = () => {
    showPopup("You caught my love Papu 💘");
    heart.remove();
    startGame();
  };

  document.body.appendChild(heart);
}

function proposal() {
  document.body.innerHTML = `
    <div style="text-align:center;margin-top:15%;">
      <h1 style="font-size:3rem;">
        Will You Be Mine Forever Papu? 💖🌹
      </h1>

      <div style="margin-top:40px;">
        <button id="yesBtn" onclick="yesAnswer()"
          style="
            font-size:20px;
            padding:15px 30px;
            margin:10px;
            background:red;
            color:white;
            border:none;
            border-radius:30px;
            cursor:pointer;
          ">
          YES 💘
        </button>

        <button id="noBtn" onclick="noAnswer()"
          style="
            font-size:16px;
            padding:10px 20px;
            margin:10px;
            background:white;
            color:red;
            border:none;
            border-radius:30px;
            cursor:pointer;
            position:relative;
          ">
          No 🙈
        </button>
      </div>
    </div>
  `;
}

function yesAnswer() {
  document.body.innerHTML = `
    <h1 style="margin-top:20%;font-size:3rem;color:pink;">
      Yaaayyy 💖  
      You Are Mine Forever Papu 🌹💍  
      I Love You Endlesssss 💘
    </h1>
  `;
}

let yesSize = 20;

function noAnswer() {

  // Funny popup messages
  const msgs = [
    "Think again Papu 😌",
    "Are you sure? 🙈",
    "I will ask again 😏",
    "No option… only YES 😂",
    "My love loading… please wait 💖"
  ];

  alert(msgs[Math.floor(Math.random() * msgs.length)]);

  // Increase YES button size
  yesSize += 10;
  document.getElementById("yesBtn").style.fontSize = yesSize + "px";

  // Move NO button randomly
  const noBtn = document.getElementById("noBtn");
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * 80 + "vw";
  noBtn.style.top = Math.random() * 80 + "vh";
}

let score = 0;

function startGame() {
  const heart = document.createElement("div");

  heart.innerHTML = "💖";
  heart.style.position = "absolute";
  heart.style.left = Math.random() * 80 + "vw";
  heart.style.top = Math.random() * 80 + "vh";
  heart.style.fontSize = "40px";
  heart.style.cursor = "pointer";
  heart.style.transition = "0.3s";
  heart.style.filter =
    "drop-shadow(0 0 10px pink) drop-shadow(0 0 20px red)";

  heart.onclick = () => {
    score++;

    showPopup(
      "You caught my love " + score + " times Papu 💘"
    );

    heart.style.transform = "scale(2)";
    setTimeout(() => heart.remove(), 200);

    startGame();
  };

  document.body.appendChild(heart);
}

function openGift() {

  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.style.position = "fixed";
    heart.style.left = "50%";
    heart.style.top = "50%";
    heart.style.fontSize = "30px";

    const x = (Math.random() - 0.5) * 600;
    const y = (Math.random() - 0.5) * 600;

    heart.style.transform =
      `translate(${x}px, ${y}px)`;

    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 2000);
  }

  showPopup(
    "Surprise Papu 💝 You are my forever happiness ❤️"
  );
}

function showPopup(msg) {
  const popup = document.getElementById("popup");
  popup.innerHTML = msg;
  popup.style.display = "block";

  // Add floating hearts
  for (let i = 0; i < 6; i++) {
    const heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.style.position = "absolute";
    heart.style.left = Math.random() * 90 + "%";
    heart.style.top = Math.random() * 80 + "%";
    heart.style.fontSize = "20px";
    popup.appendChild(heart);

    setTimeout(() => heart.remove(), 3000);
  }

  setTimeout(() => {
    popup.style.display = "none";
  }, 4000);
}
