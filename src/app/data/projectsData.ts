// Project data structures and initial projects for McRAYGOR Projects/Applications pages

export interface EquipmentItem {
  name: string;
  productSlug?: string;
}

export interface ProjectImage {
  url: string;
  alt: string;
  caption?: string;
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  client: string;
  year: number;
  location: string;
  projectType: 'GOVERNMENT' | 'PRIVATE' | 'INTERNATIONAL';
  categoryBadge: string;
  categoryTags: string[];
  description: string;
  challenge: string;
  solution: string;
  equipmentUsed: EquipmentItem[];
  results: string;
  images: ProjectImage[];
  featured?: boolean;
}

// Initial 6 projects data
export const projectsData: Project[] = [
  {
    id: 1,
    slug: "delhi-jal-board-mass-sewage-treatment-project-2014",
    title: "Delhi Jal board mass sewage treatment project, 2014",
    client: "Delhi Jal Board",
    year: 2014,
    location: "New Delhi, India",
    projectType: "GOVERNMENT",
    categoryBadge: "Government Project",
    categoryTags: ["ENGINEERING SURVEY", "CAPITAL CITY SERVICE", "SYSTEM DESIGN"],
    description: "Provided end-to-end engineering analysis and tooling solutions for the National Capital Territory.",
    challenge: "We have been establishing long term relationships and projects with Delhi Jal board as well as state govt. Serving an impressive list of high quality machines with experience. The central and state govt's primary choice for all sewer related issues has been McRAYGOR Mechanicals from last two decades. A similar sewer related problem which came into existence was dealt with our Rodding machine (enlisted to compete under Delhi Jal board and Delhi state govt.) The service included the task of carrying out detailed engineering survey & analysis of Delhi NCR Municipal Limits for transmission system, data collection existing arrangements, and detailed design of the system.",
    solution: "Deployed specialized rodding machines and conducted comprehensive engineering surveys across Delhi NCR Municipal Limits. Provided detailed analysis of transmission systems, collected data on existing arrangements, and delivered complete system design solutions for the National Capital Territory.",
    equipmentUsed: [
      { name: "Sewer Rodding Machine", productSlug: "sewer-rodding-machine" },
      { name: "Combined Jetting Cum Suction Machine", productSlug: "combined-jetting-cum-suction-machine" }
    ],
    results: "Successfully completed comprehensive engineering survey and system design for Delhi NCR. Established McRAYGOR as the primary choice for Delhi Jal Board and state government for all sewer-related issues. Long-term partnership continues with consistent high-quality service delivery.",
    images: [
      {
        url: "/images/projects/delhi-jal-board-sewage-treatment.jpeg",
        alt: "Delhi Jal Board mass sewage treatment project equipment"
      }
    ]
  },
  {
    id: 2,
    slug: "karnal-highway-pipeline-leak-2015",
    title: "Karnal Highway pipeline leak, 2015",
    client: "Municipal Corporation Karnal",
    year: 2015,
    location: "Karnal, Haryana",
    projectType: "GOVERNMENT",
    categoryBadge: "Government Project",
    categoryTags: ["CM COMMENDATION", "5+ MACHINES DEPLOYED", "RAPID RESPONSE"],
    description: "Received official commendation from the Chief Minister of Haryana for rapid emergency response.",
    challenge: "Karnal city-Highway Pipeline Leak Project, held in the summer of 2016. Main sewage pipeline underneath NH-709A leaked due to extreme sewage conditions causing a havoc on the highway and even the streets of Karnal. Toxic constituents, sewage silts and were exposed to people causing foul smell and bacterial spread in residential areas. We feel proud in providing Karnal city municipal department, followed by Haryana state Govt., Five Gully Suction Emptier machines to control this situation.",
    solution: "Rapid deployment of five Gully Suction Emptier machines to control the emergency situation. Coordinated with Karnal city municipal department and Haryana state government to contain the leak and remove toxic sewage from highway and residential areas. Implemented systematic cleanup to eliminate bacterial spread and restore public safety.",
    equipmentUsed: [
      { name: "Gully Suction Emptier (Trailer Mounted)", productSlug: "gully-suction-emptier-trailer-mounted" },
      { name: "Super Sucker Machine", productSlug: "super-sucker-machine" }
    ],
    results: "Proud moment for McRAYGOR: one of our expert 'sewage-man' receiving a word of praise from Honourable CHIEF MINISTER of Haryana, Mr. Manohar Lal Khattar for his endless passion, hard work and commitment to accomplish our mission. Received official commendation for rapid emergency response and professional execution.",
    images: [
      {
        url: "/images/projects/karnal-highway-pipeline-leak.jpeg",
        alt: "Chief Minister of Haryana commending McRAYGOR team for Karnal highway pipeline leak response"
      }
    ]
  },
  {
    id: 3,
    slug: "ludhiana-punjab-clogged-sewer-alpha-project-2003",
    title: "Ludhiana, Punjab clogged sewer alpha project, 2003",
    client: "Municipal Corporation Ludhiana",
    year: 2003,
    location: "Ludhiana, Punjab",
    projectType: "GOVERNMENT",
    categoryBadge: "Government Project",
    categoryTags: ["11 HIGH-POWER UNITS", "28 DAY COMPLETION", "FIRST LARGE SCALE INDIA PROJECT"],
    description: "Pioneered large-scale mechanized sewer cleaning in India with an 11-machine fleet deployment.",
    challenge: "2003 Ludhiana, Punjab clogged sewer alpha project has been one of our most ambitious and originating projects. Back in 2003 when there were very few or almost no companies in India to resolve sewer related issues, people & Municipal Corporation of Ludhiana, Punjab were facing clogged sewers throughout the city. Municipal corporation gave the chance to McRAYGOR to take the charge of solving this issue. 11 Jetting Suction machines were sent to Ludhiana within a span of 28 days to declog the city sewage system.",
    solution: "Deployed 11 high-power Jetting Suction machines within 28 days to systematically declog the entire city sewage system. Implemented large-scale mechanized sewer cleaning operations across Ludhiana, pioneering this approach in India when few companies had the capability to handle such projects.",
    equipmentUsed: [
      { name: "Combined Jetting Cum Suction Machine", productSlug: "combined-jetting-cum-suction-machine" },
      { name: "Super Sucker Machine", productSlug: "super-sucker-machine" }
    ],
    results: "We talk about this project with immense proud. This project was one of McRAYGOR's originating projects. Municipal Corporation has always been thankful to us for serving their exact needs. Successfully completed India's first large-scale mechanized sewer cleaning project, establishing McRAYGOR as a pioneer in the industry.",
    images: [
      {
        url: "/images/projects/ludhiana-clogged-sewer-project.jpeg",
        alt: "Ludhiana Punjab clogged sewer cleaning operation with 11-machine fleet"
      }
    ]
  },
  {
    id: 4,
    slug: "maharashtra-state-sewer-broke-project-2010",
    title: "Maharashtra state sewer broke project, 2010",
    client: "Brihanmumbai Municipal Corporation (BMC)",
    year: 2010,
    location: "Mumbai, Maharashtra",
    projectType: "GOVERNMENT",
    categoryBadge: "Government Project",
    categoryTags: ["8,000+ MLD IMPACT", "LONG-TERM PARTNERSHIP", "METRO CITY COVERAGE"],
    description: "Supporting the BMC in managing one of the world's most complex municipal sewage networks.",
    challenge: "Maharashtra state sewer broke project, was accomplished in 2010. Maharashtra generates the maximum sewage in India at 13% with 8,143 MLD as against treatment of 5,160.36 MLD through sewage treatment plants (STPs), a shortfall of almost 3,000 MLD. In comparison, the Brihanmumbai Municipal Corporation (BMC) supplies 3,750 MLD water every day to Mumbai against a demand of 4,505 million litres a day. One such sewage related issue was encountered when the sewage system of the city got clogged and effected lives of thousands of people.",
    solution: "Our signature jetting suction machines were used to declog the sewage system of the entire city. Deployed specialized equipment to handle the massive scale of Mumbai's sewage infrastructure, working systematically to restore normal operations across the metropolitan area.",
    equipmentUsed: [
      { name: "Combined Jetting Cum Suction Machine", productSlug: "combined-jetting-cum-suction-machine" },
      { name: "Super Sucker Machine", productSlug: "super-sucker-machine" }
    ],
    results: "We have been serving Maharashtra state govt. since 2004. Successfully restored sewage system operations across Mumbai, impacting millions of residents. Established long-term partnership with BMC, continuing to serve one of the world's most complex municipal sewage networks.",
    images: [
      {
        url: "/images/projects/maharashtra-sewer-broke-bmc.jpeg",
        alt: "Maharashtra state BMC sewer restoration project with McRAYGOR equipment"
      }
    ]
  },
  {
    id: 5,
    slug: "reliance-industries-sewer-cleaning-project-2013",
    title: "Reliance Industries Sewer Cleaning Project, 2013",
    client: "Reliance Industries Limited",
    year: 2013,
    location: "Bhuj, Gujarat",
    projectType: "PRIVATE",
    categoryBadge: "Private Sector",
    categoryTags: ["12 MOSR UNITS", "OIL SPILL RECOVERY", "TV DOCUMENTED"],
    description: "Successfully executed the largest private-sector industrial sewer cleaning project for RIL.",
    challenge: "Or famous and autonomous 'Reliance Industries Sewer Cleaning Project' was held back in 2013. The McRAYGOR's Vehicle Mounted Mobile Oil Spill Recovery Unit (MOSR)is a truck chassis mounted unit capable of creating vacuum for sucking out dense waste / sludge like mud, slurry, etc. from septic tanks, sewer lines, storm water drains, gullies etc. 12 MOSR machines were sent to Bhuj in state of Gujarat to drain out oil and sediments from the sewer line.",
    solution: "Deployed 12 MOSR (Mobile Oil Spill Recovery Unit) machines to Bhuj, Gujarat for comprehensive industrial sewer cleaning. Utilized specialized truck chassis mounted units capable of creating vacuum for sucking out dense waste, sludge, mud, and slurry from septic tanks, sewer lines, storm water drains, and gullies. Executed systematic cleaning operations across the entire facility.",
    equipmentUsed: [
      { name: "Mobile Oil Spill Recovery Unit (MOSR)", productSlug: "mobile-oil-spill-recovery-unit-mosr" },
      { name: "Industrial Vacuum Cleaning Machine (IVC - Super Sucker)", productSlug: "industrial-vacuum-cleaning-machine-ivc-super-sucker" }
    ],
    results: "Details of this mass project were discussed on live television and Hindustan Times newspaper. McRAYGOR Mechanicals & Reliance Industries have old relationship via various other projects held in India, to media and television in the country. Successfully completed the largest private-sector industrial sewer cleaning project, establishing McRAYGOR's reputation in the industrial segment.",
    images: [
      {
        url: "/images/projects/reliance-industries-oil-spill.jpeg",
        alt: "Reliance Industries sewer cleaning project with 12 MOSR units in Bhuj, Gujarat"
      }
    ]
  },
  {
    id: 6,
    slug: "united-nations-mission-haiti-major-sewer-choke-2010",
    title: "United Nation's : Mission Haiti Major Sewer choke, 2010",
    client: "United Nations (Haitian Government)",
    year: 2010,
    location: "Port-au-Prince, Haiti",
    projectType: "INTERNATIONAL",
    categoryBadge: "International Project",
    categoryTags: ["100% SYSTEM RESTORATION", "GLOBAL AID PARTNERSHIP", "DISASTER MANAGEMENT"],
    description: "Successfully restored critical sewage infrastructure for an entire capital city post-disaster.",
    challenge: "2010 Haiti earthquake, large-scale earthquake that occurred January 12, 2010, on the West Indian island of Hispaniola, comprising the countries of Haiti and the Dominican Republic. Most severely affected was Haiti, occupying the western third of the island. An exact death toll of 10,000 people in the country proved elusive in the ensuing chaos. Hundreds of thousands of survivors were displaced. We feel immense proud in announcing about our official aid to the Haitian Govt. by providing disaster management equipment and sewage treatment machine: McRAYGOR's Super Sucker machine for reconstructing the broken sewage system in the capital city of Haiti caused by this major earthquake.",
    solution: "Provided disaster management equipment and sewage treatment machines to the Haitian Government through official UN aid partnership. Deployed McRAYGOR's Super Sucker machines for reconstructing the broken sewage system in Port-au-Prince. Worked in challenging post-disaster conditions to restore critical infrastructure for the capital city.",
    equipmentUsed: [
      { name: "Super Sucker Machine", productSlug: "super-sucker-machine" },
      { name: "Combined Jetting Cum Suction Machine", productSlug: "combined-jetting-cum-suction-machine" }
    ],
    results: "Certified Industrial Excellence. Successfully restored critical sewage infrastructure for an entire capital city post-disaster. Achieved 100% system restoration through global aid partnership, supporting disaster management efforts and helping hundreds of thousands of displaced survivors. Proud contribution to international humanitarian relief efforts.",
    images: [
      {
        url: "/images/projects/united-nations-haiti-mission.jpeg",
        alt: "United Nations Mission Haiti major sewer reconstruction with McRAYGOR equipment"
      }
    ]
  }
];

// Helper function to get project by slug
export function getProjectBySlug(slug: string): Project | undefined {
  return projectsData.find(p => p.slug === slug);
}

// Helper function to generate slug from title
export function generateProjectSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// Helper function to validate project has all required fields
export function validateProject(project: Partial<Project>): boolean {
  const requiredFields: (keyof Project)[] = [
    'id', 'slug', 'title', 'client', 'year', 'location',
    'projectType', 'categoryBadge', 'categoryTags', 'description',
    'challenge', 'solution', 'equipmentUsed', 'results', 'images'
  ];

  return requiredFields.every(field => {
    const value = project[field];
    if (Array.isArray(value)) return value.length > 0;
    return value !== undefined && value !== null && value !== '';
  });
}

// Helper function to generate product URLs from equipment names
export function getProductSlugFromName(equipmentName: string): string {
  return equipmentName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// Helper function to validate product link exists
export function validateProductLink(productSlug: string): boolean {
  const validProducts = [
    'combined-jetting-cum-suction-machine',
    'super-sucker-machine',
    'sewer-grabbing-manhole-desilting-machine',
    'gully-suction-emptier-trailer-mounted',
    'bucket-type-sewer-cleaning-machine',
    'sewer-rodding-machine',
    'litter-picker',
    'refuse-garbage-compactor',
    'road-sweeper',
    'industrial-vacuum-cleaning-machine-ivc-super-sucker',
    'anti-smog-gun-fogging-system',
    'skylift-working-platforms',
    'mobile-oil-spill-recovery-unit-mosr'
  ];

  return validProducts.includes(productSlug);
}
