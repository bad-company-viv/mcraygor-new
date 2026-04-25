import { useState, useEffect } from "react";
import { Link, useParams } from "react-router";
import { Download, MessageSquare, CheckCircle2, ChevronRight, ChevronLeft, Home, Star, Shield, Truck, Headphones, ArrowRight } from "lucide-react";
import { SEO } from "../components/SEO";
import { getProductSEO } from "../utils/seo";
import { Breadcrumb } from "../components/common/Breadcrumb";

type ProductProfile = {
  name: string;
  category: string;
  desc: string;
  overview: string;
  image: string;
  gallery: string[];
  specs: { key: string; value: string }[];
  detailedSpecs: { category: string; items: { key: string; value: string }[] }[];
  applications: string[];
  features: string[];
  benefits: string[];
};

const commonSpecs = [
  { key: "Configuration", value: "As per model and application" },
  { key: "Build", value: "Heavy-duty engineering construction" },
  { key: "Deployment", value: "Municipal / Industrial / Utility" },
  { key: "Customization", value: "Available as per requirement" },
  { key: "Documentation", value: "Technical datasheet and brochure available" },
  { key: "Service Support", value: "Spares and support assistance available" },
];

const productData: Record<string, ProductProfile> = {
  "COMBINATOR": {
    name: "Combined Jetting Cum Suction Machine – COMBINATOR™",
    category: "Liquid Waste",
    desc: "Truck chassis mounted suction-cum-jetting machine available in multiple volumetric capacities for sewer cleaning.",
    overview: "The Combined Jetting Cum Suction Machine (COMBINATOR™) is a truck chassis mounted suction-cum-jetting combination machine available in multiple volumetric capacities of clean water and sludge collection tank. The Heavy Duty Truck Mounted Vacuum Loader with High Pressure Jetting System is suitable for dislodging the Silt/Sludge settled in the trunk sewer lines and for suctioning the free flowing sludge and slurry for De-silting the trunk Sewer Pipelines.\n\nThis equipment is one of the most efficient and powerful machine of its kind available in the International Market, incorporating state-of-art Filter System, positive displacement Vacuum Pump driven through an Auxiliary Engine, Jetting Pump and Control System.\n\nThese equipments are capable of efficiently working in sewer lines of diameters ranging from 200-1000 mm. Siphoning the liquid and solid effluents into the equipment's sludge collection tank under high vacuum, from surcharged manhole chambers, sewer and storm water drain lines, septic/sump tanks and gully pits and transporting the same to any desired disposal site for emptying under gravity/positive pressure/tipping of sludge tank. De-choking and de-silting of the sewer and drain water lines and chambers by high pressure jetting through suitably dimensioned jetting hoses and nozzles aspirating the dislodged effluent and transporting the same to any desired disposal site for emptying under gravity/positive pressure/tipping of sludge tank.\n\nFor detailed information refer the Product Catalogue by Clicking Product Catalogue button.",
    image: "/images/products/jetting-cum-suction-machine/jetting-cum-suction-machine-1.jpg",
    gallery: [
      "/images/products/jetting-cum-suction-machine/jetting-cum-suction-machine-1.jpg",
      "/images/products/jetting-cum-suction-machine/jetting-cum-suction-machine-2.jpg",
      "/images/products/jetting-cum-suction-machine/jetting-cum-suction-machine-3.jpg",
      "/images/products/jetting-cum-suction-machine/jetting-cum-suction-machine-4.jpg",
      "/images/products/jetting-cum-suction-machine/jetting-cum-suction-machine-5.jpg",
      "/images/products/jetting-cum-suction-machine/jetting-cum-suction-machine-6.jpg",
      "/images/products/jetting-cum-suction-machine/jetting-cum-suction-machine-7.jpg",
      "/images/products/jetting-cum-suction-machine/jetting-cum-suction-machine-8.jpg",
      "/images/products/jetting-cum-suction-machine/jetting-cum-suction-machine-9.jpg"
    ],
    specs: [
      { key: "Mounting", value: "Truck Chassis Mounted" },
      { key: "Sewer Dia", value: "200 mm to 1000 mm" },
      { key: "System Type", value: "Suction-cum-Jetting Combination" },
      { key: "Vacuum Pump", value: "Positive Displacement (Aux Engine Driven)" }
    ],
    detailedSpecs: [
      {
        category: "System Capabilities",
        items: [
          { key: "Operation", value: "Simultaneous Jetting & Suction" },
          { key: "Sewer Range", value: "200mm - 1000mm Diameter" },
          { key: "Discharge", value: "Gravity / Positive Pressure / Tipping" },
          { key: "Suction Depth", value: "Deep Reach High Vacuum" }
        ]
      },
      {
        category: "Power & Pump",
        items: [
          { key: "Vacuum Pump", value: "Positive Displacement Type" },
          { key: "Drive System", value: "Dedicated Auxiliary Engine" },
          { key: "Jetting Pump", value: "High Pressure Plunger Pump" },
          { key: "Filter System", value: "State-of-the-art Multi-stage" }
        ]
      }
    ],
    applications: [
      "Trunk sewer line de-silting",
      "Surcharged manhole chamber cleaning",
      "Storm water drain maintenance",
      "Septic and sump tank evacuation",
      "Gully pit cleaning",
      "Emergency blockage removal"
    ],
    features: [
      "State-of-the-art filtration system",
      "Auxiliary engine driven vacuum pump",
      "High-pressure jetting technology",
      "Multiple volumetric capacity options",
      "Heavy-duty vacuum loader system",
      "Advanced control and monitoring"
    ],
    benefits: [
      "Highest efficiency in international market",
      "Versatile range (200-1000mm sewer lines)",
      "Reduced manual intervention",
      "Rapid material recovery and disposal",
      "Reliable performance in extreme conditions",
      "Lower operational maintenance costs"
    ]
  },
  "HYPERVAC": {
    name: "Super Sucker Machine – HYPERVAC™",
    category: "Liquid Waste",
    desc: "High-performance suction machine for demanding sludge and slurry handling applications.",
    overview: "The Super Sucker Machine is engineered for extreme suction performance, capable of handling the most challenging sludge, slurry, and heavy waste materials. Built for continuous operation in severe conditions where conventional systems fail to deliver.",
    image: "/images/products/super-sucker-machine/super-sucker-1.jpg",
    gallery: [
      "/images/products/super-sucker-machine/super-sucker-1.jpg",
      "/images/products/super-sucker-machine/super-sucker-2.jpg",
      "/images/products/super-sucker-machine/super-sucker-3.jpg",
      "/images/products/super-sucker-machine/super-sucker-4.jpg",
      "/images/products/super-sucker-machine/super-sucker-5.jpg",
      "/images/products/super-sucker-machine/super-sucker-6.jpg",
      "/images/products/super-sucker-machine/super-sucker-7.jpg",
      "/images/products/super-sucker-machine/super-sucker-8.jpg",
      "/images/products/super-sucker-machine/super-sucker-9.jpg",
      "/images/products/super-sucker-machine/super-sucker-10.jpg",
      "/images/products/super-sucker-machine/super-sucker-11.jpg",
      "/images/products/super-sucker-machine/super-sucker-12.jpg",
      "/images/products/super-sucker-machine/super-sucker-13.jpg",
      "/images/products/super-sucker-machine/super-sucker-14.jpg",
      "/images/products/super-sucker-machine/super-sucker-15.jpg",
      "/images/products/super-sucker-machine/super-sucker-16.jpg",
      "/images/products/super-sucker-machine/super-sucker-17.jpg"
    ],
    specs: [
      { key: "Configuration", value: "Heavy-duty truck mounted system" },
      { key: "Suction Type", value: "High-vacuum deep suction" },
      { key: "Capacity", value: "Ultra-high volume handling" },
      { key: "Application", value: "Industrial and municipal heavy-duty" }
    ],
    detailedSpecs: [
      {
        category: "Dimensions",
        items: [
          { key: "Length", value: "9200 mm" },
          { key: "Width", value: "2550 mm" },
          { key: "Height", value: "3400 mm" }
        ]
      },
      {
        category: "Performance",
        items: [
          { key: "Suction Capacity", value: "25000 LPM" },
          { key: "Vacuum Level", value: "85% Vacuum" },
          { key: "Tank Capacity", value: "10000 Liters" },
          { key: "Discharge Rate", value: "8000 LPM" }
        ]
      },
      {
        category: "Engine & Power",
        items: [
          { key: "Engine Type", value: "BS-VI Heavy Duty Diesel" },
          { key: "Power Output", value: "250 HP" },
          { key: "Auxiliary Engine", value: "75 HP for suction system" }
        ]
      }
    ],
    applications: [
      "Heavy sludge and slurry suction",
      "Industrial pit and tank cleaning",
      "Municipal emergency services",
      "Large-volume waste recovery",
      "Construction site dewatering",
      "Oil spill recovery operations"
    ],
    features: [
      "Ultra-high vacuum suction capability",
      "Heavy-duty construction for extreme conditions",
      "Large capacity waste tank",
      "Rapid discharge system",
      "Advanced filtration system",
      "Operator safety features"
    ],
    benefits: [
      "Handles materials other machines cannot",
      "Reduced project completion time",
      "Lower operational costs per cubic meter",
      "Reliable performance in harsh conditions",
      "Minimal downtime and maintenance",
      "Enhanced safety for operators"
    ]
  },
  "McGRAB": {
    name: "Sewer Grabbing / Manhole Desilting Machine – McGRAB™",
    category: "Liquid Waste",
    desc: "Mechanical desilting machine designed for safe removal of settled silt and debris from manholes.",
    overview: "The Sewer Grabbing / Manhole Desilting Machine is specifically engineered for safer and more efficient removal of settled silt and debris from manholes and sewer chambers. This specialized equipment reduces manual intervention and improves operational safety while ensuring thorough cleaning of critical infrastructure points.",
    image: "/images/products/desilting-machine-grab-bucket.jpeg",
    gallery: [
      "/images/products/desilting-machine-grab-bucket.jpeg",
      "/images/products/power-bucket-machine.jpeg",
      "/images/products/power-bucket-machine2.jpeg",
      "/images/products/sewer-jetting-suction-machine.jpeg"
    ],
    specs: [
      { key: "Configuration", value: "Truck mounted grabbing system" },
      { key: "Operation", value: "Mechanical grabbing and lifting" },
      { key: "Capacity", value: "High-volume debris handling" },
      { key: "Application", value: "Manhole and chamber cleaning" }
    ],
    detailedSpecs: [
      {
        category: "Dimensions",
        items: [
          { key: "Length", value: "7500 mm" },
          { key: "Width", value: "2400 mm" },
          { key: "Height", value: "3000 mm" }
        ]
      },
      {
        category: "Performance",
        items: [
          { key: "Grab Capacity", value: "2.5 Cubic Meters" },
          { key: "Lifting Height", value: "8 Meters" },
          { key: "Reach", value: "6 Meters" },
          { key: "Cycle Time", value: "45 Seconds" }
        ]
      },
      {
        category: "Engine & Power",
        items: [
          { key: "Engine Type", value: "BS-VI Diesel Engine" },
          { key: "Power Output", value: "150 HP" },
          { key: "Hydraulic System", value: "High-pressure hydraulics" }
        ]
      }
    ],
    applications: [
      "Manhole desilting operations",
      "Sewer chamber cleaning",
      "Urban sanitation maintenance",
      "Preventive infrastructure care",
      "Emergency blockage removal",
      "Municipal drainage support"
    ],
    features: [
      "Mechanical grabbing mechanism",
      "Precise debris removal control",
      "Reduced manual intervention",
      "Safety-focused operation",
      "Efficient cycle times",
      "Robust construction"
    ],
    benefits: [
      "Enhanced worker safety",
      "Improved cleaning efficiency",
      "Reduced operational risks",
      "Consistent performance",
      "Lower maintenance costs",
      "Environmental compliance"
    ]
  },
  "TRAILER-JETTING-SUCTION": {
    name: "Sewer Jetting Machine / Jetting Suction Machine (Trailer Mounted)",
    category: "Liquid Waste",
    desc: "Compact trailer-mounted jetting and suction solution for versatile sewer maintenance.",
    overview: "The Trailer Mounted Jetting Suction Machine provides a portable and efficient solution for sewer cleaning in various environments. Its compact design allows for easy transport and operation in areas with limited access, while providing reliable performance for both jetting and suction tasks.",
    image: "/images/products/sewer-jetting-suction-machine.jpeg",
    gallery: ["/images/products/sewer-jetting-suction-machine.jpeg"],
    specs: commonSpecs,
    detailedSpecs: [],
    applications: ["Municipal sewer cleaning", "Drain maintenance", "Localized suction tasks"],
    features: ["Compact design", "Versatile operation", "Easy transport"],
    benefits: ["Flexible deployment", "Cost-effective", "Reliable performance"]
  },
  "McJET": {
    name: "Sewer Jetting Machine – McJET™",
    category: "Liquid Waste",
    desc: "Truck-mounted high-pressure jetting system for dislodging and removing sewer line obstructions and blockages.",
    overview: "The equipment is a Truck Mounted Mobile Unit suitable for dislodging and removing obstructions and blockages from sewer lines by a High Pressure Water Jetting System. Engineered for high-performance cleaning of sewer and drain lines, McJET™ uses concentrated high-pressure water jets to effectively clear silt, debris, and stubborn blockages, ensuring optimal flow and functional drainage systems.",
    image: "/images/products/sewer-jetting-machine/sewer-jetting-machine-1.png",
    gallery: [
      "/images/products/sewer-jetting-machine/sewer-jetting-machine-1.png",
      "/images/products/sewer-jetting-machine/sewer-jetting-machine-2.png",
      "/images/products/sewer-jetting-machine/sewer-jetting-machine-3.png",
      "/images/products/sewer-jetting-machine/sewer-jetting-machine-4.png",
      "/images/products/sewer-jetting-machine/sewer-jetting-machine-5.png",
      "/images/products/sewer-jetting-machine/sewer-jetting-machine-6.png"
    ],
    specs: [
      { key: "Mounting", value: "Truck Mounted Mobile Unit" },
      { key: "System Type", value: "High Pressure Water Jetting" },
      { key: "Application", value: "Sewer & Drain Line Cleaning" },
      { key: "Capability", value: "Obstruction & Blockage Removal" }
    ],
    detailedSpecs: [
      {
        category: "Jetting System",
        items: [
          { key: "Pump Type", value: "High-Pressure Triplex Plunger Pump" },
          { key: "Pressure Range", value: "150 - 250 Bar" },
          { key: "Flow Rate", value: "150 - 300 LPM" },
          { key: "Drive", value: "PTO Driven / Auxiliary Engine" }
        ]
      },
      {
        category: "Tank & Storage",
        items: [
          { key: "Water Tank Capacity", value: "4000 - 8000 Liters" },
          { key: "Tank Material", value: "Mild Steel (Epoxy Coated) / Stainless Steel" },
          { key: "Hose Reel", value: "Hydraulically Operated Swiveling Type" },
          { key: "Hose Length", value: "Up to 100 Meters" }
        ]
      }
    ],
    applications: [
      "Municipal sewer line maintenance",
      "Removal of stubborn blockages and obstructions",
      "Cleaning of underground drain networks",
      "Culvert and storm drain cleaning",
      "Industrial pipeline maintenance",
      "Preventive sewer desilting"
    ],
    features: [
      "High-pressure concentrated water jetting",
      "Precision engineered jetting nozzles",
      "Robust truck-mounted configuration",
      "Hydraulic hose reel for easy operation",
      "Operator-friendly control panel",
      "Durable heavy-duty construction"
    ],
    benefits: [
      "Highly effective obstruction removal",
      "Rapid restoration of pipeline flow",
      "Minimal manual intervention required",
      "Versatile for various pipe diameters",
      "Reduced maintenance downtime",
      "Long-term operational reliability"
    ]
  },
  "GULLY-SUCTION-EMPTIER": {
    name: "Gully Suction Emptier – McVAC™",
    category: "Liquid Waste",
    desc: "Tractor trailer or truck-mounted vacuum suction unit designed for efficient sludge and slurry recovery from gully pits and septic tanks.",
    overview: "McRAYGOR’s McVAC™ is a versatile tractor-trailer or truck-mounted mobile unit specifically designed for suctioning sludge and slurry from sewer manholes, gully pits, and septic tanks. Utilizing a high-performance vacuum suction system, the McVAC™ can efficiently collect and discharge sludge through a specialized blow-back arrangement. For optimized disposal workflows, the collected waste can be transferred to a truck-mounted Suction Dump Tanker equipped with a cyclone system for final transport to dumping grounds or processing plants.",
    image: "/images/products/gully-suction-emptier/gully-suction-emptier-1.png",
    gallery: [
      "/images/products/gully-suction-emptier/gully-suction-emptier-1.png",
      "/images/products/gully-suction-emptier/gully-suction-emptier-2.png",
      "/images/products/gully-suction-emptier/gully-suction-emptier-3.png",
      "/images/products/gully-suction-emptier/gully-suction-emptier-4.png",
      "/images/products/gully-suction-emptier/gully-suction-emptier-5.png",
      "/images/products/gully-suction-emptier/gully-suction-emptier-6.png",
      "/images/products/gully-suction-emptier/gully-suction-emptier-7.png",
      "/images/products/gully-suction-emptier/gully-suction-emptier-8.png",
      "/images/products/gully-suction-emptier/gully-suction-emptier-9.png",
      "/images/products/gully-suction-emptier/gully-suction-emptier-10.png"
    ],
    specs: [
      { key: "Series", value: "McVAC™ series" },
      { key: "Mounting", value: "Tractor Trailer / Truck Mounted" },
      { key: "Discharge", value: "Gravity / Blow-back Arrangement" },
      { key: "System Type", value: "High-Performance Vacuum Suction" }
    ],
    detailedSpecs: [
      {
        category: "System Capabilities",
        items: [
          { key: "Suction Medium", value: "Sludge, Slurry, Liquid Waste" },
          { key: "Suction Type", value: "Deep Vacuum Suction" },
          { key: "Discharge Method", value: "Positive Pressure Blow-back" }
        ]
      },
      {
        category: "Operational Compatibility",
        items: [
          { key: "Disposal Workflow", value: "Compatible with Suction Dump Tankers" },
          { key: "Filtration", value: "Integrated Cyclone System Support" },
          { key: "Maneuverability", value: "Optimized for Narrow Urban Access" }
        ]
      }
    ],
    applications: [
      "Sewer manhole and gully pit cleaning",
      "Septic tank cleaning and maintenance",
      "Industrial liquid waste recovery",
      "Cesspool emptying operations",
      "Municipal sanitation and urban drainage",
      "Sludge transport to disposal grounds"
    ],
    features: [
      "Dual mounting options (Tractor or Truck)",
      "High-efficiency vacuum suction system",
      "Alternative blow-back discharge capability",
      "Compatible with cyclone-equipped dump tankers",
      "Robust tank construction for heavy sludge",
      "Easy-access maintenance points"
    ],
    benefits: [
      "Versatile deployment in diverse urban settings",
      "Rapid suction and discharge cycles",
      "Reliable performance for heavy liquid waste",
      "Cost-effective municipal cleaning solution",
      "Reduced operational turnaround time",
      "Environmentally safe waste handling"
    ]
  },
  "POWERBUCKET": {
    name: "Bucket Type Sewer Cleaning Machines – POWERBUCKET™",
    category: "Liquid Waste",
    desc: "Heavy-duty dual-machine set for mechanical desilting and cleaning of underground sewers using high-torque wire rope winches.",
    overview: "McRAYGOR’s POWERBUCKET™ system is a comprehensive cleaning solution consisting of a set of two mobile, power-driven bucket type machines. Designed for cleaning and de-silting underground sewers of diameter 100 mm and above, the system utilizes various buckets and specialized tools. These machines are engineered for extreme tropical conditions (up to 46°C and 100% humidity) and generally conform to I.S. 10595:1983. Each unit is powered by a high-performance 20.00 HP double-cylinder, air-cooled diesel engine, capable of 8-12 hours of continuous duty. The system features a sophisticated speed control throttle and a clutch-controlled winding drum, with a hand-drive backup arrangement to ensure operation even in case of engine failure.",
    image: "/images/products/power-bucket/power-bucket-machine-1.jpeg",
    gallery: [
      "/images/products/power-bucket/power-bucket-machine-1.jpeg",
      "/images/products/power-bucket/power-bucket-machine-2.png",
      "/images/products/power-bucket/power-bucket-machine-3.png",
      "/images/products/power-bucket/power-bucket-machine-4.png",
      "/images/products/power-bucket/power-bucket-machine-5.png",
      "/images/products/power-bucket/power-bucket-machine-6.png",
      "/images/products/power-bucket/power-bucket-machine-7.png",
      "/images/products/power-bucket/power-bucket-machine-8.png"
    ],
    specs: [
      { key: "System Type", value: "Set of Two Mobile Units" },
      { key: "Engine", value: "20 HP Double Cylinder Diesel" },
      { key: "Sewer Dia", value: "100 mm and Above" },
      { key: "Standard", value: "IS 10595:1983 Compliant" }
    ],
    detailedSpecs: [
      {
        category: "Engine & Power",
        items: [
          { key: "Engine Type", value: "Air-Cooled Diesel Engine" },
          { key: "Power Output", value: "20.00 HP @ 1500 RPM" },
          { key: "Configuration", value: "Double Cylinder" },
          { key: "Duty Cycle", value: "8-12 Hours Continuous" }
        ]
      },
      {
        category: "Winch & Drive",
        items: [
          { key: "Mechanism", value: "Wire Rope Winches" },
          { key: "Drive Control", value: "Clutch Engaging/Disengaging" },
          { key: "Backup", value: "Manual Hand-Drive Arrangement" },
          { key: "Speed Control", value: "Variable Throttle Arrangement" }
        ]
      },
      {
        category: "Environmental",
        items: [
          { key: "Max Temp", value: "46°C in Shade" },
          { key: "Humidity", value: "100% Relative Humidity" },
          { key: "Design", value: "Optimized for Tropical Conditions" }
        ]
      }
    ],
    applications: [
      "Heavy desilting of deep sewer lines",
      "Cleaning sewers of 100mm diameter & above",
      "Removal of settled solids and debris",
      "Municipal drain maintenance programs",
      "Large-scale urban sanitation projects",
      "Industrial pipeline clearing and cleaning"
    ],
    features: [
      "Integrated dual-machine coordination",
      "High-torque mechanical bucket system",
      "Variable throttle speed control",
      "Reliable air-cooled diesel performance",
      "Emergency hand-drive manual backup",
      "Compliance with IS 10595:1983 standards"
    ],
    benefits: [
      "Consistent performance in extreme heat",
      "Highly effective for solid waste removal",
      "Zero-downtime with manual backup",
      "Fuel-efficient diesel power unit",
      "Durable construction for 12-hour shifts",
      "Complete cleaning of varying pipe diameters"
    ]
  },
  "McRODDER": {
    name: "Sewer Rodding Machines – McRODDER™",
    category: "Liquid Waste",
    desc: "High-strength diesel-powered rodding system featuring special Chromo-flex spring steel rods for navigating and clearing stubborn pipeline blockages.",
    overview: "The McRODDER™ series represents a highly portable and powerful solution for underground pipeline maintenance. The equipment features a series of 100 specialized Chromo-flex spring steel rods, each approximately 8mm x 900mm long, crafted from high-strength oil-tempered steel with LH/RH nuts and couplings conforming to IS 4454:1981. These rods are coupled and wrapped on a reel mounted on a stable stand. The rotation is driven by a unit powered by a 4.8hp Greaves Diesel Engine (@ 1500 rpm, conforming to IS 11170:1985). The entire power unit is mounted on a trolley, ensuring the unit is easily transportable across various municipal and industrial sites.",
    image: "/images/products/sewer-rodding-machine/sewer-rodding-machine.png",
    gallery: [
      "/images/products/sewer-rodding-machine/sewer-rodding-machine.png"
    ],
    specs: [
      { key: "Rod Material", value: "Chromo-flex Spring Steel" },
      { key: "Engine", value: "4.8hp Greaves Diesel" },
      { key: "Compliance", value: "IS 4454:1981 / IS 11170:1985" },
      { key: "Rod Count", value: "100 Rods (900mm each)" }
    ],
    detailedSpecs: [
      {
        category: "Rod Specifications",
        items: [
          { key: "Material", value: "High-Strength Oil Tempered Steel" },
          { key: "Dimensions", value: "8mm Diameter x 900mm Length" },
          { key: "Total Length", value: "90 Meters (Combined)" },
          { key: "Couplings", value: "LH/RH Nuts (IS 4454:1981)" }
        ]
      },
      {
        category: "Power Unit",
        items: [
          { key: "Engine Type", value: "Greaves Diesel Engine" },
          { key: "Power Output", value: "4.8hp @ 1500 rpm" },
          { key: "Standard", value: "IS 11170:1985 Compliant" },
          { key: "Mounting", value: "Reel-mounted on Trolley" }
        ]
      },
      {
        category: "Portability",
        items: [
          { key: "Transport", value: "Easily Mobile Trolley System" },
          { key: "Weight", value: "Optimized for Manual Maneuvering" },
          { key: "Footprint", value: "Compact for Narrow Access" }
        ]
      }
    ],
    applications: [
      "Clearing underground sewer blockages",
      "Navigating stubborn pipeline chokes",
      "Restoring flow in municipal drain lines",
      "Industrial facility pipeline maintenance",
      "Preventive pipeline rodding operations",
      "Emergency blockage removal in narrow lanes"
    ],
    features: [
      "Oil-tempered Chromo-flex rod system",
      "High-torque diesel-powered unit",
      "Trolley-mounted for maximum portability",
      "Reel-mounted rod storage for organization",
      "Compliance with multiple IS quality standards",
      "Easy-to-operate mechanical coupling"
    ],
    benefits: [
      "Navigate bends other machines cannot",
      "Durable spring steel prevents rod breakage",
      "Independent power source (Diesel)",
      "Low maintenance and long service life",
      "Highly mobile for rapid response",
      "Proven reliability in municipal sanitation"
    ]
  },
  "VYUK": {
    name: "Litter Picker – VYUK™",
    category: "Solid Waste",
    desc: "Efficient collection system designed for surface litter handling in public spaces and urban areas.",
    overview: "The Litter Picker is built for structured litter collection workflows in municipal and institutional cleaning operations. This versatile equipment efficiently handles various types of surface waste, making it ideal for maintaining cleanliness in public spaces, parks, and urban environments.",
    image: "/images/products/dumper-placer-container.jpeg",
    gallery: [
      "/images/products/dumper-placer-container.jpeg",
      "/images/products/refuse-compactor.jpeg",
      "/images/products/refuse-compactor2.jpeg",
      "/images/products/mobile-toilets.jpeg"
    ],
    specs: [
      { key: "Configuration", value: "Mobile collection system" },
      { key: "Operation", value: "Surface litter collection" },
      { key: "Capacity", value: "High-volume waste handling" },
      { key: "Application", value: "Public space cleaning" }
    ],
    detailedSpecs: [
      {
        category: "Dimensions",
        items: [
          { key: "Length", value: "6500 mm" },
          { key: "Width", value: "2200 mm" },
          { key: "Height", value: "2600 mm" }
        ]
      },
      {
        category: "Performance",
        items: [
          { key: "Collection Capacity", value: "8 Cubic Meters" },
          { key: "Loading Height", value: "1.2 Meters" },
          { key: "Compaction Ratio", value: "3:1" },
          { key: "Cycle Time", value: "30 Seconds" }
        ]
      },
      {
        category: "Engine & Power",
        items: [
          { key: "Engine Type", value: "BS-VI Diesel" },
          { key: "Power Output", value: "140 HP" },
          { key: "Hydraulic System", value: "Integrated hydraulics" }
        ]
      }
    ],
    applications: [
      "Roadside litter collection",
      "Campus cleaning operations",
      "Municipal route operations",
      "Public event cleanup support",
      "Park and recreation maintenance",
      "Commercial area cleaning"
    ],
    features: [
      "Efficient collection mechanism",
      "Large storage capacity",
      "Easy loading system",
      "Compact design",
      "Reliable operation",
      "Low maintenance requirements"
    ],
    benefits: [
      "Improved public cleanliness",
      "Efficient waste collection",
      "Reduced manual labor",
      "Cost-effective operation",
      "Enhanced urban aesthetics",
      "Environmental protection"
    ]
  },
  "PAC": {
    name: "Refuse / Garbage Compactor – PAC™",
    category: "Solid Waste",
    desc: "Versatile solid waste collection and compaction system designed for high-efficiency urban sanitation and waste transport.",
    overview: "The PAC™ Refuse Compactor Vehicles are high-performance solid waste collection units designed for lifting, unloading, and compacting garbage from various bins and containers. Available in container volumes of 8 Cu.m., 14 Cu.m., and 18 Cu.m., these units are mounted on standard truck chassis ranging from 11 to 25 Ton GVW. All models are equipped with a Universal Bin Lifter capable of handling 240L, 660L, and 1100L bins. The larger 14 Cu.m. and 18 Cu.m. variants are further enhanced with Dumper Placer Arms and stabilizers, allowing them to unload large 3500L bins with ease.",
    image: "/images/products/garbage-refuse-compactor/garbage-refuse-compactor-1.jpeg",
    gallery: [
      "/images/products/garbage-refuse-compactor/garbage-refuse-compactor-1.jpeg",
      "/images/products/garbage-refuse-compactor/garbage-refuse-compactor-2.png"
    ],
    specs: [
      { key: "Container Volumes", value: "8, 14, & 18 Cu.m." },
      { key: "Truck Chassis", value: "11, 16, & 25 Ton GVW" },
      { key: "Bin Lifter", value: "Universal (240L to 1100L)" },
      { key: "Special Ops", value: "Dumper Placer Arms (14/18 Cu.m.)" }
    ],
    detailedSpecs: [
      {
        category: "Container Capacity",
        items: [
          { key: "Small Unit", value: "8 Cubic Meters" },
          { key: "Medium Unit", value: "14 Cubic Meters" },
          { key: "Large Unit", value: "18 Cubic Meters" }
        ]
      },
      {
        category: "Chassis Compatibility",
        items: [
          { key: "8 Cu.m. Model", value: "11 Ton GVW Chassis" },
          { key: "14 Cu.m. Model", value: "16 Ton GVW Chassis" },
          { key: "18 Cu.m. Model", value: "25 Ton GVW Chassis" }
        ]
      },
      {
        category: "Lifting Capability",
        items: [
          { key: "Standard Bins", value: "240L, 660L, 1100L" },
          { key: "Large Bins (14/18m³)", value: "Up to 3500L (Dumper Placer)" },
          { key: "Lifter Type", value: "Hydraulic Universal Bin Lifter" }
        ]
      }
    ],
    applications: [
      "Municipal solid waste collection",
      "Door-to-door garbage collection",
      "Urban transfer station operations",
      "Commercial and industrial waste handling",
      "Residential township sanitation",
      "High-volume waste compaction and transport"
    ],
    features: [
      "Universal bin lifter for multiple bin sizes",
      "Integrated dumper placer arms (selected models)",
      "Powerful hydraulic compaction mechanism",
      "Heavy-duty stabilizers for safe operation",
      "Leachate collection and drainage system",
      "Rear-loading configuration for urban efficiency"
    ],
    benefits: [
      "Optimized waste transport costs",
      "Versatile handling of various bin types",
      "Significant reduction in waste volume",
      "Durable construction for daily routes",
      "Reduced manual labor and handling",
      "High operational safety standards"
    ]
  },
  "McCLEAN": {
    name: "Road Sweeper – McCLEAN™",
    category: "Solid Waste",
    desc: "Advanced road sweeping machine designed for comprehensive cleaning of urban and industrial environments.",
    overview: "The Road Sweeper is configured for regular sweeping cycles to improve city cleanliness and dust control outcomes. This versatile machine effectively removes debris, dust, and litter from roads, making it essential for maintaining clean urban environments and industrial facilities.",
    image: "/images/products/refuse-compactor2.jpeg",
    gallery: [
      "/images/products/refuse-compactor2.jpeg",
      "/images/products/refuse-compactor.jpeg",
      "/images/products/dumper-placer-container.jpeg",
      "/images/products/mobile-toilets.jpeg"
    ],
    specs: [
      { key: "Configuration", value: "Truck mounted sweeping system" },
      { key: "Operation", value: "Mechanical and suction sweeping" },
      { key: "Capacity", value: "Large debris collection" },
      { key: "Application", value: "Road and surface cleaning" }
    ],
    detailedSpecs: [
      {
        category: "Dimensions",
        items: [
          { key: "Length", value: "8500 mm" },
          { key: "Width", value: "2400 mm" },
          { key: "Height", value: "3000 mm" }
        ]
      },
      {
        category: "Performance",
        items: [
          { key: "Sweeping Width", value: "3.2 Meters" },
          { key: "Hopper Capacity", value: "6 Cubic Meters" },
          { key: "Water Tank", value: "2000 Liters" },
          { key: "Sweeping Speed", value: "5-25 km/h" }
        ]
      },
      {
        category: "Engine & Power",
        items: [
          { key: "Engine Type", value: "BS-VI Diesel" },
          { key: "Power Output", value: "180 HP" },
          { key: "Auxiliary Engine", value: "50 HP for sweeping" }
        ]
      }
    ],
    applications: [
      "Municipal road cleaning",
      "Industrial corridor maintenance",
      "Transit zone cleaning",
      "Large complex maintenance",
      "Highway cleaning operations",
      "Airport runway cleaning"
    ],
    features: [
      "Dual sweeping system",
      "Dust suppression capability",
      "Large debris collection",
      "Water spray system",
      "Adjustable sweeping width",
      "Efficient filtration system"
    ],
    benefits: [
      "Improved road cleanliness",
      "Reduced dust pollution",
      "Enhanced traffic safety",
      "Cost-effective cleaning",
      "Environmental compliance",
      "Extended road surface life"
    ]
  },
  "HYPERVAC-IVC": {
    name: "Industrial Vacuum Cleaner (IVC – Super Sucker) – HYPERVAC™ IVC",
    category: "Industrial Vacuum",
    desc: "Heavy-duty industrial vacuum cleaning platform designed for demanding suction applications and material recovery.",
    overview: "The Industrial Vacuum Cleaning Machine (IVC - Super Sucker) is a specialized system for industrial cleaning and material suction use cases where continuous high-performance operation is required. This robust equipment handles the most challenging industrial cleaning tasks with exceptional reliability.",
    image: "/images/products/mm-suction-vacuum-pump.jpeg",
    gallery: [
      "/images/products/mm-suction-vacuum-pump.jpeg",
      "/images/products/super-sucker-machine.jpeg",
      "/images/products/sewage-suction-tanker.jpeg",
      "/images/products/oil-suction-machine.jpeg"
    ],
    specs: [
      { key: "Configuration", value: "Heavy-duty industrial vacuum" },
      { key: "Operation", value: "Continuous high-suction" },
      { key: "Capacity", value: "Industrial-grade performance" },
      { key: "Application", value: "Factory and plant cleaning" }
    ],
    detailedSpecs: [
      {
        category: "Dimensions",
        items: [
          { key: "Length", value: "8800 mm" },
          { key: "Width", value: "2500 mm" },
          { key: "Height", value: "3300 mm" }
        ]
      },
      {
        category: "Performance",
        items: [
          { key: "Suction Capacity", value: "30000 LPM" },
          { key: "Vacuum Level", value: "90% Vacuum" },
          { key: "Tank Capacity", value: "12000 Liters" },
          { key: "Material Recovery", value: "95% Efficiency" }
        ]
      },
      {
        category: "Engine & Power",
        items: [
          { key: "Engine Type", value: "Industrial Grade Diesel" },
          { key: "Power Output", value: "300 HP" },
          { key: "Auxiliary Systems", value: "100 HP for vacuum" }
        ]
      }
    ],
    applications: [
      "Factory floor cleaning",
      "Material recovery operations",
      "Plant housekeeping",
      "Industrial utility maintenance",
      "Manufacturing facility cleaning",
      "Heavy-duty suction tasks"
    ],
    features: [
      "Ultra-high suction power",
      "Industrial-grade construction",
      "Continuous operation capability",
      "Advanced filtration system",
      "Material separation technology",
      "Robust vacuum pump system"
    ],
    benefits: [
      "Superior cleaning performance",
      "Reduced operational downtime",
      "Enhanced workplace safety",
      "Improved productivity",
      "Cost-effective operation",
      "Long-term reliability"
    ]
  },
  "CHASSIS-VACUUM-CLEANER": {
    name: "Chassis Mounted Industrial Vacuum Cleaner",
    category: "Industrial Vacuum",
    desc: "Truck-mounted vacuum cleaner for large-scale industrial and municipal cleaning.",
    overview: "The Chassis Mounted Industrial Vacuum Cleaner is designed for heavy-duty applications where mobility and high-capacity suction are required. This truck-mounted system provides powerful performance for industrial cleaning, waste recovery, and municipal maintenance projects.",
    image: "/images/products/mm-suction-vacuum-pump.jpeg",
    gallery: ["/images/products/mm-suction-vacuum-pump.jpeg"],
    specs: commonSpecs,
    detailedSpecs: [],
    applications: ["Industrial facility cleaning", "Municipal waste handling", "Large-scale material recovery"],
    features: ["Truck-mounted mobility", "High-capacity suction", "Robust industrial build"],
    benefits: ["Efficient large-scale cleaning", "Versatile deployment", "Reliable performance"]
  },
  "ATEX-VACUUM-SYSTEMS": {
    name: "ATEX Compliant Vacuum Systems",
    category: "Industrial Vacuum",
    desc: "Specialized explosion-proof vacuum systems for hazardous industrial environments.",
    overview: "Our ATEX Compliant Vacuum Systems are engineered to operate safely in explosive atmospheres. Designed for industries where flammable dust or vapors are present, these systems prioritize safety and compliance without compromising on suction performance.",
    image: "/images/products/mm-suction-vacuum-pump.jpeg",
    gallery: ["/images/products/mm-suction-vacuum-pump.jpeg"],
    specs: commonSpecs,
    detailedSpecs: [],
    applications: ["Chemical plant cleaning", "Pharmaceutical manufacturing", "Grain and flour processing"],
    features: ["ATEX certification", "Explosion-proof design", "Advanced safety interlocks"],
    benefits: ["Enhanced operational safety", "Regulatory compliance", "Reliable hazardous waste handling"]
  },
  "MATERIAL-RECOVERY-SYSTEMS": {
    name: "Material Recovery Systems",
    category: "Industrial Vacuum",
    desc: "High-performance systems designed for the recovery and recycling of industrial materials.",
    overview: "Material Recovery Systems are specialized industrial vacuum solutions focused on capturing and recycling valuable materials during manufacturing and processing operations. These systems help industries minimize waste and improve operational sustainability.",
    image: "/images/products/mm-suction-vacuum-pump.jpeg",
    gallery: ["/images/products/mm-suction-vacuum-pump.jpeg"],
    specs: commonSpecs,
    detailedSpecs: [],
    applications: ["Material recycling", "Production line waste recovery", "Industrial material handling"],
    features: ["High-efficiency material capture", "Advanced filtration", "Customizable collection points"],
    benefits: ["Waste reduction", "Material cost savings", "Improved sustainability"]
  },
  "McFOGGER": {
    name: "Anti Smog Gun / Fogging System – McFOGGER™",
    category: "Special Purpose",
    desc: "Advanced Anti Smog Machine and Mist Gun for superior dust suppression in industrial and municipal environments.",
    overview: "The McFOGGER™ Fog Cannon has been designed to tackle the problem of airborne dust particles generated by open mining activities, general demolition work and bulk material handling. Fog Cannon has been shown to suppress up to 95% of airborne dust particles. The smaller units are ideal for suppressing dust where it is generated in high concentrations at easily defined point sources such as discharging onto stockpiles, discharging into ships, reclaiming from stockpiles, dumping, crushing and loading/unloading trucks. The larger units are unique as they are able to suppress general airborne open area dust through fogging the general area, and are capable of suppressing high volume events such as blasting with their extensive throw distance.",
    image: "/images/products/anti-smog/anti-smog-machine-1.jpg",
    gallery: [
      "/images/products/anti-smog/anti-smog-machine-1.jpg",
      "/images/products/anti-smog/anti-smog-machine-2.png"
    ],
    specs: [
      { key: "Series", value: "McFOGGER™ Professional" },
      { key: "Efficiency", value: "Up to 95% Dust Suppression" },
      { key: "Operation", value: "Point Source & Open Area Fogging" },
      { key: "Variants", value: "Compact & High-Volume Units" }
    ],
    detailedSpecs: [
      {
        category: "Performance Metrics",
        items: [
          { key: "Throw Range", value: "Up to 100+ Meters (Model Dependent)" },
          { key: "Water Consumption", value: "Optimized Low-Volume Flow" },
          { key: "Particle Size", value: "Fine Mist (10-50 microns)" },
          { key: "Suppression Rate", value: "95% of airborne particles" }
        ]
      },
      {
        category: "Deployment",
        items: [
          { key: "Mounting", value: "Truck, Trailer or Skid Mounted" },
          { key: "Control", value: "Remote / Manual Operation" },
          { key: "Rotation", value: "360° Horizontal Swing" }
        ]
      }
    ],
    applications: [
      "Open mining activities and quarrying",
      "General demolition and construction work",
      "Bulk material handling and stockpiles",
      "Ship discharging and port operations",
      "Crushing and screening plants",
      "High-volume blasting dust suppression",
      "Truck loading and unloading zones"
    ],
    features: [
      "Point-source dust suppression",
      "Long-throw distance for large areas",
      "Low water consumption technology",
      "High-pressure mist generation",
      "Robust all-weather construction",
      "Extensive coverage for blasting events"
    ],
    benefits: [
      "95% reduction in airborne dust",
      "Improved site visibility and safety",
      "Regulatory environmental compliance",
      "Reduced water wastage",
      "Protects nearby communities",
      "Minimal maintenance required"
    ]
  },
  "McLIFT": {
    name: "Skylift Working Platform – McLIFT™",
    category: "Special Purpose",
    desc: "Precision-engineered articulated boom platform for safe and efficient high-altitude utility and maintenance work.",
    overview: "The McLIFT™ series features articulated booms fabricated of light but stiff M.S. box sections, engineered for maximum stability at height. The structure is fitted with wide pivot bushes and EN-9/S.S pins for both booms and hydraulic cylinders, all mounted on a heavy-duty slewing bearing for smooth rotation. It incorporates precision-engineered double-acting hydraulic RAMs with induction-hardened, chrome-plated piston rods for corrosion resistance and long service life. For safety, the unit is equipped with powerful double-acting hydraulically operated stabilizers with wide footprints, including swivel pads and over-travel capability to level the vehicle on uneven ground.",
    image: "/images/products/sky-lift/skylift-working-platform.png",
    gallery: [
      "/images/products/sky-lift/skylift-working-platform.png"
    ],
    specs: [
      { key: "Structure", value: "Articulated MS Box Section" },
      { key: "Hydraulics", value: "Double Acting RAMs" },
      { key: "Safety", value: "Hydraulic Stabilizers" },
      { key: "Mounting", value: "Heavy-Duty Slewing Bearing" }
    ],
    detailedSpecs: [
      {
        category: "Boom Structure",
        items: [
          { key: "Material", value: "Stiff M.S. Box Section" },
          { key: "Pivot Pins", value: "EN-9 / Stainless Steel" },
          { key: "Rotation", value: "360° Continuous Slewing" }
        ]
      },
      {
        category: "Hydraulic System",
        items: [
          { key: "RAM Type", value: "Double Acting Precision Honed" },
          { key: "Piston Rods", value: "Induction Hardened EN-8" },
          { key: "Protection", value: "Deep Grounded Chrome Plating" }
        ]
      },
      {
        category: "Stabilization",
        items: [
          { key: "Quantity", value: "Two/Four Hydraulic Stabilizers" },
          { key: "Features", value: "Wide Footprint & Swivel Pads" },
          { key: "Levelling", value: "Over-travel for Uneven Ground" }
        ]
      }
    ],
    applications: [
      "Street light and utility maintenance",
      "Building façade and glass cleaning",
      "Tree trimming and horticultural work",
      "CCTV and signage installation",
      "Industrial facility maintenance",
      "Aviation and hanger operations"
    ],
    features: [
      "Lightweight yet stiff M.S. box structure",
      "Corrosion-resistant hydraulic rods",
      "Flush-mounted stabilizers when retracted",
      "Wide pivot bushes for reduced wear",
      "Dual controls (Platform and Ground)",
      "Emergency manual lowering system"
    ],
    benefits: [
      "Superior stability at maximum height",
      "Long component life and durability",
      "Safe operation on uneven surfaces",
      "Low maintenance MS structure",
      "Rapid deployment and leveling",
      "Smooth, precise positioning"
    ]
  },
  "MOSRU": {
    name: "Mobile Oil Spill Recovery Unit – Mc MOSRU™",
    category: "Special Purpose",
    desc: "Advanced vehicle-mounted suction unit featuring Spark-Proof Suction Technology (SPST™) for safe recovery of hydrocarbons and liquid waste.",
    overview: "McRAYGOR's Mc MOSRU™ series represents a specialized class of Mobile Oil Spill Units, engineered for high-performance vacuum recovery in hazardous environments. This vehicle-mounted system is specifically designed to syphon out oil, water, grit, and liquid hydrocarbons from slope tanks and leaking pipelines, capable of reaching a suction depth of up to 9 meters. A key differentiator is its proprietary SPST™ (Spark-Proof Suction Technology), which allows the unit to operate safely in oil refineries and petroleum industries, suctioning fuels and undefined fluids without the risk of ignition. The system is designed for operational efficiency, requiring only a small crew, and can be mounted on various heavy-duty chassis including TATA, Ashok Leyland, MAHINDRA, and Eicher.",
    image: "/images/products/mobile-oil-spill-recovery-unit/mobile-oil-spill-recovery-unit-1.png",
    gallery: [
      "/images/products/mobile-oil-spill-recovery-unit/mobile-oil-spill-recovery-unit-1.png"
    ],
    specs: [
      { key: "Technology", value: "SPST™ (Spark-Proof)" },
      { key: "Suction Depth", value: "Up to 9 Meters" },
      { key: "Safety Class", value: "Refinery & Petroleum Grade" },
      { key: "Mounting", value: "TATA / Ashok Leyland / Eicher" }
    ],
    detailedSpecs: [
      {
        category: "Suction Performance",
        items: [
          { key: "Max Depth", value: "9 Meters" },
          { key: "Materials", value: "Oil, Hydrocarbons, Slurry" },
          { key: "Vacuum System", value: "High-Efficiency Syphon" }
        ]
      },
      {
        category: "Safety Features",
        items: [
          { key: "Spark Protection", value: "SPST™ Integrated" },
          { key: "Atmosphere", value: "Hazardous Zone Compatible" },
          { key: "Fluid Handling", value: "Undefined Fuels & Hydrocarbons" }
        ]
      },
      {
        category: "Vehicle Integration",
        items: [
          { key: "Chassis Options", value: "TATA, Ashok Leyland, Mahindra" },
          { key: "Compliance", value: "RTO & Manufacturer Standards" },
          { key: "Crew Requirement", value: "1 Driver + 2 Helpers" }
        ]
      }
    ],
    applications: [
      "Oil refinery cleaning and maintenance",
      "Petroleum pipeline leak recovery",
      "Hazardous liquid hydrocarbon suction",
      "Slope tank desilting and recovery",
      "Emergency oil spill response",
      "Industrial fuel tank cleaning"
    ],
    features: [
      "Proprietary SPST™ Spark-Proof technology",
      "High-power 9-meter deep suction",
      "Multi-chassis mounting compatibility",
      "Integrated safety interlocks",
      "Corrosion-resistant tank and fittings",
      "Efficient operational workflow"
    ],
    benefits: [
      "Zero-fire-risk operation in refineries",
      "Deep-reach suction for difficult tanks",
      "Universal chassis integration",
      "Minimal crew requirements",
      "Rapid deployment for emergency spills",
      "Compliant with industrial safety standards"
    ]
  }
};

export function ProductDetail() {
  const { slug: paramSlug } = useParams<{ slug: string }>();
  // Support both /products/SLUG and /SLUG (trademark direct links)
  const slug = paramSlug || window.location.pathname.split("/").pop();
  const product = slug ? productData[slug] : null;
  const [activeTab, setActiveTab] = useState<'overview' | 'specs' | 'applications'>('overview');
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

  // Reset gallery index when product changes
  useEffect(() => {
    setCurrentGalleryIndex(0);
  }, [slug]);

  // Prevent scroll restoration on state changes
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    return () => {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'auto';
      }
    };
  }, []);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center gap-5">
        <h2 className="text-2xl font-bold text-[#1c2535]">Product Not Found</h2>
        <p className="text-gray-500">This product page is coming soon.</p>
        <Link to="/products" className="bg-[#e8612c] text-white px-6 py-3 rounded-lg font-semibold">
          ← Back to Products
        </Link>
      </div>
    );
  }

  const nextGalleryImage = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const scrollY = window.scrollY;
    setCurrentGalleryIndex((prev) => (prev + 1) % product.gallery.length);
    requestAnimationFrame(() => {
      window.scrollTo(0, scrollY);
    });
  };

  const prevGalleryImage = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const scrollY = window.scrollY;
    setCurrentGalleryIndex((prev) => (prev - 1 + product.gallery.length) % product.gallery.length);
    requestAnimationFrame(() => {
      window.scrollTo(0, scrollY);
    });
  };

  const handleTabClick = (tab: 'overview' | 'specs' | 'applications', e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const scrollY = window.scrollY;
    setActiveTab(tab);
    requestAnimationFrame(() => {
      window.scrollTo(0, scrollY);
    });
  };

  const handleThumbnailClick = (index: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const scrollY = window.scrollY;
    setCurrentGalleryIndex(index);
    requestAnimationFrame(() => {
      window.scrollTo(0, scrollY);
    });
  };

  return (
    <>
      {product && <SEO metadata={getProductSEO(slug!, product.name, product.category, product.desc)} />}
      
      {/* Breadcrumb Section with Background Image */}
      <section 
        className="relative py-32 bg-gradient-to-r from-[#1c2535]/90 to-[#2d3748]/90 text-white overflow-hidden"
        style={{
          backgroundImage: `url(${product.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1c2535]/85 to-[#2d3748]/75"></div>
        
        {/* Content */}
        <div className="relative max-w-[1400px] mx-auto px-4 md:px-8">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-sm mb-6" aria-label="Breadcrumb">
            <Link 
              to="/" 
              className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors"
            >
              <Home size={16} />
              Home
            </Link>
            <ChevronRight size={16} className="text-gray-400" />
            <Link 
              to="/products" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Products
            </Link>
            <ChevronRight size={16} className="text-gray-400" />
            <span className="text-white font-medium">{product.name}</span>
          </nav>

          {/* Simple Product Title */}
          <div className="max-w-4xl">
            <div className="inline-block bg-[#e8612c] text-white text-sm font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-wider">
              {product.category}
            </div>
            <h1 className="text-white" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 800, lineHeight: 1.2 }}>
              {product.name}
            </h1>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-[#e8612c]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-[#1a5c3a]/20 rounded-full blur-3xl"></div>
      </section>

      {/* Main Product Section */}
      <section className="py-12 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Left Column - Product Image */}
            <div>
              {/* Main Image */}
              <div className="mb-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[400px] md:h-[500px] object-contain bg-gray-50 shadow-lg rounded-xl"
                />
              </div>
            </div>

            {/* Right Column - Product Info */}
            <div>
              {/* Category Badge */}
              <div className="inline-block bg-[#e8612c]/10 text-[#e8612c] text-sm font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-wider">
                {product.category}
              </div>

              {/* Product Title */}
              <h1 className="text-[#1c2535] font-bold mb-4" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", lineHeight: 1.2 }}>
                {product.name}
              </h1>

              {/* Product Description */}
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {product.desc}
              </p>

              {/* Key Features */}
              <div className="mb-8">
                <h3 className="text-[#1c2535] font-bold text-lg mb-4">Key Features</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.features.slice(0, 4).map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle2 size={18} className="text-[#1a5c3a] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="/Brochure.pdf"
                  download
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#e8612c] hover:bg-[#d4531f] text-white px-6 py-4 rounded-lg font-semibold transition-colors"
                >
                  <Download size={20} />
                  Product Catalogue
                </a>
                <a
                  href="#quote"
                  className="flex-1 inline-flex items-center justify-center gap-2 border-2 border-[#1c2535] text-[#1c2535] hover:bg-[#1c2535] hover:text-white px-6 py-4 rounded-lg font-semibold transition-colors"
                >
                  <MessageSquare size={20} />
                  Request Quote
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <Shield size={24} className="text-[#1a5c3a] mx-auto mb-2" />
                  <span className="text-xs text-gray-600">Quality Assured</span>
                </div>
                <div className="text-center">
                  <Truck size={24} className="text-[#1a5c3a] mx-auto mb-2" />
                  <span className="text-xs text-gray-600">Fast Delivery</span>
                </div>
                <div className="text-center">
                  <Headphones size={24} className="text-[#1a5c3a] mx-auto mb-2" />
                  <span className="text-xs text-gray-600">24/7 Support</span>
                </div>
                <div className="text-center">
                  <Star size={24} className="text-[#1a5c3a] mx-auto mb-2" />
                  <span className="text-xs text-gray-600">25+ Years</span>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Information Tabs */}
          <div className="border-t border-gray-200 pt-12">
            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-1 mb-8 bg-gray-100 p-1 rounded-lg w-fit">
              <button
                type="button"
                onClick={(e) => handleTabClick('overview', e)}
                className={`px-6 py-3 rounded-md font-semibold transition-colors ${
                  activeTab === 'overview' 
                    ? 'bg-white text-[#1c2535] shadow-sm' 
                    : 'text-gray-600 hover:text-[#1c2535]'
                }`}
              >
                Overview
              </button>
              <button
                type="button"
                onClick={(e) => handleTabClick('specs', e)}
                className={`px-6 py-3 rounded-md font-semibold transition-colors ${
                  activeTab === 'specs' 
                    ? 'bg-white text-[#1c2535] shadow-sm' 
                    : 'text-gray-600 hover:text-[#1c2535]'
                }`}
              >
                Specifications
              </button>
              <button
                type="button"
                onClick={(e) => handleTabClick('applications', e)}
                className={`px-6 py-3 rounded-md font-semibold transition-colors ${
                  activeTab === 'applications' 
                    ? 'bg-white text-[#1c2535] shadow-sm' 
                    : 'text-gray-600 hover:text-[#1c2535]'
                }`}
              >
                Applications
              </button>
            </div>

            {/* Tab Content */}
            <div className="min-h-[400px]">
              {activeTab === 'overview' && (
                <div className="grid lg:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-2xl font-bold text-[#1c2535] mb-6">Product Overview</h3>
                    <p className="text-gray-700 leading-relaxed mb-8">
                      {product.overview}
                    </p>
                    
                    <h4 className="text-lg font-bold text-[#1c2535] mb-4">Key Benefits</h4>
                    <div className="space-y-3">
                      {product.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle2 size={20} className="text-[#1a5c3a] mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-[#1c2535] mb-4">Quick Specifications</h4>
                    <div className="bg-gray-50 rounded-xl p-6">
                      {product.specs.map((spec, index) => (
                        <div key={index} className={`flex justify-between py-3 ${index !== product.specs.length - 1 ? 'border-b border-gray-200' : ''}`}>
                          <span className="text-gray-600 font-medium">{spec.key}</span>
                          <span className="text-[#1c2535] font-semibold">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'specs' && (
                <div>
                  <h3 className="text-2xl font-bold text-[#1c2535] mb-6">Detailed Technical Specifications</h3>
                  <div className="space-y-8">
                    {product.detailedSpecs.map((category, categoryIndex) => (
                      <div key={categoryIndex} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                        <div className="bg-[#1c2535] text-white px-6 py-4">
                          <h4 className="font-bold text-lg">{category.category}</h4>
                        </div>
                        <div className="p-6">
                          <div className="grid md:grid-cols-2 gap-4">
                            {category.items.map((item, itemIndex) => (
                              <div key={itemIndex} className="flex justify-between py-2 border-b border-gray-100 last:border-b-0">
                                <span className="text-gray-600 font-medium">{item.key}</span>
                                <span className="text-[#1c2535] font-semibold">{item.value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'applications' && (
                <div>
                  <h3 className="text-2xl font-bold text-[#1c2535] mb-6">Applications & Use Cases</h3>
                  <p className="text-gray-600 mb-8">
                    This equipment is ideal for various municipal, industrial, and commercial applications:
                  </p>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {product.applications.map((application, index) => (
                      <div key={index} className="bg-[#1a5c3a] text-white p-6 rounded-xl">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 size={20} className="flex-shrink-0 mt-0.5" />
                          <span className="font-medium">{application}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Product Gallery Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1c2535] mb-4">Product Gallery</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore detailed views of the {product.name} from different angles and operational scenarios
            </p>
          </div>

          {/* Large Image Slider */}
          <div className="relative mb-8">
            <div className="relative overflow-hidden shadow-2xl">
              <img
                src={product.gallery[currentGalleryIndex] || product.image}
                alt={`${product.name} - View ${currentGalleryIndex + 1}`}
                className="w-full h-[500px] md:h-[750px] object-contain bg-gray-50"
              />
              
              {/* Navigation Buttons */}
              {product.gallery.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={(e) => prevGalleryImage(e)}
                    className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
                  >
                    <ChevronLeft size={24} className="text-[#1c2535]" />
                  </button>
                  <button
                    type="button"
                    onClick={(e) => nextGalleryImage(e)}
                    className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
                  >
                    <ChevronRight size={24} className="text-[#1c2535]" />
                  </button>
                </>
              )}

              {/* Image Counter */}
              <div className="absolute bottom-6 right-6 bg-black/70 text-white px-4 py-2 rounded-full backdrop-blur-sm">
                <span className="text-sm font-medium">
                  {currentGalleryIndex + 1} / {product.gallery.length}
                </span>
              </div>

              {/* Gradient Overlay for Better Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Thumbnail Navigation */}
          {product.gallery.length > 1 && (
            <div className="flex justify-center gap-3 mb-12 overflow-x-auto pb-2">
              {product.gallery.map((image, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={(e) => handleThumbnailClick(index, e)}
                  className={`flex-shrink-0 w-20 h-20 md:w-24 md:h-24 overflow-hidden border-3 transition-all ${
                    currentGalleryIndex === index 
                      ? 'border-[#e8612c] ring-2 ring-[#e8612c]/30 scale-105' 
                      : 'border-gray-200 hover:border-gray-300 hover:scale-105'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}


        </div>
      </section>

      {/* Target Industries Section */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <h2 className="text-2xl font-bold text-[#1c2535] mb-8">Target Industries</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { label: "Municipal", to: "/industries/municipal" },
              { label: "Oil & Gas", to: "/industries/oil-gas" },
              { label: "Steel Plants", to: "/industries/steel-plants" },
              { label: "Refineries", to: "/industries/oil-refineries" },
              { label: "Cement", to: "/industries/cement" },
              { label: "Power Plants", to: "/industries/power-plants" },
            ].map((industry) => (
              <Link
                key={industry.label}
                to={industry.to}
                className="flex items-center justify-center p-4 border border-gray-200 rounded-xl hover:border-[#e8612c] hover:text-[#e8612c] transition-all text-sm font-medium text-center"
              >
                {industry.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-[#1c2535]">Related Equipment</h2>
            <Link to="/products" className="text-[#e8612c] font-semibold flex items-center gap-2 hover:underline">
              View All Products <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.values(productData)
              .filter(p => p.category === product.category && p.name !== product.name)
              .slice(0, 3)
              .map((p) => (
                <Link
                  key={p.name}
                  to={`/products/${Object.keys(productData).find(key => productData[key] === p)}`}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="aspect-video overflow-hidden">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-[#1c2535] group-hover:text-[#e8612c] transition-colors line-clamp-1">{p.name}</h3>
                    <p className="text-gray-500 text-xs mt-2 line-clamp-2">{p.desc}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-16 bg-gray-50" id="quote">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-[#1c2535] mb-4">Request a Quote</h2>
              <p className="text-gray-600">Get a customized quote for your specific requirements</p>
            </div>
            
            <form className="grid md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-[#1c2535] mb-2">Full Name *</label>
                <input
                  type="text"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#e8612c] focus:ring-1 focus:ring-[#e8612c]"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[#1c2535] mb-2">Email Address *</label>
                <input
                  type="email"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#e8612c] focus:ring-1 focus:ring-[#e8612c]"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[#1c2535] mb-2">Phone Number *</label>
                <input
                  type="tel"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#e8612c] focus:ring-1 focus:ring-[#e8612c]"
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[#1c2535] mb-2">Company</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#e8612c] focus:ring-1 focus:ring-[#e8612c]"
                  placeholder="Enter your company name"
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-[#1c2535] mb-2">Requirements</label>
                <textarea
                  rows={4}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#e8612c] focus:ring-1 focus:ring-[#e8612c]"
                  placeholder="Please describe your specific requirements..."
                ></textarea>
              </div>
              
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-[#e8612c] hover:bg-[#d4531f] text-white py-4 rounded-lg font-semibold transition-colors"
                >
                  Submit Quote Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
