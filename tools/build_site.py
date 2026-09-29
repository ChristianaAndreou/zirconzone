from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent  # το repo
W = lambda n: f"images/web/{n}.webp"

ICON = {
    "ig": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor"/></svg>',
    "fb": '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.3H7.9v3h2.6V21h3z"/></svg>',
    "tt": '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.6 3c.3 2.2 1.6 3.6 3.9 3.8v2.6c-1.4.1-2.6-.3-3.9-1.1v5.3c0 6.4-7 8.4-9.8 3.8-1.8-3-.7-8.2 5.3-8.4v2.8c-.5.1-1 .2-1.4.4-1.4.5-2.2 1.4-2 3 .4 3 5.9 3.9 5.4-2V3h2.5z"/></svg>',
    "mail": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="1"/><path d="m3 6 9 7 9-7"/></svg>',
    "close": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M5 5l14 14M19 5 5 19"/></svg>',
}


WAVE_FILL = """<svg class="wave-fill" viewBox="0 0 1440 150" preserveAspectRatio="none" aria-hidden="true">
      <path fill="#d84e9c" opacity=".22" d="M0,70 C220,20 420,130 720,80 C1000,34 1220,40 1440,90 L1440,150 L0,150Z"/>
      <path fill="#d84e9c" opacity=".5" d="M0,105 C260,60 520,140 800,100 C1060,64 1260,86 1440,112 L1440,150 L0,150Z"/>
      <path fill="#d84e9c" d="M0,128 C300,100 560,150 860,126 C1120,106 1300,118 1440,130 L1440,150 L0,150Z"/>
    </svg>"""
WAVE_FILL_DOWN = WAVE_FILL.replace('class="wave-fill"', 'class="wave-fill wave-fill--down"')
WAVE_LINES = """<svg class="wave-lines" viewBox="0 0 1440 320" preserveAspectRatio="none" aria-hidden="true">
      <path d="M-20,210 C240,120 460,300 760,190 C1040,90 1220,170 1460,110" stroke-width="2.5" opacity=".9"/>
      <path d="M-20,232 C240,142 460,322 760,212 C1040,112 1220,192 1460,132" stroke-width="1.5" opacity=".7"/>
      <path d="M-20,254 C240,164 460,344 760,234 C1040,134 1220,214 1460,154" stroke-width="1.2" opacity=".55"/>
    </svg>"""

NAV = [("index.html", "Home"), ("about.html", "About"), ("collection.html", "Collection"), ("orders.html", "Orders"), ("customers.html", "Customers"), ("events.html", "Events")]

def head(title, desc, image="N4"):
    full = "Home | Zircon Zone" if title is None else f"{title} | Zircon Zone"
    og = "Zircon Zone — Stainless Steel Jewelry" if title is None else full
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{full}</title>
  <meta name="description" content="{desc}">
  <meta name="theme-color" content="#ffffff">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Zircon Zone">
  <meta property="og:title" content="{og}">
  <meta property="og:description" content="{desc}">
  <meta property="og:image" content="https://christianaandreou.github.io/zirconzone/{W(image)}">
  <link rel="icon" href="images/faviconzz.ico" type="image/x-icon">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Jost:wght@300;400;500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="assets/css/style.css?v=81">

  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-80L94WF2SH"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){{dataLayer.push(arguments);}}
    gtag('js', new Date());
    gtag('config', 'G-80L94WF2SH');
  </script>
</head>
<body>
"""

def header():
    nav = "\n".join(f'        <a href="{h}">{t}</a>' for h, t in NAV)
    mob = "\n".join(f'    <a href="{h}">{t}</a>' for h, t in NAV)
    return f"""
  <header class="site-header">
    <div class="container header-inner">
      <a href="index.html" class="logo" aria-label="Zircon Zone home"><img src="images/web/logo.png" alt="Zircon Zone" width="600" height="298"></a>
      <nav class="nav" aria-label="Main">
{nav}
      </nav>
      <div class="header-right">
        <button class="menu-toggle" aria-label="Menu" aria-expanded="false"><span></span><span></span></button>
      </div>
    </div>
  </header>

  <div class="mobile-menu">
{mob}
  </div>
"""

CTA = f"""
  {WAVE_FILL}
  <section class="section cta-band">
    <div class="container reveal">
      <span class="eyebrow">Orders</span>
      <h2>Order via social media</h2>
      <p>Send us a message through Instagram or Facebook to place your order.</p>
      <div class="actions">
        <a href="https://www.instagram.com/zirconzone" target="_blank" rel="noopener" class="cta-icon" aria-label="Instagram">{ICON['ig']}</a>
        <a href="https://www.facebook.com/profile.php?id=100092590311027" target="_blank" rel="noopener" class="cta-icon" aria-label="Facebook">{ICON['fb']}</a>
      </div>
    </div>
  </section>
"""

def footer(scripts=""):
    return f"""
  <footer class="site-footer site-footer--simple">
    <div class="socials">
      <a href="https://www.instagram.com/zirconzone" target="_blank" rel="noopener" aria-label="Instagram">{ICON['ig']}</a>
      <a href="https://www.facebook.com/profile.php?id=100092590311027" target="_blank" rel="noopener" aria-label="Facebook">{ICON['fb']}</a>
      <a href="https://www.tiktok.com/@zircon_zone" target="_blank" rel="noopener" aria-label="TikTok">{ICON['tt']}</a>
      <a href="mailto:zirconzonejewelry@gmail.com" aria-label="Email">{ICON['mail']}</a>
    </div>
    <p>© 2026 Zircon Zone. All rights reserved.</p>
  </footer>
  <script src="assets/js/main.js?v=81"></script>
{scripts}
</body>
</html>
"""

QUICKVIEW = f"""
  <div class="qv" id="quickview" aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="qv-title">
    <div class="qv-backdrop"></div>
    <div class="qv-panel">
      <button class="qv-close" aria-label="Close">{ICON['close']}</button>
      <div class="qv-gallery">
        <img class="qv-main" alt="" width="800" height="1000">
        <div class="qv-thumbs"></div>
      </div>
      <div class="qv-body">
        <span class="eyebrow qv-cat"></span>
        <h2 class="qv-title" id="qv-title"></h2>
        <p class="qv-price"></p>
        <div class="qv-actions">
          <a class="btn qv-ig" href="https://ig.me/m/zirconzone" target="_blank" rel="noopener">{ICON['ig']} Order on Instagram</a>
          <a class="btn btn--ghost" href="https://www.facebook.com/profile.php?id=100092590311027" target="_blank" rel="noopener">{ICON['fb']} Order on Facebook</a>
        </div>
      </div>
    </div>
  </div>
"""

def section_head(label, title, link=None, center=False, lead=None):
    l = f'\n          <a href="{link[0]}" class="link-arrow">{link[1]}</a>' if link else ""
    ld = f'<p class="lead">{lead}</p>' if lead else ""
    if center:
        return f'''<div class="section-head section-head--center reveal">
          <span class="eyebrow">{label}</span><h2>{title}</h2>{ld}
        </div>'''
    return f'''<div class="section-head reveal">
          <div><span class="eyebrow">{label}</span><h2>{title}</h2>{ld}</div>{l}
        </div>'''


DIAMOND_PATH = "M-13,-17 H13 Q15,-17 16,-15.5 L20,-8.5 Q21,-7 20,-5.5 L1.5,17 Q0,18.5 -1.5,17 L-20,-5.5 Q-21,-7 -20,-8.5 L-16,-15.5 Q-15,-17 -13,-17Z"
def diamonds(spots):
    out = []
    for i, (x, y, size, op) in enumerate(spots):
        out.append(f'<span class="dia d{i % 5}" style="left:{x}%;top:{y}%;width:{size}px;opacity:{op}"><svg viewBox="-23 -21 46 42"><path d="{DIAMOND_PATH}" fill="#d84e9c" stroke="#1b1918" stroke-width="3" stroke-linejoin="round"/></svg></span>')
    return '<div class="dias" aria-hidden="true">' + "".join(out) + '</div>'
PAGE_DIAS = diamonds([(12, 22, 30, .9), (22, 58, 16, .5), (84, 18, 22, .8), (90, 52, 34, .9), (74, 70, 14, .5), (6, 72, 18, .6)])
HERO_DIAS = diamonds([(6, 14, 26, .85), (40, 10, 16, .5), (52, 40, 22, .8), (3, 80, 14, .5), (95, 8, 18, .6)])

def page_hero(label, title, lead=None, dias=True, extra="", soft=False):
    ld = f'\n      <p class="lead">{lead}</p>' if lead else ""
    soft_svg = '<svg class="hero-fill hero-soft" viewBox="0 0 1440 320" preserveAspectRatio="none" aria-hidden="true"><path d="M-20,254 C240,164 460,344 760,234 C1040,134 1220,214 1460,154 L1460,330 L-20,330 Z" fill="#f7e6ee"/></svg>' if soft else ''
    return f'''    <section class="page-hero-wrap{' page-hero-wrap--soft' if soft else ''}">
    {soft_svg}
    <svg class="hero-fill" viewBox="0 0 1440 320" preserveAspectRatio="none" aria-hidden="true"><path d="M-20,-6 L1460,-6 L1460,110 C1220,170 1040,90 760,190 C460,300 240,120 -20,210 Z" fill="#d84e9c"/></svg>
    <span class="hero-rule" aria-hidden="true"></span>
    {PAGE_DIAS if dias else ""}
    <div class="page-hero container">
      <span class="eyebrow">{label}</span>
      <h1>{title}</h1>{ld}{extra}
    </div>
    </section>'''

# ------------------------------------------------------------------ INDEX
CATS = [("Earrings", "E47"), ("Necklaces", "NECK1"), ("Sets", "S16"), ("Bracelets", "B7"), ("Rings", "R3")]
cat_tiles = "\n".join(
    f"""        <a href="collection.html?c={c}" class="cat-tile">
          <div class="cat-media"><img src="{W(img)}" alt="{c}" loading="lazy"></div>
          <span>{c}</span>
        </a>""" for i, (c, img) in enumerate(CATS))

index = head(None, "Zircon Zone is an online jewelry shop offering carefully selected stainless steel pieces designed for everyday shine.") + header() + f"""
  <main>
    <section class="hero-wrap">
    {HERO_DIAS}
    <div class="container hero">
      <div class="hero-copy reveal">
        <h1>Zircon Zone</h1>
        <p class="tagline"><em>It's all about shine and sparkle</em></p>
        <p class="lead">Zircon Zone is an online jewelry shop offering carefully selected pieces designed for everyday shine.</p>
        <div class="hero-actions">
          <a href="collection.html" class="btn">Explore our Collection</a>
        </div>
      </div>
      <div class="hero-media reveal">
        <img class="main" src="{W('NM')}" alt="Necklace 5" width="800" height="1000" fetchpriority="high">
        <img class="float" src="{W('E19B-zoom')}" alt="Earrings 19" width="400" height="300">
      </div>
    </div>
    </section>

    <section class="section section--paper" id="new">
      <div class="container">
        {section_head("New In", "New Arrivals")}
        <div class="product-grid" data-badge="New"></div>
      </div>
    </section>

    <section class="section section--paper">
      <div class="container">
        {section_head("Best Sellers", "Most Loved")}
        <div class="product-grid" data-badge="Best seller"></div>
      </div>
    </section>

    <section class="section section--pink">
      <div class="container">
        {section_head("Collection", "Shop by Category", center=True)}
        <div class="cat-grid">
{cat_tiles}
        </div>
      </div>
    </section>

    <section class="section section--paper">
      <div class="container">
        {section_head("Customers", "Happy Customers", ("customers.html", "View More"))}
        <div class="ugc-grid">
          <a href="customers.html#customer1" class="ugc reveal"><img src="{W('customer1')}" alt="Customer 1" loading="lazy"></a>
          <a href="customers.html#customer2" class="ugc reveal"><img src="{W('customer2')}" alt="Customer 2" loading="lazy"></a>
          <a href="customers.html#customer3" class="ugc reveal"><img src="{W('customer3')}" alt="Customer 3" loading="lazy"></a>
        </div>
      </div>
    </section>

    <section class="section section--pink">
      <div class="container">
        {section_head("Events", "Markets", ("events.html", "See More"), lead="From online presence to real-life events.")}
        <div class="market-cards">
          <a href="events.html#orama" class="market-card reveal">
            <div class="mc-img"><img src="{W('orama1')}" alt="Orama Market" loading="lazy"></div>
            <div class="mc-body"><span class="mc-date">29 | November | 2025</span><h3>Orama Market</h3><span class="link-arrow">See More</span></div>
          </a>
          <a href="events.html#fyf" class="market-card reveal">
            <div class="mc-img"><img src="{W('FYF1')}" alt="For You(th) Festival" loading="lazy"></div>
            <div class="mc-body"><span class="mc-date">9 | May | 2026</span><h3>For You(th) Festival</h3><span class="link-arrow">See More</span></div>
          </a>
        </div>
      </div>
    </section>

    <section class="section section--paper">
      <div class="container home-about">
        <div class="split-body reveal">
          <span class="eyebrow">About</span>
          <h2>About Zircon Zone</h2>
          <p class="lead">Modern stainless steel jewelry designed for everyday wear. Elegant, durable, and made to shine.</p>
          <a href="about.html" class="link-arrow">Read More</a>
        </div>
      </div>
    </section>
  </main>
{QUICKVIEW}""" + footer("""
  <script src="assets/js/products.js?v=81"></script>
  <script>
    document.querySelectorAll(".product-grid[data-badge]").forEach((grid) => {
      grid.innerHTML = PRODUCTS.filter((p) => p.badge === grid.dataset.badge).slice(0, 4).map(productCard).join("");
      observeReveal(grid);
    });
    setupQuickView();
  </script>""")

# ------------------------------------------------------------------ COLLECTION
collection = head("Collection", "Discover the Zircon Zone collection: stainless steel sets, earrings, necklaces, bracelets and rings.", "S16") + header() + f"""
  <main>
{page_hero("Collection", "Discover our Collection", "Discover carefully selected pieces designed for everyday shine.", dias=False)}

    <div class="toolbar">
      <div class="container toolbar-inner">
        <div class="filters" role="tablist" aria-label="Categories"></div>
        <label class="sort">Sort
          <select id="sort">
            <option value="featured">Featured</option>
            <option value="price-asc">Price: low to high</option>
            <option value="price-desc">Price: high to low</option>
            <option value="new">New in</option>
            <option value="best">Best sellers</option>
          </select>
        </label>
      </div>
    </div>

    <section class="band band--paper"><div class="container" style="padding-bottom:var(--section)">
      <div id="productGrid" class="product-grid"></div>
    </div></section>
  </main>
{QUICKVIEW}""" + footer("""
  <script src="assets/js/products.js?v=81"></script>
  <script>
    const CATEGORIES = ["All", "Sets", "Earrings", "Necklaces", "Bracelets", "Rings"];
    const grid = document.getElementById("productGrid");
    const filters = document.querySelector(".filters");
    const sortSel = document.getElementById("sort");
    const params = new URLSearchParams(location.search);
    let current = CATEGORIES.includes(params.get("c")) ? params.get("c") : "All";

    filters.innerHTML = CATEGORIES.map((c) => `<button class="filter-btn" role="tab" data-c="${c}">${c}</button>`).join("");

    function render() {
      let list = current === "All" ? [...PRODUCTS] : PRODUCTS.filter((p) => p.category === current);
      if (sortSel.value === "price-asc") list.sort((a, b) => a.price - b.price);
      if (sortSel.value === "price-desc") list.sort((a, b) => b.price - a.price);
      if (sortSel.value === "new") list.sort((a, b) => (b.badge === "New") - (a.badge === "New"));
      if (sortSel.value === "best") list.sort((a, b) => (b.badge === "Best seller") - (a.badge === "Best seller"));
      grid.innerHTML = list.map(productCard).join("");
      filters.querySelectorAll(".filter-btn").forEach((b) => {
        const on = b.dataset.c === current;
        b.classList.toggle("active", on); b.setAttribute("aria-selected", on);
      });
      observeReveal(grid);
    }

    filters.addEventListener("click", (e) => {
      const b = e.target.closest(".filter-btn"); if (!b) return;
      current = b.dataset.c;
      const url = new URL(location); current === "All" ? url.searchParams.delete("c") : url.searchParams.set("c", current);
      url.hash = ""; history.replaceState(null, "", url);
      render();
    });
    sortSel.addEventListener("change", render);

    render();
    const qv = setupQuickView();
    // Links τύπου collection.html#earrings-6 ανοίγουν απευθείας το προϊόν
    const fromHash = PRODUCTS.find((p) => p.id === location.hash.slice(1));
    if (fromHash) { document.getElementById(fromHash.id)?.scrollIntoView({ block: "center" }); qv.open(fromHash); }
  </script>""")

# ------------------------------------------------------------------ ABOUT
ABOUT_HERO = page_hero("About", "About Zircon Zone", '"It\'s all about shine and sparkle" <br>A little sparkle for every moment.', dias=False)
about = head("About", "About Zircon Zone — carefully selected stainless steel jewelry designed for everyday elegance and special occasions.", "S16") + header() + f"""
  <main>
{ABOUT_HERO}

    <section class="about-brush">
      <svg class="jewel" viewBox="0 0 1440 760" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <!-- λάμψεις -->
        <g fill="#d84e9c">
          <path class="spark k1" transform="translate(250 250) scale(0.72)" d="M-13,-17 H13 Q15,-17 16,-15.5 L20,-8.5 Q21,-7 20,-5.5 L1.5,17 Q0,18.5 -1.5,17 L-20,-5.5 Q-21,-7 -20,-8.5 L-16,-15.5 Q-15,-17 -13,-17Z" stroke="#1b1918" stroke-width="3" stroke-linejoin="round"/><path class="spark k2" transform="translate(1190 260) scale(0.59)" d="M-13,-17 H13 Q15,-17 16,-15.5 L20,-8.5 Q21,-7 20,-5.5 L1.5,17 Q0,18.5 -1.5,17 L-20,-5.5 Q-21,-7 -20,-8.5 L-16,-15.5 Q-15,-17 -13,-17Z" stroke="#1b1918" stroke-width="3" stroke-linejoin="round"/><path class="spark k3" transform="translate(1110 590) scale(0.85)" d="M-13,-17 H13 Q15,-17 16,-15.5 L20,-8.5 Q21,-7 20,-5.5 L1.5,17 Q0,18.5 -1.5,17 L-20,-5.5 Q-21,-7 -20,-8.5 L-16,-15.5 Q-15,-17 -13,-17Z" stroke="#1b1918" stroke-width="3" stroke-linejoin="round"/><path class="spark k4" transform="translate(330 440) scale(0.45)" d="M-13,-17 H13 Q15,-17 16,-15.5 L20,-8.5 Q21,-7 20,-5.5 L1.5,17 Q0,18.5 -1.5,17 L-20,-5.5 Q-21,-7 -20,-8.5 L-16,-15.5 Q-15,-17 -13,-17Z" stroke="#1b1918" stroke-width="3" stroke-linejoin="round"/><path class="spark k5" transform="translate(960 150) scale(0.39)" d="M-13,-17 H13 Q15,-17 16,-15.5 L20,-8.5 Q21,-7 20,-5.5 L1.5,17 Q0,18.5 -1.5,17 L-20,-5.5 Q-21,-7 -20,-8.5 L-16,-15.5 Q-15,-17 -13,-17Z" stroke="#1b1918" stroke-width="3" stroke-linejoin="round"/><path class="spark k2" transform="translate(520 610) scale(0.36)" d="M-13,-17 H13 Q15,-17 16,-15.5 L20,-8.5 Q21,-7 20,-5.5 L1.5,17 Q0,18.5 -1.5,17 L-20,-5.5 Q-21,-7 -20,-8.5 L-16,-15.5 Q-15,-17 -13,-17Z" stroke="#1b1918" stroke-width="3" stroke-linejoin="round"/><path class="spark k4" transform="translate(1350 360) scale(0.33)" d="M-13,-17 H13 Q15,-17 16,-15.5 L20,-8.5 Q21,-7 20,-5.5 L1.5,17 Q0,18.5 -1.5,17 L-20,-5.5 Q-21,-7 -20,-8.5 L-16,-15.5 Q-15,-17 -13,-17Z" stroke="#1b1918" stroke-width="3" stroke-linejoin="round"/>
        </g>
      </svg>
      <div class="container about-text reveal">
        <p class="story-lead">Zircon Zone offers carefully selected stainless steel jewelry designed for everyday elegance and special occasions.</p>
        <span class="story-rule" aria-hidden="true"></span>
        <p class="lead">Each piece combines elegance, durability, and a touch of everyday shine.</p>
        <a href="collection.html" class="btn">Discover our Collection</a>
      </div>
    </section>


    <section class="section section--paper">
      <div class="container">
        <div class="section-head section-head--center reveal">
          <span class="eyebrow">Collection</span><h2>A little sparkle for <em>every</em> moment</h2>
        </div>
        <div class="stats reveal">
          <div><strong data-count="pieces">50+</strong><span>Pieces</span></div>
          <div><strong data-count="categories">5</strong><span>Categories</span></div>
          <div><strong>2</strong><span>Markets</span></div>
        </div>
      </div>
    </section>
  </main>
""" + footer("""
  <script src="assets/js/products.js?v=81"></script>
  <script>
    const n = document.querySelector('[data-count="pieces"]'); if (n) n.textContent = PRODUCTS.length;
    const c = document.querySelector('[data-count="categories"]'); if (c) c.textContent = new Set(PRODUCTS.map((p) => p.category)).size;
  </script>""")

# ------------------------------------------------------------------ CUSTOMERS
cust = [("customer5", "Golden touch of elegance."), ("customer2", "Simple and elegant."), ("customer4", "From simple looks to night-out glow."), ("customer3", "Love the shine!"), ("customer1", "Perfect for everyday looks.")]
figs = "\n".join(f'          <figure class="ugc reveal" id="customer{i+1}" style="margin:0"><img src="{W(img)}" alt="Customer {i+1}" loading="lazy"><figcaption>{cap}</figcaption></figure>' for i, (img, cap) in enumerate(cust))
customers = head("Customers", "Happy Zircon Zone customers — real customers, real looks, and everyday sparkle.", "customer5") + header() + f"""
  <main>
{page_hero("Customers", "Happy Customers", "Real customers, real looks, and everyday sparkle.", dias=False)}

    <section class="band band--paper"><div class="container" style="padding-block:clamp(32px,4vw,56px) clamp(48px,6vw,90px)">
      <div class="ugc-grid ugc-grid--wall">
{figs}
      </div>
    </div></section>
  </main>
""" + footer()

# ------------------------------------------------------------------ EVENTS
def event(anchor, date, title, paras, main, gallery, reverse=False):
    ps = "\n".join(f'            <p class="lead">{p}</p>' for p in paras)
    imgs = [main] + gallery
    tiles = "\n".join(f'            <button class="mosaic-tile t{i}" data-full="{W(g)}" aria-label="{title} photo {i+1}"><img src="{W(g)}" alt="{title}" loading="lazy"></button>' for i, g in enumerate(imgs))
    return f"""
      <article class="event event--compact">
        <div class="split{' split--reverse' if reverse else ''}">
          <div class="mosaic reveal">
{tiles}
          </div>
          <div class="split-body reveal">
            <span class="event-date">{date}</span>
            <h2>{title}</h2>
{ps}
          </div>
        </div>
      </article>"""

events = head("Events", "Zircon Zone events — Orama Market and For You(th) Festival. From online presence to real-life events.", "orama1") + header() + f"""
  <main>
{page_hero("Events", "Markets We've Joined", "From online presence to real-life events.", dias=False)}

    <section class="events-list">
      <div class="ev-band-pink">
      <h2 class="event-name reveal" id="orama">Orama Market</h2>
{event("orama", "29 | November | 2025", "Our First Market Experience", [
    "We proudly participated for the first time in a market event organized by <strong>@orama.cyprus</strong>, focused on innovation and young start-up businesses. ❤️",
    "It was a wonderful opportunity for visitors to discover our creations in person and experience Zircon Zone beyond the online world. ✨",
    "Thank you for your support! ❤️"], "orama1", ["orama2", "orama3"])}
      </div>
      <div class="ev-band-paper">
      <h2 class="event-name reveal" id="fyf">For You(th) Festival</h2>
{event("fyf", "9 | May | 2026", "Our Second Market Experience", [
    "We proudly participated in <strong>For You(th) Festival</strong> - an event organized by the Limassol Municipality, that brought young people together through creativity, connection, and well-being. ❤️",
    "It was a lovely opportunity to present Zircon Zone creations in person and connect with visitors through our jewelry pieces. ✨",
    "Thank you for choosing us! ❤️"], "FYF1", ["fyf2", "fyf3"])}
      </div>
    </section>

  </main>
  <div class="lightbox" id="lightbox" aria-hidden="true"><button class="lb-close" aria-label="Close">{ICON['close']}</button><img alt=""></div>
""" + footer("""
  <script>
    const lb = document.getElementById("lightbox"), lbImg = lb.querySelector("img");
    document.querySelectorAll(".mosaic-tile").forEach((t) => t.addEventListener("click", () => {
      lbImg.src = t.dataset.full; lb.classList.add("open"); document.body.style.overflow = "hidden";
    }));
    const close = () => { lb.classList.remove("open"); document.body.style.overflow = ""; };
    lb.addEventListener("click", close);
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
  </script>""")

# ------------------------------------------------------------------ ORDERS
ORDER_ICONS = f'''
      <div class="actions hero-icons order-pills">
        <a href="https://www.instagram.com/zirconzone" target="_blank" rel="noopener" class="order-pill">{ICON['ig']}<span>Instagram</span></a>
        <a href="https://www.facebook.com/profile.php?id=100092590311027" target="_blank" rel="noopener" class="order-pill">{ICON['fb']}<span>Facebook</span></a>
        <a href="mailto:zirconzonejewelry@gmail.com" class="order-pill">{ICON['mail']}<span>Email</span></a>
      </div>'''
orders = head("Orders", "Order Zircon Zone jewelry via social media — send us a message through Instagram or Facebook, or email us.") + header() + f"""
  <main>
{page_hero("Orders", "Order via <em>social media</em> or <em>email</em>", "Send us a message through Instagram, Facebook or email to place your order.", dias=False, extra=ORDER_ICONS, soft=True)}

    <section class="section section--pink">
      <div class="container">
        <div class="section-head section-head--center reveal"><span class="eyebrow">Questions</span><h2>Good to know</h2></div>
        <div class="faq reveal">
          <details><summary>How do I place an order?</summary><p>Send us the name of the piece on Instagram, Facebook or by email at <a href="mailto:zirconzonejewelry@gmail.com" style="text-decoration:underline">zirconzonejewelry@gmail.com</a>. We’ll confirm availability and everything else with you.</p></details>
          <details><summary>Do you ship abroad?</summary><p>Yes! We ship to all EU countries. Shipping details are shared with you when we confirm your order.</p></details>
          <details><summary>How do payment and delivery work?</summary><p>All orders must be paid in advance. Once we confirm your order, we’ll share the payment details with you. Orders are then sent to your nearest Akis Express store or BOX NOW locker.</p></details>
          <details><summary>Do you have jewelry for men?</summary><p>Yes! We also have pieces for men. Check our <a href="collection.html?c=Bracelets" style="text-decoration:underline">collection</a> or send us a message and we’ll help you choose.</p></details>
          <details><summary>Can I see the pieces in person?</summary><p>We are an online shop, but we regularly take part in markets and festivals in Cyprus. Check our <a href="events.html" style="text-decoration:underline">events</a> and follow us on Instagram for the next one.</p></details>
        </div>
      </div>
    </section>
  </main>
""" + footer()

index = index.replace("<body>", '<body class="home">', 1)
for name, html in {"index": index, "collection": collection, "about": about, "customers": customers, "events": events, "orders": orders}.items():
    (ROOT / f"{name}.html").write_text(html, encoding="utf-8")
print("ok")
