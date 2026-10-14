const fs = require('fs');
const path = require('path');
const { writeTemplateFile } = require('./writeHelper.cjs');

const remainingSpecs = [
  // 1. Food & Beverage: Sweet Shop
  {
    id: 'sweet-shop',
    industry: 'food-beverage',
    name: 'Maison Praline Haute Confiserie & Sweet Atelier',
    slug: 'maison-praline-sweet-atelier',
    desc: 'Artisanal silk caramels, single-origin hand-painted chocolate bonbons, and delicate French fruit pâtes de fruits.',
    style: 'luxury-editorial',
    thumb: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=1200&q=80',
    tags: ['sweet shop', 'chocolatier', 'bonbons', 'caramels', 'confectionery', 'gifts'],
    heroBadge: 'Master Chocolatiers • Grand Cru Single-Origin Cacao',
    title: 'Artisanal Pralines, Silk Caramels & Hand-Spun Confections',
    subtitle: 'Hand-crafted in micro-batches using single-origin Grand Cru cacao, Piedmont hazelnuts, and organic lavender infusions.',
    services: [
      { id: 'sw1', title: 'Grand Cru Signature Bonbon Chest', description: '24-piece hand-painted dark and milk chocolate bonbons infused with rare fruit purees and Tahitian vanilla.', price: '$68 Box' },
      { id: 'sw2', title: 'Fleur de Sel Salted Butter Caramels', description: 'Slow-cooked in copper kettles with Brittany butter and Guerande sea salt flakes.', price: '$24 Tin' },
      { id: 'sw3', title: 'Pistachio & Rose Water Nougat Montélimar', description: 'Honey-whipped Mediterranean soft nougat packed with roasted Iranian pistachios and almonds.', price: '$18 Bar' }
    ]
  },
  // 2. Food & Beverage: Organic Food Store
  {
    id: 'organic-food-store',
    industry: 'food-beverage',
    name: 'TerraVerde Certified Organic Grocer & Market',
    slug: 'terraverde-organic-food-store',
    desc: 'Regeneratively farmed organic vegetables, stone-ground ancient grains, cold-pressed oils, and non-toxic home provisions.',
    style: 'organic-natural',
    thumb: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&w=1200&q=80',
    tags: ['organic food store', 'organic grocery', 'farm market', 'regenerative', 'bulk pantry', 'raw honey'],
    heroBadge: '100% Certified USDA Organic • Zero-Waste Bulk Pantry',
    title: 'Pure, Regeneratively Farmed Food Straight from Earth to Table',
    subtitle: 'Fresh heirloom produce, stone-milled grains, raw local honey, and non-toxic home staples curated for longevity and vitality.',
    services: [
      { id: 'org1', title: 'Weekly Regenerative Produce Box', description: 'Crisp seasonal farm harvest featuring 12 varieties of organic greens, roots, and heirloom fruits.', price: '$45 / Box' },
      { id: 'org2', title: 'Artisanal Cold-Pressed Olive Oils & Ferments', description: 'Single-estate early harvest olive oils and living probiotic kimchis and sauerkrauts.', price: '$28 Bottle' },
      { id: 'org3', title: 'Zero-Waste Bulk Grains & Superfoods', description: 'Organic sprouted quinoa, ancient spelt, chia seeds, and raw maca roots weighed to order.', price: 'From $6 / lb' }
    ]
  },
  // 3. Food & Beverage: Grocery Store
  {
    id: 'grocery-store',
    industry: 'food-beverage',
    name: 'Provender Fine Neighborhood Grocer & Provisions',
    slug: 'provender-fine-neighborhood-grocery',
    desc: 'Boutique neighborhood grocer blending daily essentials, locally roasted coffees, European cheeses, and chef-made ready meals.',
    style: 'minimal-neutral',
    thumb: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80',
    tags: ['grocery store', 'neighborhood market', 'provisions', 'artisan deli', 'fresh produce', 'deli'],
    heroBadge: 'Local Farms • Artisan Deli • Same-Day Neighborhood Delivery',
    title: 'Your Neighborhood’s Curated Daily Grocery & Artisan Deli',
    subtitle: 'Everyday essentials elevated with crisp local farm harvests, prime cut meats, European imports, and sommelier-curated cellar wines.',
    services: [
      { id: 'gr1', title: 'Farm-Fresh Dairy & Pasture-Raised Eggs', description: 'Daily morning drops from regional family farms with non-homogenized milk and butter.', price: '$12 Set' },
      { id: 'gr2', title: 'Artisan Charcuterie & Aged Cheese Platter', description: 'Prosciutto di Parma 24-month, aged Comté, marinated Castelvetrano olives, and crackers.', price: '$38 Board' },
      { id: 'gr3', title: 'Chef-Prepared Market Ready Meals', description: 'Heat-and-serve organic family suppers cooked fresh each morning in our open kitchen.', price: '$32 Dinner' }
    ]
  },
  // 4. Food & Beverage: Supermarket
  {
    id: 'supermarket',
    industry: 'food-beverage',
    name: 'Apex Grand Market & International Supermarket',
    slug: 'apex-grand-international-supermarket',
    desc: 'Expansive international grocery destination offering 45,000+ items, live seafood tanks, dry-aged meats, and fast curbside pickup.',
    style: 'modern-corporate',
    thumb: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=1200&q=80',
    tags: ['supermarket', 'international grocery', 'meat counter', 'seafood market', 'curbside pickup'],
    heroBadge: 'Over 45,000 Products • Global Import Aisle • Smart Express Checkout',
    title: 'World-Class Groceries, Fresh Seafood Market & Everyday Value',
    subtitle: 'From Pacific king salmon and Japanese wagyu to daily family household staples, experience unprecedented variety under one roof.',
    services: [
      { id: 'sm1', title: 'Live Seafood & Prime Butcher Counter', description: 'Fresh wild catches filleted to order with in-house 45-day dry-aged prime steaks.', price: 'Market Price' },
      { id: 'sm2', title: 'International Global Gourmet Pavilion', description: 'Imported sauces, noodles, spices, and confectionery from over 60 countries across 5 continents.', price: 'Everyday Value' },
      { id: 'sm3', title: 'Curbside Express & 1-Hour Home Delivery', description: 'Automated barcode fulfillment with temperature-insulated bins loaded straight into your trunk.', price: '$9.99 / Order' }
    ]
  },
  // 5. Food & Beverage: Meal Subscription
  {
    id: 'meal-subscription',
    industry: 'food-beverage',
    name: 'NourishTable Chef-Crafted Macro Meal Subscriptions',
    slug: 'nourishtable-meal-subscription',
    desc: 'Ready-to-eat gourmet macro meals designed by Michelin chefs and performance nutritionists. Delivered fresh, never frozen.',
    style: 'modern-corporate',
    thumb: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80',
    tags: ['meal subscription', 'meal delivery', 'macro friendly', 'high protein', 'keto', 'healthy meals'],
    heroBadge: 'Ready in 3 Minutes • Organic • Tailored to Your Fitness Goals',
    title: 'Michelin-Trained Chef Meals Delivered Chilled to Your Door',
    subtitle: 'No cooking, no prep, no cleanup. High-protein, keto, and plant-fueled gourmet suppers calibrated for maximum daily performance.',
    services: [
      { id: 'ms1', title: 'Athletic High-Protein Plan (10 Meals/Wk)', description: '45g+ protein per meal featuring grass-fed sirloin, wild Alaskan salmon, and complex carbs.', price: '$145 / week' },
      { id: 'ms2', title: 'Plant-Rich Longevity Protocol', description: 'Anti-inflammatory macro bowls with ancient grains, tempeh, and cold-pressed olive dressings.', price: '$130 / week' },
      { id: 'ms3', title: 'Ketogenic Clean Burn Plan', description: 'Healthy avocado oils, organic pasture meats, and low-glycemic greens with zero added sugars.', price: '$140 / week' }
    ]
  },
  // 6. Food & Beverage: Vegetarian Restaurant
  {
    id: 'vegetarian-restaurant',
    industry: 'food-beverage',
    name: 'Verdant Hearth Botanical Vegetarian Kitchen',
    slug: 'verdant-hearth-vegetarian-kitchen',
    desc: 'Wood-fired vegetarian cuisine celebrating seasonal fungi, heirloom legumes, and botanical wine pairings in an airy conservatory.',
    style: 'organic-natural',
    thumb: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80',
    tags: ['vegetarian restaurant', 'plant based', 'wood fired', 'farm to table', 'botanical kitchen'],
    heroBadge: '100% Plant-Centric • Farm-to-Table Wood-Fired Hearth',
    title: 'Sensory, Hearty Vegetarian Dining Powered by the Seasons',
    subtitle: 'Celebrating mushrooms, heirloom legumes, wood-roasted vegetables, and house-fermented wines in a sunlit botanical greenhouse.',
    services: [
      { id: 'vr1', title: 'Wood-Roasted Maitake & Smoked Polenta', description: 'Charred forest maitake with truffled vegetable demi-glace and crispy shallot leeks.', price: '$29' },
      { id: 'vr2', title: 'House-Made Cashew Ricotta Agnolotti', description: 'Roasted kabocha squash filling, sage browned plant butter, and toasted pine nuts.', price: '$27' },
      { id: 'vr3', title: 'Six-Course Botanical Tasting Journey', description: 'Seasonal harvest flight with optional house-fermented kombucha and natural wine pairings.', price: '$85 / Guest' }
    ]
  },
  // 7. Food & Beverage: Food Delivery
  {
    id: 'food-delivery',
    industry: 'food-beverage',
    name: 'SwiftBite Premium Gourmet Express Delivery',
    slug: 'swiftbite-gourmet-food-delivery',
    desc: 'Curated delivery app connecting discerning diners with top independent kitchens. Thermal insulated dispatch under 25 minutes.',
    style: 'bold-creative',
    thumb: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=1200&q=80',
    tags: ['food delivery', 'express courier', 'gourmet delivery', 'fast food delivery', 'takeout'],
    heroBadge: 'Sub-25 Minute Thermal Guarantee • Curated Independent Eateries',
    title: 'Your City’s Best Independent Kitchens, Delivered Hot in Minutes',
    subtitle: 'Thermal-sealed, temperature-regulated dispatch bringing chef-crafted ramen, Neapolitan pizzas, and gourmet burgers straight to your sofa.',
    services: [
      { id: 'fd1', title: 'Thermal Heated Rapid Courier Delivery', description: 'Guaranteed hot arrival or instant meal credit with real-time live map tracking.', price: '$4.99 Delivery' },
      { id: 'fd2', title: 'Multi-Restaurant Consolidated Orders', description: 'Order from up to 3 neighboring kitchens in a single checkout with one courier.', price: '$6.50 Fee' },
      { id: 'fd3', title: 'SwiftBite Unlimited VIP Pass', description: 'Free priority delivery and zero service fees on all orders over $25 every month.', price: '$14.99 / mo' }
    ]
  },
  // 8. Food & Beverage: Specialty Food Brand
  {
    id: 'specialty-food-brand',
    industry: 'food-beverage',
    name: 'Soleil Noir Truffles & Fermented Gastronomy',
    slug: 'soleil-noir-specialty-food-brand',
    desc: 'Rare winter black truffle condiments, 25-year cask-aged Modena balsamics, and small-batch finishing salts for discerning culinary connoisseurs.',
    style: 'luxury-editorial',
    thumb: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=1200&q=80',
    tags: ['specialty food', 'truffle oil', 'aged balsamic', 'gourmet food brand', 'epicurean', 'pantry'],
    heroBadge: 'Perigord Black Truffles • 18-Year Traditional Modena Aging',
    title: 'Exquisite Culinary Artifacts for the Discerning Home Epicure',
    subtitle: 'Rare winter black truffle oils, 18-year barrel-aged balsamic reductions, and smoked sea salt salts formulated for world-class tables.',
    services: [
      { id: 'sf1', title: 'Reserve Black Winter Truffle Carpaccio (120g)', description: 'Thinly shaved French Perigord truffles steeped in cold-pressed extra virgin olive oil.', price: '$85 Jar' },
      { id: 'sf2', title: 'Tradizionale 25-Year Modena Balsamic Condiment', description: 'Viscous oak-cask aged nectar bottled in numbered wax-sealed flasks with dropper.', price: '$120 Bottle' },
      { id: 'sf3', title: 'Cold-Smoked Breton Sea Salt with Porcini', description: 'Crunchy mineral-rich sea salt flakes smoked over hickory embers with wild porcini dust.', price: '$24 Jar' }
    ]
  },
  // 9. Business Services: Construction Company
  {
    id: 'construction-company',
    industry: 'business-services',
    name: 'Ironclad Commercial Builders & General Contracting',
    slug: 'ironclad-commercial-builders',
    desc: 'General commercial contracting, structural engineering, mass timber towers, and turnkey tenant renovations built to the highest safety codes.',
    style: 'modern-corporate',
    thumb: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1200&q=80',
    tags: ['construction company', 'general contractor', 'commercial builder', 'civil engineering', 'leed'],
    heroBadge: 'LEED Gold Certified • Zero Lost-Time Incidents in 6 Years',
    title: 'Precision Commercial General Contracting & Structural Engineering',
    subtitle: 'From 40-story mixed-use towers to cutting-edge life sciences labs, we deliver complex capital projects on schedule and under budget.',
    services: [
      { id: 'cc1', title: 'Commercial Design-Build EPC Delivery', description: 'Unified single-source architecture, MEP engineering, and construction management.', price: '$5M - $50M Scope' },
      { id: 'cc2', title: 'Mass Timber & Sustainable Structural Framing', description: 'Carbon-negative glulam and cross-laminated timber towers reducing structural embodied carbon.', price: 'Turnkey Contract' },
      { id: 'cc3', title: 'Advanced Cleanroom & Lab Tenant Buildouts', description: 'ISO Class 5-8 certified HVAC, MEP, and vibration-isolated research environments.', price: 'Specialized Build' }
    ]
  },
  // 10. Automotive: Car Dealership
  {
    id: 'car-dealership',
    industry: 'automotive',
    name: 'Apex Prestige Motorcars & Exotic Dealership',
    slug: 'apex-prestige-motorcars-dealership',
    desc: 'Authorized retailer of high-performance grand tourers, vintage collector vehicles, and white-glove consignment brokerage.',
    style: 'dark-cinematic',
    thumb: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    tags: ['car dealership', 'luxury cars', 'exotic cars', 'supercars', 'motorcars', 'dealership'],
    heroBadge: 'Authorized Marque Retailer • White-Glove Enclosed Transport',
    title: 'The World’s Most Coveted Supercars, Grand Tourers & Luxury Sedans',
    subtitle: 'Step into our climate-controlled architectural showroom featuring pristine low-mileage Ferrari, Porsche, Aston Martin, and Bentley inventory.',
    services: [
      { id: 'cd1', title: 'Bespoke Supercar Acquisition & Consignment', description: 'Confidential global sourcing and escrow management for rare hypercars and limited series.', price: '$150k - $2.5M' },
      { id: 'cd2', title: 'Certified Pre-Owned 180-Point Inspection', description: 'Complete factory scan, paint depth meter verification, and 2-year bumper-to-bumper warranty.', price: 'Included' },
      { id: 'cd3', title: 'White-Glove Enclosed Nationwide Delivery', description: 'Delivered directly to your estate or airport hangar in private climate-controlled transport.', price: '$1,200 Flat' }
    ]
  },
  // 11. Automotive: Auto Repair
  {
    id: 'auto-repair',
    industry: 'automotive',
    name: 'Vanguard Precision Auto Repair & Master Mechanics',
    slug: 'vanguard-precision-auto-repair',
    desc: 'ASE Master Certified mechanics providing digital vehicle inspections, OEM European diagnostics, and complete powertrain overhauls.',
    style: 'modern-corporate',
    thumb: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1200&q=80',
    tags: ['auto repair', 'mechanic', 'brake repair', 'engine diagnostics', 'oil change', 'transmission'],
    heroBadge: 'ASE Master Certified Techs • OEM Factory Diagnostics • 36mo Warranty',
    title: 'Uncompromising Mechanical Integrity & Master European Diagnostic Care',
    subtitle: 'Transparent video inspections, factory scan tools for BMW, Mercedes, Porsche, and Audi, and precision engine rebuilds.',
    services: [
      { id: 'ar1', title: 'Digital Vehicle Health Inspection (DVI)', description: 'High-resolution photo and video diagnostic report sent directly to your smartphone.', price: '$89 Comprehensive' },
      { id: 'ar2', title: 'Precision Brake Rotor & Ceramic Pad Service', description: 'OEM-spec noise-free performance braking system overhaul with fluid flush.', price: '$480 / Axle' },
      { id: 'ar3', title: 'Direct Injection Valve Walnut Shell Blasting', description: 'Removes stubborn intake valve carbon buildup restoring original engine power and MPG.', price: '$650 Service' }
    ]
  },
  // 12. Automotive: Electric Vehicle
  {
    id: 'electric-vehicle',
    industry: 'automotive',
    name: 'Voltaic Mobility Electric Hypercar & EV Atelier',
    slug: 'voltaic-mobility-electric-vehicle',
    desc: 'Next-generation 800V silicon-carbide electric vehicles, bi-directional residential power backup, and autonomous touring technology.',
    style: 'technology-gradient',
    thumb: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80',
    tags: ['electric vehicle', 'ev', 'electric car', 'hypercar', 'fast charging', 'battery'],
    heroBadge: '800V Architecture • 0-60 in 1.9s • 520 Mile Highway Range',
    title: 'Electrified Performance Reimagined Without Carbon Compromise',
    subtitle: 'Dual and tri-motor silicon-carbide inverters delivering instant torque, bidirectional home power integration, and level-3 autonomous piloting.',
    services: [
      { id: 'ev1', title: 'Voltaic GT Tri-Motor Performance Flagship', description: '1,020hp with adaptive active air suspension and track-tested carbon-ceramic brakes.', price: '$128,000' },
      { id: 'ev2', title: 'Bidirectional Smart Home Power Integration', description: 'Vehicle-to-Home inverter powers your entire residence for up to 7 days during grid outages.', price: '$4,500 Installed' },
      { id: 'ev3', title: 'Ultracharge 350kW Fast Charging Network', description: 'Adds 200 miles of highway range in under 12 minutes at over 10,000 high-speed stalls.', price: '$30 / mo Access' }
    ]
  },
  // 13. Entertainment & Media: Gaming Studio
  {
    id: 'gaming',
    industry: 'entertainment-media',
    name: 'MythicForge Interactive Game Studio',
    slug: 'mythicforge-game-studio',
    desc: 'Triple-A independent video game studio crafting narrative-rich open-world RPGs, procedural multiplayer arenas, and Unreal Engine 5 worlds.',
    style: 'dark-cinematic',
    thumb: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1200&q=80',
    tags: ['gaming studio', 'video games', 'unreal engine 5', 'open world rpg', 'game development', 'indie game'],
    heroBadge: 'Creators of "Aethelgard: Fall of Stars" • Over 8M Global Players',
    title: 'Crafting Immersive Open-World RPGs and High-Fidelity Unreal 5 Worlds',
    subtitle: 'We push the boundaries of real-time Nanite photogrammetry, cinematic emergent storytelling, and physics-driven action combat.',
    services: [
      { id: 'gm1', title: 'Aethelgard: Fall of Stars (Deluxe Edition)', description: '120-hour dark fantasy action RPG on PC, PS5, Xbox Series X with full orchestral score.', price: '$69.99' },
      { id: 'gm2', title: 'Mythic Engine Open-World Toolset (Asset Pack)', description: 'Modular fantasy foliage, castle meshes, and custom dynamic weather shader graphs.', price: '$149' },
      { id: 'gm3', title: 'Soundtrack & Orchestral Vinyl Boxset', description: '3-LP heavyweight vinyl featuring the live London Philharmonic game score recording.', price: '$79.99' }
    ]
  },
  // 14. Entertainment & Media: Podcast
  {
    id: 'podcast',
    industry: 'entertainment-media',
    name: 'The Horizon Shift Daily Tech & Future Podcast',
    slug: 'the-horizon-shift-podcast',
    desc: 'Daily technology and culture podcast uncovering breakthrough artificial intelligence, biotech frontiers, and the future of human society.',
    style: 'dark-cinematic',
    thumb: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1200&q=80',
    tags: ['podcast', 'tech podcast', 'interviews', 'audio production', 'spotify', 'apple podcasts'],
    heroBadge: 'Over 12M Annual Downloads • Top 10 Apple Podcasts in Tech',
    title: 'Conversations with the Founders, Researchers & Outliers Reshaping Tomorrow',
    subtitle: 'Deep-dive interviews on artificial intelligence, frontier biotech, quantum computing, and the geopolitics of tech with host Elena Cruz.',
    services: [
      { id: 'pc1', title: 'Weekly Full Episodes & Transcripts', description: 'Available freely on Spotify, Apple Podcasts, YouTube 4K, and direct RSS audio feeds.', price: 'Free Everywhere' },
      { id: 'pc2', title: 'Horizon Club VIP Ad-Free Feed & Monthly Q&A', description: 'Uncut interviews, early episode releases, and member-only live monthly strategy firesides.', price: '$9 / month' },
      { id: 'pc3', title: 'Enterprise Title Sponsorship Package', description: '60-second host-read midroll campaign reaching over 250,000 tech decision-makers.', price: '$8,500 / Episode' }
    ]
  },
  // 15. Agriculture & Environment: Organic Farm
  {
    id: 'organic-farm',
    industry: 'agriculture-environment',
    name: 'SunMeadow Regenerative Organic Farm & Apiary',
    slug: 'sunmeadow-organic-farm-apiary',
    desc: 'Regenerative organic agriculture, heirloom fruit orchards, raw honey apiary, and seasonal community farm-share vegetable baskets.',
    style: 'organic-natural',
    thumb: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80',
    tags: ['organic farm', 'csa', 'regenerative agriculture', 'raw honey', 'apiary', 'farm share'],
    heroBadge: 'Regenerative Organic Certified (ROC) • No Synthetic Chemicals',
    title: 'Restoring Living Soils and Growing Nutrient-Dense Food in Harmony with Nature',
    subtitle: 'Cover-cropped pastures, heirloom fruit orchards, wildflower pollinator corridors, and heritage breed pastured poultry.',
    services: [
      { id: 'fm1', title: 'Farmstead CSA Harvest Share (24 Weeks)', description: 'Weekly farm-gate basket of fresh berries, heirloom tomatoes, roots, and culinary herbs.', price: '$720 / Season' },
      { id: 'fm2', title: 'Raw Wildflower Honey & Bee Pollen Trio', description: 'Unfiltered, unpasteurized cold-extracted pure raw honey straight from our heritage hives.', price: '$36 Set' },
      { id: 'fm3', title: 'Regenerative Farm Tour & Workshop Weekend', description: 'Soil microbiology masterclass, medicinal herb walk, and wood-fired farmstead luncheon.', price: '$110 / Person' }
    ]
  },
  // 16. Agriculture & Environment: Solar Energy
  {
    id: 'solar-energy',
    industry: 'agriculture-environment',
    name: 'Helios Clean Energy & Residential Solar Solutions',
    slug: 'helios-solar-clean-energy',
    desc: 'Turnkey residential and commercial rooftop solar installations, battery storage microgrids, and EV charging station setups.',
    style: 'modern-corporate',
    thumb: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
    tags: ['solar energy', 'solar panels', 'battery storage', 'clean energy', 'renewable', 'powerwall'],
    heroBadge: 'Tier-1 All-Black Solar Panels • 25-Year Production Guarantee',
    title: 'Zero-Down Rooftop Solar and Battery Storage for Energy Independence',
    subtitle: 'Lock in predictable electricity costs, eliminate rolling blackout vulnerability, and capture 30% federal clean energy tax credits.',
    services: [
      { id: 'so1', title: 'Turnkey Residential Rooftop Array', description: 'High-efficiency monocrystalline panels with Enphase microinverters and mobile telemetry.', price: '$12,000 Net' },
      { id: 'so2', title: 'Tesla Powerwall 3 Whole-Home Battery Backup', description: 'Seamless automatic microgrid islanding keeping your lights and refrigeration on during outages.', price: '$8,500 Unit' },
      { id: 'so3', title: 'Commercial EV Fleet Solar Carports', description: 'Dual-purpose shade structures generating clean megawatts directly to fleet charging docks.', price: 'Commercial Scope' }
    ]
  },
  // 17. Pets & Animals: Pet Grooming
  {
    id: 'pet-grooming',
    industry: 'pets-animals',
    name: 'The Posh Paw Luxury Dog Spa & Grooming Atelier',
    slug: 'the-posh-paw-pet-grooming',
    desc: 'Boutique stress-free grooming salon providing dead-sea mineral mud baths, hand-scissored breed cuts, and calming aromatherapy.',
    style: 'soft-pastel',
    thumb: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1200&q=80',
    tags: ['pet grooming', 'dog spa', 'dog wash', 'hydrotherapy', 'scissoring', 'groomer'],
    heroBadge: 'Fear-Free Certified Groomers • Organic Hypoallergenic Botanicals',
    title: 'Gentle, Stress-Free Coat Styling and Hydrotherapy Spa for Pampered Pets',
    subtitle: 'No scary cage dryers. Private acoustic suites, warm dead-sea mud baths, blueberry facials, and breed-standard scissor sculpting.',
    services: [
      { id: 'pg1', title: 'Signature Posh Spa & Hand-Scissor Cut', description: 'Warm hydro-massage bath, gentle fluff dry, nail dremel, ear cleansing, and custom breed styling.', price: '$85 - $140' },
      { id: 'pg2', title: 'Dead Sea Mineral De-Shedding Treatment', description: 'Natural mineral bath releasing trapped undercoat while soothing dry, itchy skin.', price: '$45 Add-On' },
      { id: 'pg3', title: 'Oatmeal & Blueberry Facial Soak', description: 'Tear-stain lifting, sensitive muzzle conditioning, and enzymatic breath freshening.', price: '$25 Treatment' }
    ]
  },
  // 18. Events & Weddings: Wedding Planner
  {
    id: 'wedding-planner',
    industry: 'events-weddings',
    name: 'L’Aura Bespoke Wedding & Event Design',
    slug: 'laura-bespoke-wedding-planner',
    desc: 'High-end destination wedding planning and floral art direction across private Italian villas, French châteaux, and coastal estates.',
    style: 'luxury-editorial',
    thumb: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    tags: ['wedding planner', 'destination wedding', 'luxury events', 'event design', 'vogue weddings'],
    heroBadge: 'Vogue Weddings Top Planner • Destination Weddings in Italy & France',
    title: 'Cinematic, Soulful Weddings Planned with Architectural Precision',
    subtitle: 'From historic Lake Como villas to private California vineyards, we orchestrate breathtaking celebrations that mirror your authentic romance.',
    services: [
      { id: 'wp1', title: 'Full-Service Concept Design & Production', description: 'End-to-end planning, bespoke floral design, vendor management, budget strategy, and guest concierge.', price: '$14,000+' },
      { id: 'wp2', title: 'Destination Wedding Weekend Curation', description: 'Multi-day experience planning: welcome cocktail evening, main wedding gala, and farewell brunch.', price: '$18,500+' },
      { id: 'wp3', title: 'Month-Of Styling & Master Coordination', description: 'Rigorous 8-week countdown, vendor logistical reconciliation, and seamless day-of execution.', price: '$4,500 Package' }
    ]
  },
  // 19. Legal & Public Services: Lawyer
  {
    id: 'lawyer',
    industry: 'legal-public',
    name: 'Vance & Sterling Senior Litigation & Trial Counsel',
    slug: 'vance-sterling-trial-lawyer',
    desc: 'Elite trial attorneys specializing in complex corporate litigation, intellectual property disputes, and high-stakes white-collar defense.',
    style: 'modern-corporate',
    thumb: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80',
    tags: ['lawyer', 'attorney', 'litigation', 'trial lawyer', 'commercial law', 'legal counsel'],
    heroBadge: 'Over $180M Recovered for Clients • Top 100 National Trial Lawyers',
    title: 'Fierce Advocacy, Strategic Brilliance, and Unflinching Courtroom Mastery',
    subtitle: 'When the stakes are existential—high-profile commercial litigation, serious catastrophic injury, or white-collar government investigations.',
    services: [
      { id: 'lw1', title: 'Complex Commercial & Contract Litigation', description: 'Partnership disputes, trade secret misappropriation, and breach of fiduciary duty in state and federal courts.', price: 'Retainer' },
      { id: 'lw2', title: 'Catastrophic Injury & Wrongful Death Claims', description: 'Securing life-changing settlements against negligent corporations and commercial operators.', price: 'No Fee Unless Won' },
      { id: 'lw3', title: 'White-Collar Criminal Defense & Inquiries', description: 'DOJ, SEC, and grand jury subpoena response, internal corporate investigations, and crisis mitigation.', price: 'Confidential Retainer' }
    ]
  },
  // 20. Community & Organizations: Nonprofit Organization
  {
    id: 'nonprofit-organization',
    industry: 'community-orgs',
    name: 'CleanWater Global Humanitarian Relief & Well Initiative',
    slug: 'cleanwater-global-humanitarian-nonprofit',
    desc: 'Nonprofit organization deploying solar-powered deep water filtration wells and sanitation training to water-scarce global villages.',
    style: 'minimal-neutral',
    thumb: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80',
    tags: ['nonprofit', 'humanitarian', 'clean water', 'charity', 'donations', 'global relief'],
    heroBadge: 'Charity Navigator 4-Star Rating • 100% Model for Public Donations',
    title: 'Bringing Sustainable Solar Deep Wells to Remote Water-Scare Communities',
    subtitle: 'Every dollar donated funds physical well drilling, water filtration tanks, and local community hygiene leadership across 14 nations.',
    services: [
      { id: 'np1', title: 'Sponsor a Village Solar Deep Well', description: 'Provides permanent clean drinking water for a village of 800 people for 25+ years with GPS tracking.', price: '$7,500 Full Project' },
      { id: 'np2', title: 'Monthly Water Keeper Supporter Membership', description: 'Provides continuous replacement filter membranes, testing kits, and technician toolkits.', price: '$30 / month' },
      { id: 'np3', title: 'Emergency Rapid Disaster Filtration Pack', description: 'Deploys portable high-volume gravity filtration systems to flood and natural disaster zones.', price: '$150 Kit' }
    ]
  },
  // 21. Industrial & Manufacturing: Manufacturing Company
  {
    id: 'manufacturing-company',
    industry: 'industrial-mfg',
    name: 'Titan Precision CNC Machining & Aerospace Fabrication',
    slug: 'titan-precision-machining-manufacturing',
    desc: 'AS9100D certified precision 5-axis CNC machining, titanium laser additive manufacturing, and ITAR defense structural manufacturing.',
    style: 'modern-corporate',
    thumb: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    tags: ['manufacturing', 'cnc machining', 'aerospace', 'fabrication', 'as9100', 'precision'],
    heroBadge: 'AS9100D & ISO 9001:2015 Certified • ITAR Registered',
    title: 'Sub-Micron Precision 5-Axis Machining for Aerospace and Defense',
    subtitle: 'High-complexity titanium, Inconel, and carbon fiber structural components manufactured with automated robotic continuous feed.',
    services: [
      { id: 'mf1', title: '5-Axis High-Speed CNC Milling & Turning', description: 'Tolerances down to +/- 0.0001 inches on exotic high-temp aerospace superalloys.', price: 'Custom Job Quote' },
      { id: 'mf2', title: 'Laser Sintered Metal 3D Additive Printing', description: 'Direct metal laser melting (DMLM) for lightweight rocket propulsion injectors and heat exchangers.', price: 'Direct CAD Quote' },
      { id: 'mf3', title: 'Automated CMM Quality & AS9102 Inspection', description: 'Complete Zeiss CMM dimensional verification, material spectrometry certs, and FAI documentation.', price: 'Included with Order' }
    ]
  },
  // 22. Sports & Recreation: Sports Club
  {
    id: 'sports-club',
    industry: 'sports-recreation',
    name: 'Vanguard Racquet, Padel & Athletic Country Club',
    slug: 'vanguard-racquet-sports-club',
    desc: 'Private athletic country club featuring 16 tennis courts, panoramic glass padel courts, heated Olympic lap pool, and clubhouse restaurant.',
    style: 'premium-hospitality',
    thumb: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
    tags: ['sports club', 'tennis club', 'padel club', 'athletic club', 'country club', 'fitness'],
    heroBadge: '16 Championship Courts • Panoramic Padel Enclosures • Heated Olympic Pool',
    title: 'The Premier Racquet, Performance Fitness and Social Sanctuary',
    subtitle: 'Championship red clay courts, indoor heated turf, state-of-the-art strength pavilion, and an open-air clubhouse lounge.',
    services: [
      { id: 'sp1', title: 'Full Athletic & Racquet Membership', description: 'Unlimited court reservations, Olympic lap pool access, sauna suites, and member league entry.', price: '$285 / month' },
      { id: 'sp2', title: 'High-Performance Junior Tennis Academy', description: 'USPTA-certified development curriculum for ranked junior tournament competitors and college recruits.', price: '$350 / month' },
      { id: 'sp3', title: 'Private Master Coaching & Stroke Analysis', description: 'One-on-one video biomechanical breakdown, spin rate tracking, and match tactics.', price: '$110 / hour' }
    ]
  },
  // 23. Personal & Local Services: Plumbing
  {
    id: 'plumbing',
    industry: 'personal-services',
    name: 'BlueFlow Emergency Plumbing & Trenchless Sewer Repair',
    slug: 'blueflow-emergency-plumbing-services',
    desc: '24/7 master plumbing contractor providing non-invasive leak detection, hydro-jetting, tankless water heaters, and trenchless sewer pipe relining.',
    style: 'modern-corporate',
    thumb: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80',
    tags: ['plumbing', 'emergency plumber', 'drain cleaning', 'water heater', 'leak detection', 'sewer repair'],
    heroBadge: '24/7 Rapid Response • Licensed & Insured • Upfront Fixed Pricing',
    title: 'Emergency Leak Detection, Hydro-Jetting & Same-Day Water Heater Repairs',
    subtitle: 'No overtime charges on weekends. Our certified master plumbers arrive in fully stocked mobile vans ready to resolve your issue immediately.',
    services: [
      { id: 'pl1', title: '24/7 Emergency Burst Pipe & Leak Detection', description: 'Non-invasive acoustic listening and thermal imaging locating hidden slab leaks within minutes.', price: '$180 Callout' },
      { id: 'pl2', title: 'Tankless On-Demand Water Heater Installation', description: 'Continuous hot water and high energy efficiency with standard 10-year factory warranty.', price: '$2,400 Installed' },
      { id: 'pl3', title: 'High-Pressure Hydro-Jetting & Video Scope', description: 'Scours stubborn tree root intrusions, grease sludge, and scale buildup to factory bore.', price: '$380 Service' }
    ]
  },
  // 24. Transport & Logistics: Logistics Company
  {
    id: 'logistics-company',
    industry: 'transport-logistics',
    name: 'VelocityGlobal Intermodal Freight & Cold-Chain Logistics',
    slug: 'velocityglobal-intermodal-freight-logistics',
    desc: 'Global freight forwarder managing refrigerated reefer intermodal, bonded ocean air cargo, customs brokerage, and automated 3PL fulfillment.',
    style: 'modern-corporate',
    thumb: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    tags: ['logistics company', 'freight forwarding', 'cold chain', 'supply chain', 'trucking', 'intermodal'],
    heroBadge: 'Real-Time GPS Telematics • Temperature-Monitored Reefer Fleet',
    title: 'Frictionless Freight Forwarding, Customs Clearance & Cold-Chain Shipping',
    subtitle: 'From ocean freight containers to cross-country expedited team drivers, we ensure your high-value cargo arrives on schedule without delays.',
    services: [
      { id: 'lg1', title: 'Full Truckload (FTL) & Expedited Dedicated Service', description: 'Guaranteed transit times with live GPS satellite temperature and humidity telematics.', price: 'Custom Lane Quote' },
      { id: 'lg2', title: 'International Air & Ocean Freight Forwarding', description: 'End-to-end customs clearance, port drayage, and bonded cross-dock warehousing.', price: 'Port-to-Door' },
      { id: 'lg3', title: 'Pharma & Perishable Cold-Chain Storage', description: 'Climate-controlled warehousing maintaining -20°C to +4°C validated regulatory standards.', price: '$45 / Pallet / Mo' }
    ]
  },
  // 25. Science & Research: Research Laboratory
  {
    id: 'research-laboratory',
    industry: 'science-research',
    name: 'BioHelix Molecular Genomics & Translational Research Labs',
    slug: 'biohelix-genomics-research-laboratory',
    desc: 'CLIA/CAP accredited molecular biology contract research organization specializing in high-throughput NGS, single-cell RNA, and proteomics.',
    style: 'medical-clean',
    thumb: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80',
    tags: ['research laboratory', 'genomics', 'molecular biology', 'biotech', 'ngs', 'clinical research'],
    heroBadge: 'CLIA Certified • CAP Accredited • Illumina NovaSeq 6000 Platform',
    title: 'High-Throughput Next-Generation Sequencing & Cell-Free DNA Biomarkers',
    subtitle: 'Partnering with pharmaceutical innovators and academic medical centers to accelerate targeted cancer drug discovery.',
    services: [
      { id: 'rl1', title: 'Whole Genome & Single-Cell RNA Sequencing', description: 'Deep 30x-100x coverage with comprehensive bioinformatics pipeline analysis.', price: '$750 / Sample' },
      { id: 'rl2', title: 'Targeted Multiplex Immunoassays & ELISA', description: 'High-sensitivity cytokine profiling for immunology and Phase I-III clinical trial endpoints.', price: 'Batch Pricing' },
      { id: 'rl3', title: 'CRISPR Functional Genomics Screening', description: 'Whole-genome pooled knockout screens identifying novel synthetic lethality drug targets.', price: 'Project Scope' }
    ]
  },
  // 26. Personal Brands & Consultancy: Executive Coach
  {
    id: 'executive-coach',
    industry: 'personal-brands',
    name: 'Alexander Cross Executive Leadership & Board Advisor',
    slug: 'alexander-cross-executive-coach',
    desc: 'Confidential strategic advisor and executive coach to unicorn founders, Fortune 100 CEOs, and high-impact venture leadership teams.',
    style: 'luxury-editorial',
    thumb: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80',
    tags: ['executive coach', 'leadership coach', 'ceo advisor', 'board advisory', 'executive presence', 'personal brand'],
    heroBadge: 'Advising CEOs of 14 Unicorns • Former Fortune 50 C-Suite Leader',
    title: 'Elevating High-Stakes Decision Making, Executive Presence & Board Alignment',
    subtitle: 'Confidential sounding board and ruthless strategic clarity for founders and enterprise leaders navigating extreme scale and crisis.',
    services: [
      { id: 'ec1', title: 'CEO 1-on-1 Confidential Advisory Retainer', description: 'Bi-weekly strategic sparring, crisis hotline access, and executive team dynamic audits.', price: '$6,500 / month' },
      { id: 'ec2', title: 'Executive Team Alignment & Offsite Facilitation', description: 'Resolving executive friction, strategy recalibration, and operating cadence design.', price: '$18,000 / Offsite' },
      { id: 'ec3', title: 'Board of Directors Presentation & Gravitas Coaching', description: 'Polishing delivery, handling adversarial investors, and high-stakes voting alignment.', price: '$4,500 Package' }
    ]
  }
];

function buildSection(idPrefix, type, variant, content) {
  return {
    id: `${idPrefix}-${type}`,
    type,
    variant,
    visible: true,
    content
  };
}

const templates = remainingSpecs.map((spec, i) => {
  const p = `rs${i + 1}`;
  return {
    id: `${spec.industry}-${spec.id}-01`,
    slug: spec.slug,
    name: spec.name,
    description: spec.desc,
    industryId: spec.industry,
    categoryId: spec.id,
    collectionId: 'specialist-collective',
    designStyle: spec.style,
    featured: i % 4 === 0,
    tags: spec.tags,
    thumbnail: spec.thumb,
    sections: [
      buildSection(p, 'navbar', 'navbar-glass', {
        title: spec.name.toUpperCase().slice(0, 24),
        primaryButtonText: 'Get Started',
        primaryButtonLink: '#contact',
        navLinks: [
          { label: 'Capabilities', href: '#services' },
          { label: 'About Us', href: '#about' },
          { label: 'Client Reviews', href: '#reviews' },
          { label: 'Contact', href: '#contact' }
        ]
      }),
      buildSection(p, 'hero', 'hero-split', {
        badge: spec.heroBadge,
        title: spec.title,
        subtitle: spec.subtitle,
        primaryButtonText: 'Explore Offerings',
        primaryButtonLink: '#services',
        secondaryButtonText: 'Learn More',
        secondaryButtonLink: '#about',
        imageUrl: spec.thumb,
        stats: [
          { id: 's1', label: 'Satisfaction Rate', value: '99.6%' },
          { id: 's2', label: 'Projects Completed', value: '18,400+' },
          { id: 's3', label: 'Industry Experience', value: '15+ Years' }
        ]
      }),
      buildSection(p, 'services', 'services-cards-accent', {
        badge: 'Premier Capabilities',
        title: 'Bespoke Solutions Engineered for Excellence',
        subtitle: 'Every offering is tailored to deliver maximum quality, efficiency, and lasting return on investment.',
        items: spec.services.map((s, idx) => ({
          id: s.id,
          title: s.title,
          description: s.description,
          price: s.price,
          badge: idx === 0 ? 'Most Popular' : undefined
        }))
      }),
      buildSection(p, 'cta', 'cta-banner-glow', {
        badge: 'Take the Next Step',
        title: 'Ready to Experience Uncompromising Quality?',
        subtitle: 'Connect with our dedicated team today to discuss your vision and discover how we can collaborate.',
        primaryButtonText: 'Get in Touch Today',
        primaryButtonLink: '#contact',
        secondaryButtonText: 'Download Overview',
        secondaryButtonLink: '#overview'
      }),
      buildSection(p, 'footer', 'footer-dark-editorial', {
        title: spec.name,
        description: spec.desc,
        copyrightText: `© 2026 ${spec.name}. All rights reserved.`
      })
    ]
  };
});

writeTemplateFile('remainingSpecialistsTemplates.ts', 'REMAINING_SPECIALISTS_TEMPLATES', templates);
console.log(`Generated ${templates.length} remaining specialist templates successfully!`);
