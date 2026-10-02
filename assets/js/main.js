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


  // Lightbox για τη σελίδα Customers
  const wall = document.querySelector(".ugc-grid--wall");
  if (wall) {
    const items = [...wall.querySelectorAll(".ugc")];
    const lb = document.createElement("div");
    lb.className = "lb"; lb.setAttribute("role", "dialog"); lb.setAttribute("aria-modal", "true");
    lb.innerHTML = '<button class="lb-close" aria-label="Close">&times;</button><button class="lb-prev" aria-label="Previous">&#8249;</button><figure><img alt=""><figcaption></figcaption></figure><button class="lb-next" aria-label="Next">&#8250;</button>';
    document.body.appendChild(lb);
    const img = lb.querySelector("img"), cap = lb.querySelector("figcaption");
    let i = 0;
    const show = (n) => {
      i = (n + items.length) % items.length;
      const src = items[i].querySelector("img");
      img.src = src.src; img.alt = src.alt;
      cap.textContent = items[i].querySelector("figcaption")?.textContent || "";
    };
    const open = (n) => { show(n); lb.classList.add("open"); document.body.style.overflow = "hidden"; };
    const close = () => { lb.classList.remove("open"); document.body.style.overflow = ""; };
    items.forEach((it, n) => { it.tabIndex = 0; it.addEventListener("click", () => open(n));
      it.addEventListener("keydown", (e) => { if (e.key === "Enter") open(n); }); });
    lb.querySelector(".lb-close").addEventListener("click", close);
    lb.querySelector(".lb-prev").addEventListener("click", (e) => { e.stopPropagation(); show(i - 1); });
    lb.querySelector(".lb-next").addEventListener("click", (e) => { e.stopPropagation(); show(i + 1); });
    lb.addEventListener("click", (e) => { if (e.target === lb) close(); });
    document.addEventListener("keydown", (e) => {
      if (!lb.classList.contains("open")) return;
      if (e.key === "Escape") close(); else if (e.key === "ArrowLeft") show(i - 1); else if (e.key === "ArrowRight") show(i + 1);
    });
    let x0 = null;
    lb.addEventListener("touchstart", (e) => (x0 = e.touches[0].clientX), { passive: true });
    lb.addEventListener("touchend", (e) => { if (x0 === null) return; const dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 50) show(i + (dx < 0 ? 1 : -1)); x0 = null; });
  }

  document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));
})();
