/* Zircon Zone — κοινό JS για όλες τις σελίδες */
(function () {
  const header = document.querySelector(".site-header");
  const onScroll = () => header?.classList.toggle("is-scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Mobile menu
  const toggle = document.querySelector(".menu-toggle");
  toggle?.addEventListener("click", () => {
    const open = document.body.classList.toggle("menu-open");
    toggle.setAttribute("aria-expanded", open);
    document.body.style.overflow = open ? "hidden" : "";
  });

  // Active link
  const page = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav a, .mobile-menu a").forEach((a) => {
    if (a.getAttribute("href") === page) { a.classList.add("active"); a.setAttribute("aria-current", "page"); }
  });

  // Scroll reveal (δουλεύει και για στοιχεία που προστίθενται δυναμικά)
  const io = "IntersectionObserver" in window
    ? new IntersectionObserver((entries) => entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      }), { rootMargin: "0px 0px -8% 0px" })
    : null;
  window.observeReveal = (scope = document) =>
    scope.querySelectorAll(".reveal:not(.in)").forEach((el) => (io ? io.observe(el) : el.classList.add("in")));
  window.observeReveal();

  document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));
})();
