(function () {
  var toggle = document.querySelector("[data-nav-toggle]");
  var panel = document.querySelector("[data-nav-panel]");
  var pagesToggle = document.querySelector("[data-pages-toggle]");
  var pagesMenu = document.querySelector("[data-pages-menu]");
  var desktop = window.matchMedia("(min-width: 768px)");

  function setMenuIcon(open) {
    var icon = toggle && toggle.querySelector("i");
    if (!icon) return;
    icon.classList.toggle("fa-bars", !open);
    icon.classList.toggle("fa-xmark", open);
  }

  function closeMobileNav() {
    if (!panel || !toggle) return;
    panel.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
    setMenuIcon(false);
  }

  if (toggle && panel) {
    toggle.addEventListener("click", function () {
      var open = panel.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      setMenuIcon(open);
    });

    panel.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        if (!desktop.matches) closeMobileNav();
      });
    });
  }

  if (pagesToggle && pagesMenu) {
    pagesToggle.addEventListener("click", function () {
      if (desktop.matches) return;
      var open = pagesMenu.classList.toggle("is-open");
      pagesToggle.setAttribute("aria-expanded", String(open));
    });
  }

  desktop.addEventListener("change", function (event) {
    if (!event.matches) return;
    closeMobileNav();
    if (pagesMenu) pagesMenu.classList.remove("is-open");
    if (pagesToggle) pagesToggle.setAttribute("aria-expanded", "false");
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") closeMobileNav();
  });
})();
