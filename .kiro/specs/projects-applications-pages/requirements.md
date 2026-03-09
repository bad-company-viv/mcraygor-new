# Requirements Document

## Introduction

This document specifies requirements for the Projects/Applications feature of the McRAYGOR website. The feature replaces the current placeholder section at /products#applications with a dedicated projects listing page and individual project detail pages. The system will showcase McRAYGOR's global impact cases through case studies with images, categorization, and internal linking to related products.

## Glossary

- **Projects_System**: The complete projects/applications feature including listing and detail pages
- **Projects_Listing_Page**: The main page displaying all project cards in a grid layout
- **Project_Detail_Page**: Individual page showing complete case study for a single project
- **Project_Card**: Visual component displaying project summary with image, badges, title, and description
- **Project_Metadata**: SEO and schema markup data for project pages
- **Navigation_System**: Header and footer navigation components
- **Project_Slug**: URL-friendly identifier derived from project title
- **Category_Badge**: Visual tag indicating project type (GOVERNMENT, PRIVATE, INTERNATIONAL)
- **Category_Tag**: Pill-style tag for project categories (UN PEACEKEEPING, SCALES & ENVIRONMENT, etc.)
- **Internal_Link**: Hyperlink connecting project content to related product pages
- **Breadcrumb_Navigation**: Hierarchical navigation trail showing page location
- **McRAYGOR_Theme**: Color scheme using #1c2535 (dark blue), #e8612c (orange), #1a5c3a (green)

## Requirements

### Requirement 1: Projects Listing Page

**User Story:** As a website visitor, I want to view all McRAYGOR projects in a grid layout, so that I can browse case studies and select ones to read in detail.

#### Acceptance Criteria

1. THE Projects_Listing_Page SHALL display the page title "Global Impact Cases" with green underline accent using McRAYGOR_Theme
2. THE Projects_Listing_Page SHALL display a subtitle explaining the projects section
3. THE Projects_Listing_Page SHALL render Project_Cards in a responsive grid layout with 3 columns on desktop
4. WHEN viewport width is tablet size, THE Projects_Listing_Page SHALL display Project_Cards in 2 columns
5. WHEN viewport width is mobile size, THE Projects_Listing_Page SHALL display Project_Cards in 1 column
6. THE Projects_Listing_Page SHALL be accessible at the route /projects
7. FOR ALL Project_Cards displayed, parsing the project data then rendering then extracting SHALL produce equivalent project information (round-trip property)

### Requirement 2: Project Card Display

**User Story:** As a website visitor, I want to see project summaries with images and key information, so that I can quickly identify projects of interest.

#### Acceptance Criteria

1. THE Project_Card SHALL display a project image with overlay effect
2. THE Project_Card SHALL display a Category_Badge indicating project type
3. THE Project_Card SHALL display the client name
4. THE Project_Card SHALL display the project title with year
5. THE Project_Card SHALL display a brief description limited to 150 characters
6. THE Project_Card SHALL display Category_Tags as pill-style elements
7. THE Project_Card SHALL display a "FULL CASE STUDY →" link button
8. WHEN a user hovers over Project_Card, THE Projects_System SHALL apply a subtle animation following sober professional style
9. WHEN a user clicks the "FULL CASE STUDY" link, THE Projects_System SHALL navigate to the corresponding Project_Detail_Page

### Requirement 3: Project Detail Page Structure

**User Story:** As a website visitor, I want to read complete case studies with detailed information, so that I can understand McRAYGOR's project solutions and impact.

#### Acceptance Criteria

1. THE Project_Detail_Page SHALL be accessible at route /projects/{project-slug}
2. THE Project_Detail_Page SHALL display the project title as the main heading
3. THE Project_Detail_Page SHALL display client name, year, and location in a metadata section
4. THE Project_Detail_Page SHALL display the project type and Category_Badge
5. THE Project_Detail_Page SHALL display the challenge or problem statement section
6. THE Project_Detail_Page SHALL display the solution provided section
7. THE Project_Detail_Page SHALL display the equipment used section with Internal_Links to product pages
8. THE Project_Detail_Page SHALL display the results and impact section
9. THE Project_Detail_Page SHALL display project images in an optimized layout
10. THE Project_Detail_Page SHALL display Category_Tags for the project
11. THE Project_Detail_Page SHALL display Breadcrumb_Navigation showing Home > Projects > {Project Title}

### Requirement 4: Project Data Structure

**User Story:** As a developer, I want a consistent data structure for projects, so that I can maintain and extend project content efficiently.

#### Acceptance Criteria

1. THE Projects_System SHALL define a project data structure containing title, slug, client, year, location, projectType, categoryBadge, categoryTags, description, challenge, solution, equipmentUsed, results, images, and metadata fields
2. THE Projects_System SHALL store project data in a structured format accessible to both Projects_Listing_Page and Project_Detail_Page
3. WHEN a Project_Slug is generated from a title, THE Projects_System SHALL convert to lowercase, replace spaces with hyphens, and remove special characters
4. FOR ALL project slugs, the slug generation function SHALL produce unique identifiers
5. THE Projects_System SHALL validate that all required fields are present before rendering a project

### Requirement 5: Navigation System Updates

**User Story:** As a website visitor, I want to access the projects section from the main navigation, so that I can easily find case studies.

#### Acceptance Criteria

1. THE Navigation_System SHALL update the header navigation link from /products#applications to /projects
2. THE Navigation_System SHALL update the footer navigation link from /products#applications to /projects
3. THE Navigation_System SHALL display "Projects / Applications" as the navigation label
4. WHEN a user is on Projects_Listing_Page or Project_Detail_Page, THE Navigation_System SHALL highlight the Projects navigation item as active
5. THE Navigation_System SHALL maintain consistent styling with McRAYGOR_Theme

### Requirement 6: Internal Linking to Products

**User Story:** As a website visitor, I want to navigate from project case studies to related product pages, so that I can learn more about equipment used in projects.

#### Acceptance Criteria

1. WHEN equipment is mentioned in the "Equipment Used" section, THE Project_Detail_Page SHALL render Internal_Links to corresponding product pages
2. THE Internal_Link SHALL open in the same window maintaining site navigation flow
3. THE Internal_Link SHALL use McRAYGOR_Theme colors for hover states
4. WHEN a product name matches a known product, THE Projects_System SHALL automatically generate the correct product page URL
5. THE Projects_System SHALL validate that Internal_Links point to existing product pages

### Requirement 7: SEO Metadata and Schema Markup

**User Story:** As a marketing manager, I want projects to be discoverable in search engines, so that we can attract potential clients through organic search.

#### Acceptance Criteria

1. THE Projects_Listing_Page SHALL include meta title, meta description, and Open Graph tags
2. THE Project_Detail_Page SHALL include meta title containing project title and client name
3. THE Project_Detail_Page SHALL include meta description containing project summary
4. THE Project_Detail_Page SHALL include Open Graph image using the primary project image
5. THE Project_Detail_Page SHALL include JSON-LD schema markup using Article or Case Study schema type
6. THE Project_Metadata SHALL include canonical URL for each project page
7. THE Projects_System SHALL generate unique meta descriptions for each project limited to 160 characters
8. THE Projects_System SHALL include structured data for organization, location, and project details

### Requirement 8: Sitemap Integration

**User Story:** As a marketing manager, I want all project pages included in the sitemap, so that search engines can discover and index all case studies.

#### Acceptance Criteria

1. THE Projects_System SHALL add /projects route to the sitemap with priority 0.8
2. THE Projects_System SHALL add all Project_Detail_Page routes to the sitemap with priority 0.7
3. THE Projects_System SHALL set changefreq to "monthly" for project pages
4. THE Projects_System SHALL include lastmod date for each project page
5. WHEN a new project is added, THE Projects_System SHALL automatically include it in the sitemap

### Requirement 9: Mobile Responsiveness

**User Story:** As a mobile user, I want to view projects on my smartphone, so that I can browse case studies on any device.

#### Acceptance Criteria

1. THE Projects_Listing_Page SHALL be fully responsive across viewport widths from 320px to 1920px
2. THE Project_Detail_Page SHALL be fully responsive across viewport widths from 320px to 1920px
3. WHEN viewport width is below 768px, THE Projects_System SHALL adjust typography sizes for readability
4. WHEN viewport width is below 768px, THE Project_Card SHALL stack elements vertically
5. THE Projects_System SHALL ensure touch targets are minimum 44x44 pixels on mobile devices
6. THE Projects_System SHALL optimize images for mobile viewport sizes
7. WHEN a user rotates device orientation, THE Projects_System SHALL reflow content appropriately

### Requirement 10: Performance Optimization

**User Story:** As a website visitor, I want project pages to load quickly, so that I can access information without delays.

#### Acceptance Criteria

1. THE Projects_System SHALL lazy load project images below the fold
2. THE Projects_System SHALL serve responsive images using srcset for different viewport sizes
3. THE Projects_System SHALL compress images to WebP format with JPEG fallback
4. THE Projects_Listing_Page SHALL achieve a Lighthouse performance score above 90
5. THE Project_Detail_Page SHALL achieve a Lighthouse performance score above 90
6. THE Projects_System SHALL implement code splitting for project-related components
7. WHEN a user navigates to Projects_Listing_Page, THE Projects_System SHALL load within 2 seconds on 3G connection

### Requirement 11: Accessibility Compliance

**User Story:** As a user with disabilities, I want to access project information using assistive technologies, so that I can learn about McRAYGOR's work.

#### Acceptance Criteria

1. THE Projects_System SHALL provide alt text for all project images describing the image content
2. THE Projects_System SHALL maintain color contrast ratios of at least 4.5:1 for text following WCAG AA standards
3. THE Projects_System SHALL support keyboard navigation for all interactive elements
4. THE Projects_System SHALL provide focus indicators for keyboard navigation
5. THE Projects_System SHALL use semantic HTML elements (article, section, nav, etc.)
6. THE Projects_System SHALL provide ARIA labels for Category_Badges and Category_Tags
7. THE Projects_System SHALL ensure screen readers can navigate project content in logical order
8. WHEN a user navigates with keyboard, THE Projects_System SHALL provide skip links to main content

### Requirement 12: Animation and Visual Effects

**User Story:** As a website visitor, I want subtle professional animations, so that the interface feels polished without being distracting.

#### Acceptance Criteria

1. THE Projects_System SHALL follow sober professional animation philosophy per Indian Website design requirements
2. WHEN a user hovers over Project_Card, THE Projects_System SHALL apply a subtle scale transform not exceeding 1.02
3. WHEN a user hovers over Project_Card image, THE Projects_System SHALL apply a subtle overlay opacity transition
4. THE Projects_System SHALL limit animation duration to maximum 300ms
5. THE Projects_System SHALL use ease-in-out timing functions for all transitions
6. THE Projects_System SHALL respect prefers-reduced-motion media query for users with motion sensitivity
7. WHEN prefers-reduced-motion is enabled, THE Projects_System SHALL disable all animations

### Requirement 13: Content Management

**User Story:** As a content manager, I want to add new projects easily, so that I can keep the projects section up to date.

#### Acceptance Criteria

1. THE Projects_System SHALL support adding new projects by creating structured data entries
2. THE Projects_System SHALL validate required fields when adding a new project
3. THE Projects_System SHALL automatically generate Project_Slug from project title
4. THE Projects_System SHALL support updating existing project content
5. THE Projects_System SHALL maintain consistent data structure across all projects
6. WHEN a project image is added, THE Projects_System SHALL validate image exists in public/images/projects directory

### Requirement 14: Category Filtering and Organization

**User Story:** As a website visitor, I want to understand project categories at a glance, so that I can identify relevant case studies quickly.

#### Acceptance Criteria

1. THE Projects_System SHALL support three Category_Badge types: GOVERNMENT, PRIVATE, and INTERNATIONAL
2. THE Projects_System SHALL display Category_Badge with distinct styling for each type
3. THE Projects_System SHALL support multiple Category_Tags per project
4. THE Projects_System SHALL render Category_Tags as pill-style elements with McRAYGOR_Theme colors
5. THE Category_Badge SHALL use green (#1a5c3a) for GOVERNMENT projects
6. THE Category_Badge SHALL use orange (#e8612c) for PRIVATE projects
7. THE Category_Badge SHALL use dark blue (#1c2535) for INTERNATIONAL projects

### Requirement 15: Initial Project Content

**User Story:** As a content manager, I want to launch with six existing projects, so that the projects section has substantial content from day one.

#### Acceptance Criteria

1. THE Projects_System SHALL include Delhi Jal Board Sewage Treatment project with image delhi-jal-board-sewage-treatment.jpeg
2. THE Projects_System SHALL include Karnal Highway Pipeline Leak project with image karnal-highway-pipeline-leak.jpeg
3. THE Projects_System SHALL include Ludhiana Clogged Sewer project with image ludhiana-clogged-sewer-project.jpeg
4. THE Projects_System SHALL include Maharashtra Sewer Broke BMC project with image maharashtra-sewer-broke-bmc.jpeg
5. THE Projects_System SHALL include Reliance Industries Oil Spill project with image reliance-industries-oil-spill.jpeg
6. THE Projects_System SHALL include United Nations Haiti Mission project with image united-nations-haiti-mission.jpeg
7. FOR ALL six initial projects, THE Projects_System SHALL include complete content for all required fields
