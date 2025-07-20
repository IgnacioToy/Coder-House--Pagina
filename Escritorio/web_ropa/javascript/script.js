document.addEventListener("DOMContentLoaded", () => {
  const btnMenu = document.getElementById("btn-menu");
  const menu = document.getElementById("menu-principal");

  btnMenu.addEventListener("click", () => {
    menu.classList.toggle("d-none");
  });

  // Manejar submenús (mostrar/ocultar)
  document.querySelectorAll(".con-submenu > a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault(); // evitar navegación

      const submenu = link.nextElementSibling;
      submenu.classList.toggle("d-none");
    });
  });
});
