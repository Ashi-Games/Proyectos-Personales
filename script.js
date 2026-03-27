const mensaje = `Karolina 💖

Sé que quizás me equivoqué y quiero empezar por pedirte disculpas...

No fue mi intención hacerte sentir mal, porque si hay algo que me importa de verdad eres tú.

Me haces reír, me haces sentir tranquilo,
y sobre todo feliz...

No quiero que esto se arruine por un error,
quiero seguir construyendo esto contigo, paso a paso 💘

Porque no eres “algo” para mí...
eres alguien que realmente quiero en mi vida ❤️
`;

let i = 0;

function iniciarMensaje() {
  const contenedor = document.getElementById("mensaje");
  const texto = document.getElementById("texto");

  contenedor.style.display = "block";
  texto.textContent = ""; // 🔥 limpia antes de escribir
  i = 0;

  escribir();
}

function escribir() {
  const texto = document.getElementById("texto");

  if (i < mensaje.length) {
    texto.textContent += mensaje.charAt(i); // 🔥 CAMBIO IMPORTANTE
    i++;
    setTimeout(escribir, 40);
  }
}

/* FINAL ÉPICO */
function respuestaSi() {    
  document.body.innerHTML = `
    <div style="
      display:flex;
      justify-content:center;
      align-items:center;
      height:100vh;
      flex-direction:column;
      background: linear-gradient(135deg, #6a11cb, #ff758c);
      color:white;
      text-align:center;
      padding:20px;
      font-family: 'Segoe UI', sans-serif;
    ">
      <div style="font-size:32px; font-weight:bold; margin-bottom:10px;">
        Karolina 💖
      </div>

      <h1 style="font-size:26px; margin-bottom:15px;">
        Sé que hoy no fue un día fácil para nosotros...
      </h1>

      <p style="font-size:18px; max-width:500px; line-height:1.6;">
        Quiero empezar diciéndote perdón de verdad... 😔<br><br>

        Sé que me equivoqué en algunas cosas, y entiendo si te hice sentir mal,
        nunca fue mi intención lastimarte.<br><br>

        Porque si hay algo que tengo claro, es que te quiero muchísimo 💖<br><br>

        Tal vez no soy perfecto, pero de verdad quiero mejorar,
        quiero aprender a ser mejor para ti y para nosotros.<br><br>

        No quiero que esto se quede en un mal momento,
        quiero seguir construyendo algo bonito contigo 💘<br><br>

        Ojalá me des la oportunidad de demostrarte
        lo importante que eres para mí ✨
      </p>
    </div>
  `;

  // Vibración
  if (navigator.vibrate) {
    navigator.vibrate([200, 100, 200]);
  }

  // Corazones
  setInterval(() => {
    const c = document.createElement("div");
    c.innerHTML = "💖";
    c.style.position = "fixed";
    c.style.top = "-10px";
    c.style.left = Math.random() * 100 + "vw";
    c.style.fontSize = "25px";
    c.style.animation = "caer 3s linear";
    document.body.appendChild(c);

    setTimeout(() => c.remove(), 3000);
  }, 200);
}

let audio = document.getElementById("musica");
let reproduciendo = false;

function toggleMusic() {
  const btn = document.querySelector(".music-btn");

  if (!reproduciendo) {
    audio.play().then(() => {
      reproduciendo = true;
      btn.textContent = "🔊";
    });
  } else {
    audio.pause();
    reproduciendo = false;
    btn.textContent = "🎵";
  }
}