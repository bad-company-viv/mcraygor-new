# Implementation Plan: Legal Disclaimer Privacy Policy Page

## Overview

This plan implements a Privacy Policy page at `/privacy-policy` that displays the mandatory legal disclaimer from SRS Section 14. The implementation follows established patterns from existing informational pages (About, CSR, R&D) and includes comprehensive testing for accessibility, content integrity, and responsive design.

## Tasks

- [x] 1. Create PrivacyPolicy component with hero and legal disclaimer sections
  - Create `src/app/pages/PrivacyPolicy.tsx` with TypeScript/React
  - Implement hero section with gradient background and page title
  - Implement legal disclaimer section with proper heading and text
  - Define legal disclaimer text as a constant for maintainability
  - Apply styling consistent with About, CSR, R&D pages (colors: #1c2535, #e8612c, #1a5c3a)
  - Ensure responsive design with proper text wrapping on mobile (< 768px)
  - _Requirements: 1.4, 2.1, 2.2, 2.3, 2.4, 3.1, 3.2, 3.3, 3.4_

- [ ]* 1.1 Write property test for legal disclaimer text presence
  - **Property 3: Legal Disclaimer Text Presence**
  - **Validates: Requirements 2.1, 2.2, 4.1, 4.2, 4.3**
  - Test that complete disclaimer text appears in rendered component
  - Use fast-check to generate different rendering contexts
  - Tag: Feature: legal-disclaimer, Property 3

- [ ]* 1.2 Write unit tests for PrivacyPolicy component rendering
  - Test component renders without errors
  - Test hero section contains "Privacy Policy" heading
  - Test legal disclaimer section has proper heading
  - Test legal disclaimer is in main content area (not header/footer)
  - _Requirements: 1.1, 2.3, 2.4_

- [x] 2. Update routing configuration
  - Add Privacy Policy route to `src/app/routes.tsx`
  - Import PrivacyPolicy component
  - Add route entry: `{ path: "privacy-policy", Component: PrivacyPolicy }`
  - _Requirements: 1.1, 1.3_

- [ ]* 2.1 Write unit test for Privacy Policy route
  - Test navigation to `/privacy-policy` renders PrivacyPolicy component
  - Test page renders without errors
  - _Requirements: 1.1_

- [x] 3. Update Footer component Privacy Policy link
  - Modify `src/app/components/layout/Footer.tsx`
  - Change Privacy Policy link from `<a href="#">` to `<Link to="/privacy-policy">`
  - Ensure Link component is imported from react-router-dom
  - Maintain existing styling classes
  - _Requirements: 1.2_

- [ ]* 3.1 Write unit test for Footer Privacy Policy link
  - Test Footer contains Privacy Policy link
  - Test link has `to` attribute pointing to `/privacy-policy`
  - _Requirements: 1.2_

- [x] 4. Add SEO metadata configuration
  - Update `src/app/utils/seo.ts` with privacyPolicy entry
  - Include title: "Privacy Policy & Legal Disclaimer | McRAYGOR®"
  - Include description with keywords: privacy policy, legal disclaimer, intellectual property
  - Set canonical URL to `/privacy-policy`
  - Configure Open Graph metadata
  - _Requirements: 1.4_

- [ ]* 4.1 Write unit test for SEO configuration
  - Test privacyPolicy key exists in seoConfig
  - Test title, description, keywords are non-empty
  - Test canonical URL is correct
  - _Requirements: 1.4_

- [x] 5. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [x] 6. Implement accessibility features
  - [x] 6.1 Ensure semantic HTML structure in PrivacyPolicy component
    - Use proper heading hierarchy (h1 for page title, h2 for section headings)
    - Render legal disclaimer as semantic text (p or div elements)
    - Ensure disclaimer is not hidden from accessibility tree
    - _Requirements: 5.1, 5.2, 5.4_
  
  - [ ]* 6.2 Write property test for contrast ratio
    - **Property 11: Legal Disclaimer Contrast Ratio**
    - **Validates: Requirements 3.1, 5.3**
    - Test contrast ratio >= 4.5:1 across different theme configurations
    - Use fast-check to generate color combinations
    - Tag: Feature: legal-disclaimer, Property 11
  
  - [ ]* 6.3 Write unit tests for accessibility compliance
    - Test legal disclaimer is semantic HTML (not img/canvas/svg)
    - Test legal disclaimer is in accessibility tree (not aria-hidden)
    - Test heading hierarchy is proper (h1 before h2, no level skipping)
    - _Requirements: 5.1, 5.2, 5.4_

- [x] 7. Implement visual presentation requirements
  - [x] 7.1 Style legal disclaimer section with emphasis
    - Apply background color (#fff7ed) or border for visual distinction
    - Set font size to at least 16px (meets 14px minimum)
    - Apply generous padding (2rem desktop, 1.5rem mobile)
    - Set font weight to 500 or 600 for emphasis
    - Set line height to 1.7-1.8 for readability
    - _Requirements: 3.1, 3.2, 3.3_
  
  - [ ]* 7.2 Write property test for responsive text wrapping
    - **Property 7: Legal Disclaimer Responsive Text Wrapping**
    - **Validates: Requirements 3.4**
    - Test text wraps without horizontal overflow on viewport widths 320px-767px
    - Use fast-check to generate random viewport widths
    - Run 100 iterations
    - Tag: Feature: legal-disclaimer, Property 7
  
  - [ ]* 7.3 Write unit tests for visual presentation
    - Test font size is at least 14px
    - Test text is not truncated (no overflow:hidden with fixed height)
    - Test no text-overflow:ellipsis applied
    - _Requirements: 3.2, 4.4_

- [x] 8. Update sitemap files
  - [x] 8.1 Add Privacy Policy to XML sitemap
    - Update `public/sitemap.xml`
    - Add entry with loc: `/privacy-policy`, changefreq: monthly, priority: 0.5
    - _Requirements: 1.3_
  
  - [x] 8.2 Add Privacy Policy to HTML sitemap
    - Update `src/app/pages/Sitemap.tsx`
    - Add Privacy Policy link to the sitemap page
    - _Requirements: 1.3_

- [x] 9. Final checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Property tests use fast-check library with minimum 100 iterations
- Unit tests use Vitest + React Testing Library
- Legal disclaimer text must match SRS Section 14 exactly
- Component follows existing patterns from About, CSR, R&D pages
- Responsive breakpoints: mobile < 768px, tablet 768px-1023px, desktop >= 1024px
