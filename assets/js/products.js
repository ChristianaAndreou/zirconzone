/* =========================================================
   Zircon Zone — κατάλογος προϊόντων (ΜΙΑ πηγή για όλο το site)
   Για νέο προϊόν: πρόσθεσε μια γραμμή εδώ. Εμφανίζεται αυτόματα
   στο Collection, και αν έχει badge, και στην αρχική.
   badge: "New" -> New Arrivals στην αρχική, "Best seller" -> Most Loved
   ========================================================= */

const IMG = (n) => `images/web/${n}.webp`;

/* Ασφάλεια: αν λείπει η ελαφριά (WebP) έκδοση μιας νέας φωτογραφίας,
   δείχνουμε αυτόματα το αρχικό αρχείο από τον φάκελο images (png/jpg/jpeg). */
document.addEventListener("error", (e) => {
  const img = e.target;
  if (!(img instanceof HTMLImageElement)) return;
  const m = img.getAttribute("src")?.match(/images\/web\/(.+)\.webp$/) || img.getAttribute("src")?.match(/images\/(.+)\.(png|jpg)$/);
  if (!m) return;
  const tried = (img.dataset.tried || "").split(",").filter(Boolean);
  const next = ["png", "jpg", "jpeg", "PNG", "JPG"].find((ext) => !tried.includes(ext));
  if (!next) return;
  tried.push(next); img.dataset.tried = tried.join(",");
  img.src = `images/${m[1]}.${next}`;
}, true);

const PRODUCTS = [
  { id: "set-1", name: "Royal Teardrop Set", price: 12, category: "Sets", images: ["S7"] },
  { id: "set-2", name: "Halo Drop Set", price: 20, category: "Sets", images: ["S2", "S10", "S1"] },
  { id: "set-3", name: "Tennis Set", price: 12, category: "Sets", images: ["S5", "S6"] },
  { id: "set-4", name: "Sapphire Princess Set", price: 20, category: "Sets", images: ["S16", "S8"], badge: "Best seller" },
  { id: "set-5", name: "Emerald Royale Set", price: 20, category: "Sets", images: ["S12"] },
  { id: "set-6", name: "Blossom Charm Set", price: 20, category: "Sets", images: ["S11"], badge: "New" },
  { id: "set-7", name: "Onyx Halo Set", price: 20, category: "Sets", images: ["S13"] },
  { id: "set-8", name: "Ruby Teardrop Set", price: 20, category: "Sets", images: ["S15"] },
  { id: "set-9", name: "Pink Cascade Set", price: 20, category: "Sets", images: ["S9S"] },
  { id: "set-10", name: "Sapphire Drop Set", price: 20, category: "Sets", images: ["S14"] },

  { id: "necklace-1", name: "Square Gem Pendant", price: 17, category: "Necklaces", images: ["NECK1"], badge: "Best seller" },
  { id: "necklace-2", name: "Golden Teardrop Necklace", price: 15, category: "Necklaces", images: ["N4"], badge: "New" },
  { id: "necklace-3", name: "Golden Heart Locket", price: 15, category: "Necklaces", images: ["N3N", "N3", "N2"] },
  { id: "necklace-4", name: "Classic Snake Chain", price: 15, category: "Necklaces", images: ["N7", "N8"] },
  { id: "necklace-5", name: "Evil Eye Necklace", price: 12, category: "Necklaces", images: ["NM", "N9"] },
  { id: "necklace-6", name: "Two-Tone Link Chain", price: 8, category: "Necklaces", images: ["N5"] },
  { id: "necklace-7", name: "Two-Tone Bar Chain", price: 8, category: "Necklaces", images: ["N6"] },

  { id: "earrings-1", name: "Emerald Heart Drops", price: 14, category: "Earrings", images: ["E1E", "E1"] },
  { id: "earrings-2", name: "Cascade Fringe Earrings", price: 20, category: "Earrings", images: ["E43", "E44"] },
  { id: "earrings-3", name: "Petal Crystal Studs", price: 20, category: "Earrings", images: ["E5", "E35"] },
  { id: "earrings-4", name: "Colored Pavé Hoops", price: 20, category: "Earrings", images: ["E25E", "E26E", "E27E", "E28E"] },
  { id: "earrings-5", name: "Crystal Fringe Earrings", price: 20, category: "Earrings", images: ["E42"], badge: "New" },
  { id: "earrings-6", name: "Heart Huggies", price: 20, category: "Earrings", images: ["E47", "E29E"], badge: "Best seller" },
  { id: "earrings-7", name: "Crystal Pavé Hoops", price: 20, category: "Earrings", images: ["E19", "E41"] },
  { id: "earrings-8", name: "Champagne Fringe Earrings", price: 20, category: "Earrings", images: ["E16"] },
  { id: "earrings-9", name: "Silver Heart Drops", price: 20, category: "Earrings", images: ["E8"] },
  { id: "earrings-10", name: "Emerald Teardrop Earrings", price: 20, category: "Earrings", images: ["E33"] },
  { id: "earrings-11", name: "Crystal Teardrop Earrings", price: 20, category: "Earrings", images: ["E48"] },
  { id: "earrings-12", name: "Enamel Heart Hoops", price: 15, category: "Earrings", images: ["E46", "E12"], badge: "Best seller" },
  { id: "earrings-13", name: "White Enamel Hoops", price: 14, category: "Earrings", images: ["E14"] },
  { id: "earrings-14", name: "Triangle Drop Earrings", price: 17, category: "Earrings", images: ["E2", "E14E"] },
  { id: "earrings-15", name: "Gemstone Crystal Hoops", price: 15, category: "Earrings", images: ["E20", "E21", "E22", "E23", "E13"] },
  { id: "earrings-16", name: "Golden Flower Drops", price: 15, category: "Earrings", images: ["E49", "E3"] },
  { id: "earrings-17", name: "Halo Teardrop Earrings", price: 20, category: "Earrings", images: ["E18", "E17"] },
  { id: "earrings-18", name: "Pavé Link Earrings", price: 20, category: "Earrings", images: ["E45", "E32"] },
  { id: "earrings-19", name: "Baguette Crystal Hoops", price: 20, category: "Earrings", images: ["E19B", "E34"] },
  { id: "earrings-20", name: "Vintage Filigree Drops", price: 14, category: "Earrings", images: ["E39", "WE1"] },
  { id: "earrings-21", name: "Statement Pavé Hoops", price: 20, category: "Earrings", images: ["EB1", "EB2"] },
  { id: "earrings-22", name: "Black Enamel Link Earrings", price: 20, category: "Earrings", images: ["E15"] },
  { id: "earrings-23", name: "Crystal Bow Studs", price: 14, category: "Earrings", images: ["E50"] },

  { id: "bracelet-1", name: "Evil Eye String Bracelet", price: 7, category: "Bracelets", images: ["B7"] },
  { id: "bracelet-2", name: "Curb Chain Bracelet (for men)", price: 10, category: "Bracelets", forHim: true, images: ["B4"], badge: "New" },
  { id: "bracelet-3", name: "Colorful Pearl String Bracelet", price: 7, category: "Bracelets", images: ["B10", "B1"] },
  { id: "bracelet-4", name: "Crystal Bead Bracelet", price: 3, category: "Bracelets", images: ["B2", "B6"] },
  { id: "bracelet-5", name: "Evil Eye Macramé Bracelet", price: 7, category: "Bracelets", images: ["B5"] },
  { id: "bracelet-6", name: "Snake Chain Bracelet (for men)", price: 10, category: "Bracelets", forHim: true, images: ["B9"] },
  { id: "bracelet-7", name: "White Pearl Evil Eye Bracelet", price: 5, category: "Bracelets", images: ["B11"] },

  { id: "ring-1", name: "Golden Cross Ring", price: 10, category: "Rings", images: ["Cross"] },
  { id: "ring-2", name: "Golden Band Ring", price: 10, category: "Rings", images: ["R3"] },
  { id: "ring-3", name: "Black Onyx Sunburst Ring", price: 10, category: "Rings", images: ["R1"] },
  { id: "ring-4", name: "Amber Stone Ring", price: 7, category: "Rings", images: ["R2"] },
  { id: "ring-5", name: "Blue Heart Ring", price: 5, category: "Rings", images: ["heart"] },

];

// Add structured Product data; availability is omitted because live stock is not tracked.
(function addProductStructuredData() {
  const data = PRODUCTS.map((p) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `Zircon Zone ${p.name}`,
    "description": `${p.category} from Zircon Zone's stainless steel jewelry collection.`,
    "image": p.images.map((im) => new URL(IMG(im), location.href).href),
    "category": p.category,
    "brand": { "@type": "Brand", "name": "Zircon Zone" },
    "offers": {
      "@type": "Offer",
      "url": `https://christianaandreou.github.io/zirconzone/collection.html#${p.id}`,
      "priceCurrency": "EUR",
      "price": p.price.toFixed(2)
    }
  }));
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
})();

const CONTACT = {
  instagramDM: "https://www.instagram.com/zirconzone/",
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
        ${p.badge ? `<span class="product-tag">${esc(p.badge)}</span>` : ""}${p.forHim ? `<span class="him-tag" title="For him">◆ For him</span>` : ""}
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

/* Αντιγραφή κειμένου στο πρόχειρο (με εφεδρική λύση για παλιούς browsers) */
function copyText(text) {
  if (navigator.clipboard?.writeText) {
    return navigator.clipboard.writeText(text).then(() => true, () => legacyCopy(text));
  }
  return Promise.resolve(legacyCopy(text));
}
function legacyCopy(text) {
  try {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.cssText = "position:fixed;opacity:0;top:0;left:0";
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand("copy");
    ta.remove();
    return ok;
  } catch { return false; }
}

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
    // Μήνυμα παραγγελίας: αντιγράφεται αυτόματα και ο πελάτης κάνει απλώς επικόλληση στο Instagram DM
    const link = `https://christianaandreou.github.io/zirconzone/collection.html#${p.id}`;
    const msg = `Hi Zircon Zone! I'd like to order the ${p.name} (${euro(p.price)}). ${link}`;
    const ig = qv.querySelector(".qv-ig");
    // Αντιγράφει αθόρυβα το μήνυμα παραγγελίας (χωρίς σημείωση κάτω από τα κουμπιά)
    ig.onclick = () => { copyText(msg); };
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
