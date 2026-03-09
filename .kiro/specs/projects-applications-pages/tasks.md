# Implementation Plan: Projects/Applications Pages

## Overview

This implementation plan transforms the placeholder `/products#applications` section into a comprehensive project showcase system with dedicated listing and detail pages. The implementation follows the established Products pages architecture, reusing existing UI components and maintaining consistency with the McRAYGOR design language.

The plan builds incrementally: data structures → listing page → detail page → navigation updates → SEO integration → sitemap updates. Each task validates functionality through code before moving forward.

## Tasks

- [x] 1. Create project data structures and utilities
  - [x] 1.1 Create projectsData.ts with TypeScript interfaces and initial 6 projects
    - Define Project, EquipmentItem, and ProjectImage interfaces
    - Implement projectsData array with all 6 initial projects (Delhi Jal Board, Karnal Highway, Ludhiana, Maharashtra BMC, Reliance Industries, UN Haiti)
    - Include complete content for all required fields per project
    - _Requirements: 1.7, 4.1, 4.2, 13.5, 15.1, 15.2, 15.3, 15.4, 15.5, 15.6, 15.7_
  
  - [x] 1.2 Implement helper functions for project data management
    - Write getProjectBySlug() function to retrieve projects by slug
    - Write generateProjectSlug() function with lowercase conversion, hyphen replacement, special character removal
    - Write validateProject() function to check all required fields are present and non-empty
    - Write getProductSlugFromName() function to generate product URLs from equipment names
    - Write validateProductLink() function to verify product slugs exist
    - _Requirements: 4.3, 4.4, 4.5, 6.4, 6.5, 13.2, 13.3_
  
  - [ ]* 1.3 Write property tests for data utilities
    - **Property 7: Slug Generation Consistency** - verify lowercase, alphanumeric + hyphens, no leading/trailing hyphens
    - **Property 8: Slug Uniqueness** - verify all generated slugs are unique
    - **Property 9: Project Validation** - verify validation correctly identifies complete vs incomplete projects
    - **Property 34: Data Structure Conformance** - verify projects conform to TypeScript interface
    - **Validates: Requirements 4.3, 4.4, 4.5, 13.5**

- [x] 2. Implement Projects listing page
  - [x] 2.1 Create Projects.tsx page component with responsive grid layout
    - Create page component at src/app/pages/Projects.tsx
    - Implement header section with "Global Impact Cases" title and green underline accent
    - Add subtitle explaining the projects section
    - Implement responsive grid: 3 columns desktop (lg:grid-cols-3), 2 columns tablet (md:grid-cols-2), 1 column mobile
    - Use max-w-[1400px] container with proper padding
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 9.1_
  
  - [x] 2.2 Create ProjectCard component with all visual elements
    - Create component at src/app/components/ui/ProjectCard.tsx
    - Implement project image with h-48 height and overlay effect
    - Add Category Badge with color coding (GOVERNMENT: #1a5c3a, PRIVATE: #e8612c, INTERNATIONAL: #1c2535)
    - Display client name, project title with year, description (truncated to 150 chars)
    - Render category tags as pill-style elements
    - Add "FULL CASE STUDY →" link button
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 14.1, 14.2, 14.5, 14.6, 14.7_
  
  - [x] 2.3 Implement hover animations and interactions for ProjectCard
    - Add hover:-translate-y-1 transform with shadow increase on card
    - Add hover:scale-105 transform on image with 500ms transition
    - Add color change to #e8612c on link hover
    - Ensure scale transform does not exceed 1.02 for card
    - Use ease-in-out timing functions with max 300ms duration
    - _Requirements: 2.8, 12.1, 12.2, 12.3, 12.4, 12.5_
  
  - [ ]* 2.4 Write property tests for listing page
    - **Property 1: Project Data Round-Trip Integrity** - verify parsing, rendering, extracting produces equivalent data
    - **Property 2: Description Truncation** - verify descriptions truncated to 150 chars
    - **Property 3: Project Card Navigation** - verify clicking link navigates to correct route
    - **Validates: Requirements 1.7, 2.5, 2.9**

- [x] 3. Checkpoint - Verify listing page renders correctly
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 4. Implement ProjectDetail page
  - [x] 4.1 Create ProjectDetail.tsx with breadcrumb and hero section
    - Create page component at src/app/pages/ProjectDetail.tsx
    - Use useParams() to get slug from route
    - Implement breadcrumb navigation: Home > Projects > {Project Title}
    - Create hero section with project title (h1), metadata row (Client | Year | Location), and category badge
    - Handle 404 state for invalid slugs with error message and "Back to Projects" button
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.11_
  
  - [x] 4.2 Implement content sections (Challenge, Solution, Results)
    - Create Challenge section with heading and markdown content rendering
    - Create Solution section with heading and markdown content rendering
    - Create Results section with heading and markdown content rendering
    - Use appropriate icons for each section (Problem/Alert, CheckCircle, TrendingUp)
    - _Requirements: 3.5, 3.6, 3.8_
  
  - [x] 4.3 Implement Equipment Used section with internal product links
    - Create Equipment Used section with heading
    - Render equipment list with internal links to product pages
    - Use validateProductLink() to check if productSlug exists before creating link
    - Render plain text if productSlug is invalid or missing
    - Style links with text-[#e8612c] hover state
    - Ensure links open in same window (no target="_blank")
    - _Requirements: 3.7, 6.1, 6.2, 6.3, 6.4, 6.5_
  
  - [-] 4.4 Implement image gallery and category tags
    - Create responsive image layout with lazy loading for below-fold images
    - Add loading="lazy" attribute to images not in initial viewport
    - Implement srcset and sizes attributes for responsive images
    - Ensure all images have non-empty alt text
    - Render category tags as pill-style elements at bottom
    - _Requirements: 3.9, 3.10, 10.1, 10.2, 11.1, 14.3, 14.4_
  
  - [ ]* 4.5 Write property tests for detail page
    - **Property 4: Detail Page Route Accessibility** - verify valid slugs render ProjectDetail page
    - **Property 5: Equipment Internal Links** - verify equipment with productSlug renders clickable link
    - **Property 6: Breadcrumb Navigation Structure** - verify breadcrumb follows correct pattern
    - **Property 11: Internal Link Same-Window Behavior** - verify links don't have target="_blank"
    - **Property 12: Product URL Generation** - verify correct product URLs generated from names
    - **Property 13: Product Link Validation** - verify productSlug validation works correctly
    - **Validates: Requirements 3.1, 3.7, 3.11, 6.1, 6.2, 6.4, 6.5**

- [ ] 5. Implement error handling and edge cases
  - [~] 5.1 Add error handling for missing images and invalid data
    - Implement ImageWithFallback component usage for project images
    - Add fallback to placeholder image if primary image fails to load
    - Handle empty projects array with empty state message
    - Use validateProject() to skip invalid projects in listing
    - Show error state on detail page if project fails validation
    - _Requirements: 4.5, 13.6_
  
  - [ ]* 5.2 Write unit tests for error scenarios
    - Test 404 state for invalid project slug
    - Test missing image fallback behavior
    - Test invalid product link rendering as plain text
    - Test empty projects array rendering
    - Test malformed project data handling

- [~] 6. Checkpoint - Verify detail page and error handling work correctly
  - Ensure all tests pass, ask the user if questions arise.

- [x] 7. Update navigation components
  - [x] 7.1 Update Header component navigation links
    - Modify src/app/components/layout/Header.tsx
    - Change navigation link from /products#applications to /projects
    - Keep label as "Projects / Applications"
    - Add active state highlighting for /projects routes
    - _Requirements: 5.1, 5.3, 5.4, 5.5_
  
  - [x] 7.2 Update Footer component navigation links
    - Modify src/app/components/layout/Footer.tsx
    - Change Quick Links section link from /products#applications to /projects
    - Maintain consistent styling with McRAYGOR theme
    - _Requirements: 5.2, 5.5_
  
  - [ ]* 7.3 Write property test for navigation active state
    - **Property 10: Navigation Active State** - verify /projects routes display active state styling
    - **Validates: Requirements 5.4**

- [x] 8. Add routes to routing configuration
  - [x] 8.1 Update routes.tsx with projects routes
    - Add import statements for Projects and ProjectDetail components
    - Add route: { path: "projects", Component: Projects }
    - Add route: { path: "projects/:slug", Component: ProjectDetail }
    - Place routes in appropriate position in children array
    - _Requirements: 1.6, 3.1_

- [ ] 9. Implement SEO metadata and schema markup
  - [~] 9.1 Extend seo.ts with projects SEO configuration
    - Add projects section to seoConfig with title, description, keywords, canonical, OG tags
    - Implement getProjectSEO() function to generate project-specific metadata
    - Ensure meta title format: "{Project Title} - {Client} | McRAYGOR®"
    - Truncate meta descriptions to 160 characters
    - Set canonical URL format: https://www.mcraygor.com/projects/{slug}
    - Use first project image for OG image, fallback to default
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.6, 7.7_
  
  - [~] 9.2 Implement JSON-LD schema markup for project pages
    - Create schema markup generator function for Article type
    - Include headline, description, image, datePublished, author, publisher fields
    - Add location and client information in "about" field
    - Integrate schema markup into ProjectDetail page as script tag
    - Wrap schema generation in try-catch to prevent page breaks
    - _Requirements: 7.5, 7.8_
  
  - [~] 9.3 Integrate SEO metadata into Projects and ProjectDetail pages
    - Add SEO component to Projects listing page with projects config
    - Add SEO component to ProjectDetail page with project-specific metadata
    - Ensure all required meta tags are rendered (title, description, OG tags, canonical)
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.6_
  
  - [ ]* 9.4 Write property tests for SEO metadata
    - **Property 14: Project Detail Meta Title Format** - verify title contains project title and client
    - **Property 15: Project Detail Meta Description** - verify description truncated to 160 chars
    - **Property 16: Open Graph Image** - verify OG image uses first project image
    - **Property 17: Schema Markup Presence** - verify JSON-LD schema with Article type present
    - **Property 18: Canonical URL Format** - verify canonical URL format correct
    - **Validates: Requirements 7.2, 7.3, 7.4, 7.5, 7.6, 7.7, 7.8**

- [ ] 10. Update sitemap generation
  - [~] 10.1 Modify sitemap script to include projects pages
    - Update scripts/generate-sitemap.js (or equivalent sitemap generation logic)
    - Add /projects listing page with priority 0.8, changefreq "monthly"
    - Add all project detail pages (/projects/{slug}) with priority 0.7, changefreq "monthly"
    - Include lastmod date as current ISO date for all project pages
    - Ensure new projects are automatically included when added to projectsData
    - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5_
  
  - [ ]* 10.2 Write property tests for sitemap entries
    - **Property 19: Sitemap Project Inclusion** - verify all projects in data array included in sitemap
    - **Property 20: Sitemap Last Modified Date** - verify lastmod contains valid ISO date
    - **Validates: Requirements 8.2, 8.3, 8.4, 8.5**

- [~] 11. Checkpoint - Verify SEO and sitemap integration
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 12. Implement accessibility features
  - [~] 12.1 Add accessibility attributes and semantic HTML
    - Use semantic HTML elements (article, section, nav) throughout
    - Add ARIA labels to Category Badges and Category Tags
    - Ensure all interactive elements are keyboard navigable (Tab, Enter, Space)
    - Add visible focus indicators (outline or ring) to all focusable elements
    - Implement skip links to main content for keyboard navigation
    - _Requirements: 11.3, 11.4, 11.5, 11.6, 11.7, 11.8_
  
  - [~] 12.2 Ensure touch targets and color contrast compliance
    - Verify all interactive elements have minimum 44x44px dimensions on mobile
    - Ensure color contrast ratios meet 4.5:1 minimum for WCAG AA
    - Test with color contrast checker tools
    - _Requirements: 9.5, 11.2_
  
  - [~] 12.3 Implement reduced motion support
    - Add prefers-reduced-motion media query support
    - Disable all animations when prefers-reduced-motion is enabled
    - Ensure transitions become instant (duration: 0) when motion is reduced
    - _Requirements: 12.6, 12.7_
  
  - [ ]* 12.4 Write property tests for accessibility
    - **Property 21: Touch Target Minimum Size** - verify interactive elements meet 44x44px minimum on mobile
    - **Property 22: Image Lazy Loading** - verify below-fold images have loading="lazy"
    - **Property 23: Responsive Image Attributes** - verify images have srcset and sizes
    - **Property 24: Image Alt Text Presence** - verify all images have non-empty alt text
    - **Property 25: Color Contrast Compliance** - verify text contrast ratios meet 4.5:1
    - **Property 26: Keyboard Navigation Support** - verify elements focusable and operable via keyboard
    - **Property 27: Focus Indicator Visibility** - verify focused elements show visible indicator
    - **Property 28: ARIA Labels for Badges** - verify badges have appropriate aria-label
    - **Property 33: Reduced Motion Respect** - verify animations disabled when prefers-reduced-motion enabled
    - **Validates: Requirements 9.5, 10.1, 10.2, 11.1, 11.2, 11.3, 11.4, 11.6, 12.6, 12.7**

- [ ] 13. Implement performance optimizations
  - [~] 13.1 Optimize images and implement lazy loading
    - Compress project images to WebP format with JPEG fallback
    - Implement responsive images with srcset for different viewport sizes
    - Add lazy loading to below-fold images
    - Ensure images maintain layout to prevent content shift
    - _Requirements: 10.1, 10.2, 10.3_
  
  - [~] 13.2 Implement code splitting and loading states
    - Add code splitting for Projects and ProjectDetail components if needed
    - Implement loading skeletons for project cards on listing page
    - Add loading spinner on detail page while data loads
    - Optimize bundle size for fast loading on 3G connections
    - _Requirements: 10.6, 10.7_
  
  - [ ]* 13.3 Verify performance with Lighthouse
    - Run Lighthouse tests on Projects listing page (target score > 90)
    - Run Lighthouse tests on ProjectDetail page (target score > 90)
    - Verify page loads within 2 seconds on 3G connection
    - **Validates: Requirements 10.4, 10.5, 10.7**

- [ ] 14. Final integration and testing
  - [~] 14.1 Verify all routes and navigation work end-to-end
    - Test navigation from header to Projects listing page
    - Test clicking project cards navigates to detail pages
    - Test breadcrumb navigation returns to listing
    - Test equipment links navigate to product pages
    - Test footer links navigate correctly
    - _Requirements: 1.6, 2.9, 3.1, 3.11, 6.1_
  
  - [~] 14.2 Verify responsive behavior across breakpoints
    - Test grid layout at desktop (1024px+), tablet (768px-1023px), mobile (<768px)
    - Test typography scaling on mobile devices
    - Test touch targets on mobile devices
    - Test device orientation changes
    - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.7_
  
  - [ ]* 14.3 Run comprehensive property-based test suite
    - **Property 29: Hover Scale Transform Limit** - verify card hover scale doesn't exceed 1.02
    - **Property 30: Image Hover Opacity Transition** - verify image opacity transition on card hover
    - **Property 31: Animation Duration Limit** - verify animations don't exceed 300ms
    - **Property 32: Ease-In-Out Timing Function** - verify transitions use ease-in-out
    - **Property 35: Image File Validation** - verify image files exist at specified paths
    - **Property 36: Category Badge Color Mapping** - verify badge colors map correctly to project types
    - **Property 37: Category Tags Rendering** - verify tags render as pill-style elements
    - **Validates: Requirements 12.2, 12.3, 12.4, 12.5, 13.6, 14.2, 14.4, 14.5, 14.6, 14.7**

- [~] 15. Final checkpoint - Complete implementation verification
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP delivery
- Each task references specific requirements for traceability
- Property tests validate universal correctness properties from the design document
- Unit tests validate specific examples and edge cases
- Checkpoints ensure incremental validation throughout implementation
- The implementation follows established patterns from the Products pages for consistency
- All code should be production-ready with proper error handling and accessibility compliance
