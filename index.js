const btn = document.querySelector("#btn");
btn.style.position = "absolute";
document.body.style.backgroundColor = "#92C7CF";

btn.addEventListener("mouseover", function () {
  const randomheight =
    Math.floor(Math.random() * (window.innerHeight - 50)) + 50;
  const randomWidth =
    Math.floor(Math.random() * (window.innerWidth - 200)) + 200;
  btn.style.top = `${randomheight - 60}px`;
  btn.style.left = `${randomWidth - 200}px`;
});

btn.addEventListener("click", function () {
  btn.innerText = "You got me";
  btn.style.backgroundColor = "yellow";
  btn.style.color = "black";
  document.body.style.backgroundColor = "green";
});
