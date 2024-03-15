import { createClient } from '@supabase/supabase-js';
import { Projects, Units } from './config';
const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseAnonKey = 'YOUR_SUPABASE_ANON_KEY';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const projectsData = [
  {
    name: "Fairview Towns",
    status: "Selling",
    price: "$309,990",
    overview: "3 - 4 Bedrooms, 1577 - 2034 SqFt",
    developer: "Ryan Homes",
    buildingType: "Townhouse & Single Family Home",
    unitsStories: "- Units,",
    bedrooms: "3 - 4 Bedrooms",
    sizeSqFt: "1577 - 2034 SqFt",
    estimatedCompletion: "Construction",
    city: "Chesapeake",
    province: "VA",
    country: "USA",
    majorIntersection: "4100 Riverside Drive"
  }
];

const unitsData = [
  {
    projectId: "6733b4df-f339-40af-8ab0-d45b3438a03b",
    status: "For Sale",
    price: 309990.0,
    sqft: 1577,
    unitType: "Townhomes",
    bedrooms: 3,
    bathrooms: 3,
    floor: 1
  },
  {
    projectId: "19bd03ac-18cc-4568-9298-b83cb1a1f4c6",
    status: "For Sale",
    price: 328990.0,
    sqft: 1765,
    unitType: "Townhomes",
    bedrooms: 3,
    bathrooms: 3,
    floor: 1
  }
];

async function seedDatabase() {
  try {
    const { error: projectsError } = await supabase.from(Projects).insert(projectsData);
    if (projectsError) throw projectsError;

    const { error: unitsError } = await supabase.from(Units).insert(unitsData);
    if (unitsError) throw unitsError;

    console.log('Database seeded successfully.');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
}

seedDatabase();

export { seedDatabase };
