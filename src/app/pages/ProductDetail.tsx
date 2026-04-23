import { useState, useEffect } from "react";
import { Link, useParams } from "react-router";
import { Download, MessageSquare, CheckCircle2, ChevronRight, ChevronLeft, Home, Star, Shield, Truck, Headphones } from "lucide-react";
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
    desc: "Integrated jetting and suction platform for comprehensive sewer maintenance and cleaning operations.",
    overview: "Our Combined Jetting Cum Suction Machine represents the pinnacle of sewer cleaning technology, designed for simultaneous jetting and suction operations. This versatile equipment handles choking, desilting, and liquid waste evacuation in one efficient workflow, making it indispensable for municipal and industrial applications.",
    image: "/images/products/jetting-cum-suction-machine/jetting-cum-suction-machine-1.jpg",
    gallery: [
      "/images/products/jetting-cum-suction-machine/jetting-cum-suction-machine-1.jpg",
      "/images/products/jetting-cum-suction-machine/jetting-cum-suction-machine-2.jpg",
      "/images/products/jetting-cum-suction-machine/jetting-cum-suction-machine-3.jpg",
      "/images/products/jetting-cum-suction-machine/5172107d-f3a9-4e07-9a9c-515a588b70e1.jpg"
    ],
    specs: [
      { key: "Configuration", value: "Truck mounted with integrated systems" },
      { key: "Operation", value: "Simultaneous jetting and suction" },
      { key: "Capacity", value: "High-volume liquid waste handling" },
      { key: "Application", value: "Municipal and industrial cleaning" }
    ],
    detailedSpecs: [
      {
        category: "Dimensions",
        items: [
          { key: "Length", value: "8500 mm" },
          { key: "Width", value: "2500 mm" },
          { key: "Height", value: "3200 mm" }
        ]
      },
      {
        category: "Performance",
        items: [
          { key: "Suction Capacity", value: "15000 LPM" },
          { key: "Jetting Pressure", value: "150 Bar" },
          { key: "Water Tank", value: "4000 Liters" },
          { key: "Waste Tank", value: "6000 Liters" }
        ]
      },
      {
        category: "Engine & Power",
        items: [
          { key: "Engine Type", value: "BS-VI Compliant Diesel" },
          { key: "Power Output", value: "180 HP" },
          { key: "Transmission", value: "Manual 6-Speed" }
        ]
      }
    ],
    applications: [
      "Municipal sewer cleaning and maintenance",
      "Drain desilting and blockage removal",
      "Emergency response for sewer overflows",
      "Industrial utility cleaning operations",
      "Storm drain maintenance",
      "Manhole cleaning and desilting"
    ],
    features: [
      "Simultaneous jetting and suction operation",
      "High-pressure water jetting system",
      "Powerful vacuum suction capability",
      "Integrated waste separation system",
      "Remote control operation",
      "Safety interlocks and monitoring"
    ],
    benefits: [
      "Reduced operational time and costs",
      "Enhanced cleaning efficiency",
      "Minimal manual intervention required",
      "Environmentally safe operations",
      "Versatile application range",
      "Low maintenance requirements"
    ]
  },
  "HYPERVAC": {
    name: "Super Sucker Machine – HYPERVAC™",
    category: "Liquid Waste",
    desc: "High-performance suction machine for demanding sludge and slurry handling applications.",
    overview: "The Super Sucker Machine is engineered for extreme suction performance, capable of handling the most challenging sludge, slurry, and heavy waste materials. Built for continuous operation in severe conditions where conventional systems fail to deliver.",
    image: "/images/products/super-sucker-machine/13598b45-a0d3-4ee2-a999-15bf1c05f413.jpg",
    gallery: [
      "/images/products/super-sucker-machine/13598b45-a0d3-4ee2-a999-15bf1c05f413.jpg",
      "/images/products/super-sucker-machine/1cfc2e43-af82-4fb6-86d4-330a407d6644.jpg",
      "/images/products/super-sucker-machine.jpeg",
      "/images/products/super-sucker-machine2.jpeg"
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
    desc: "High-pressure jetting system for efficient sewer line cleaning and blockage removal.",
    overview: "The McJET™ Sewer Jetting Machine is designed for high-performance cleaning of sewer and drain lines. Using high-pressure water jets, it effectively removes blockages, silt, and debris, ensuring clear and functional drainage systems.",
    image: "/images/products/sewer-jetting-suction-machine.jpeg",
    gallery: ["/images/products/sewer-jetting-suction-machine.jpeg"],
    specs: commonSpecs,
    detailedSpecs: [],
    applications: ["Sewer line cleaning", "Blockage removal", "Drain maintenance"],
    features: ["High-pressure jetting", "Robust construction", "Easy operation"],
    benefits: ["Efficient cleaning", "Reduced manual work", "Long service life"]
  },
  "GULLY-SUCTION-EMPTIER": {
    name: "Gully Suction Emptier (Trailer Mounted)",
    category: "Liquid Waste",
    desc: "Compact trailer-mounted suction unit designed for narrow access areas and constrained spaces.",
    overview: "The Gully Suction Emptier (Trailer Mounted) offers a compact and versatile solution for liquid waste suction in areas where larger truck-mounted systems cannot operate effectively. This trailer configuration provides excellent maneuverability while maintaining powerful suction capabilities for various municipal and industrial applications.",
    image: "/images/products/gully-suction-emptier.jpeg",
    gallery: [
      "/images/products/gully-suction-emptier.jpeg",
      "/images/products/sewage-suction-tanker.jpeg",
      "/images/products/mm-suction-vacuum-pump.jpeg",
      "/images/products/sewer-jetting-suction-machine.jpeg"
    ],
    specs: [
      { key: "Configuration", value: "Trailer mounted system" },
      { key: "Mobility", value: "Compact and maneuverable" },
      { key: "Capacity", value: "Medium-volume suction" },
      { key: "Application", value: "Narrow access cleaning" }
    ],
    detailedSpecs: [
      {
        category: "Dimensions",
        items: [
          { key: "Length", value: "5500 mm" },
          { key: "Width", value: "2000 mm" },
          { key: "Height", value: "2200 mm" }
        ]
      },
      {
        category: "Performance",
        items: [
          { key: "Suction Capacity", value: "8000 LPM" },
          { key: "Vacuum Level", value: "75% Vacuum" },
          { key: "Tank Capacity", value: "3000 Liters" },
          { key: "Discharge Rate", value: "5000 LPM" }
        ]
      },
      {
        category: "Engine & Power",
        items: [
          { key: "Engine Type", value: "Diesel Engine" },
          { key: "Power Output", value: "100 HP" },
          { key: "Drive System", value: "PTO Driven" }
        ]
      }
    ],
    applications: [
      "Narrow lane maintenance",
      "Gully pit cleaning",
      "Semi-urban sanitation work",
      "Localized liquid waste suction",
      "Residential area cleaning",
      "Emergency response support"
    ],
    features: [
      "Compact trailer design",
      "Easy maneuverability",
      "Powerful suction system",
      "Quick deployment capability",
      "Cost-effective operation",
      "Versatile applications"
    ],
    benefits: [
      "Access to restricted areas",
      "Lower operational costs",
      "Flexible deployment options",
      "Reduced infrastructure requirements",
      "Easy transportation",
      "Efficient space utilization"
    ]
  },
  "POWERBUCKET": {
    name: "Bucket Type Sewer Cleaning Machines – POWERBUCKET™",
    category: "Liquid Waste",
    desc: "Mechanical bucket-based cleaning solution designed for effective sewer line maintenance and debris removal.",
    overview: "The Bucket Type Sewer Cleaning Machine utilizes a robust mechanical bucket system for effective removal of solid debris and blockages from sewer lines. This reliable equipment is designed for repetitive cleaning operations in municipal drainage networks, offering consistent performance and durability.",
    image: "/images/products/bucket-type-sewer-cleaning-machine/bucket-type-sewer-cleaning-machine-1.jpg",
    gallery: [
      "/images/products/bucket-type-sewer-cleaning-machine/bucket-type-sewer-cleaning-machine-1.jpg",
      "/images/products/bucket-type-sewer-cleaning-machine/bucket-type-sewer-cleaning-machine-2.jpg",
      "/images/products/bucket-type-sewer-cleaning-machine/bucket-type-sewer-cleaning-machine-3.jpg",
      "/images/products/bucket-type-sewer-cleaning-machine/bucket-type-sewer-cleaning-machine-4.jpg",
      "/images/products/bucket-type-sewer-cleaning-machine/bucket-type-sewer-cleaning-machine-5.jpg",
      "/images/products/bucket-type-sewer-cleaning-machine/bucket-type-sewer-cleaning-machine-6.jpg"
    ],
    specs: [
      { key: "Configuration", value: "Truck mounted bucket system" },
      { key: "Operation", value: "Mechanical bucket cleaning" },
      { key: "Capacity", value: "Heavy debris handling" },
      { key: "Application", value: "Sewer line maintenance" }
    ],
    detailedSpecs: [
      {
        category: "Dimensions",
        items: [
          { key: "Length", value: "8000 mm" },
          { key: "Width", value: "2450 mm" },
          { key: "Height", value: "3100 mm" }
        ]
      },
      {
        category: "Performance",
        items: [
          { key: "Bucket Capacity", value: "1.5 Cubic Meters" },
          { key: "Operating Depth", value: "6 Meters" },
          { key: "Reach", value: "5 Meters" },
          { key: "Cycle Time", value: "60 Seconds" }
        ]
      },
      {
        category: "Engine & Power",
        items: [
          { key: "Engine Type", value: "BS-VI Compliant" },
          { key: "Power Output", value: "160 HP" },
          { key: "Hydraulic Pressure", value: "200 Bar" }
        ]
      }
    ],
    applications: [
      "Sewer pit extraction",
      "Drain maintenance operations",
      "Municipal cleaning fleets",
      "Periodic sanitation tasks",
      "Solid waste removal",
      "Infrastructure maintenance"
    ],
    features: [
      "Robust bucket mechanism",
      "Precise debris handling",
      "Heavy-duty construction",
      "Reliable hydraulic system",
      "Easy operation controls",
      "Maintenance-friendly design"
    ],
    benefits: [
      "Effective solid waste removal",
      "Durable construction",
      "Consistent performance",
      "Reduced operational downtime",
      "Cost-effective maintenance",
      "Long service life"
    ]
  },
  "McRODDER": {
    name: "Sewer Rodding Machines – McRODDER™",
    category: "Liquid Waste",
    desc: "Specialized pipeline rodding machine designed for clearing underground blockages and choke points.",
    overview: "The Sewer Rodding Machine is engineered for resolving line blockages through controlled rodding operations in municipal and facility networks. This specialized equipment uses flexible rods to navigate through pipes and clear obstructions, making it essential for preventive maintenance and emergency response.",
    image: "/images/products/sewer-rodding-machine.jpeg",
    gallery: [
      "/images/products/sewer-rodding-machine.jpeg",
      "/images/products/sewer-jetting-suction-machine.jpeg",
      "/images/products/power-bucket-machine.jpeg",
      "/images/products/sewage-suction-tanker.jpeg"
    ],
    specs: [
      { key: "Configuration", value: "Truck mounted rodding system" },
      { key: "Operation", value: "Flexible rod insertion" },
      { key: "Capacity", value: "Long-distance pipe cleaning" },
      { key: "Application", value: "Blockage removal" }
    ],
    detailedSpecs: [
      {
        category: "Dimensions",
        items: [
          { key: "Length", value: "7200 mm" },
          { key: "Width", value: "2350 mm" },
          { key: "Height", value: "2800 mm" }
        ]
      },
      {
        category: "Performance",
        items: [
          { key: "Rod Length", value: "100 Meters" },
          { key: "Rod Diameter", value: "16-25 mm" },
          { key: "Operating Pressure", value: "150 Bar" },
          { key: "Feed Rate", value: "Variable Speed" }
        ]
      },
      {
        category: "Engine & Power",
        items: [
          { key: "Engine Type", value: "Diesel Engine" },
          { key: "Power Output", value: "120 HP" },
          { key: "Drive System", value: "Hydraulic Drive" }
        ]
      }
    ],
    applications: [
      "Underground choke removal",
      "Drain line restoration",
      "Preventive line cleaning",
      "Public utility maintenance",
      "Emergency blockage response",
      "Pipeline inspection support"
    ],
    features: [
      "Flexible rodding system",
      "Variable speed control",
      "Multiple rod sizes",
      "Precise navigation capability",
      "Robust drive mechanism",
      "Easy rod handling"
    ],
    benefits: [
      "Effective blockage removal",
      "Minimal excavation required",
      "Cost-effective solution",
      "Quick response capability",
      "Versatile pipe compatibility",
      "Reduced service disruption"
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
    desc: "High-efficiency compactor solution designed for optimal waste transport and high-volume waste handling.",
    overview: "The Refuse / Garbage Compactor is designed to optimize waste transport efficiency with advanced compaction technology for daily municipal collection routes. This robust system significantly reduces the volume of collected waste, allowing for more efficient transportation and disposal operations.",
    image: "/images/products/refuse-compactor.jpeg",
    gallery: [
      "/images/products/refuse-compactor.jpeg",
      "/images/products/refuse-compactor2.jpeg",
      "/images/products/dumper-placer-container.jpeg",
      "/images/products/mobile-toilets.jpeg"
    ],
    specs: [
      { key: "Configuration", value: "Truck mounted compactor" },
      { key: "Operation", value: "Hydraulic compaction" },
      { key: "Capacity", value: "High-volume compression" },
      { key: "Application", value: "Municipal waste collection" }
    ],
    detailedSpecs: [
      {
        category: "Dimensions",
        items: [
          { key: "Length", value: "9000 mm" },
          { key: "Width", value: "2500 mm" },
          { key: "Height", value: "3200 mm" }
        ]
      },
      {
        category: "Performance",
        items: [
          { key: "Body Capacity", value: "16 Cubic Meters" },
          { key: "Compaction Ratio", value: "4:1" },
          { key: "Loading Height", value: "1.4 Meters" },
          { key: "Compaction Force", value: "25 Tons" }
        ]
      },
      {
        category: "Engine & Power",
        items: [
          { key: "Engine Type", value: "BS-VI Heavy Duty" },
          { key: "Power Output", value: "200 HP" },
          { key: "Hydraulic Pressure", value: "250 Bar" }
        ]
      }
    ],
    applications: [
      "Door-to-door collection support",
      "Urban transfer operations",
      "Municipal fleet deployment",
      "Commercial waste handling",
      "Residential waste collection",
      "Industrial waste management"
    ],
    features: [
      "High compaction ratio",
      "Automated loading system",
      "Robust hydraulic mechanism",
      "Large capacity body",
      "Efficient waste compression",
      "Reliable operation cycle"
    ],
    benefits: [
      "Reduced transportation costs",
      "Increased collection efficiency",
      "Lower fuel consumption",
      "Minimized disposal trips",
      "Enhanced operational productivity",
      "Environmental sustainability"
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
    desc: "Advanced fogging-based dust suppression and air quality control system for environmental management.",
    overview: "The Anti Smog Gun / Fogging System is an application-driven solution designed for construction, municipal, and industrial dust environments. This specialized equipment effectively suppresses airborne particles and improves air quality through advanced fogging technology.",
    image: "/images/products/oil-suction-machine.jpeg",
    gallery: [
      "/images/products/oil-suction-machine.jpeg",
      "/images/products/mobile-toilets.jpeg",
      "/images/products/sewage-suction-tanker.jpeg",
      "/images/products/mm-suction-vacuum-pump.jpeg"
    ],
    specs: [
      { key: "Configuration", value: "Truck mounted fogging system" },
      { key: "Operation", value: "High-pressure water fogging" },
      { key: "Capacity", value: "Large area coverage" },
      { key: "Application", value: "Dust suppression and air quality" }
    ],
    detailedSpecs: [
      {
        category: "Dimensions",
        items: [
          { key: "Length", value: "7000 mm" },
          { key: "Width", value: "2300 mm" },
          { key: "Height", value: "2900 mm" }
        ]
      },
      {
        category: "Performance",
        items: [
          { key: "Water Tank", value: "5000 Liters" },
          { key: "Throw Range", value: "60 Meters" },
          { key: "Coverage Area", value: "10000 Sq Meters" },
          { key: "Operating Pressure", value: "80 Bar" }
        ]
      },
      {
        category: "Engine & Power",
        items: [
          { key: "Engine Type", value: "BS-VI Diesel" },
          { key: "Power Output", value: "130 HP" },
          { key: "Pump System", value: "High-pressure pump" }
        ]
      }
    ],
    applications: [
      "Construction site dust suppression",
      "Industrial pollution control",
      "Municipal air quality improvement",
      "Mining dust control",
      "Event and festival support",
      "Emergency pollution response"
    ],
    features: [
      "High-pressure fogging system",
      "Wide coverage capability",
      "Adjustable spray patterns",
      "Mobile deployment",
      "Water-efficient operation",
      "Remote control capability"
    ],
    benefits: [
      "Effective dust suppression",
      "Improved air quality",
      "Environmental compliance",
      "Health and safety benefits",
      "Reduced pollution levels",
      "Cost-effective solution"
    ]
  },
  "McLIFT": {
    name: "Skylift Working Platform – McLIFT™",
    category: "Special Purpose",
    desc: "Elevated platform system designed for safe access and utility maintenance at various heights.",
    overview: "The Skylift Working Platforms are purpose-built lifting platforms for overhead servicing, maintenance, and municipal utility work. These versatile platforms provide safe and efficient access to elevated work areas, making them essential for various maintenance and installation tasks.",
    image: "/images/products/mobile-toilets.jpeg",
    gallery: [
      "/images/products/mobile-toilets.jpeg",
      "/images/products/oil-suction-machine.jpeg",
      "/images/products/sewage-suction-tanker.jpeg",
      "/images/products/refuse-compactor.jpeg"
    ],
    specs: [
      { key: "Configuration", value: "Truck mounted lift platform" },
      { key: "Operation", value: "Hydraulic elevation system" },
      { key: "Capacity", value: "Multi-person platform" },
      { key: "Application", value: "Elevated maintenance work" }
    ],
    detailedSpecs: [
      {
        category: "Dimensions",
        items: [
          { key: "Length", value: "8200 mm" },
          { key: "Width", value: "2400 mm" },
          { key: "Height (Stowed)", value: "3100 mm" }
        ]
      },
      {
        category: "Performance",
        items: [
          { key: "Working Height", value: "18 Meters" },
          { key: "Platform Capacity", value: "300 kg" },
          { key: "Outreach", value: "8 Meters" },
          { key: "Platform Size", value: "1.8 x 0.8 Meters" }
        ]
      },
      {
        category: "Engine & Power",
        items: [
          { key: "Engine Type", value: "BS-VI Diesel" },
          { key: "Power Output", value: "140 HP" },
          { key: "Hydraulic System", value: "Precision hydraulics" }
        ]
      }
    ],
    applications: [
      "Street light maintenance",
      "Public utility access",
      "Building maintenance",
      "Safe elevated operations",
      "Tree trimming support",
      "Installation and repair work"
    ],
    features: [
      "High reach capability",
      "Stable platform design",
      "Precise positioning control",
      "Safety systems integrated",
      "Multi-directional movement",
      "Emergency lowering system"
    ],
    benefits: [
      "Enhanced worker safety",
      "Improved work efficiency",
      "Reduced setup time",
      "Versatile positioning",
      "Cost-effective maintenance",
      "Compliance with safety standards"
    ]
  },
  "MOSRU": {
    name: "Mobile Oil Spill Recovery Unit – MOSRU™",
    category: "Special Purpose",
    desc: "Specialized mobile response unit designed for rapid containment and recovery of oil spills and hazardous liquids.",
    overview: "The Mobile Oil Spill Recovery Unit (MOSR) is designed for rapid deployment during spill incidents with practical mobility and response-focused design. This specialized equipment provides immediate response capability for environmental protection and hazardous material recovery operations.",
    image: "/images/products/sewage-suction-tanker.jpeg",
    gallery: [
      "/images/products/sewage-suction-tanker.jpeg",
      "/images/products/oil-suction-machine.jpeg",
      "/images/products/super-sucker-machine.jpeg",
      "/images/products/mm-suction-vacuum-pump.jpeg"
    ],
    specs: [
      { key: "Configuration", value: "Mobile spill recovery system" },
      { key: "Operation", value: "Rapid spill containment" },
      { key: "Capacity", value: "High-volume recovery" },
      { key: "Application", value: "Emergency spill response" }
    ],
    detailedSpecs: [
      {
        category: "Dimensions",
        items: [
          { key: "Length", value: "9500 mm" },
          { key: "Width", value: "2550 mm" },
          { key: "Height", value: "3400 mm" }
        ]
      },
      {
        category: "Performance",
        items: [
          { key: "Recovery Capacity", value: "15000 Liters" },
          { key: "Suction Rate", value: "20000 LPM" },
          { key: "Separation Efficiency", value: "98%" },
          { key: "Response Time", value: "< 30 Minutes" }
        ]
      },
      {
        category: "Engine & Power",
        items: [
          { key: "Engine Type", value: "Heavy Duty Diesel" },
          { key: "Power Output", value: "250 HP" },
          { key: "Auxiliary Power", value: "Emergency generator" }
        ]
      }
    ],
    applications: [
      "Oil spill emergency response",
      "Industrial safety operations",
      "Environmental cleanup",
      "Hazardous liquid recovery",
      "Marine spill response",
      "Industrial accident response"
    ],
    features: [
      "Rapid deployment capability",
      "High-efficiency recovery system",
      "Oil-water separation technology",
      "Emergency response equipment",
      "Mobile command center",
      "Environmental protection systems"
    ],
    benefits: [
      "Quick emergency response",
      "Environmental protection",
      "Regulatory compliance",
      "Minimized environmental impact",
      "Cost-effective cleanup",
      "Professional spill management"
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
                  className="w-full h-[400px] object-cover shadow-lg"
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
                  Download Brochure
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
                src={product.gallery[currentGalleryIndex]}
                alt={`${product.name} - View ${currentGalleryIndex + 1}`}
                className="w-full h-[500px] md:h-[600px] object-cover"
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
