/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - name: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */

window.products = [
  // Category-1 MakeUp Products:
  {
    id: "P1",
    name: "Airbrush Flawless Longwear Foundation",
    description:
      "A long-lasting, weightless, hybrid skincare-foundation—Charlotte secret to a flawless, poreless-looking, confident complexion. Coverage: Full, Finish: Matte, Formulation: Liquid, Skin Type: Normal, Dry, and Combination",
    price: 58.05,
    discontinued: false,
    categories: ["C1"],
    imagePath: "https://www.sephora.com/productimages/sku/s2244804-main-zoom.jpg?imwidth=1224"
  },

  {
    id: "P2",
    name: "Natural Radiant Longwear Foundation",
    description:
      "A buildable, full-coverage foundation with up to 16 hours of lightweight, natural, fade-resistant wear. Coverage: Full, Finish: Natural, Formulation: Liquid, Skin Type: Normal, Dry, and Combination",
    price: 65.08,
    discontinued: false,
    categories: ["C1"],
    imagePath: "https://www.sephora.com/productimages/sku/s2031011-main-zoom.jpg?imwidth=1224"
  },

  {
    id: "P3",
    name: "Watermelon Glow Niacinamide Dew Drops",
    description:
      "A breakthrough, multiuse highlighting serum that hydrates and visibly reduces the look of hyperpigmentation for a dewy, reflective glow—without mica, glitter, or gray cast. Skin Type: Normal, Dry, Combination, and Oily, Skincare Concerns: Dryness and Dullness, Formulation: Lightweight Gel",
    price: 45.55,
    discontinued: false,
    categories: ["C1"],
    imagePath: "https://www.sephora.com/productimages/sku/s2404846-main-zoom.jpg?imwidth=1224"
  },

  {
    id: "P4",
    name: "Veil Mineral Primer",
    description:
      "A state-of-the-art primer that extends the wear of foundation for a perfect complexion—elevate your foundation to unprecedented performance. Formulation: Cream, Skin Type: Normal, Dry, Combination, and Oily ",
    price: 99.05,
    discontinued: false,
    categories: ["C1"],
    imagePath: "https://www.sephora.com/productimages/sku/s1621267-main-zoom.jpg?imwidth=1224"
  },

  // Category-2 SkinCare Products:
  {
    id: "P5",
    name: "Natural Moisturizing Factors + HA",
    description:
      "A hydrating formula with amino acids, dermal lipids, and hyaluronic acid. Solutions for: - Dryness, Skin Type: Normal, Oily, Combination, Dry and Sensitive ",
    price: 12.5,
    discontinued: false,
    categories: ["C2"],
    imagePath: "https://www.sephora.com/productimages/sku/s2210581-main-zoom.jpg?imwidth=1224"
  },

  {
    id: "P6",
    name: "Green Clean Makeup Removing Cleansing Balm",
    description:
      "An award-winning face cleanser that melts away stubborn makeup, SPF, dirt, and oil, leaving skin hydrated with zero residue. Skin Type: Normal, Dry, Combination, and Oily, Skincare Concerns: Dryness, Dullness, and Uneven Texture",
    price: 77.05,
    discontinued: false,
    categories: ["C2"],
    imagePath: "https://www.sephora.com/productimages/sku/s1899103-main-zoom.jpg?imwidth=1224"
  },

  {
    id: "P7",
    name: "Pore Minimizing Instant Detox Mask",
    description:
      "A clay mask that cleanses and visibly tightens pores in as little as 10 minutes. Skin Type: Normal, Combination, and Oily, Skincare Concerns: Pores, Dullness, and Uneven Texture",
    price: 48.08,
    discontinued: false,
    categories: ["C2"],
    imagePath: "https://www.sephora.com/productimages/sku/s1698018-main-zoom.jpg?imwidth=1224"
  },

  {
    id: "P8",
    name: "Hydro UV Defense Sunscreen Broad Spectrum SPF 50",
    description:
      " A lightweight, daily SPF 50+ sunscreen that hydrates and soothes skin with an invisible finish. Skin Type: Normal, Dry, Combination, and Oily, Skincare Concerns: Dryness",
    price: 39.05,
    discontinued: false,
    categories: ["C2"],
    imagePath: "https://www.sephora.com/productimages/sku/s2550333-main-zoom.jpg?imwidth=1224"
  },

  {
    id: "P9",
    name: "The Water Cream Oil-Free Pore Minimizing Moisturizer",
    description:
      "An oil-free, anti-aging water cream that releases a burst of skin-improving Japanese nutrients, powerful botanicals, and optimal hydration for poreless-looking skin. Solutions for: Dryness, Pores, Dullness and uneven texture, Skin Type: Normal, Dry, Combination, and Oily",
    price: 90.99,
    discontinued: false,
    categories: ["C2"],
    imagePath: "https://www.sephora.com/productimages/sku/s1932920-main-zoom.jpg?imwidth=1224"
  },

  // Category-3 Hair Products:
  {
    id: "P10",
    name: "No. 4 Bond Maintenance™ Shampoo",
    description:
      "A highly moisturizing, reparative shampoo that leaves hair easy to manage, shiny, and healthier with each use. Key benefits: Repairs and maintains bonds within the hair, Eliminates frizz and flyaways, Reduces breakage ",
    price: 41.0,
    discontinued: false,
    categories: ["C3"],
    imagePath: "https://www.sephora.com/productimages/sku/s2121549-main-zoom.jpg?imwidth=1224"
  },

  {
    id: "P11",
    name: "No. 5 Bond Maintenance™ Conditioner",
    description:
      "A highly-moisturizing, reparative conditioner that protects and repairs damaged hair, split ends, and frizz by re-linking broken bonds. Key benefits: Repairs hair and maintains bonds within the hair, Adds shine, Strengthens",
    price: 41.05,
    discontinued: false,
    categories: ["C3"],
    imagePath: "https://www.sephora.com/productimages/sku/s2121556-main-zoom.jpg?imwidth=1224"
  },

  {
    id: "P12",
    name: "Elixir Ultime Hydrating Hair Oil Serum",
    description:
      "A blend of four precious oils—with a lightweight finish and versatile styling benefits—to boost hair’s hydration, strength, and shine while reducing frizz. Hair Type: Straight, Wavy, Curly, and Coily, Hair Texture: Fine, Medium, and Thick, Hair Concerns: - Dryness - Frizz - Shine, Key Benefits: - Smooths Hair and Reduces Frizz - Delivers Optimal Hydration and Nourishment - Creates Brilliantly Shiny Hair",
    price: 66.99,
    discontinued: false,
    categories: ["C3"],
    imagePath: "https://www.sephora.com/productimages/sku/s2126985-main-zoom.jpg?imwidth=1224"
  },

  {
    id: "P13",
    name: "Supersonic™ Hair Dryer Gift Set in Vinca Blue/Rosé",
    description:
      "A Supersonic Hair Dryer with pioneering Dyson technology in special-edition Vinca blue and Rosé. Hair Type: Straight, Wavy, Curly, and Coily, Hair Texture: Fine, Medium, and Thick, Hair Concerns: Frizz, Shine, Straightening and Smoothing, Key Benefits: Fast drying. With no extreme heat. Engineered for different hair types, Helps prevent extreme heat damage to protect natural shine.",
    price: 549.99,
    discontinued: false,
    categories: ["C3"],
    imagePath: "https://www.sephora.com/productimages/sku/s2630721-main-zoom.jpg?imwidth=1224"
  },

  // Category-4 Fragrance Products:
  {
    id: "P15",
    name: "Paradoxe Eau de Parfum",
    description:
      "Fragrance Family: Florals, Scent Type: Warm Florals, Key Notes: Neroli Bud, White Amber, White Musk, Fragrance Description: This is a floral, ambery perfume that reinvents freshness with a neroli bud extraction to capture the flower’s fresh scent, sensuality with bio-converted amber to reveal a vibrant warmth, and intensity through a revolutionary musk molecule for an intense yet subtle trail.",
    price: 109.05,
    discontinued: false,
    categories: ["C4"],
    imagePath: "https://www.sephora.com/productimages/sku/s2591170-main-zoom.jpg?imwidth=1224"
  },

  {
    id: "P16",
    name: "Black Opium Eau de Parfum",
    description:
      "Fragrance Family: Warm & Spicy, Scent Type: Warm & Sweet Gourmand, Key Notes: Black Coffee, White Flowers, Vanilla, Fragrance Description: This is a seductively intoxicating women’s fragrance with opening notes of adrenaline-rich coffee and sweet vanilla that recline into the softness of white flowers for a young, modern scent.",
    price: 179.5,
    discontinued: false,
    categories: ["C4"],
    imagePath: "https://www.sephora.com/productimages/sku/s1688852-main-zoom.jpg?imwidth=1224"
  },

  {
    id: "P17",
    name: "Eros",
    description:
      "Fragrance Family: Warm & Spicy, Scent Type: Cool Spices, Key Notes: Mint Leaves, Orange Blossom, Vanilla Madagascar, Fragrance Description: Love, passion, beauty, and desire are the key concepts behind the new men’s fragrance by Versace. Versace Eros is a fragrance for a strong, passionate man, who is master of himself.",
    price: 118.04,
    discontinued: false,
    categories: ["C4"],
    imagePath: "https://www.sephora.com/productimages/sku/s1513225-main-zoom.jpg?imwidth=1224"
  },

  {
    id: "P18",
    name: "Dylan Blue",
    description:
      "Fragrance Family: Earthy & Woody, Scent Type: Earthy Greens & Herbs, Key Notes: Aquatic Notes, Bergamot, Patchouli, Fragrance Description: New and exquisite qualities of natural citrus, aquatic notes, and violet leaves combine with modern hints of fig leaf to give an incisive, Mediterranean freshness. ",
    price: 120.99,
    discontinued: false,
    categories: ["C4"],
    imagePath: " https://www.sephora.com/productimages/sku/s1849207-main-zoom.jpg?imwidth=1224"
  }
];
