// SocietyOS Brand Protocol System
// Controls which case brand is displayed across all SocietyOS surfaces
// Switch by changing ACTIVE_PROTOCOL below or via Maestro command

var SOCIETYOS_PROTOCOLS = {

  // ═══════════════════════════════════════════════════
  // RAPTIC PROTOCOL — Real Raptic products (PRIMARY)
  // Full distributor agreement — custom branding rights
  // ═══════════════════════════════════════════════════
  raptic: {
    name: "Raptic Protocol",
    brand: "Raptic",
    logo: "assets/societyos-ares-4.png",
    tagline: "Premium Protection by Raptic — A SocietyOS Distributor Partner",
    visualStyle: "product-photos",

    // ── TIER DISCOUNTS ──────────────────────────────
    // Applied to accessories at checkout based on membership tier
    tierDiscounts: {
      carbon: 0.00,    // No discount — entry tier
      onyx:  0.10,     // 10% off accessories
      gold:  0.20      // 20% off accessories
    },

    // ── ACCESSORIES ──────────────────────────────────
    // Each accessory has a pairingRule that determines which cases it matches
    // "series" = matches by series name (Grid, Serenity, Mondrian, etc.)
    // "any-magsafe" = pairs with ANY case (used for clear/transparent cases)
    // "universal" = pairs with everything
    accessories: [
      {
        id: "acc-freeflow-fortune",
        name: "Raptic FreeFlow Magnetic Ring Stand — Fortune Limited Edition",
        type: "ring-stand",
        series: ["Fortune", "Serenity"],
        colors: ["Limited Edition"],
        price: 17.99,
        msrp: 17.99,
        fob: 8.20,
        sku: "RAP-FF-Fortune-LE",
        image: null,
        description: "4-in-1 Ultra-Thin Magnetic Stand — Attach, Stand, Carry, Grip. 3.6mm card-style design with 360° dual-rotation ring.",
        pairingRule: "series"
      },
      {
        id: "acc-freeflow-wisdom",
        name: "Raptic FreeFlow Magnetic Ring Stand — Grid Wisdom",
        type: "ring-stand",
        series: ["Grid"],
        colors: ["Wisdom"],
        price: 17.99,
        msrp: 17.99,
        fob: 7.80,
        sku: "RAP-FF-Wisdom",
        image: null,
        description: "Magnetic ring stand with 360° rotation. Pairs perfectly with Grid series cases.",
        pairingRule: "series"
      },
      {
        id: "acc-freeflow-glory",
        name: "Raptic FreeFlow Magnetic Ring Stand — Grid Glory",
        type: "ring-stand",
        series: ["Grid"],
        colors: ["Glory"],
        price: 17.99,
        msrp: 17.99,
        fob: 7.80,
        sku: "RAP-FF-Glory",
        image: null,
        description: "Magnetic ring stand with 360° rotation. Pairs with Grid Glory cases.",
        pairingRule: "series"
      },
      {
        id: "acc-freeflow-destiny",
        name: "Raptic FreeFlow Magnetic Ring Stand — Destiny",
        type: "ring-stand",
        series: ["Destiny", "Mondrian"],
        colors: ["Destiny"],
        price: 17.99,
        msrp: 17.99,
        fob: 7.80,
        sku: "RAP-FF-Destiny",
        image: null,
        description: "Magnetic ring stand with 360° rotation. Pairs with Destiny and Mondrian series.",
        pairingRule: "series"
      },
      {
        id: "acc-freeflow-amber",
        name: "Raptic FreeFlow Magnetic Ring Stand — Serenity Amber",
        type: "ring-stand",
        series: ["Serenity"],
        colors: ["Amber"],
        price: 17.99,
        msrp: 17.99,
        fob: 7.80,
        sku: "RAP-FF-Amber",
        image: null,
        description: "Magnetic ring stand in Serenity Amber finish. Pairs with Serenity Amber cases.",
        pairingRule: "series"
      },
      {
        id: "acc-freeflow-emerald",
        name: "Raptic FreeFlow Magnetic Ring Stand — Serenity Emerald",
        type: "ring-stand",
        series: ["Serenity"],
        colors: ["Emerald"],
        price: 17.99,
        msrp: 17.99,
        fob: 7.80,
        sku: "RAP-FF-Emerald",
        image: null,
        description: "Magnetic ring stand in Serenity Emerald finish. Pairs with Serenity Emerald cases.",
        pairingRule: "series"
      },
      {
        id: "acc-freeflow-humble",
        name: "Raptic FreeFlow Magnetic Ring Stand — Humble",
        type: "ring-stand",
        series: ["Origin"],
        colors: ["Humble"],
        price: 17.99,
        msrp: 17.99,
        fob: 6.70,
        sku: "RAP-FF-Humble",
        image: null,
        description: "Magnetic ring stand in Humble finish. Pairs with Origin series cases.",
        pairingRule: "series"
      },
      {
        id: "acc-freeflow-profound",
        name: "Raptic FreeFlow Magnetic Ring Stand — Profound",
        type: "ring-stand",
        series: ["Origin"],
        colors: ["Profound"],
        price: 17.99,
        msrp: 17.99,
        fob: 6.70,
        sku: "RAP-FF-Profound",
        image: null,
        description: "Magnetic ring stand in Profound finish. Pairs with Origin series cases.",
        pairingRule: "series"
      },
      {
        id: "acc-freeflow-oriental",
        name: "Raptic FreeFlow Magnetic Ring Stand — Oriental",
        type: "ring-stand",
        series: ["Origin"],
        colors: ["Oriental"],
        price: 17.99,
        msrp: 17.99,
        fob: 6.70,
        sku: "RAP-FF-Oriental",
        image: null,
        description: "Magnetic ring stand in Oriental finish. Pairs with Origin series cases.",
        pairingRule: "series"
      },
      {
        id: "acc-freeflow-snake",
        name: "Raptic FreeFlow Magnetic Ring Stand — Snake",
        type: "ring-stand",
        series: ["Origin"],
        colors: ["Snake"],
        price: 17.99,
        msrp: 17.99,
        fob: 6.70,
        sku: "RAP-FF-Snake",
        image: null,
        description: "Magnetic ring stand in Snake finish. Pairs with Origin series cases.",
        pairingRule: "series"
      },
      {
        id: "acc-freeflow-ocean",
        name: "Raptic FreeFlow Magnetic Ring Stand — Ocean",
        type: "ring-stand",
        series: ["Origin"],
        colors: ["Ocean"],
        price: 17.99,
        msrp: 17.99,
        fob: 6.70,
        sku: "RAP-FF-Ocean",
        image: null,
        description: "Magnetic ring stand in Ocean finish. Pairs with Origin series cases.",
        pairingRule: "series"
      },
      {
        id: "acc-freeflow-sky",
        name: "Raptic FreeFlow Magnetic Ring Stand — Sky",
        type: "ring-stand",
        series: ["Origin"],
        colors: ["Sky"],
        price: 17.99,
        msrp: 17.99,
        fob: 6.70,
        sku: "RAP-FF-Sky",
        image: null,
        description: "Magnetic ring stand in Sky finish. Pairs with Origin series cases.",
        pairingRule: "series"
      },
      {
        id: "acc-freeflow-600d",
        name: "Raptic FreeFlow Magnetic Ring Stand — 600D",
        type: "ring-stand",
        series: ["Mondrian"],
        colors: ["600D"],
        price: 17.99,
        msrp: 17.99,
        fob: 6.50,
        sku: "RAP-FF-600D",
        image: null,
        description: "Magnetic ring stand in 600D finish. Pairs with Mondrian series cases.",
        pairingRule: "series"
      },
      {
        id: "acc-wallet-stand-emerald",
        name: "Raptic Aramid Wallet Stand — Serenity Emerald",
        type: "wallet-stand",
        series: ["Serenity"],
        colors: ["Emerald"],
        price: 39.99,
        msrp: 39.99,
        fob: 15.90,
        sku: "RAP-WS-Emerald",
        image: null,
        description: "High-capacity card wallet with 180° smooth hinge. Aramid fiber + high-end leather. Pairs with Serenity Emerald cases.",
        pairingRule: "series"
      },
      {
        id: "acc-wallet-stand-amber",
        name: "Raptic Aramid Wallet Stand — Serenity Amber",
        type: "wallet-stand",
        series: ["Serenity"],
        colors: ["Amber"],
        price: 39.99,
        msrp: 39.99,
        fob: 15.90,
        sku: "RAP-WS-Amber",
        image: null,
        description: "High-capacity card wallet with 180° smooth hinge. Aramid fiber + high-end leather. Pairs with Serenity Amber cases.",
        pairingRule: "series"
      },
      {
        id: "acc-wallet-stand-wisdom",
        name: "Raptic Aramid Wallet Stand — Grid Wisdom",
        type: "wallet-stand",
        series: ["Grid"],
        colors: ["Wisdom"],
        price: 39.99,
        msrp: 39.99,
        fob: 15.90,
        sku: "RAP-WS-Wisdom",
        image: null,
        description: "High-capacity card wallet with 180° smooth hinge. Aramid fiber + high-end leather. Pairs with Grid Wisdom cases.",
        pairingRule: "series"
      },
      {
        id: "acc-wallet-bundle-wisdom-i17p",
        name: "Raptic 2-in-1 Phone Case & Wallet Stand Bundle — Grid Wisdom — iPhone 17 Pro",
        type: "bundle",
        series: ["Grid"],
        colors: ["Wisdom"],
        price: 99.99,
        msrp: 99.99,
        fob: 39.90,
        sku: "RAP-BUN-Wisdom-i17P",
        image: null,
        description: "Complete the set: Phone case + matching Wallet Stand in Grid Wisdom. Ultimate value bundle.",
        pairingRule: "series",
        device: "iPhone 17 Pro"
      },
      {
        id: "acc-wallet-bundle-wisdom-i17pm",
        name: "Raptic 2-in-1 Phone Case & Wallet Stand Bundle — Grid Wisdom — iPhone 17 Pro Max",
        type: "bundle",
        series: ["Grid"],
        colors: ["Wisdom"],
        price: 99.99,
        msrp: 99.99,
        fob: 39.90,
        sku: "RAP-BUN-Wisdom-i17PM",
        image: null,
        description: "Complete the set: Phone case + matching Wallet Stand in Grid Wisdom. Ultimate value bundle.",
        pairingRule: "series",
        device: "iPhone 17 Pro Max"
      },
      {
        id: "acc-wallet-bundle-amber-i17p",
        name: "Raptic 2-in-1 Phone Case & Wallet Stand Bundle — Serenity Amber — iPhone 17 Pro",
        type: "bundle",
        series: ["Serenity"],
        colors: ["Amber"],
        price: 99.99,
        msrp: 99.99,
        fob: 40.90,
        sku: "RAP-BUN-Amber-i17P",
        image: null,
        description: "Complete the set: Phone case + matching Wallet Stand in Serenity Amber. Ultimate value bundle.",
        pairingRule: "series",
        device: "iPhone 17 Pro"
      },
      {
        id: "acc-wallet-bundle-amber-i17pm",
        name: "Raptic 2-in-1 Phone Case & Wallet Stand Bundle — Serenity Amber — iPhone 17 Pro Max",
        type: "bundle",
        series: ["Serenity"],
        colors: ["Amber"],
        price: 99.99,
        msrp: 99.99,
        fob: 40.90,
        sku: "RAP-BUN-Amber-i17PM",
        image: null,
        description: "Complete the set: Phone case + matching Wallet Stand in Serenity Amber. Ultimate value bundle.",
        pairingRule: "series",
        device: "iPhone 17 Pro Max"
      },
      {
        id: "acc-wallet-bundle-emerald-i17p",
        name: "Raptic 2-in-1 Phone Case & Wallet Stand Bundle — Serenity Emerald — iPhone 17 Pro",
        type: "bundle",
        series: ["Serenity"],
        colors: ["Emerald"],
        price: 99.99,
        msrp: 99.99,
        fob: 40.90,
        sku: "RAP-BUN-Emerald-i17P",
        image: null,
        description: "Complete the set: Phone case + matching Wallet Stand in Serenity Emerald. Ultimate value bundle.",
        pairingRule: "series",
        device: "iPhone 17 Pro"
      },
      {
        id: "acc-wallet-bundle-emerald-i17pm",
        name: "Raptic 2-in-1 Phone Case & Wallet Stand Bundle — Serenity Emerald — iPhone 17 Pro Max",
        type: "bundle",
        series: ["Serenity"],
        colors: ["Emerald"],
        price: 99.99,
        msrp: 99.99,
        fob: 40.90,
        sku: "RAP-BUN-Emerald-i17PM",
        image: null,
        description: "Complete the set: Phone case + matching Wallet Stand in Serenity Emerald. Ultimate value bundle.",
        pairingRule: "series",
        device: "iPhone 17 Pro Max"
      },
      // ── UNIVERSAL MagSafe ACCESSORY ──────────────────
      // For clear/transparent cases — pairs with ANY MagSafe accessory
      {
        id: "acc-freeflow-universal-clear",
        name: "Raptic FreeFlow Magnetic Ring Stand — Clear (Universal)",
        type: "ring-stand",
        series: ["Air", "Shield"],
        colors: ["Clear", "Black", "Iridescent", "Burgundy"],
        price: 17.99,
        msrp: 17.99,
        fob: 6.50,
        sku: "RAP-FF-Universal",
        image: null,
        description: "SocietyOS Verified MagSafe Accessory — pairs with ALL clear and transparent cases. Universal magnetic ring stand with 360° rotation.",
        pairingRule: "any-magsafe"
      }
    ],

    cases: [
      // ── iPHONE FOLD (SKIN-PRO ONLY — HINGE PROTECTION) ──
      {
        id: "ifold-skinpro-grid-valor",
        name: "Raptic Aramid Skin-Pro MagSafe for iPhone Fold — Grid Valor",
        device: "iPhone Fold",
        material: "Woven Aramid Fiber",
        features: ["Ultra-thin molding", "MagSafe compatible", "Fully enclosed leather hinge protection", "Automatic magnetic adsorption", "Gold thread weaving"],
        colors: ["Valor"],
        price: 69.99,
        msrp: 69.99,
        fob: 29.90,
        sku: "652987",
        series: "Grid",
        renderStyle: "product-photo",
        image: null
      },
      {
        id: "ifold-skinpro-wisdom",
        name: "Raptic Aramid Skin-Pro MagSafe for iPhone Fold — Grid Wisdom",
        device: "iPhone Fold",
        material: "Woven Aramid Fiber",
        features: ["Ultra-thin molding", "MagSafe compatible", "Fully enclosed leather hinge protection", "Automatic magnetic adsorption", "Gold thread weaving"],
        colors: ["Wisdom"],
        price: 65.99,
        msrp: 65.99,
        fob: 27.90,
        sku: "652925",
        series: "Grid",
        renderStyle: "product-photo",
        image: null
      },
      {
        id: "ifold-skinpro-glory",
        name: "Raptic Aramid Skin-Pro MagSafe for iPhone Fold — Grid Glory",
        device: "iPhone Fold",
        material: "Woven Aramid Fiber",
        features: ["Ultra-thin molding", "MagSafe compatible", "Fully enclosed leather hinge protection", "Automatic magnetic adsorption", "Kezhi weaving"],
        colors: ["Glory"],
        price: 65.99,
        msrp: 65.99,
        fob: 27.90,
        sku: "653403",
        series: "Grid",
        renderStyle: "product-photo",
        image: null
      },
      {
        id: "ifold-skinpro-rise",
        name: "Raptic Aramid Skin-Pro MagSafe for iPhone Fold — Rise",
        device: "iPhone Fold",
        material: "Woven Aramid Fiber",
        features: ["Ultra-thin molding", "MagSafe compatible", "Fully enclosed leather hinge protection", "Automatic magnetic adsorption", "Gold thread weaving"],
        colors: ["Rise"],
        price: 69.99,
        msrp: 69.99,
        fob: 29.90,
        sku: "653045",
        series: "Rise",
        renderStyle: "product-photo",
        image: null
      },
      {
        id: "ifold-skinpro-scepter",
        name: "Raptic Aramid Skin-Pro MagSafe for iPhone Fold — Scepter",
        device: "iPhone Fold",
        material: "Woven Aramid Fiber",
        features: ["Ultra-thin molding", "MagSafe compatible", "Fully enclosed leather hinge protection", "Automatic magnetic adsorption", "Kezhi weaving"],
        colors: ["Scepter"],
        price: 69.99,
        msrp: 69.99,
        fob: 29.90,
        sku: "653182",
        series: "Scepter",
        renderStyle: "product-photo",
        image: null
      },
      {
        id: "ifold-skinpro-serenity-amber",
        name: "Raptic Aramid Skin-Pro MagSafe for iPhone Fold — Serenity Amber",
        device: "iPhone Fold",
        material: "Woven Aramid Fiber",
        features: ["Ultra-thin molding", "MagSafe compatible", "Fully enclosed leather hinge protection", "Automatic magnetic adsorption", "Multi-Color KeZhi Weaving"],
        colors: ["Amber"],
        price: 69.99,
        msrp: 69.99,
        fob: 29.90,
        sku: "652680",
        series: "Serenity",
        renderStyle: "product-photo",
        image: null
      },
      {
        id: "ifold-skinpro-serenity-emerald",
        name: "Raptic Aramid Skin-Pro MagSafe for iPhone Fold — Serenity Emerald",
        device: "iPhone Fold",
        material: "Woven Aramid Fiber",
        features: ["Ultra-thin molding", "MagSafe compatible", "Fully enclosed leather hinge protection", "Automatic magnetic adsorption", "Multi-Color KeZhi Weaving"],
        colors: ["Emerald"],
        price: 69.99,
        msrp: 69.99,
        fob: 29.90,
        sku: "652697",
        series: "Serenity",
        renderStyle: "product-photo",
        image: null
      },
      {
        id: "ifold-skinpro-mondrian",
        name: "Raptic Aramid Skin-Pro MagSafe for iPhone Fold — Mondrian",
        device: "iPhone Fold",
        material: "Woven Aramid Fiber",
        features: ["Ultra-thin molding", "MagSafe compatible", "Fully enclosed leather hinge protection", "Automatic magnetic adsorption", "Minimalist aesthetics"],
        colors: ["Mondrian"],
        price: 55.99,
        msrp: 55.99,
        fob: 24.90,
        sku: "653243",
        series: "Mondrian",
        renderStyle: "product-photo",
        image: null
      },
      {
        id: "ifold-skinpro-origin",
        name: "Raptic Aramid Skin-Pro MagSafe for iPhone Fold — Origin",
        device: "iPhone Fold",
        material: "Woven Aramid Fiber",
        features: ["Ultra-thin molding", "MagSafe compatible", "Fully enclosed leather hinge protection", "Automatic magnetic adsorption", "Precision metal inlay"],
        colors: ["Origin"],
        price: 55.99,
        msrp: 55.99,
        fob: 24.90,
        sku: "653274",
        series: "Origin",
        renderStyle: "product-photo",
        image: null
      },
      // ── iPHONE FOLD — URBAN NANO (LEATHER) ──
      {
        id: "ifold-nano-dark-cherry",
        name: "Raptic Urban Nano MagSafe for iPhone Fold — Dark Cherry",
        device: "iPhone Fold",
        material: "Premium PU Leather",
        features: ["Ultra-slim 1.6mm", "Stain-resistant coating", "Full genuine leather wrapping", "MagSafe compatible"],
        colors: ["Dark Cherry"],
        price: 45.99,
        msrp: 45.99,
        fob: 18.90,
        sku: "652420",
        series: "Urban Nano",
        renderStyle: "product-photo",
        image: null
      },
      {
        id: "ifold-nano-stellar-black",
        name: "Raptic Urban Nano MagSafe for iPhone Fold — Stellar Black",
        device: "iPhone Fold",
        material: "Premium PU Leather",
        features: ["Ultra-slim 1.6mm", "Stain-resistant coating", "Full genuine leather wrapping", "MagSafe compatible"],
        colors: ["Stellar Black"],
        price: 45.99,
        msrp: 45.99,
        fob: 18.90,
        sku: "652437",
        series: "Urban Nano",
        renderStyle: "product-photo",
        image: null
      },
      // ── iPHONE FOLD — URBAN NAV (3D LEATHER + GOLD) ──
      {
        id: "ifold-nav-dark-cherry",
        name: "Raptic Urban Nav MagSafe for iPhone Fold — Dark Cherry",
        device: "iPhone Fold",
        material: "3D Leather + 18K Gold Plating",
        features: ["3D leather structure", "18K gold plating", "Ceramic cool-touch camera button", "MagSafe compatible"],
        colors: ["Dark Cherry"],
        price: 50.99,
        msrp: 50.99,
        fob: 21.90,
        sku: "652475",
        series: "Urban Nav",
        renderStyle: "product-photo",
        image: null
      },
      {
        id: "ifold-nav-dark",
        name: "Raptic Urban Nav MagSafe for iPhone Fold — Dark",
        device: "iPhone Fold",
        material: "3D Leather + 18K Gold Plating",
        features: ["3D leather structure", "18K gold plating", "Ceramic cool-touch camera button", "MagSafe compatible"],
        colors: ["Dark"],
        price: 50.99,
        msrp: 50.99,
        fob: 21.90,
        sku: "652451",
        series: "Urban Nav",
        renderStyle: "product-photo",
        image: null
      },
      // ── iPHONE FOLD — AIR STAND (CLEAR) ──
      {
        id: "ifold-air-stand-clear",
        name: "Raptic Air Stand MagSafe for iPhone Fold — Clear",
        device: "iPhone Fold",
        material: "Clear TPU",
        features: ["Military-grade drop protection", "Built-in kickstand", "MagSafe compatible", "Four-corner airbag"],
        colors: ["Clear"],
        price: 25.99,
        msrp: 25.99,
        fob: 9.90,
        sku: "652338",
        series: "Air",
        renderStyle: "product-photo",
        image: null
      },
      // ── iPHONE FOLD — AIR CLEAR (TRANSPARENT) ──
      {
        id: "ifold-air-clear-clear",
        name: "Raptic Air Clear MagSafe for iPhone Fold — Clear",
        device: "iPhone Fold",
        material: "Clear TPU",
        features: ["Military-grade drop protection", "Quad-corner micro-airbag", "MagSafe compatible", "Light transmittance >95%"],
        colors: ["Clear"],
        price: 19.99,
        msrp: 19.99,
        fob: 8.50,
        sku: "652246",
        series: "Air",
        renderStyle: "product-photo",
        image: null
      },

      // ── iPHONE 18 PRO / PRO MAX — ARAMID DUAL ULTRA ──
      {
        id: "i18p-dual-ultra-grid-valor",
        name: "Raptic Aramid Dual Ultra MagSafe for iPhone 18 Pro — Grid Valor",
        device: "iPhone 18 Pro",
        material: "Woven Aramid Fiber",
        features: ["Full aramid coverage", "Tactile woven surface", "Narrow camera rim", "MagSafe compatible", "Ultra-thin"],
        colors: ["Valor"],
        price: 69.99,
        msrp: 69.99,
        fob: 30.90,
        sku: "652994",
        series: "Grid",
        renderStyle: "product-photo",
        image: null
      },
      {
        id: "i18pm-dual-ultra-grid-valor",
        name: "Raptic Aramid Dual Ultra MagSafe for iPhone 18 Pro Max — Grid Valor",
        device: "iPhone 18 Pro Max",
        material: "Woven Aramid Fiber",
        features: ["Full aramid coverage", "Tactile woven surface", "Narrow camera rim", "MagSafe compatible", "Ultra-thin"],
        colors: ["Valor"],
        price: 69.99,
        msrp: 69.99,
        fob: 30.90,
        sku: "652987",
        series: "Grid",
        renderStyle: "product-photo",
        image: null
      },
      {
        id: "i18p-dual-ultra-scepter",
        name: "Raptic Aramid Dual Ultra MagSafe for iPhone 18 Pro — Scepter",
        device: "iPhone 18 Pro",
        material: "Woven Aramid Fiber",
        features: ["Full aramid coverage", "Tactile woven surface", "Narrow camera rim", "MagSafe compatible", "24K matte gold plating"],
        colors: ["Scepter"],
        price: 69.99,
        msrp: 69.99,
        fob: 30.90,
        sku: "653359",
        series: "Scepter",
        renderStyle: "product-photo",
        image: null
      },
      {
        id: "i18p-dual-ultra-serenity-amber",
        name: "Raptic Aramid Dual Ultra MagSafe for iPhone 18 Pro — Serenity Amber",
        device: "iPhone 18 Pro",
        material: "Woven Aramid Fiber",
        features: ["Multi-Color KeZhi weaving", "Full aramid coverage", "Metal camera lens frame protection", "MagSafe compatible"],
        colors: ["Amber"],
        price: 69.99,
        msrp: 69.99,
        fob: 30.90,
        sku: "652802",
        series: "Serenity",
        renderStyle: "product-photo",
        image: null
      },
      {
        id: "i18p-dual-ultra-serenity-emerald",
        name: "Raptic Aramid Dual Ultra MagSafe for iPhone 18 Pro — Serenity Emerald",
        device: "iPhone 18 Pro",
        material: "Woven Aramid Fiber",
        features: ["Multi-Color KeZhi weaving", "Full aramid coverage", "Metal camera lens frame protection", "MagSafe compatible"],
        colors: ["Emerald"],
        price: 69.99,
        msrp: 69.99,
        fob: 30.90,
        sku: "652819",
        series: "Serenity",
        renderStyle: "product-photo",
        image: null
      },

      // ── iPHONE 18 PRO — ARAMID SKIN ──
      {
        id: "i18p-skin-grid-valor",
        name: "Raptic Aramid Skin MagSafe for iPhone 18 Pro — Grid Valor",
        device: "iPhone 18 Pro",
        material: "Woven Aramid Fiber",
        features: ["Ultra-thin molding", "Travel-cavity side buttons", "MagSafe compatible", "Gold thread weaving"],
        colors: ["Valor"],
        price: 65.99,
        msrp: 65.99,
        fob: 27.90,
        sku: "652888",
        series: "Grid",
        renderStyle: "product-photo",
        image: null
      },
      {
        id: "i18p-skin-grid-wisdom",
        name: "Raptic Aramid Skin MagSafe for iPhone 18 Pro — Grid Wisdom",
        device: "iPhone 18 Pro",
        material: "Woven Aramid Fiber",
        features: ["Ultra-thin molding", "Travel-cavity side buttons", "MagSafe compatible", "Kezhi weaving"],
        colors: ["Wisdom"],
        price: 60.99,
        msrp: 60.99,
        fob: 26.90,
        sku: "653380",
        series: "Grid",
        renderStyle: "product-photo",
        image: null
      },
      {
        id: "i18p-skin-serenity-amber",
        name: "Raptic Aramid Skin MagSafe for iPhone 18 Pro — Serenity Amber",
        device: "iPhone 18 Pro",
        material: "Woven Aramid Fiber",
        features: ["Ultra-thin molding", "Metal camera lens frame protection", "MagSafe compatible", "Multi-Color KeZhi weaving"],
        colors: ["Amber"],
        price: 65.99,
        msrp: 65.99,
        fob: 27.90,
        sku: "652604",
        series: "Serenity",
        renderStyle: "product-photo",
        image: null
      },
      {
        id: "i18p-skin-serenity-emerald",
        name: "Raptic Aramid Skin MagSafe for iPhone 18 Pro — Serenity Emerald",
        device: "iPhone 18 Pro",
        material: "Woven Aramid Fiber",
        features: ["Ultra-thin molding", "Metal camera lens frame protection", "MagSafe compatible", "Multi-Color KeZhi weaving"],
        colors: ["Emerald"],
        price: 65.99,
        msrp: 65.99,
        fob: 27.90,
        sku: "652611",
        series: "Serenity",
        renderStyle: "product-photo",
        image: null
      },
      {
        id: "i18p-skin-mondrian",
        name: "Raptic Aramid Skin MagSafe for iPhone 18 Pro — Mondrian",
        device: "iPhone 18 Pro",
        material: "Woven Aramid Fiber",
        features: ["Ultra-thin molding", "Metal camera lens frame protection", "MagSafe compatible", "Minimalist aesthetics"],
        colors: ["Mondrian"],
        price: 50.99,
        msrp: 50.99,
        fob: 20.90,
        sku: "653144",
        series: "Mondrian",
        renderStyle: "product-photo",
        image: null
      },

      // ── iPHONE 18 PRO — ARAMID DUAL ──
      {
        id: "i18p-dual-grid-valor",
        name: "Raptic Aramid Dual MagSafe for iPhone 18 Pro — Grid Valor",
        device: "iPhone 18 Pro",
        material: "Aramid Fiber + Soft Bumper",
        features: ["Four-corner drop protection", "Soft bumper design", "Easy install & remove", "MagSafe compatible"],
        colors: ["Valor"],
        price: 59.99,
        msrp: 59.99,
        fob: 26.90,
        sku: "652949",
        series: "Grid",
        renderStyle: "product-photo",
        image: null
      },
      {
        id: "i18p-dual-grid-wisdom",
        name: "Raptic Aramid Dual MagSafe for iPhone 18 Pro — Grid Wisdom",
        device: "iPhone 18 Pro",
        material: "Aramid Fiber + Soft Bumper",
        features: ["Four-corner drop protection", "Soft bumper design", "Easy install & remove", "MagSafe compatible"],
        colors: ["Wisdom"],
        price: 55.99,
        msrp: 55.99,
        fob: 24.90,
        sku: "653410",
        series: "Grid",
        renderStyle: "product-photo",
        image: null
      },

      // ── iPHONE 18 PRO — URBAN NANO ──
      {
        id: "i18p-nano-dark-cherry",
        name: "Raptic Urban Nano MagSafe for iPhone 18 Pro — Dark Cherry",
        device: "iPhone 18 Pro",
        material: "Premium PU Leather",
        features: ["Ultra-slim 1.6mm", "Stain-resistant coating", "Eco-friendly non-toxic", "MagSafe compatible"],
        colors: ["Dark Cherry"],
        price: 39.99,
        msrp: 39.99,
        fob: 14.90,
        sku: "652208",
        series: "Urban Nano",
        renderStyle: "product-photo",
        image: null
      },
      {
        id: "i18p-nano-stellar-black",
        name: "Raptic Urban Nano MagSafe for iPhone 18 Pro — Stellar Black",
        device: "iPhone 18 Pro",
        material: "Premium PU Leather",
        features: ["Ultra-slim 1.6mm", "Stain-resistant coating", "Eco-friendly non-toxic", "MagSafe compatible"],
        colors: ["Stellar Black"],
        price: 39.99,
        msrp: 39.99,
        fob: 14.90,
        sku: "652260",
        series: "Urban Nano",
        renderStyle: "product-photo",
        image: null
      },
      {
        id: "i18p-nano-plume-white",
        name: "Raptic Urban Nano MagSafe for iPhone 18 Pro — Plume White",
        device: "iPhone 18 Pro",
        material: "Premium PU Leather",
        features: ["Ultra-slim 1.6mm", "Stain-resistant coating", "Eco-friendly non-toxic", "MagSafe compatible"],
        colors: ["Plume White"],
        price: 39.99,
        msrp: 39.99,
        fob: 14.90,
        sku: "652239",
        series: "Urban Nano",
        renderStyle: "product-photo",
        image: null
      },

      // ── iPHONE 18 PRO — URBAN FOLIO ──
      {
        id: "i18p-folio-black",
        name: "Raptic Urban Folio MagSafe for iPhone 18 Pro — Black",
        device: "iPhone 18 Pro",
        material: "Polycarbonate + TPU",
        features: ["Military-grade drop protection", "Ultra-thin shell", "Slim front cover", "Anti-stain coating"],
        colors: ["Black"],
        price: 29.99,
        msrp: 29.99,
        fob: 8.90,
        sku: "652482",
        series: "Urban",
        renderStyle: "product-photo",
        image: null
      },

      // ── iPHONE 18 PRO — AIR STAND (CLEAR) ──
      {
        id: "i18p-air-stand-clear",
        name: "Raptic Air Stand MagSafe for iPhone 18 Pro — Clear",
        device: "iPhone 18 Pro",
        material: "Clear TPU",
        features: ["Military-grade drop protection 2m", "360° kickstand", "Four-corner airbag", "MagSafe compatible"],
        colors: ["Clear"],
        price: 19.99,
        msrp: 19.99,
        fob: 6.90,
        sku: "653830",
        series: "Air",
        renderStyle: "product-photo",
        image: null
      },
      {
        id: "i18p-air-stand-burgundy",
        name: "Raptic Air Stand MagSafe for iPhone 18 Pro — Burgundy",
        device: "iPhone 18 Pro",
        material: "Clear TPU with Burgundy Bumper",
        features: ["Military-grade drop protection 2m", "360° kickstand", "Four-corner airbag", "MagSafe compatible"],
        colors: ["Burgundy"],
        price: 19.99,
        msrp: 19.99,
        fob: 6.90,
        sku: "653854",
        series: "Air",
        renderStyle: "product-photo",
        image: null
      },

      // ── iPHONE 18 PRO — AIR CLEAR (TRANSPARENT) ──
      {
        id: "i18p-air-clear-clear",
        name: "Raptic Air Clear MagSafe for iPhone 18 Pro — Clear",
        device: "iPhone 18 Pro",
        material: "Clear TPU",
        features: ["Military-grade drop protection", "Quad-corner micro-airbag", "Light transmittance >95%", "MagSafe compatible"],
        colors: ["Clear"],
        price: 15.99,
        msrp: 15.99,
        fob: 5.50,
        sku: "653793",
        series: "Air",
        renderStyle: "product-photo",
        image: null
      },
      {
        id: "i18p-air-clear-burgundy",
        name: "Raptic Air Clear MagSafe for iPhone 18 Pro — Burgundy",
        device: "iPhone 18 Pro",
        material: "Clear TPU with Burgundy Bumper",
        features: ["Military-grade drop protection", "Quad-corner micro-airbag", "Burgundy accents", "MagSafe compatible"],
        colors: ["Burgundy"],
        price: 15.99,
        msrp: 15.99,
        fob: 5.50,
        sku: "652185",
        series: "Air",
        renderStyle: "product-photo",
        image: null
      },

      // ── iPHONE 18 PRO — SHIELD EVO (RUGGED) ──
      {
        id: "i18p-shield-evo-starfall",
        name: "Raptic Shield Evo MagSafe for iPhone 18 Pro — Starfall",
        device: "iPhone 18 Pro",
        material: "Rugged Polycarbonate + TPU",
        features: ["3m military-grade certified drop resistance", "Multi-Ap tech", "Side lanyard hole", "MagSafe compatible"],
        colors: ["Starfall"],
        price: 39.99,
        msrp: 39.99,
        fob: 13.90,
        sku: "653595",
        series: "Shield",
        renderStyle: "product-photo",
        image: null
      },
      {
        id: "i18p-shield-evo-titan-gold",
        name: "Raptic Shield Evo MagSafe for iPhone 18 Pro — Titan Gold",
        device: "iPhone 18 Pro",
        material: "Rugged Polycarbonate + TPU",
        features: ["3m military-grade certified drop resistance", "Multi-Ap tech", "Metal power & mute buttons", "MagSafe compatible"],
        colors: ["Titan Gold"],
        price: 39.99,
        msrp: 39.99,
        fob: 13.90,
        sku: "653601",
        series: "Shield",
        renderStyle: "product-photo",
        image: null
      },
      {
        id: "i18p-shield-evo-onyx",
        name: "Raptic Shield Evo MagSafe for iPhone 18 Pro — Onyx",
        device: "iPhone 18 Pro",
        material: "Rugged Polycarbonate + TPU",
        features: ["3m military-grade certified drop resistance", "Multi-Ap tech", "Metal power & mute buttons", "MagSafe compatible"],
        colors: ["Onyx"],
        price: 39.99,
        msrp: 39.99,
        fob: 13.90,
        sku: "653618",
        series: "Shield",
        renderStyle: "product-photo",
        image: null
      },

      // ── SAMSUNG GALAXY S26 ULTRA ──
      {
        id: "s26u-shield-classic-black",
        name: "Raptic Shield Classic Magnetic for Samsung Galaxy S26 Ultra — Black",
        device: "Samsung Galaxy S26 Ultra",
        material: "Polycarbonate + TPU",
        features: ["Multi-Ap 4.0 collision avoidance", "Crystal-clear PC backplate", "MagSafe compatible"],
        colors: ["Black"],
        price: 29.99,
        msrp: 29.99,
        fob: 9.00,
        sku: "650686",
        series: "Shield",
        renderStyle: "product-photo",
        image: null
      },
      {
        id: "s26u-shield-classic-iridescent",
        name: "Raptic Shield Classic Magnetic for Samsung Galaxy S26 Ultra — Iridescent",
        device: "Samsung Galaxy S26 Ultra",
        material: "Polycarbonate + TPU",
        features: ["Multi-Ap 4.0 collision avoidance", "Crystal-clear PC backplate", "Iridescent finish", "MagSafe compatible"],
        colors: ["Iridescent"],
        price: 29.99,
        msrp: 29.99,
        fob: 9.00,
        sku: "650655",
        series: "Shield",
        renderStyle: "product-photo",
        image: null
      },
      {
        id: "s26u-air-stand-clear",
        name: "Raptic Air Stand Magnetic for Samsung Galaxy S26 Ultra — Clear",
        device: "Samsung Galaxy S26 Ultra",
        material: "Clear TPU",
        features: ["Multi-directional support stand", "Stepless hinge (5,000 cycles)", "Four-corner micro-air cushion", "MagSafe compatible"],
        colors: ["Clear"],
        price: 25.99,
        msrp: 25.99,
        fob: 7.00,
        sku: "650716",
        series: "Air",
        renderStyle: "product-photo",
        image: null
      },
      {
        id: "s26u-air-clear-clear",
        name: "Raptic Air Clear Magnetic for Samsung Galaxy S26 Ultra — Clear",
        device: "Samsung Galaxy S26 Ultra",
        material: "Clear TPU",
        features: ["Light transmittance >95%", "Quad-corner micro-air cushion", "3.5° golden arc edges", "MagSafe compatible"],
        colors: ["Clear"],
        price: 23.99,
        msrp: 23.99,
        fob: 5.00,
        sku: "651058",
        series: "Air",
        renderStyle: "product-photo",
        image: null
      },
      {
        id: "s26u-aramid-mondrian-dual",
        name: "Raptic Aramid Dual for Samsung Galaxy S26 Ultra — Mondrian",
        device: "Samsung Galaxy S26 Ultra",
        material: "600D/1500D Aramid Fiber",
        features: ["Metal camera lens frame protection", "Raptic MagSafe ring design", "1.1mm ultra-thin naked feel", "Self-healing scratch-armor"],
        colors: ["Mondrian"],
        price: 39.99,
        msrp: 39.99,
        fob: 14.00,
        sku: "650785",
        series: "Mondrian",
        renderStyle: "product-photo",
        image: null
      },
      {
        id: "s26u-aramid-skin-serenity-amber",
        name: "Raptic Aramid Skin for Samsung Galaxy S26 Ultra — Serenity Amber",
        device: "Samsung Galaxy S26 Ultra",
        material: "Aramid Fiber",
        features: ["Multi-Color KeZhi weaving", "Ultra-thin & drop-proof dual styles", "AeroWoven craftsmanship", "MagSafe compatible"],
        colors: ["Amber"],
        price: 69.99,
        msrp: 69.99,
        fob: 25.80,
        sku: "650730",
        series: "Serenity",
        renderStyle: "product-photo",
        image: null
      },
      {
        id: "s26u-aramid-skin-serenity-emerald",
        name: "Raptic Aramid Skin for Samsung Galaxy S26 Ultra — Serenity Emerald",
        device: "Samsung Galaxy S26 Ultra",
        material: "Aramid Fiber",
        features: ["Multi-Color KeZhi weaving", "Ultra-thin & drop-proof dual styles", "AeroWoven craftsmanship", "MagSafe compatible"],
        colors: ["Emerald"],
        price: 69.99,
        msrp: 69.99,
        fob: 25.80,
        sku: "650822",
        series: "Serenity",
        renderStyle: "product-photo",
        image: null
      },
      {
        id: "s26u-aramid-dual-serenity-amber",
        name: "Raptic Aramid Dual for Samsung Galaxy S26 Ultra — Serenity Amber",
        device: "Samsung Galaxy S26 Ultra",
        material: "Aramid Fiber",
        features: ["Multi-Color KeZhi weaving", "Metal camera lens frame protection", "Four-corner drop protection", "MagSafe compatible"],
        colors: ["Amber"],
        price: 55.99,
        msrp: 55.99,
        fob: 24.80,
        sku: "650754",
        series: "Serenity",
        renderStyle: "product-photo",
        image: null
      },
      {
        id: "s26u-aramid-dual-serenity-emerald",
        name: "Raptic Aramid Dual for Samsung Galaxy S26 Ultra — Serenity Emerald",
        device: "Samsung Galaxy S26 Ultra",
        material: "Aramid Fiber",
        features: ["Multi-Color KeZhi weaving", "Metal camera lens frame protection", "Four-corner drop protection", "MagSafe compatible"],
        colors: ["Emerald"],
        price: 55.99,
        msrp: 55.99,
        fob: 24.80,
        sku: "650846",
        series: "Serenity",
        renderStyle: "product-photo",
        image: null
      },

      // ── SAMSUNG GALAXY FOLD 8 / Z FOLD 8 ULTRA ──
      {
        id: "fold8-skinpro-serenity-amber",
        name: "Raptic Aramid Skin-Pro Magnetic for Samsung Galaxy Fold 8 — Serenity Amber",
        device: "Samsung Galaxy Fold 8",
        material: "Woven Aramid Fiber",
        features: ["Ultra-thin molding", "Fully enclosed leather hinge protection", "Automatic magnetic adsorption", "KeZhi weaving"],
        colors: ["Amber"],
        price: 69.99,
        msrp: 69.99,
        fob: 27.90,
        sku: "653434",
        series: "Serenity",
        renderStyle: "product-photo",
        image: null
      },
      {
        id: "fold8u-skinpro-serenity-amber",
        name: "Raptic Aramid Skin-Pro Magnetic for Samsung Z Fold 8 Ultra — Serenity Amber",
        device: "Samsung Galaxy Z Fold 8 Ultra",
        material: "Woven Aramid Fiber",
        features: ["Ultra-thin molding", "Fully enclosed leather hinge protection", "Automatic magnetic adsorption", "KeZhi weaving"],
        colors: ["Amber"],
        price: 69.99,
        msrp: 69.99,
        fob: 27.90,
        sku: "653458",
        series: "Serenity",
        renderStyle: "product-photo",
        image: null
      },
      {
        id: "fold8-skinpro-serenity-emerald",
        name: "Raptic Aramid Skin-Pro Magnetic for Samsung Galaxy Fold 8 — Serenity Emerald",
        device: "Samsung Galaxy Fold 8",
        material: "Woven Aramid Fiber",
        features: ["Ultra-thin molding", "Fully enclosed leather hinge protection", "Automatic magnetic adsorption", "KeZhi weaving"],
        colors: ["Emerald"],
        price: 69.99,
        msrp: 69.99,
        fob: 27.90,
        sku: "653441",
        series: "Serenity",
        renderStyle: "product-photo",
        image: null
      },
      {
        id: "fold8u-skinpro-serenity-emerald",
        name: "Raptic Aramid Skin-Pro Magnetic for Samsung Z Fold 8 Ultra — Serenity Emerald",
        device: "Samsung Galaxy Z Fold 8 Ultra",
        material: "Woven Aramid Fiber",
        features: ["Ultra-thin molding", "Fully enclosed leather hinge protection", "Automatic magnetic adsorption", "KeZhi weaving"],
        colors: ["Emerald"],
        price: 69.99,
        msrp: 69.99,
        fob: 27.90,
        sku: "653465",
        series: "Serenity",
        renderStyle: "product-photo",
        image: null
      },
      {
        id: "fold8-skinpro-grid-valor",
        name: "Raptic Aramid Skin-Pro Magnetic for Samsung Galaxy Fold 8 — Grid Valor",
        device: "Samsung Galaxy Fold 8",
        material: "Woven Aramid Fiber",
        features: ["Ultra-thin molding", "Fully enclosed leather hinge protection", "Automatic magnetic adsorption", "Gold thread weaving"],
        colors: ["Valor"],
        price: 69.99,
        msrp: 69.99,
        fob: 28.90,
        sku: "653519",
        series: "Grid",
        renderStyle: "product-photo",
        image: null
      },
      {
        id: "fold8u-skinpro-grid-valor",
        name: "Raptic Aramid Skin-Pro Magnetic for Samsung Z Fold 8 Ultra — Grid Valor",
        device: "Samsung Galaxy Z Fold 8 Ultra",
        material: "Woven Aramid Fiber",
        features: ["Ultra-thin molding", "Fully enclosed leather hinge protection", "Automatic magnetic adsorption", "Gold thread weaving"],
        colors: ["Valor"],
        price: 69.99,
        msrp: 69.99,
        fob: 28.90,
        sku: "653526",
        series: "Grid",
        renderStyle: "product-photo",
        image: null
      },
      {
        id: "fold8-skinpro-grid-wisdom",
        name: "Raptic Aramid Skin-Pro Magnetic for Samsung Galaxy Fold 8 — Grid Wisdom",
        device: "Samsung Galaxy Fold 8",
        material: "Woven Aramid Fiber",
        features: ["Ultra-thin molding", "Fully enclosed leather hinge protection", "Automatic magnetic adsorption", "KeZhi weaving"],
        colors: ["Wisdom"],
        price: 65.90,
        msrp: 65.90,
        fob: 28.90,
        sku: "653557",
        series: "Grid",
        renderStyle: "product-photo",
        image: null
      },
      {
        id: "fold8u-skinpro-grid-wisdom",
        name: "Raptic Aramid Skin-Pro Magnetic for Samsung Z Fold 8 Ultra — Grid Wisdom",
        device: "Samsung Galaxy Z Fold 8 Ultra",
        material: "Woven Aramid Fiber",
        features: ["Ultra-thin molding", "Fully enclosed leather hinge protection", "Automatic magnetic adsorption", "KeZhi weaving"],
        colors: ["Wisdom"],
        price: 65.90,
        msrp: 65.90,
        fob: 28.90,
        sku: "653564",
        series: "Grid",
        renderStyle: "product-photo",
        image: null
      },
      {
        id: "fold8-skinpro-mondrian",
        name: "Raptic Aramid Skin-Pro Magnetic for Samsung Galaxy Fold 8 — Mondrian",
        device: "Samsung Galaxy Fold 8",
        material: "Woven Aramid Fiber",
        features: ["Ultra-thin molding", "Fully enclosed leather hinge protection", "Automatic magnetic adsorption", "Minimalist design"],
        colors: ["Mondrian"],
        price: 55.99,
        msrp: 55.99,
        fob: 25.90,
        sku: "653571",
        series: "Mondrian",
        renderStyle: "product-photo",
        image: null
      },
      {
        id: "fold8u-skinpro-mondrian",
        name: "Raptic Aramid Skin-Pro Magnetic for Samsung Z Fold 8 Ultra — Mondrian",
        device: "Samsung Galaxy Z Fold 8 Ultra",
        material: "Woven Aramid Fiber",
        features: ["Ultra-thin molding", "Fully enclosed leather hinge protection", "Automatic magnetic adsorption", "Minimalist design"],
        colors: ["Mondrian"],
        price: 55.99,
        msrp: 55.99,
        fob: 25.90,
        sku: "653588",
        series: "Mondrian",
        renderStyle: "product-photo",
        image: null
      }
    ]
  },

  // ═══════════════════════════════════════════════════
  // SOCIETYOS PROTOCOL — Our own branded cases (future)
  // Liquid glass morphing animation, SocietyOS branding
  // ═══════════════════════════════════════════════════
  societyos: {
    name: "SocietyOS Protocol",
    brand: "SocietyOS",
    logo: "assets/societyos-ares-4.png",
    tagline: "Sovereign Protection for Sovereign Devices",
    visualStyle: "liquid-glass-morph",
    tierDiscounts: {
      carbon: 0.00,
      onyx: 0.10,
      gold: 0.20
    },
    accessories: [],
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
        series: "Grid",
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
        series: "Grid",
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
        series: "Grid",
        renderStyle: "liquid-glass"
      }
    ]
  }
};

// Active protocol — Raptic is the live distributor protocol
var ACTIVE_PROTOCOL = "raptic";

function getActiveProtocol() {
  return SOCIETYOS_PROTOCOLS[ACTIVE_PROTOCOL];
}

function getProtocolCases() {
  return getActiveProtocol().cases;
}

function getProtocolAccessories() {
  return getActiveProtocol().accessories || [];
}

function getTierDiscount(tier) {
  var discounts = getActiveProtocol().tierDiscounts || {};
  return discounts[tier] || 0;
}

function getAccessoryPrice(accessory, tier) {
  var discount = getTierDiscount(tier);
  return accessory.price * (1 - discount);
}

// ── PAIRING LOGIC ─────────────────────────────────
// Given a case, return matching accessories
// Rules:
// 1. "series" matching: accessory.series includes case.series → match by design+color
// 2. "any-magsafe" matching: clear/transparent cases (Air, Shield Clear) → universal accessories
// 3. Clear/transparent cases pair with ANY SocietyOS verified MagSafe accessory
function getPairedAccessories(caseObj, tier) {
  var accessories = getProtocolAccessories();
  var matched = [];

  // Check if case is clear/transparent (Air, Shield, Air Clear, Air Stand)
  var isClearCase = function(c) {
    var clearSeries = ["Air", "Shield"];
    var clearMaterials = ["Clear TPU", "Clear Polycarbonate", "Clear TPU with Burgundy Bumper", "Clear TPU with Black Bumper"];
    var clearColors = ["Clear", "Burgundy", "Black", "Iridescent"];
    if (clearSeries.indexOf(c.series) !== -1) return true;
    if (c.material && c.material.toLowerCase().indexOf("clear") !== -1) return true;
    return false;
  };

  for (var i = 0; i < accessories.length; i++) {
    var acc = accessories[i];

    if (acc.pairingRule === "any-magsafe") {
      // Universal accessory — show for clear cases
      if (isClearCase(caseObj)) {
        matched.push({ accessory: acc, tierPrice: getAccessoryPrice(acc, tier) });
      }
    } else if (acc.pairingRule === "universal") {
      // Pairs with everything
      matched.push({ accessory: acc, tierPrice: getAccessoryPrice(acc, tier) });
    } else if (acc.pairingRule === "series") {
      // Match by series name AND prefer color match
      if (acc.series && acc.series.indexOf(caseObj.series) !== -1) {
        matched.push({ accessory: acc, tierPrice: getAccessoryPrice(acc, tier) });
      }
    }
  }

  // If no series matches and case is clear, show universal accessories
  if (matched.length === 0 && isClearCase(caseObj)) {
    for (var j = 0; j < accessories.length; j++) {
      if (accessories[j].pairingRule === "any-magsafe") {
        matched.push({ accessory: accessories[j], tierPrice: getAccessoryPrice(accessories[j], tier) });
      }
    }
  }

  // If still no matches, show all universal-magsafe accessories as fallback
  if (matched.length === 0) {
    for (var k = 0; k < accessories.length; k++) {
      if (accessories[k].pairingRule === "any-magsafe") {
        matched.push({ accessory: accessories[k], tierPrice: getAccessoryPrice(accessories[k], tier) });
      }
    }
  }

  return matched;
}

function switchProtocol(name) {
  if (SOCIETYOS_PROTOCOLS[name]) {
    ACTIVE_PROTOCOL = name;
    return true;
  }
  return false;
}
