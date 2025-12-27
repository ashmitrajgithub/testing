export const serviceCategories = {
  Electrician: {
    name: "Electrician",
    subcategories: ["Residential", "Commercial", "Industrial", "Emergency Services"],
  },
  Plumber: {
    name: "Plumber",
    subcategories: ["Bathroom Fitting", "Pipeline Repair", "Water Tank", "Drainage", "Emergency Services"],
  },
  Carpenter: {
    name: "Carpenter",
    subcategories: ["Furniture", "Door & Window", "Kitchen Cabinets", "Flooring", "Custom Work"],
  },
  Painter: {
    name: "Painter",
    subcategories: ["Interior", "Exterior", "Commercial", "Texture Painting", "Waterproofing"],
  },
  Mason: {
    name: "Mason",
    subcategories: ["Construction", "Renovation", "Brickwork", "Plastering", "Tile Work"],
  },
  "AC Technician": {
    name: "AC Technician",
    subcategories: ["Installation", "Repair", "Maintenance", "Gas Filling", "Emergency Services"],
  },
  "Mobile Repair": {
    name: "Mobile Repair",
    subcategories: ["Screen Replacement", "Battery", "Software Issues", "Water Damage", "All Brands"],
  },
  "Computer Repair": {
    name: "Computer Repair",
    subcategories: ["Hardware", "Software", "Laptop", "Desktop", "Data Recovery"],
  },
  "Appliance Repair": {
    name: "Appliance Repair",
    subcategories: ["Refrigerator", "Washing Machine", "Microwave", "TV", "Other Appliances"],
  },
  "Cleaning Services": {
    name: "Cleaning Services",
    subcategories: ["Home Cleaning", "Office Cleaning", "Deep Cleaning", "Sanitization", "Post-Construction"],
  },
  "Pest Control": {
    name: "Pest Control",
    subcategories: ["Termite", "Cockroach", "Mosquito", "Rodent", "Bed Bugs"],
  },
  Other: {
    name: "Other",
    subcategories: ["General Services"],
  },
}

export type CategoryName = keyof typeof serviceCategories

export function getCategoryList(): string[] {
  return Object.keys(serviceCategories)
}

export function getSubcategories(category: string): string[] {
  return serviceCategories[category as CategoryName]?.subcategories || []
}

export function formatCategoryDisplay(category: string, subcategory: string): string {
  return `${category} - ${subcategory}`
}
