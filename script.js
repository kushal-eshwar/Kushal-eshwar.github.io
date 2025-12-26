const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

function closeMenu() {
  if (!menuBtn || !mobileMenu) return;
  menuBtn.setAttribute("aria-expanded", "false");
  mobileMenu.style.display = "none";
  mobileMenu.setAttribute("aria-hidden", "true");
}

function toggleMenu() {
  if (!menuBtn || !mobileMenu) return;
  const expanded = menuBtn.getAttribute("aria-expanded") === "true";
  menuBtn.setAttribute("aria-expanded", String(!expanded));
  mobileMenu.style.display = expanded ? "none" : "flex";
  mobileMenu.setAttribute("aria-hidden", String(expanded));
}

menuBtn?.addEventListener("click", toggleMenu);

mobileMenu?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});
