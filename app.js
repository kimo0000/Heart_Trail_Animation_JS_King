const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (e) => {
  let x = e.offsetX;
  let y = e.offsetY;
  //   console.log(x, y);

  const size = Math.floor(Math.random() * 150);
  console.log(size);

  const heart = document.createElement("i");
  heart.className = "fa-solid fa-heart";

  heart.style.width = size + "px";
  heart.style.height = size + "px";

  heart.style.left = x + "px";
  heart.style.top = y + "px";

  bodyEl.appendChild(heart);

  setInterval(() => {
    heart.remove();
  }, 3000);
});
