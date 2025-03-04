// Dark/Light Mode Toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
});

// Tilt Effect on Mouse Move
document.addEventListener("mousemove", (e) => {
    document.querySelectorAll(".hover-3d").forEach((el) => {
        const { offsetX, offsetY, width, height } = el.getBoundingClientRect();
        const x = (offsetX / width - 0.5) * 20;
        const y = (offsetY / height - 0.5) * 20;
        el.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
    });
});
