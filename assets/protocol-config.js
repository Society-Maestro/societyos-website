// SocietyOS Brand Protocol System
// Controls which case brand is displayed across all SocietyOS surfaces
// Switch by changing ACTIVE_PROTOCOL below or via Maestro command

const SOCIETYOS_PROTOCOLS = {

  // ═══════════════════════════════════════════════════
  // SOCIETYOS PROTOCOL — Our own branded cases
  // Liquid glass morphing animation, SocietyOS branding
  // ═══════════════════════════════════════════════════
  societyos: {
    name: "SocietyOS Protocol",
    brand: "SocietyOS",
    logo: "assets/societyos-ares-4.png",
    tagline: "Sovereign Protection for Sovereign Devices",
    visualStyle: "liquid-glass-morph",
    cases: [
      {
        id: "sos-aramid-fold8",
        name: "SocietyOS Sovereign Case — Aramid Fiber",
        device: "Samsung Galaxy Fold 8 Ultra",
        material: "Woven Aramid Fiber",
        features: ["Recessed Locking MagSafe", "Full Front Panel Protection", "Hinge Coverage", "Ultra-Slim Profile"],
        colors: ["Obsidian Black", "Graphite Gray", "Society Gold", "Midnight Blue"],
        price: 89.99,
        msrp: 89.99,
        sku: "SOS-AF-F8U",
        renderStyle: "liquid-glass"
      },
      {
        id: "sos-aramid-fold7",
        name: "SocietyOS Sovereign Case — Aramid Fiber",
        device: "Samsung Galaxy Fold 7",
        material: "Woven Aramid Fiber",
        features: ["Recessed Locking MagSafe", "Full Front Panel Protection", "Hinge Coverage", "Ultra-Slim Profile"],
        colors: ["Obsidian Black", "Graphite Gray", "Society Gold", "Midnight Blue"],
        price: 84.99,
        msrp: 84.99,
        sku: "SOS-AF-F7",
        renderStyle: "liquid-glass"
      },
      {
        id: "sos-aramid-iphone18",
        name: "SocietyOS Sovereign Case — Aramid Fiber",
        device: "iPhone 18 Pro / Pro Max",
        material: "Woven Aramid Fiber",
        features: ["Recessed Locking MagSafe", "Full Front Panel Protection", "Ultra-Slim Profile"],
        colors: ["Obsidian Black", "Graphite Gray", "Society Gold", "Midnight Blue"],
        price: 79.99,
        msrp: 79.99,
        sku: "SOS-AF-i18",
        renderStyle: "liquid-glass"
      },
      {
        id: "sos-vegan-fold8",
        name: "SocietyOS Sovereign Case — Vegan Leather",
        device: "Samsung Galaxy Fold 8 Ultra",
        material: "Biodegradable Vegan Leather",
        features: ["Recessed Locking MagSafe", "Full Front Panel Protection", "Hinge Coverage", "Soft Touch"],
        colors: ["Black", "Gray", "White", "Dark Cherry", "Dark Blue"],
        price: 59.99,
        msrp: 59.99,
        sku: "SOS-VL-F8U",
        renderStyle: "liquid-glass"
      },
      {
        id: "sos-aramid-iphone-ultra",
        name: "SocietyOS Sovereign Case — Aramid Fiber",
        device: "iPhone Ultra (Foldable)",
        material: "Woven Aramid Fiber",
        features: ["Recessed Locking MagSafe", "Full Front Panel Protection", "Hinge Coverage", "Ultra-Slim Profile"],
        colors: ["Obsidian Black", "Graphite Gray", "Society Gold", "Midnight Blue"],
        price: 89.99,
        msrp: 89.99,
        sku: "SOS-AF-iU",
        renderStyle: "liquid-glass"
      }
    ]
  },

  // ═══════════════════════════════════════════════════
  // RAPTIC PROTOCOL — Real Raptic products
  // Product photos, Raptic branding, Raptic pricing
  // ═══════════════════════════════════════════════════
  raptic: {
    name: "Raptic Protocol",
    brand: "Raptic",
    logo: "assets/societyos-ares-4.png",
    tagline: "Premium Cases by Raptic — A SocietyOS Partner",
    visualStyle: "product-photos",
    cases: [
      {
        id: "ip17pm-aramid-skin-rise",
        name: "Raptic Aramid Skin MagSafe for iPhone 17 Pro Max - Rise",
        device: "iPhone 17 Pro Max",
        material: "Aramid Fiber",
        features: ["Ultra-thin, ultra-light", "MagSafe compatible", "Aerospace-grade aramid fiber"],
        colors: ["Rise"],
        price: 59.90,
        msrp: 59.90,
        sku: "RAP-AS-Rise-i17PM",
        image: "case-images/raptic-ip17pm-aramid-skin-rise.jpg",
        renderStyle: "product-photo"
      },
      {
        id: "ip17pm-aramid-skin-sky",
        name: "Raptic Aramid Skin-Origin for iPhone 17 Pro Max - Sky",
        device: "iPhone 17 Pro Max",
        material: "Aramid Fiber",
        features: ["Ultra-thin, ultra-light", "MagSafe compatible", "Scratch resistance"],
        colors: ["Sky"],
        price: 57.99,
        msrp: 57.99,
        sku: "RAP-ASO-Sky-i17PM",
        image: "case-images/raptic-ip17pm-aramid-skin-sky.jpg",
        renderStyle: "product-photo"
      },
      {
        id: "ip17pm-aramid-skin-ocean",
        name: "Raptic Aramid Skin-Origin for iPhone 17 Pro Max - Ocean",
        device: "iPhone 17 Pro Max",
        material: "Aramid Fiber",
        features: ["Ultra-thin, ultra-light", "MagSafe compatible", "Scratch resistance"],
        colors: ["Ocean"],
        price: 57.99,
        msrp: 57.99,
        sku: "RAP-ASO-Ocean-i17PM",
        image: "case-images/raptic-ip17pm-aramid-skin-ocean.jpg",
        renderStyle: "product-photo"
      },
      {
        id: "ip17pm-aramid-skin-profound",
        name: "Raptic Aramid Skin-Origin for iPhone 17 Pro Max - Profound",
        device: "iPhone 17 Pro Max",
        material: "Aramid Fiber",
        features: ["Ultra-thin, ultra-light", "MagSafe compatible", "Scratch resistance"],
        colors: ["Profound"],
        price: 57.99,
        msrp: 57.99,
        sku: "RAP-ASO-Profound-i17PM",
        image: "case-images/raptic-ip17pm-aramid-skin-profound.jpg",
        renderStyle: "product-photo"
      },
      {
        id: "ip17pm-aramid-skin-humble",
        name: "Raptic Aramid Skin-Origin for iPhone 17 Pro Max - Humble",
        device: "iPhone 17 Pro Max",
        material: "Aramid Fiber",
        features: ["Ultra-thin, ultra-light", "MagSafe compatible", "Scratch resistance"],
        colors: ["Humble"],
        price: 57.99,
        msrp: 57.99,
        sku: "RAP-ASO-Humble-i17PM",
        image: "case-images/raptic-ip17pm-aramid-skin-humble.jpg",
        renderStyle: "product-photo"
      },
      {
        id: "ip17pm-aramid-skin-bionic-snake",
        name: "Raptic Aramid Skin-Bionic for iPhone 17 Pro Max - Snake",
        device: "iPhone 17 Pro Max",
        material: "Aramid Fiber",
        features: ["Ultra-thin, ultra-light", "MagSafe compatible", "Bionic design"],
        colors: ["Snake"],
        price: 57.99,
        msrp: 57.99,
        sku: "RAP-ASB-Snake-i17PM",
        image: "case-images/raptic-ip17pm-aramid-skin-bionic-snake.jpg",
        renderStyle: "product-photo"
      },
      {
        id: "ip17pm-aramid-dual-600d",
        name: "Raptic Aramid Dual MagSafe for iPhone 17 Pro Max - 600D",
        device: "iPhone 17 Pro Max",
        material: "Aramid Fiber",
        features: ["Ultra-thin, ultra-light", "MagSafe compatible", "Dual-layer construction"],
        colors: ["600D"],
        price: 57.99,
        msrp: 57.99,
        sku: "RAP-AD-600D-i17PM",
        image: "case-images/raptic-ip17pm-aramid-dual-600d.jpg",
        renderStyle: "product-photo"
      },
      {
        id: "ip17pm-aramid-geotik-mondrian",
        name: "Raptic Aramid Geotik for iPhone 17 Pro Max - Mondrian",
        device: "iPhone 17 Pro Max",
        material: "Aramid Fiber",
        features: ["Ultra-thin, ultra-light", "MagSafe compatible", "Geometric design"],
        colors: ["Mondrian"],
        price: 57.99,
        msrp: 57.99,
        sku: "RAP-AG-Mondrian-i17PM",
        image: "case-images/raptic-ip17pm-aramid-geotik-mondrian.jpg",
        renderStyle: "product-photo"
      },
      {
        id: "ip17pm-shield-classic-black",
        name: "Raptic Shield Classic MagSafe for iPhone 17 Pro Max - Black",
        device: "iPhone 17 Pro Max",
        material: "Polycarbonate + TPU",
        features: ["Military-grade drop protection", "MagSafe compatible", "Clear back panel"],
        colors: ["Black"],
        price: 29.99,
        msrp: 29.99,
        sku: "RAP-SC-Black-i17PM",
        image: "case-images/raptic-ip17pm-shield-classic-black.jpg",
        renderStyle: "product-photo"
      },
      {
        id: "ip17pm-shield-classic-iridescent",
        name: "Raptic Shield Classic MagSafe for iPhone 17 Pro Max - Iridescent",
        device: "iPhone 17 Pro Max",
        material: "Polycarbonate + TPU",
        features: ["Military-grade drop protection", "MagSafe compatible", "Iridescent finish"],
        colors: ["Iridescent"],
        price: 29.99,
        msrp: 29.99,
        sku: "RAP-SC-Iridescent-i17PM",
        image: "case-images/raptic-ip17pm-shield-classic-iridescent.jpg",
        renderStyle: "product-photo"
      },
      {
        id: "ip17pm-air-clear-clear",
        name: "Raptic Air Clear MagSafe for iPhone 17 Pro Max - Clear",
        device: "iPhone 17 Pro Max",
        material: "Clear TPU",
        features: ["MagSafe compatible", "Non-yellowing clear", "Slim profile"],
        colors: ["Clear"],
        price: 23.99,
        msrp: 23.99,
        sku: "RAP-AC-Clear-i17PM",
        image: "case-images/raptic-ip17pm-air-clear-clear.jpg",
        renderStyle: "product-photo"
      },
      {
        id: "ip17pm-air-clear-black",
        name: "Raptic Air Clear MagSafe for iPhone 17 Pro Max - Black",
        device: "iPhone 17 Pro Max",
        material: "Clear TPU with Black Bumper",
        features: ["MagSafe compatible", "Non-yellowing clear", "Black bumper"],
        colors: ["Black"],
        price: 25.99,
        msrp: 25.99,
        sku: "RAP-AC-Black-i17PM",
        image: "case-images/raptic-ip17pm-air-clear-black.jpg",
        renderStyle: "product-photo"
      },
      // iPhone 17 Pro
      {
        id: "ip17p-shield-classic-black",
        name: "Raptic Shield Classic MagSafe for iPhone 17 Pro - Black",
        device: "iPhone 17 Pro",
        material: "Polycarbonate + TPU",
        features: ["Military-grade drop protection", "MagSafe compatible", "Clear back panel"],
        colors: ["Black"],
        price: 29.99,
        msrp: 29.99,
        sku: "RAP-SC-Black-i17P",
        image: "case-images/raptic-ip17p-shield-classic-black.jpg",
        renderStyle: "product-photo"
      },
      {
        id: "ip17p-shield-classic-iridescent",
        name: "Raptic Shield Classic MagSafe for iPhone 17 Pro - Iridescent",
        device: "iPhone 17 Pro",
        material: "Polycarbonate + TPU",
        features: ["Military-grade drop protection", "MagSafe compatible", "Iridescent finish"],
        colors: ["Iridescent"],
        price: 29.99,
        msrp: 29.99,
        sku: "RAP-SC-Iridescent-i17P",
        image: "case-images/raptic-ip17p-shield-classic-iridescent.jpg",
        renderStyle: "product-photo"
      },
      {
        id: "ip17p-aramid-skin-sky",
        name: "Raptic Aramid Skin-Origin for iPhone 17 Pro - Sky",
        device: "iPhone 17 Pro",
        material: "Aramid Fiber",
        features: ["Ultra-thin, ultra-light", "MagSafe compatible", "Scratch resistance"],
        colors: ["Sky"],
        price: 57.99,
        msrp: 57.99,
        sku: "RAP-ASO-Sky-i17P",
        image: "case-images/raptic-ip17p-aramid-skin-sky.jpg",
        renderStyle: "product-photo"
      },
      {
        id: "ip17p-aramid-skin-ocean",
        name: "Raptic Aramid Skin-Origin for iPhone 17 Pro - Ocean",
        device: "iPhone 17 Pro",
        material: "Aramid Fiber",
        features: ["Ultra-thin, ultra-light", "MagSafe compatible", "Scratch resistance"],
        colors: ["Ocean"],
        price: 57.99,
        msrp: 57.99,
        sku: "RAP-ASO-Ocean-i17P",
        image: "case-images/raptic-ip17p-aramid-skin-ocean.jpg",
        renderStyle: "product-photo"
      },
      {
        id: "ip17p-aramid-skin-profound",
        name: "Raptic Aramid Skin-Origin for iPhone 17 Pro - Profound",
        device: "iPhone 17 Pro",
        material: "Aramid Fiber",
        features: ["Ultra-thin, ultra-light", "MagSafe compatible", "Scratch resistance"],
        colors: ["Profound"],
        price: 57.99,
        msrp: 57.99,
        sku: "RAP-ASO-Profound-i17P",
        image: "case-images/raptic-ip17p-aramid-skin-profound.jpg",
        renderStyle: "product-photo"
      },
      {
        id: "ip17p-aramid-geotik-mondrian",
        name: "Raptic Aramid Geotik for iPhone 17 Pro - Mondrian",
        device: "iPhone 17 Pro",
        material: "Aramid Fiber",
        features: ["Ultra-thin, ultra-light", "MagSafe compatible", "Geometric design"],
        colors: ["Mondrian"],
        price: 57.99,
        msrp: 57.99,
        sku: "RAP-AG-Mondrian-i17P",
        image: "case-images/raptic-ip17p-aramid-geotik-mondrian.jpg",
        renderStyle: "product-photo"
      },
      // Samsung S26 Ultra
      {
        id: "s26u-shield-magnetic-black",
        name: "Samsung Galaxy S26 Ultra Case - Magnetic - SHIELD - Black",
        device: "Samsung Galaxy S26 Ultra",
        material: "Polycarbonate + TPU",
        features: ["Military-grade drop protection (23ft)", "MagSafe compatible", "Magnetic"],
        colors: ["Black"],
        price: 29.99,
        msrp: 29.99,
        sku: "RAP-SH-Black-S26U",
        image: "case-images/raptic-s26u-shield-magnetic-black.jpg",
        renderStyle: "product-photo"
      },
      {
        id: "s26u-shield-magnetic-iridescent",
        name: "Samsung Galaxy S26 Ultra Case - Magnetic - SHIELD - Iridescent",
        device: "Samsung Galaxy S26 Ultra",
        material: "Polycarbonate + TPU",
        features: ["Military-grade drop protection (23ft)", "MagSafe compatible", "Iridescent"],
        colors: ["Iridescent"],
        price: 29.99,
        msrp: 29.99,
        sku: "RAP-SH-Iridescent-S26U",
        image: "case-images/raptic-s26u-shield-magnetic-black.jpg",
        renderStyle: "product-photo"
      },
      {
        id: "s26u-clear-air-stand",
        name: "Samsung Galaxy S26 Ultra Case Clear with Air Stand - MagSafe",
        device: "Samsung Galaxy S26 Ultra",
        material: "Clear Polycarbonate",
        features: ["10-foot drop protection", "Built-in Air Stand kickstand", "MagSafe compatible"],
        colors: ["Clear"],
        price: 25.99,
        msrp: 25.99,
        sku: "RAP-AS-Clear-S26U",
        image: "case-images/raptic-s26u-clear-with-air-stand.jpg",
        renderStyle: "product-photo"
      },
      {
        id: "s26u-aramid-skin-fortune-black",
        name: "Raptic Aramid Skin for Samsung Galaxy S26 Ultra - Fortune/Black",
        device: "Samsung Galaxy S26 Ultra",
        material: "1500D Aramid Fiber",
        features: ["Ultra-slim", "MagSafe compatible", "Aero woven aramid fiber"],
        colors: ["Fortune/Black"],
        price: 59.99,
        msrp: 59.99,
        sku: "RAP-AS-FortuneBlack-S26U",
        image: "case-images/raptic-s26u-aramid-skin-fortune-black.jpg",
        renderStyle: "product-photo"
      },
      // Samsung Z Fold 8 Ultra
      {
        id: "fold8-slim-aramid-serenity-amber",
        name: "Raptic Slim Magnetic Aramid Case for Z Fold8/Fold8 Ultra - Serenity Amber",
        device: "Samsung Galaxy Z Fold 8 Ultra",
        material: "Aramid Kevlar",
        features: ["Slim magnetic protective case", "Foldable screen compatible", "MagSafe compatible"],
        colors: ["Serenity Amber"],
        price: 59.99,
        msrp: 59.99,
        sku: "RAP-SMA-SerenityAmber-F8U",
        image: "case-images/raptic-fold8-slim-aramid-serenity-amber.jpg",
        renderStyle: "product-photo"
      },
      {
        id: "fold8-ultra-thin-mondrian",
        name: "Raptic Ultra-Thin Magnetic Aramid Case for Z Fold8/Fold8 Ultra - Mondrian",
        device: "Samsung Galaxy Z Fold 8 Ultra",
        material: "Aramid Kevlar",
        features: ["Ultra-thin (0.04in)", "Magnetic", "Foldable screen compatible"],
        colors: ["Mondrian"],
        price: 49.99,
        msrp: 49.99,
        sku: "RAP-UTM-Mondrian-F8U",
        image: "case-images/raptic-fold8-ultra-thin-mondrian.jpg",
        renderStyle: "product-photo"
      },
      {
        id: "fold8-ultra-thin-blue-gold",
        name: "Raptic Ultra-Thin Magnetic Aramid Case for Z Fold8/Fold8 Ultra - Blue & Gold",
        device: "Samsung Galaxy Z Fold 8 Ultra",
        material: "Aramid Kevlar",
        features: ["Ultra-thin", "Magnetic", "Blue & Gold aramid weave"],
        colors: ["Blue & Gold"],
        price: 59.99,
        msrp: 59.99,
        sku: "RAP-UTM-BlueGold-F8U",
        image: "case-images/raptic-fold8-ultra-thin-blue-gold.jpg",
        renderStyle: "product-photo"
      },
      // iPhone 18 Pro Max — Coming Soon
      {
        id: "ip18pm-coming-soon",
        name: "Raptic Cases for iPhone 18 Pro Max — Coming Soon",
        device: "iPhone 18 Pro Max",
        material: "Aramid Fiber / Shield / Air Clear",
        features: ["Coming Soon", "Aramid Series", "Air Clear (Burgundy)", "Shield Classic"],
        colors: ["Burgundy", "Black", "Iridescent"],
        price: 0,
        msrp: 0,
        sku: "RAP-CS-i18PM",
        image: "case-images/coming-soon.png",
        renderStyle: "product-photo",
        status: "coming-soon"
      },
      // iPhone Ultra (Foldable) — Coming Soon
      {
        id: "ip-ultra-coming-soon",
        name: "Raptic Cases for iPhone Ultra (Foldable) — Coming Soon",
        device: "iPhone Ultra (Foldable)",
        material: "Aramid Fiber",
        features: ["Coming Soon", "Aramid Series", "MagSafe compatible"],
        colors: ["TBD"],
        price: 0,
        msrp: 0,
        sku: "RAP-CS-iUltra",
        image: "case-images/coming-soon.png",
        renderStyle: "product-photo",
        status: "coming-soon"
      }
    ]
  }
};

// Active protocol — change this to switch brands
// Maestro commands: "SocietyOS Protocol" or "Raptic Protocol"
let ACTIVE_PROTOCOL = "raptic"; // Default: Raptic

function getActiveProtocol() {
  return SOCIETYOS_PROTOCOLS[ACTIVE_PROTOCOL];
}

function getProtocolCases() {
  return getActiveProtocol().cases;
}

function switchProtocol(name) {
  if (SOCIETYOS_PROTOCOLS[name]) {
    ACTIVE_PROTOCOL = name;
    return true;
  }
  return false;
}
