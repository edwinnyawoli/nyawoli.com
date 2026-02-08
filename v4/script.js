const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
    toggle.textContent =
        document.body.classList.contains("light") ? "🌞" : "🌙";
});

document.getElementById("year").textContent =
    new Date().getFullYear();