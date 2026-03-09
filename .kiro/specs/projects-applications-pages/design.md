# Design Document: Projects/Applications Pages

## Overview

The Projects/Applications feature transforms the current placeholder section at `/products#applications` into a comprehensive project showcase system with dedicated listing and detail pages. This feature enables McRAYGOR to present case studies demonstrating global impact across government, private, and international sectors.

The system follows established patterns from the Products pages implementation, reusing existing UI components and maintaining consistency with the McRAYGOR design language. The architecture emphasizes static data structures stored in TypeScript files, client-side routing with React Router, and comprehensive SEO optimization for search engine visibility.

### Key Design Principles

1. **Pattern Reuse**: Mirror the Products/ProductDetail page architecture for consistency
2. **Component Reuse**: Leverage existing UI components from `src/app/components/ui/`
3. **Static Data**: Store project data in structured TypeScript files (similar to products data)
4. **SEO-First**: Integrate comprehensive metadata and schema markup for all pages
5. **Responsive Design**: Mobile-first approach with breakpoints at 768px (tablet) and 1024px (desktop)
6. **Performance**: Lazy loading, image optimization, and code splitting
7. **Accessibility**: WCAG AA compliance with semantic HTML and ARIA labels

## Architecture

### Component Hierarchy

```
Projects (Listing Page)
├── SEO Component
├── Header Section
│   ├── Page Title with Green Underline
│   └── Subtitle
├── Projects Grid
│   └── ProjectCard[] (3 cols desktop, 2 cols tablet, 1 col mobile)
│       ├── Project Image with Overlay
│       ├── Category Badge
│       ├── Client Name
│       ├── Project Title + Year
│       ├── Description (150 char limit)
│       ├── Category Tags
│       └── "FULL CASE STUDY →" Link
└── Breadcrumb Navigation

ProjectDetail (Detail Page)
├── SEO Component with Schema Markup
├── Breadcrumb Navigation
├── Hero Section
│   ├── Project Title
│   ├── Metadata (Client, Year, Location)
│   └── Category Badge
├── Content Sections
│   ├── Challenge Section
│   ├── Solution Section
│   ├── Equipment Used (with internal links)
│   └── Results Section
├── Image Gallery
└── Category Tags
```

### Routing Structure

```
/projects                    → Projects listing page
/projects/:slug              → Individual project detail page
```

Routes will be added to `src/app/routes.tsx` following the existing pattern:

```typescript
{ path: "projects", Component: Projects },
{ path: "projects/:slug", Component: ProjectDetail },
```

### Data Flow

```
projectsData.ts (Data Source)
    ↓
Projects.tsx / ProjectDetail.tsx (Pages)
    ↓
UI Components (Card, Badge, Breadcrumb)
    ↓
SEO Utils (Metadata Generation)
    ↓
Browser (Rendered Output)
```

## Components and Interfaces

### Data Models

#### Project Interface

```typescript
interface Project {
  id: number;
  slug: string;                    // URL-friendly identifier
  title: string;                   // Project title
  client: string;                  // Client organization name
  year: number;                    // Project year
  location: string;                // Geographic location
  projectType: 'GOVERNMENT' | 'PRIVATE' | 'INTERNATIONAL';
  categoryBadge: string;           // Display label for project type
  categoryTags: string[];          // Array of category tags
  description: string;             // Brief summary (150 char max)
  challenge: string;               // Problem statement (markdown)
  solution: string;                // Solution provided (markdown)
  equipmentUsed: EquipmentItem[];  // Equipment with product links
  results: string;                 // Impact and outcomes (markdown)
  images: ProjectImage[];          // Project images
  featured?: boolean;              // Optional featured flag
}

interface EquipmentItem {
  name: string;                    // Equipment name
  productSlug?: string;            // Optional link to product page
}

interface ProjectImage {
  url: string;                     // Image path
  alt: string;                     // Accessibility description
  caption?: string;                // Optional caption
}
```

#### SEO Metadata Interface

```typescript
interface ProjectSEOMetadata extends SEOMetadata {
  title: string;                   // "{Project Title} - {Client} | McRAYGOR®"
  description: string;             // Project summary (160 char max)
  keywords: string;                // Project-specific keywords
  canonical: string;               // Full URL
  ogImage: string;                 // Primary project image
  ogType: 'article';               // Schema type
  structuredData: object;          // JSON-LD schema markup
}
```

### Component Specifications

#### Projects (Listing Page)

**File**: `src/app/pages/Projects.tsx`

**Responsibilities**:
- Render grid of project cards
- Handle responsive layout (3/2/1 columns)
- Integrate SEO metadata
- Provide navigation to detail pages

**Key Features**:
- Page title "Global Impact Cases" with green underline accent
- Subtitle explaining the section
- Responsive grid layout using Tailwind CSS
- Hover animations on cards (subtle scale transform max 1.02)
- Category badge color coding:
  - GOVERNMENT: `#1a5c3a` (green)
  - PRIVATE: `#e8612c` (orange)
  - INTERNATIONAL: `#1c2535` (dark blue)

**Layout Structure**:
```tsx
<section className="bg-[#1c2535] text-white py-16">
  {/* Header with title and subtitle */}
</section>

<section className="py-12 bg-gray-50 min-h-screen">
  <div className="max-w-[1400px] mx-auto px-4 md:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Project cards */}
    </div>
  </div>
</section>
```

#### ProjectCard Component

**Responsibilities**:
- Display project summary information
- Provide visual hierarchy with image, badges, and text
- Handle hover states and animations
- Link to detail page

**Visual Elements**:
- Image with overlay effect (h-48 on listing)
- Category badge (top-left corner)
- Client name (small text)
- Project title with year (bold, 1rem)
- Description truncated to 150 characters
- Category tags as pill-style elements
- "FULL CASE STUDY →" link button

**Hover Behavior**:
- Card: `hover:-translate-y-1` with shadow increase
- Image: `hover:scale-105` with 500ms transition
- Link: Color change to `#e8612c`

#### ProjectDetail (Detail Page)

**File**: `src/app/pages/ProjectDetail.tsx`

**Responsibilities**:
- Display complete case study
- Render internal links to product pages
- Show breadcrumb navigation
- Integrate comprehensive SEO metadata
- Handle 404 for non-existent projects

**Content Sections**:

1. **Breadcrumb Navigation**
   - Format: Home > Projects > {Project Title}
   - Uses existing breadcrumb component

2. **Hero Section**
   - Project title (h1)
   - Metadata row: Client | Year | Location
   - Category badge

3. **Challenge Section**
   - Heading: "The Challenge"
   - Markdown content rendering
   - Icon: Problem/Alert icon

4. **Solution Section**
   - Heading: "Our Solution"
   - Markdown content rendering
   - Icon: CheckCircle icon

5. **Equipment Used Section**
   - Heading: "Equipment Used"
   - List of equipment with internal links
   - Links styled with `text-[#e8612c]` hover state
   - Auto-generate product URLs from equipment names

6. **Results Section**
   - Heading: "Results & Impact"
   - Markdown content rendering
   - Icon: TrendingUp icon

7. **Image Gallery**
   - Responsive image layout
   - Optimized images with lazy loading
   - Alt text for accessibility

8. **Category Tags**
   - Pill-style tags at bottom
   - Color: `bg-gray-100 text-gray-700`

#### ProjectsData File

**File**: `src/app/data/projectsData.ts`

**Structure**:
```typescript
export const projectsData: Project[] = [
  {
    id: 1,
    slug: "delhi-jal-board-sewage-treatment",
    title: "Delhi Jal Board Sewage Treatment",
    client: "Delhi Jal Board",
    year: 2023,
    location: "Delhi, India",
    projectType: "GOVERNMENT",
    categoryBadge: "Government Project",
    categoryTags: ["SEWAGE TREATMENT", "MUNICIPAL", "DESILTING"],
    description: "Large-scale sewage treatment and desilting operation for Delhi's municipal infrastructure.",
    challenge: "...",
    solution: "...",
    equipmentUsed: [
      { name: "Combined Jetting Cum Suction Machine", productSlug: "combined-jetting-cum-suction-machine" },
      { name: "Super Sucker Machine", productSlug: "super-sucker-machine" }
    ],
    results: "...",
    images: [
      { url: "/images/projects/delhi-jal-board-sewage-treatment.jpeg", alt: "Delhi Jal Board sewage treatment operation" }
    ]
  },
  // ... 5 more initial projects
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
```

### Navigation Updates

#### Header Component Updates

**File**: `src/app/components/layout/Header.tsx`

**Changes Required**:
1. Update navigation link from `/products#applications` to `/projects`
2. Keep label as "Projects / Applications"
3. Add active state highlighting for `/projects` routes

```typescript
// Update in navLinks array
{ label: "Projects / Applications", to: "/projects" },
```

#### Footer Component Updates

**File**: `src/app/components/layout/Footer.tsx`

**Changes Required**:
1. Update Quick Links section
2. Change link from `/products#applications` to `/projects`

```typescript
// Update in Quick Links array
{ label: "Projects / Applications", to: "/projects" },
```

### SEO Integration

#### SEO Utilities Extension

**File**: `src/app/utils/seo.ts`

**New Functions**:

```typescript
// Add to seoConfig
projects: {
  title: "Projects & Applications - Case Studies | McRAYGOR®",
  description: "Explore McRAYGOR's global impact cases across government, private, and international sectors. Real-world applications of municipal and industrial waste handling equipment.",
  keywords: "case studies, project applications, municipal projects, government contracts, industrial applications, McRAYGOR projects",
  canonical: `${BASE_URL}/projects`,
  ogTitle: "McRAYGOR Projects - Global Impact Cases",
  ogDescription: "Real-world case studies demonstrating McRAYGOR's equipment in action across diverse sectors.",
  ogImage: DEFAULT_OG_IMAGE,
  ogType: "website",
}

// Project-specific SEO generator
export function getProjectSEO(
  slug: string,
  title: string,
  client: string,
  description: string,
  imageUrl?: string
): SEOMetadata {
  return {
    title: `${title} - ${client} | McRAYGOR®`,
    description: description.substring(0, 160),
    keywords: `${title.toLowerCase()}, ${client.toLowerCase()}, case study, project application, McRAYGOR`,
    canonical: `${BASE_URL}/projects/${slug}`,
    ogTitle: `${title} - ${client}`,
    ogDescription: description.substring(0, 160),
    ogImage: imageUrl ? `${BASE_URL}${imageUrl}` : DEFAULT_OG_IMAGE,
    ogType: "article",
  };
}
```

#### Schema Markup

**JSON-LD Structure for Project Detail Pages**:

```typescript
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": project.title,
  "description": project.description,
  "image": `${BASE_URL}${project.images[0].url}`,
  "datePublished": `${project.year}-01-01`,
  "author": {
    "@type": "Organization",
    "name": "McRAYGOR Mechanicals Infrastructure"
  },
  "publisher": {
    "@type": "Organization",
    "name": "McRAYGOR",
    "logo": {
      "@type": "ImageObject",
      "url": `${BASE_URL}/mcraygor-logo.jpeg`
    }
  },
  "about": {
    "@type": "Project",
    "name": project.title,
    "location": {
      "@type": "Place",
      "name": project.location
    },
    "client": {
      "@type": "Organization",
      "name": project.client
    }
  }
}
```

### Sitemap Integration

**File**: `scripts/generate-sitemap.js`

**Updates Required**:

```javascript
// Add projects listing page
{
  url: 'https://www.mcraygor.com/projects',
  lastmod: new Date().toISOString().split('T')[0],
  changefreq: 'monthly',
  priority: 0.8
}

// Add all project detail pages
projectsData.forEach(project => {
  urls.push({
    url: `https://www.mcraygor.com/projects/${project.slug}`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: 0.7
  });
});
```

## Data Models

### Complete Project Data Structure

```typescript
// src/app/data/projectsData.ts

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

export interface EquipmentItem {
  name: string;
  productSlug?: string;
}

export interface ProjectImage {
  url: string;
  alt: string;
  caption?: string;
}

// Initial 6 projects data
export const projectsData: Project[] = [
  {
    id: 1,
    slug: "delhi-jal-board-sewage-treatment",
    title: "Delhi Jal Board Sewage Treatment",
    client: "Delhi Jal Board",
    year: 2023,
    location: "Delhi, India",
    projectType: "GOVERNMENT",
    categoryBadge: "Government Project",
    categoryTags: ["SEWAGE TREATMENT", "MUNICIPAL", "DESILTING"],
    description: "Large-scale sewage treatment and desilting operation for Delhi's municipal infrastructure.",
    challenge: "Delhi Jal Board faced severe sewage blockages affecting thousands of residents...",
    solution: "Deployed combined jetting and suction machines for comprehensive cleaning...",
    equipmentUsed: [
      { name: "Combined Jetting Cum Suction Machine", productSlug: "combined-jetting-cum-suction-machine" },
      { name: "Super Sucker Machine", productSlug: "super-sucker-machine" }
    ],
    results: "Successfully cleared 15km of sewer lines, restored normal flow...",
    images: [
      { 
        url: "/images/projects/delhi-jal-board-sewage-treatment.jpeg",
        alt: "Delhi Jal Board sewage treatment operation showing equipment in action"
      }
    ]
  },
  {
    id: 2,
    slug: "karnal-highway-pipeline-leak",
    title: "Karnal Highway Pipeline Leak",
    client: "National Highways Authority",
    year: 2022,
    location: "Karnal, Haryana, India",
    projectType: "GOVERNMENT",
    categoryBadge: "Government Project",
    categoryTags: ["EMERGENCY RESPONSE", "PIPELINE", "HIGHWAY"],
    description: "Emergency response to major pipeline leak on Karnal highway requiring rapid intervention.",
    challenge: "Critical pipeline leak on major highway causing traffic disruption...",
    solution: "Rapid deployment of specialized suction and containment equipment...",
    equipmentUsed: [
      { name: "Super Sucker Machine", productSlug: "super-sucker-machine" },
      { name: "Mobile Oil Spill Recovery Unit (MOSR)", productSlug: "mobile-oil-spill-recovery-unit-mosr" }
    ],
    results: "Leak contained within 6 hours, highway reopened, environmental impact minimized...",
    images: [
      {
        url: "/images/projects/karnal-highway-pipeline-leak.jpeg",
        alt: "Emergency response to Karnal highway pipeline leak"
      }
    ]
  },
  {
    id: 3,
    slug: "ludhiana-clogged-sewer-project",
    title: "Ludhiana Clogged Sewer Project",
    client: "Ludhiana Municipal Corporation",
    year: 2023,
    location: "Ludhiana, Punjab, India",
    projectType: "GOVERNMENT",
    categoryBadge: "Government Project",
    categoryTags: ["SEWER CLEANING", "MUNICIPAL", "URBAN SANITATION"],
    description: "Comprehensive sewer cleaning and maintenance project for Ludhiana's urban infrastructure.",
    challenge: "Chronic sewer blockages in densely populated urban areas...",
    solution: "Systematic cleaning program using jetting and desilting equipment...",
    equipmentUsed: [
      { name: "Combined Jetting Cum Suction Machine", productSlug: "combined-jetting-cum-suction-machine" },
      { name: "Sewer Grabbing / Manhole Desilting Machine", productSlug: "sewer-grabbing-manhole-desilting-machine" }
    ],
    results: "Cleared 200+ manholes, improved drainage efficiency by 85%...",
    images: [
      {
        url: "/images/projects/ludhiana-clogged-sewer-project.jpeg",
        alt: "Ludhiana sewer cleaning operation with desilting equipment"
      }
    ]
  },
  {
    id: 4,
    slug: "maharashtra-sewer-broke-bmc",
    title: "Maharashtra Sewer Broke BMC",
    client: "Brihanmumbai Municipal Corporation",
    year: 2022,
    location: "Mumbai, Maharashtra, India",
    projectType: "GOVERNMENT",
    categoryBadge: "Government Project",
    categoryTags: ["EMERGENCY REPAIR", "SEWER", "MUNICIPAL"],
    description: "Emergency sewer repair and restoration for BMC following major infrastructure failure.",
    challenge: "Major sewer line collapse causing flooding in residential areas...",
    solution: "Emergency deployment of suction and desilting equipment for rapid restoration...",
    equipmentUsed: [
      { name: "Super Sucker Machine", productSlug: "super-sucker-machine" },
      { name: "Sewer Grabbing / Manhole Desilting Machine", productSlug: "sewer-grabbing-manhole-desilting-machine" }
    ],
    results: "Sewer line restored within 48 hours, flooding eliminated...",
    images: [
      {
        url: "/images/projects/maharashtra-sewer-broke-bmc.jpeg",
        alt: "BMC emergency sewer repair operation in Maharashtra"
      }
    ]
  },
  {
    id: 5,
    slug: "reliance-industries-oil-spill",
    title: "Reliance Industries Oil Spill",
    client: "Reliance Industries Limited",
    year: 2023,
    location: "Jamnagar, Gujarat, India",
    projectType: "PRIVATE",
    categoryBadge: "Private Sector",
    categoryTags: ["OIL SPILL", "INDUSTRIAL", "ENVIRONMENTAL"],
    description: "Rapid response to industrial oil spill at Reliance facility requiring specialized recovery equipment.",
    challenge: "Industrial oil spill threatening environmental contamination...",
    solution: "Deployed mobile oil spill recovery units with containment protocols...",
    equipmentUsed: [
      { name: "Mobile Oil Spill Recovery Unit (MOSR)", productSlug: "mobile-oil-spill-recovery-unit-mosr" },
      { name: "Industrial Vacuum Cleaning Machine (IVC - Super Sucker)", productSlug: "industrial-vacuum-cleaning-machine-ivc-super-sucker" }
    ],
    results: "95% oil recovery achieved, environmental impact minimized...",
    images: [
      {
        url: "/images/projects/reliance-industries-oil-spill.jpeg",
        alt: "Oil spill recovery operation at Reliance Industries facility"
      }
    ]
  },
  {
    id: 6,
    slug: "united-nations-haiti-mission",
    title: "United Nations Haiti Mission",
    client: "United Nations Peacekeeping",
    year: 2021,
    location: "Port-au-Prince, Haiti",
    projectType: "INTERNATIONAL",
    categoryBadge: "International Project",
    categoryTags: ["UN PEACEKEEPING", "HUMANITARIAN", "SANITATION"],
    description: "Sanitation equipment deployment for UN peacekeeping mission in Haiti supporting humanitarian efforts.",
    challenge: "Critical sanitation infrastructure needs in post-disaster environment...",
    solution: "Provided mobile sanitation equipment for UN peacekeeping operations...",
    equipmentUsed: [
      { name: "Super Sucker Machine", productSlug: "super-sucker-machine" },
      { name: "Gully Suction Emptier (Trailer Mounted)", productSlug: "gully-suction-emptier-trailer-mounted" }
    ],
    results: "Supported sanitation for 50,000+ beneficiaries, improved public health outcomes...",
    images: [
      {
        url: "/images/projects/united-nations-haiti-mission.jpeg",
        alt: "UN peacekeeping sanitation operation in Haiti"
      }
    ]
  }
];

// Helper functions
export function getProjectBySlug(slug: string): Project | undefined {
  return projectsData.find(p => p.slug === slug);
}

export function generateProjectSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

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
```

### Product Link Mapping

```typescript
// Helper function to generate product URLs from equipment names
export function getProductSlugFromName(equipmentName: string): string {
  return equipmentName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// Validate product link exists
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
```


## Correctness Properties

A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.

### Property 1: Project Data Round-Trip Integrity

For any project data object, parsing it, rendering it to a ProjectCard component, then extracting the displayed information should produce equivalent project information (title, client, description, category).

**Validates: Requirements 1.7**

### Property 2: Description Truncation

For any project description string, when rendered in a ProjectCard, if the description exceeds 150 characters, it should be truncated to exactly 150 characters (or less to avoid word breaks).

**Validates: Requirements 2.5**

### Property 3: Project Card Navigation

For any project in the projects data array, clicking the "FULL CASE STUDY" link on its ProjectCard should navigate to the route `/projects/{project.slug}`.

**Validates: Requirements 2.9**

### Property 4: Detail Page Route Accessibility

For any valid project slug in the projects data array, the route `/projects/{slug}` should render the ProjectDetail page with the corresponding project data.

**Validates: Requirements 3.1**

### Property 5: Equipment Internal Links

For any equipment item in a project's equipmentUsed array that has a non-null productSlug, the ProjectDetail page should render a clickable link to `/products/{productSlug}`.

**Validates: Requirements 3.7, 6.1**

### Property 6: Breadcrumb Navigation Structure

For any project displayed on a ProjectDetail page, the breadcrumb navigation should follow the pattern "Home > Projects > {Project Title}" with correct links.

**Validates: Requirements 3.11**

### Property 7: Slug Generation Consistency

For any project title string, the slug generation function should convert to lowercase, replace all non-alphanumeric characters with hyphens, and remove leading/trailing hyphens, producing a valid URL-safe identifier.

**Validates: Requirements 4.3, 13.3**

### Property 8: Slug Uniqueness

For any set of project titles in the projects data array, the generated slugs should all be unique (no two projects should have the same slug).

**Validates: Requirements 4.4**

### Property 9: Project Validation

For any project object, the validation function should return true only if all required fields (id, slug, title, client, year, location, projectType, categoryBadge, categoryTags, description, challenge, solution, equipmentUsed, results, images) are present and non-empty.

**Validates: Requirements 4.5, 13.2, 15.7**

### Property 10: Navigation Active State

For any route matching `/projects` or `/projects/*`, the Projects navigation item in the header should display the active state styling.

**Validates: Requirements 5.4**

### Property 11: Internal Link Same-Window Behavior

For any internal link to a product page from the equipment section, the link should not have `target="_blank"` attribute, ensuring navigation occurs in the same window.

**Validates: Requirements 6.2**

### Property 12: Product URL Generation

For any known product name in the equipment list, the system should automatically generate the correct product page URL by converting the name to a slug format matching the products data.

**Validates: Requirements 6.4**

### Property 13: Product Link Validation

For any productSlug in an equipment item, the validation function should verify that the slug exists in the list of valid product slugs.

**Validates: Requirements 6.5**

### Property 14: Project Detail Meta Title Format

For any project displayed on a ProjectDetail page, the meta title should contain both the project title and client name in the format "{Project Title} - {Client} | McRAYGOR®".

**Validates: Requirements 7.2**

### Property 15: Project Detail Meta Description

For any project displayed on a ProjectDetail page, the meta description should contain the project's description field, truncated to 160 characters if necessary.

**Validates: Requirements 7.3, 7.7**

### Property 16: Open Graph Image

For any project with at least one image, the Open Graph image meta tag should use the URL of the first image in the project's images array.

**Validates: Requirements 7.4**

### Property 17: Schema Markup Presence

For any project displayed on a ProjectDetail page, the page should include JSON-LD schema markup with @type "Article" containing the project's headline, description, image, and organization data.

**Validates: Requirements 7.5, 7.8**

### Property 18: Canonical URL Format

For any project, the canonical URL should be formatted as `https://www.mcraygor.com/projects/{project.slug}`.

**Validates: Requirements 7.6**

### Property 19: Sitemap Project Inclusion

For any project in the projects data array, the generated sitemap should include an entry for `/projects/{project.slug}` with priority 0.7 and changefreq "monthly".

**Validates: Requirements 8.2, 8.3, 8.5**

### Property 20: Sitemap Last Modified Date

For any project page entry in the sitemap, the lastmod field should contain a valid ISO date string.

**Validates: Requirements 8.4**

### Property 21: Touch Target Minimum Size

For any interactive element (buttons, links, cards) on mobile viewports (width < 768px), the element should have minimum dimensions of 44x44 pixels to meet touch target accessibility requirements.

**Validates: Requirements 9.5**

### Property 22: Image Lazy Loading

For any project image that is not in the initial viewport (below the fold), the img element should have the `loading="lazy"` attribute.

**Validates: Requirements 10.1**

### Property 23: Responsive Image Attributes

For any project image rendered on the page, the img element should include srcset and sizes attributes for responsive image delivery.

**Validates: Requirements 10.2**

### Property 24: Image Alt Text Presence

For any project image rendered on the page, the img element should have a non-empty alt attribute describing the image content.

**Validates: Requirements 11.1**

### Property 25: Color Contrast Compliance

For any text element on project pages, the color contrast ratio between text and background should be at least 4.5:1 to meet WCAG AA standards.

**Validates: Requirements 11.2**

### Property 26: Keyboard Navigation Support

For any interactive element (links, buttons) on project pages, the element should be focusable and operable using keyboard alone (Tab, Enter, Space keys).

**Validates: Requirements 11.3**

### Property 27: Focus Indicator Visibility

For any focusable element on project pages, when focused via keyboard navigation, the element should display a visible focus indicator (outline or ring).

**Validates: Requirements 11.4**

### Property 28: ARIA Labels for Badges

For any Category_Badge or Category_Tag rendered on the page, the element should include an appropriate aria-label attribute describing its purpose.

**Validates: Requirements 11.6**

### Property 29: Hover Scale Transform Limit

For any ProjectCard, when hovered, the CSS transform scale should not exceed 1.02 to maintain subtle professional animation.

**Validates: Requirements 12.2**

### Property 30: Image Hover Opacity Transition

For any ProjectCard image, when the card is hovered, the image should apply an opacity transition effect.

**Validates: Requirements 12.3**

### Property 31: Animation Duration Limit

For any CSS transition or animation on project pages, the duration should not exceed 300ms.

**Validates: Requirements 12.4**

### Property 32: Ease-In-Out Timing Function

For any CSS transition on project pages, the timing function should be ease-in-out or equivalent cubic-bezier.

**Validates: Requirements 12.5**

### Property 33: Reduced Motion Respect

For any animated element on project pages, when the user's system has prefers-reduced-motion enabled, all animations and transitions should be disabled or reduced to instant changes.

**Validates: Requirements 12.6, 12.7**

### Property 34: Data Structure Consistency

For any project object in the projects data array, the object should conform to the Project TypeScript interface with all required fields matching their specified types.

**Validates: Requirements 13.5**

### Property 35: Image File Validation

For any image URL in a project's images array, the file should exist at the specified path in the public/images/projects directory.

**Validates: Requirements 13.6**

### Property 36: Category Badge Color Mapping

For any project, the Category_Badge color should map correctly: GOVERNMENT projects use green (#1a5c3a), PRIVATE projects use orange (#e8612c), and INTERNATIONAL projects use dark blue (#1c2535).

**Validates: Requirements 14.2, 14.5, 14.6, 14.7**

### Property 37: Category Tags Rendering

For any project with categoryTags array, each tag should be rendered as a pill-style element with appropriate styling.

**Validates: Requirements 14.4**

## Error Handling

### Client-Side Error Scenarios

#### 1. Project Not Found (404)

**Scenario**: User navigates to `/projects/invalid-slug` where the slug doesn't exist in the data.

**Handling**:
- ProjectDetail component checks if `getProjectBySlug(slug)` returns undefined
- Renders a 404 error state with:
  - Clear message: "Project Not Found"
  - Explanation: "This project page doesn't exist or has been removed"
  - Call-to-action button: "← Back to Projects" linking to `/projects`
- Maintains header and footer for consistent navigation
- Sets appropriate meta tags for 404 state

**Implementation**:
```typescript
if (!project) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center gap-5">
      <h2 className="text-2xl font-bold text-[#1c2535]">Project Not Found</h2>
      <p className="text-gray-500">This project page doesn't exist or has been removed.</p>
      <Link to="/projects" className="bg-[#e8612c] text-white px-6 py-3 rounded-lg font-semibold">
        ← Back to Projects
      </Link>
    </div>
  );
}
```

#### 2. Missing Project Images

**Scenario**: Project data references an image that doesn't exist in the public directory.

**Handling**:
- Use ImageWithFallback component (existing in codebase)
- Display placeholder image or project icon if primary image fails to load
- Log error to console for debugging
- Ensure alt text is still displayed for accessibility

**Implementation**:
```typescript
<ImageWithFallback
  src={project.images[0].url}
  fallbackSrc="/images/placeholder-project.jpeg"
  alt={project.images[0].alt}
  className="w-full h-full object-cover"
/>
```

#### 3. Invalid Product Links

**Scenario**: Equipment item has a productSlug that doesn't match any existing product.

**Handling**:
- Validate productSlug before rendering link
- If invalid, render equipment name as plain text (no link)
- Log warning to console for content team to fix
- Ensure user experience is not broken

**Implementation**:
```typescript
{equipmentItem.productSlug && validateProductLink(equipmentItem.productSlug) ? (
  <Link to={`/products/${equipmentItem.productSlug}`}>
    {equipmentItem.name}
  </Link>
) : (
  <span>{equipmentItem.name}</span>
)}
```

#### 4. Empty Projects Data

**Scenario**: Projects data array is empty (edge case during development or data migration).

**Handling**:
- Projects listing page checks if `projectsData.length === 0`
- Renders empty state with:
  - Icon: Folder or Document icon
  - Message: "No projects available"
  - Explanation: "Check back soon for case studies"
- Maintains page structure and navigation

#### 5. Malformed Project Data

**Scenario**: Project object is missing required fields or has incorrect data types.

**Handling**:
- Use `validateProject()` function before rendering
- Skip invalid projects in listing (log error to console)
- On detail page, show error state if project fails validation
- Prevent application crashes from bad data

### Data Validation

**Validation Function**:
```typescript
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
```

**Usage in Components**:
```typescript
// In Projects listing
const validProjects = projectsData.filter(validateProject);

// In ProjectDetail
const project = getProjectBySlug(slug);
if (!project || !validateProject(project)) {
  return <ErrorState />;
}
```

### SEO Error Handling

#### Missing SEO Metadata

**Scenario**: Project is missing description or images for SEO tags.

**Handling**:
- Fall back to default values from seoConfig
- Use default OG image if project has no images
- Generate description from challenge or solution if description is missing
- Ensure canonical URL is always present

#### Schema Markup Errors

**Scenario**: Invalid data causes schema markup generation to fail.

**Handling**:
- Wrap schema generation in try-catch
- Log error but don't break page rendering
- Omit schema markup if generation fails (page still functional)
- Validate schema during development with Google's Rich Results Test

### Performance Error Handling

#### Image Loading Failures

**Scenario**: Network issues or missing files cause images to fail loading.

**Handling**:
- Use `onError` handler on img elements
- Replace failed images with placeholder
- Maintain layout to prevent content shift
- Provide alt text for context even without image

#### Slow Network Conditions

**Scenario**: User on slow connection experiences long load times.

**Handling**:
- Implement loading skeletons for project cards
- Show loading spinner on detail page while data loads
- Use lazy loading for below-fold images
- Optimize image sizes and formats (WebP with JPEG fallback)

## Testing Strategy

### Dual Testing Approach

The Projects/Applications feature will employ both unit testing and property-based testing to ensure comprehensive coverage and correctness.

**Unit Tests**: Focus on specific examples, edge cases, integration points, and error conditions. Unit tests validate concrete scenarios and ensure components render correctly with known inputs.

**Property Tests**: Verify universal properties across all inputs using randomized test data. Property tests ensure the system behaves correctly for any valid input, catching edge cases that might be missed by example-based tests.

Together, these approaches provide comprehensive coverage: unit tests catch concrete bugs and validate specific behaviors, while property tests verify general correctness across the input space.

### Property-Based Testing Configuration

**Library Selection**: Use `fast-check` for TypeScript/JavaScript property-based testing.

**Test Configuration**:
- Minimum 100 iterations per property test (due to randomization)
- Each property test must reference its design document property
- Tag format: `// Feature: projects-applications-pages, Property {number}: {property_text}`

**Example Property Test Structure**:
```typescript
import fc from 'fast-check';

// Feature: projects-applications-pages, Property 7: Slug Generation Consistency
test('slug generation produces valid URL-safe identifiers', () => {
  fc.assert(
    fc.property(fc.string(), (title) => {
      const slug = generateProjectSlug(title);
      
      // Should be lowercase
      expect(slug).toBe(slug.toLowerCase());
      
      // Should only contain alphanumeric and hyphens
      expect(slug).toMatch(/^[a-z0-9-]*$/);
      
      // Should not have leading/trailing hyphens
      expect(slug).not.toMatch(/^-|-$/);
    }),
    { numRuns: 100 }
  );
});
```

### Unit Testing Strategy

#### Component Tests

**Projects Listing Page**:
- Renders page title "Global Impact Cases" with green underline
- Displays subtitle text
- Renders correct number of project cards from data
- Applies responsive grid classes (3/2/1 columns)
- Handles empty projects array gracefully

**ProjectCard Component**:
- Renders all required elements (image, badge, title, description, tags, link)
- Truncates description to 150 characters
- Applies correct category badge color based on projectType
- Renders "FULL CASE STUDY →" link with correct href
- Applies hover animations within limits

**ProjectDetail Page**:
- Renders breadcrumb navigation with correct structure
- Displays all content sections (challenge, solution, equipment, results)
- Renders internal links for equipment with productSlug
- Shows 404 state for invalid slug
- Includes schema markup script tag

#### Data Function Tests

**Slug Generation**:
- Converts "Delhi Jal Board Project" to "delhi-jal-board-project"
- Handles special characters: "Project (2023)" to "project-2023"
- Removes multiple consecutive hyphens
- Handles empty string input

**Project Validation**:
- Returns true for complete valid project
- Returns false for project missing required field
- Returns false for project with empty array fields
- Returns false for project with null values

**Product Link Validation**:
- Returns true for valid product slugs
- Returns false for invalid/unknown slugs
- Handles empty string input
- Case-insensitive matching

#### SEO Tests

**Metadata Generation**:
- Generates correct meta title format for projects
- Truncates meta description to 160 characters
- Includes all required Open Graph tags
- Sets correct canonical URL

**Schema Markup**:
- Generates valid JSON-LD structure
- Includes all required fields (headline, description, image, author, publisher)
- Uses correct @type "Article"
- Handles missing optional fields gracefully

#### Integration Tests

**Navigation Flow**:
- Clicking project card navigates to detail page
- Breadcrumb links navigate correctly
- Equipment links navigate to product pages
- Back button returns to listing page

**Routing**:
- `/projects` route renders Projects component
- `/projects/:slug` route renders ProjectDetail component
- Invalid slug shows 404 state
- Navigation updates active state in header

### Property-Based Testing Strategy

#### Data Properties

**Property 7: Slug Generation Consistency**
```typescript
// Feature: projects-applications-pages, Property 7: Slug Generation Consistency
fc.property(fc.string(), (title) => {
  const slug = generateProjectSlug(title);
  // Verify lowercase, alphanumeric + hyphens, no leading/trailing hyphens
});
```

**Property 8: Slug Uniqueness**
```typescript
// Feature: projects-applications-pages, Property 8: Slug Uniqueness
fc.property(fc.array(fc.string(), { minLength: 2, maxLength: 20 }), (titles) => {
  const slugs = titles.map(generateProjectSlug);
  const uniqueSlugs = new Set(slugs);
  // Verify all slugs are unique (or titles were identical)
});
```

**Property 9: Project Validation**
```typescript
// Feature: projects-applications-pages, Property 9: Project Validation
fc.property(projectArbitrary, (project) => {
  const isValid = validateProject(project);
  // Verify validation correctly identifies complete vs incomplete projects
});
```

#### UI Properties

**Property 2: Description Truncation**
```typescript
// Feature: projects-applications-pages, Property 2: Description Truncation
fc.property(fc.string({ minLength: 0, maxLength: 500 }), (description) => {
  const truncated = truncateDescription(description, 150);
  expect(truncated.length).toBeLessThanOrEqual(150);
});
```

**Property 21: Touch Target Minimum Size**
```typescript
// Feature: projects-applications-pages, Property 21: Touch Target Minimum Size
fc.property(interactiveElementArbitrary, (element) => {
  const { width, height } = getComputedDimensions(element);
  expect(width).toBeGreaterThanOrEqual(44);
  expect(height).toBeGreaterThanOrEqual(44);
});
```

#### SEO Properties

**Property 15: Meta Description Truncation**
```typescript
// Feature: projects-applications-pages, Property 15: Meta Description Truncation
fc.property(fc.string({ minLength: 0, maxLength: 500 }), (description) => {
  const metadata = getProjectSEO('slug', 'Title', 'Client', description);
  expect(metadata.description.length).toBeLessThanOrEqual(160);
});
```

**Property 18: Canonical URL Format**
```typescript
// Feature: projects-applications-pages, Property 18: Canonical URL Format
fc.property(fc.string(), (slug) => {
  const validSlug = generateProjectSlug(slug);
  const metadata = getProjectSEO(validSlug, 'Title', 'Client', 'Desc');
  expect(metadata.canonical).toBe(`https://www.mcraygor.com/projects/${validSlug}`);
});
```

#### Accessibility Properties

**Property 24: Image Alt Text Presence**
```typescript
// Feature: projects-applications-pages, Property 24: Image Alt Text Presence
fc.property(projectImageArbitrary, (image) => {
  const rendered = renderProjectImage(image);
  const altText = rendered.getAttribute('alt');
  expect(altText).toBeTruthy();
  expect(altText.length).toBeGreaterThan(0);
});
```

**Property 33: Reduced Motion Respect**
```typescript
// Feature: projects-applications-pages, Property 33: Reduced Motion Respect
fc.property(fc.boolean(), (prefersReducedMotion) => {
  setMediaQuery('prefers-reduced-motion', prefersReducedMotion ? 'reduce' : 'no-preference');
  const element = renderProjectCard(mockProject);
  const animations = getComputedAnimations(element);
  if (prefersReducedMotion) {
    expect(animations.every(a => a.duration === 0)).toBe(true);
  }
});
```

### Test Generators (Arbitraries)

**Project Arbitrary**:
```typescript
const projectArbitrary = fc.record({
  id: fc.integer({ min: 1 }),
  slug: fc.string().map(generateProjectSlug),
  title: fc.string({ minLength: 5, maxLength: 100 }),
  client: fc.string({ minLength: 3, maxLength: 50 }),
  year: fc.integer({ min: 2000, max: 2030 }),
  location: fc.string({ minLength: 5, maxLength: 50 }),
  projectType: fc.constantFrom('GOVERNMENT', 'PRIVATE', 'INTERNATIONAL'),
  categoryBadge: fc.string(),
  categoryTags: fc.array(fc.string(), { minLength: 1, maxLength: 5 }),
  description: fc.string({ minLength: 50, maxLength: 300 }),
  challenge: fc.string({ minLength: 100 }),
  solution: fc.string({ minLength: 100 }),
  equipmentUsed: fc.array(equipmentItemArbitrary, { minLength: 1, maxLength: 5 }),
  results: fc.string({ minLength: 100 }),
  images: fc.array(projectImageArbitrary, { minLength: 1, maxLength: 5 })
});
```

### Test Coverage Goals

- **Unit Test Coverage**: Minimum 80% code coverage for components and utilities
- **Property Test Coverage**: All 37 correctness properties implemented as property tests
- **Integration Test Coverage**: All critical user flows (listing → detail → product)
- **Accessibility Test Coverage**: All WCAG AA requirements validated
- **Performance Test Coverage**: Lighthouse scores validated in CI/CD

### Continuous Integration

**Test Execution**:
- Run all unit tests on every commit
- Run property tests (100 iterations) on every PR
- Run extended property tests (1000 iterations) nightly
- Run accessibility tests with axe-core on every PR
- Run Lighthouse performance tests on staging deployment

**Test Reporting**:
- Generate coverage reports and fail if below 80%
- Report property test failures with counterexamples
- Generate accessibility violation reports
- Track performance metrics over time

