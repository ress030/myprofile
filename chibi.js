const avatar = document.querySelector(".avatar");

document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 30; 
  const y = (e.clientY / window.innerHeight - 0.5) * 30; 

  avatar.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
});

document.addEventListener("mouseleave", () => {
  avatar.style.transform = "translate(0, 0) scale(1)";
});