/* =========================================================
   Zircon Zone — κατάλογος προϊόντων (ΜΙΑ πηγή για όλο το site)
   Για νέο προϊόν: πρόσθεσε μια γραμμή εδώ. Εμφανίζεται αυτόματα
   στο Collection, και αν έχει badge, και στην αρχική.
   badge: "New" -> New Arrivals στην αρχική, "Best seller" -> Most Loved
   ========================================================= */

const IMG = (n) => `images/web/${n}.webp`;

const PRODUCTS = [
  { id: "set-1", name: "Set 1", price: 12, category: "Sets", images: ["S7"] },
  { id: "set-2", name: "Set 2", price: 20, category: "Sets", images: ["S2", "S10", "S1"] },
  { id: "set-3", name: "Set 3", price: 12, category: "Sets", images: ["S5", "S6"] },
  { id: "set-4", name: "Set 4", price: 20, category: "Sets", images: ["S16", "S8"], badge: "Best seller" },
  { id: "set-5", name: "Set 5", price: 20, category: "Sets", images: ["S12"] },
  { id: "set-6", name: "Set 6", price: 20, category: "Sets", images: ["S11"], badge: "New" },
  { id: "set-7", name: "Set 7", price: 20, category: "Sets", images: ["S13"] },
  { id: "set-8", name: "Set 8", price: 20, category: "Sets", images: ["S15"] },
  { id: "set-9", name: "Set 9", price: 20, category: "Sets", images: ["S9"] },
  { id: "set-10", name: "Set 10", price: 20, category: "Sets", images: ["S14"] },

  { id: "necklace-1", name: "Necklace 1", price: 17, category: "Necklaces", images: ["N1"], badge: "Best seller" },
  { id: "necklace-2", name: "Necklace 2", price: 15, category: "Necklaces", images: ["N4"], badge: "New" },
  { id: "necklace-3", name: "Necklace 3", price: 15, category: "Necklaces", images: ["N2", "N3"] },
  { id: "necklace-4", name: "Necklace 4", price: 15, category: "Necklaces", images: ["N7", "N8"] },
  { id: "necklace-5", name: "Necklace 5", price: 12, category: "Necklaces", images: ["NM", "N9"] },
  { id: "necklace-6", name: "Necklace 6", price: 8, category: "Necklaces", images: ["N5"] },
  { id: "necklace-7", name: "Necklace 7", price: 8, category: "Necklaces", images: ["N6"] },

  { id: "earrings-1", name: "Earrings 1", price: 14, category: "Earrings", images: ["E38", "E1"] },
  { id: "earrings-2", name: "Earrings 2", price: 20, category: "Earrings", images: ["E43", "E44"] },
  { id: "earrings-3", name: "Earrings 3", price: 20, category: "Earrings", images: ["E5", "E35"] },
  { id: "earrings-4", name: "Earrings 4", price: 20, category: "Earrings", images: ["E25", "E26", "E27", "E28"] },
  { id: "earrings-5", name: "Earrings 5", price: 20, category: "Earrings", images: ["E42"], badge: "New" },
  { id: "earrings-6", name: "Earrings 6", price: 20, category: "Earrings", images: ["E47", "E29"], badge: "Best seller" },
  { id: "earrings-7", name: "Earrings 7", price: 20, category: "Earrings", images: ["E19", "E41"] },
  { id: "earrings-8", name: "Earrings 8", price: 20, category: "Earrings", images: ["E16"] },
  { id: "earrings-9", name: "Earrings 9", price: 20, category: "Earrings", images: ["E8"] },
  { id: "earrings-10", name: "Earrings 10", price: 20, category: "Earrings", images: ["E33"] },
  { id: "earrings-11", name: "Earrings 11", price: 20, category: "Earrings", images: ["E48"] },
  { id: "earrings-12", name: "Earrings 12", price: 15, category: "Earrings", images: ["E46", "E12"], badge: "Best seller" },
  { id: "earrings-13", name: "Earrings 13", price: 14, category: "Earrings", images: ["E14"] },
  { id: "earrings-14", name: "Earrings 14", price: 17, category: "Earrings", images: ["E2"] },
  { id: "earrings-15", name: "Earrings 15", price: 15, category: "Earrings", images: ["E20", "E21", "E22", "E23", "E13"] },
  { id: "earrings-16", name: "Earrings 16", price: 15, category: "Earrings", images: ["E49", "E3"] },
  { id: "earrings-17", name: "Earrings 17", price: 20, category: "Earrings", images: ["E18", "E17"] },
  { id: "earrings-18", name: "Earrings 18", price: 20, category: "Earrings", images: ["E45", "E32"] },
  { id: "earrings-19", name: "Earrings 19", price: 20, category: "Earrings", images: ["E34"] },
  { id: "earrings-20", name: "Earrings 20", price: 14, category: "Earrings", images: ["E39"] },
  { id: "earrings-21", name: "Earrings 21", price: 20, category: "Earrings", images: ["E30", "E40"] },
  { id: "earrings-22", name: "Earrings 22", price: 20, category: "Earrings", images: ["E15"] },
  { id: "earrings-23", name: "Earrings 23", price: 14, category: "Earrings", images: ["E50"] },

  { id: "bracelet-1", name: "Bracelet 1", price: 7, category: "Bracelets", images: ["B7"] },
  { id: "bracelet-2", name: "Bracelet 2 (for men)", price: 10, category: "Bracelets", images: ["B4"], badge: "New" },
  { id: "bracelet-3", name: "Bracelet 3", price: 7, category: "Bracelets", images: ["B10", "B1"] },
  { id: "bracelet-4", name: "Bracelet 4", price: 3, category: "Bracelets", images: ["B2", "B6"] },
  { id: "bracelet-5", name: "Bracelet 5", price: 7, category: "Bracelets", images: ["B5"] },
  { id: "bracelet-6", name: "Bracelet 6 (for men)", price: 10, category: "Bracelets", images: ["B9"] },
  { id: "bracelet-7", name: "Bracelet 7", price: 5, category: "Bracelets", images: ["B11"] },

  { id: "ring-1", name: "Ring 1", price: 10, category: "Rings", images: ["Cross"] },
  { id: "ring-2", name: "Ring 2", price: 10, category: "Rings", images: ["R3"] },
  { id: "ring-3", name: "Ring 3", price: 10, category: "Rings", images: ["R1"] },
  { id: "ring-4", name: "Ring 4", price: 7, category: "Rings", images: ["R2"] },
  { id: "ring-5", name: "Ring 5", price: 5, category: "Rings", images: ["heart"] },
];

const CONTACT = {
  instagramDM: "https://ig.me/m/zirconzone",
  instagram: "https://www.instagram.com/zirconzone",
  facebook: "https://www.facebook.com/profile.php?id=100092590311027",
  tiktok: "https://www.tiktok.com/@zircon_zone",
  email: "zirconzonejewelry@gmail.com",
};

const euro = (n) => `€${n.toFixed(2)}`;
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

/* Κάρτα προϊόντος — ίδια σε αρχική και collection.
   Τα βελάκια αλλάζουν φωτογραφία, το κλικ στην κάρτα ανοίγει quick view. */
function productCard(p) {
  const multi = p.images.length > 1;
  return `
    <div class="product-card reveal" id="${p.id}" data-id="${p.id}" data-i="0" tabindex="0" role="button" aria-label="${esc(p.name)} – quick view">
      <div class="product-media">
        ${p.badge ? `<span class="product-tag">${esc(p.badge)}</span>` : ""}
        <img src="${IMG(p.images[0])}" alt="${esc(p.name)}" loading="lazy" width="800" height="1000">
        ${multi ? `
        <button class="img-arrow prev" data-dir="-1" aria-label="Previous image"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M15 5l-7 7 7 7"/></svg></button>
        <button class="img-arrow next" data-dir="1" aria-label="Next image"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M9 5l7 7-7 7"/></svg></button>
        <div class="img-dots">${p.images.map((_, i) => `<span class="${i ? "" : "on"}"></span>`).join("")}</div>` : ""}
      </div>
      <div class="product-info">
        <div>
          <h3>${esc(p.name)}</h3>
          <div class="cat">${esc(p.category)}</div>
        </div>
        <span class="price">${euro(p.price)}</span>
      </div>
    </div>`;
}

/* Βελάκια φωτογραφιών (δουλεύει για κάρτες που προστίθενται δυναμικά) */
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".img-arrow");
  if (!btn) return;
  e.stopPropagation();
  const card = btn.closest(".product-card");
  const p = PRODUCTS.find((x) => x.id === card.dataset.id);
  const n = p.images.length;
  const i = (+card.dataset.i + +btn.dataset.dir + n) % n;
  card.dataset.i = i;
  card.querySelector(".product-media img").src = IMG(p.images[i]);
  card.querySelectorAll(".img-dots span").forEach((d, k) => d.classList.toggle("on", k === i));
}, true);

/* Quick view modal με gallery + κουμπιά παραγγελίας */
function setupQuickView(root = document) {
  const qv = document.getElementById("quickview");
  if (!qv) return;
  const main = qv.querySelector(".qv-main");
  const thumbs = qv.querySelector(".qv-thumbs");
  let lastFocus = null;

  function open(p) {
    lastFocus = document.activeElement;
    qv.querySelector(".qv-cat").textContent = p.category;
    qv.querySelector(".qv-title").textContent = p.name;
    qv.querySelector(".qv-price").textContent = euro(p.price);
    main.src = IMG(p.images[0]);
    main.alt = p.name;
    thumbs.innerHTML = p.images.length > 1
      ? p.images.map((im, i) => `<button class="${i ? "" : "active"}" data-src="${IMG(im)}" aria-label="Image ${i + 1}"><img src="${IMG(im)}" alt=""></button>`).join("")
      : "";
    const msg = `Hi Zircon Zone! I'd like to order ${p.name} (${euro(p.price)}).`;
    const ig = qv.querySelector(".qv-ig");
    ig.onclick = () => { navigator.clipboard?.writeText(msg).catch(() => {}); };
    qv.classList.add("open");
    qv.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    history.replaceState(null, "", `#${p.id}`);
    qv.querySelector(".qv-close").focus();
  }
  function close() {
    qv.classList.remove("open");
    qv.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    history.replaceState(null, "", location.pathname + location.search);
    lastFocus?.focus();
  }

  thumbs.addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (!b) return;
    main.src = b.dataset.src;
    thumbs.querySelectorAll("button").forEach((x) => x.classList.toggle("active", x === b));
  });
  qv.querySelector(".qv-backdrop").addEventListener("click", close);
  qv.querySelector(".qv-close").addEventListener("click", close);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && qv.classList.contains("open")) close(); });

  root.addEventListener("click", (e) => {
    if (e.target.closest(".img-arrow")) return;
    const card = e.target.closest(".product-card");
    if (!card) return;
    const p = PRODUCTS.find((x) => x.id === card.dataset.id);
    if (p) open(p);
  });

  root.addEventListener("keydown", (e) => {
    const card = e.target.closest?.(".product-card");
    if (card && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); card.click(); }
  });

  return { open };
}
