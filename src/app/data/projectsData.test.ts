import { describe, it, expect } from 'vitest';
import {
  projectsData,
  getProjectBySlug,
  generateProjectSlug,
  validateProject,
  getProductSlugFromName,
  validateProductLink,
  type Project
} from './projectsData';

describe('Project Data Helper Functions', () => {
  describe('getProjectBySlug', () => {
    it('should retrieve project by valid slug', () => {
      const project = getProjectBySlug('delhi-jal-board-mass-sewage-treatment-project-2014');
      expect(project).toBeDefined();
      expect(project?.title).toBe('Delhi Jal board mass sewage treatment project, 2014');
    });

    it('should return undefined for invalid slug', () => {
      const project = getProjectBySlug('non-existent-project');
      expect(project).toBeUndefined();
    });
  });

  describe('generateProjectSlug', () => {
    it('should convert to lowercase', () => {
      const slug = generateProjectSlug('Delhi Jal Board Project');
      expect(slug).toBe('delhi-jal-board-project');
    });

    it('should replace spaces with hyphens', () => {
      const slug = generateProjectSlug('Test Project Name');
      expect(slug).toBe('test-project-name');
    });

    it('should remove special characters', () => {
      const slug = generateProjectSlug('Project (2023) - Special!');
      expect(slug).toBe('project-2023-special');
    });

    it('should remove leading and trailing hyphens', () => {
      const slug = generateProjectSlug('  Project Name  ');
      expect(slug).toBe('project-name');
    });

    it('should handle multiple consecutive special characters', () => {
      const slug = generateProjectSlug('Project   ---   Name');
      expect(slug).toBe('project-name');
    });

    it('should handle empty string', () => {
      const slug = generateProjectSlug('');
      expect(slug).toBe('');
    });
  });

  describe('validateProject', () => {
    it('should return true for valid complete project', () => {
      const validProject = projectsData[0];
      expect(validateProject(validProject)).toBe(true);
    });

    it('should return false for project missing required field', () => {
      const invalidProject: Partial<Project> = {
        id: 1,
        slug: 'test',
        title: 'Test Project',
        // missing other required fields
      };
      expect(validateProject(invalidProject)).toBe(false);
    });

    it('should return false for project with empty string field', () => {
      const invalidProject: Partial<Project> = {
        ...projectsData[0],
        title: '',
      };
      expect(validateProject(invalidProject)).toBe(false);
    });

    it('should return false for project with empty array field', () => {
      const invalidProject: Partial<Project> = {
        ...projectsData[0],
        categoryTags: [],
      };
      expect(validateProject(invalidProject)).toBe(false);
    });

    it('should return false for project with null field', () => {
      const invalidProject: Partial<Project> = {
        ...projectsData[0],
        client: null as any,
      };
      expect(validateProject(invalidProject)).toBe(false);
    });
  });

  describe('getProductSlugFromName', () => {
    it('should convert equipment name to slug format', () => {
      const slug = getProductSlugFromName('Combined Jetting Cum Suction Machine');
      expect(slug).toBe('combined-jetting-cum-suction-machine');
    });

    it('should handle special characters', () => {
      const slug = getProductSlugFromName('Super Sucker Machine (IVC)');
      expect(slug).toBe('super-sucker-machine-ivc');
    });

    it('should remove leading/trailing hyphens', () => {
      const slug = getProductSlugFromName('  Equipment Name  ');
      expect(slug).toBe('equipment-name');
    });
  });

  describe('validateProductLink', () => {
    it('should return true for valid product slugs', () => {
      expect(validateProductLink('combined-jetting-cum-suction-machine')).toBe(true);
      expect(validateProductLink('super-sucker-machine')).toBe(true);
      expect(validateProductLink('mobile-oil-spill-recovery-unit-mosr')).toBe(true);
    });

    it('should return false for invalid product slugs', () => {
      expect(validateProductLink('non-existent-product')).toBe(false);
      expect(validateProductLink('invalid-slug')).toBe(false);
    });

    it('should return false for empty string', () => {
      expect(validateProductLink('')).toBe(false);
    });
  });

  describe('All projects data validation', () => {
    it('should have all projects with valid data', () => {
      projectsData.forEach(project => {
        expect(validateProject(project)).toBe(true);
      });
    });

    it('should have unique slugs for all projects', () => {
      const slugs = projectsData.map(p => p.slug);
      const uniqueSlugs = new Set(slugs);
      expect(uniqueSlugs.size).toBe(slugs.length);
    });

    it('should have valid product slugs in equipment', () => {
      projectsData.forEach(project => {
        project.equipmentUsed.forEach(equipment => {
          if (equipment.productSlug) {
            expect(validateProductLink(equipment.productSlug)).toBe(true);
          }
        });
      });
    });
  });
});
