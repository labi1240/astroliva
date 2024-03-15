import { defineTable } from 'astro/db';

export const Projects = defineTable({
  id: { type: 'uuid', primaryKey: true },
  name: { type: 'text', notNull: true },
  status: { type: 'text', notNull: true },
  price: { type: 'text', notNull: true },
  overview: { type: 'text', notNull: true },
  developer: { type: 'text', notNull: true },
  buildingType: { type: 'text', notNull: true },
  unitsStories: { type: 'text', notNull: true },
  bedrooms: { type: 'text', notNull: true },
  sizeSqFt: { type: 'text', notNull: true },
  estimatedCompletion: { type: 'text', notNull: true },
  city: { type: 'text', notNull: true },
  province: { type: 'text', notNull: true },
  country: { type: 'text', notNull: true },
  majorIntersection: { type: 'text', notNull: true }
});

export const Units = defineTable({
  id: { type: 'uuid', primaryKey: true },
  projectId: { type: 'uuid', references: Projects.id, notNull: true },
  status: { type: 'text', notNull: true },
  price: { type: 'numeric', notNull: true },
  sqft: { type: 'numeric', notNull: true },
  unitType: { type: 'text', notNull: true },
  bedrooms: { type: 'numeric', notNull: true },
  bathrooms: { type: 'numeric', notNull: true },
  floor: { type: 'numeric', notNull: true }
});
