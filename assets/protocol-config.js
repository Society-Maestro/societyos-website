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
  // AULUMU PROTOCOL — Real Aulumu products
  // Product photos, Aulumu branding, Aulumu pricing
  // ═══════════════════════════════════════════════════
  aulumu: {
    name: "Aulumu Protocol",
    brand: "Aulumu",
    logo: "assets/societyos-ares-4.png",
    tagline: "Premium Cases by Aulumu — A SocietyOS Partner",
    visualStyle: "product-photos",
    cases: [
      {
        id: "a18-af-bk-pm",
        name: "A18 Ultra Slim Aramid Fiber Case",
        device: "iPhone 18 Pro Max",
        material: "Aramid Fiber",
        features: ["Ultra-thin, ultra-light", "Full-camera protection", "Upgraded aramid fiber"],
        colors: ["Black"],
        price: 65.98,
        msrp: 65.98,
        sku: "A18-AF-BK-PM",
        retailerPrice: 44.17,
        distributorPrice: 32.27,
        renderStyle: "product-photo"
      },
      {
        id: "a18-afq-gd-bk-pm",
        name: "A18 Ultra-Slim Gradient Aramid Fiber Case",
        device: "iPhone 18 Pro Max",
        material: "Gradient Aramid Fiber",
        features: ["Ultra-thin, ultra-light", "Gradient design", "Upgraded aramid fiber"],
        colors: ["Ombre Black / Ombre Gray"],
        price: 69.98,
        msrp: 69.98,
        sku: "A18-AFQ-GD-BK-PM",
        retailerPrice: 45.89,
        distributorPrice: 33.99,
        renderStyle: "product-photo"
      },
      {
        id: "a18-aft-bk-pm",
        name: "A18 Armor Shockproof Aramid Fiber Case",
        device: "iPhone 18 Pro Max",
        material: "TPU Blend with Aramid Fiber",
        features: ["Full-coverage protection", "Shockproof", "Upgraded aramid fiber"],
        colors: ["Black"],
        price: 79.98,
        msrp: 79.98,
        sku: "A18-AFT-BK-PM",
        retailerPrice: 45.89,
        distributorPrice: 33.99,
        renderStyle: "product-photo"
      },
      {
        id: "a18-pu-bk-pm",
        name: "A18 Particle Vegan Leather Case",
        device: "iPhone 18 Pro Max",
        material: "Biodegradable Vegan Leather",
        features: ["Biodegradable", "Textured grain leather", "Enhanced grip"],
        colors: ["Black", "Gray", "White", "Dark Cherry", "Dark Blue"],
        price: 45.98,
        msrp: 45.98,
        sku: "A18-PU-BK-PM",
        retailerPrice: 27.59,
        distributorPrice: 20.69,
        renderStyle: "product-photo"
      }
    ]
  }
};

// Active protocol — change this to switch brands
// Maestro commands: "SocietyOS Protocol" or "Aulumu Protocol"
let ACTIVE_PROTOCOL = "societyos"; // Default: SocietyOS

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
