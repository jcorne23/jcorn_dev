// -----------------------------
// Typewriter Effect
// -----------------------------
console.log("✅ script.js is running");
const typewriterElement = document.getElementById("typewriter");
if (typewriterElement) {
  const text = "Hi, I'm Julio Cornejo.";
  let index = 0;
  const speed = 100;

  function typeWriter() {
    if (index < text.length) {
      typewriterElement.textContent += text.charAt(index);
      index++;
      setTimeout(typeWriter, speed);
    } else {
      blinkCursor();
    }
  }

  function blinkCursor() {
    const cursor = document.createElement("span");
    cursor.textContent = "▌";
    cursor.style.color = "#38bdf8";
    cursor.style.marginLeft = "4px";
    cursor.style.animation = "blink 1s infinite";
    typewriterElement.appendChild(cursor);
  }

  window.addEventListener("DOMContentLoaded", typeWriter);
}


// -----------------------------
// Optional Background Dots Animation (Safe for All Pages)
// -----------------------------
const canvas = document.getElementById("bg-canvas");

if (canvas) {
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const dots = Array.from({ length: 40 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.5 + 0.5,
    dx: (Math.random() - 0.5) * 0.3,
    dy: (Math.random() - 0.5) * 0.3
  }));

  function animateDots() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dots.forEach(dot => {
      ctx.beginPath();
      ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(56, 189, 248, 0.15)";
      ctx.fill();
      dot.x += dot.dx;
      dot.y += dot.dy;

      // Wrap around edges
      if (dot.x < 0) dot.x = canvas.width;
      if (dot.x > canvas.width) dot.x = 0;
      if (dot.y < 0) dot.y = canvas.height;
      if (dot.y > canvas.height) dot.y = 0;
    });
    requestAnimationFrame(animateDots);
  }

  animateDots();
}

// -----------------------------
// Project Card Slideshow
// -----------------------------
document.addEventListener("DOMContentLoaded", () => {
  const slideshows = document.querySelectorAll(".slideshow");

  slideshows.forEach(slideshow => {
    const images = slideshow.querySelectorAll("img");
    if (images.length === 0) return; // skip empty slideshows

    let index = 0;
    images[index].classList.add("active");

    setInterval(() => {
      images[index].classList.remove("active");
      index = (index + 1) % images.length;
      images[index].classList.add("active");
    }, 2500);
  });
});
