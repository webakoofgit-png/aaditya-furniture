import heroImage from "@/assets/aaditya-hero.jpg";
import bedroomImage from "@/assets/aaditya-bedroom.jpg";
import diningImage from "@/assets/aaditya-dining.jpg";
import craftImage from "@/assets/aaditya-craft.jpg";
import sofaImage from "@/assets/aaditya-sofa.jpg";
import officeImage from "@/assets/aaditya-office.jpg";

export const images = {
  hero: heroImage,
  bedroom: bedroomImage,
  dining: diningImage,
  craft: craftImage,
  sofa: sofaImage,
  office: officeImage,
};

export const categories = [
  { name: "Sofas & Seating", image: sofaImage, note: "Made for gathering" },
  { name: "Beds & Bedroom", image: bedroomImage, note: "A slower kind of rest" },
  { name: "Dining", image: diningImage, note: "For moments around the table" },
  { name: "Storage", image: heroImage, note: "Considered, beautifully kept" },
  { name: "Office", image: officeImage, note: "Work, with a little more ease" },
  { name: "Custom Furniture", image: craftImage, note: "Made around your idea" },
];

export type Product = {
  id: string;
  name: string;
  category: string;
  material: string;
  finishes: string[];
  description: string;
  dimensions: string;
  image: string;
};

export const products: Product[] = [
  {
    id: "ananta-sofa",
    name: "Ananta Lounge Sofa",
    category: "Sofas & Seating",
    material: "Textured upholstery · solid wood",
    finishes: ["Ivory", "Olive", "Clay"],
    description:
      "A generous, softly sculpted silhouette designed to bring people together. Upholstery and finish selections can be discussed with our team.",
    dimensions: "Made to order · dimensions on request",
    image: sofaImage,
  },
  {
    id: "aranya-bed",
    name: "Aranya Platform Bed",
    category: "Beds & Bedroom",
    material: "Walnut · upholstered headboard",
    finishes: ["Natural walnut", "Smoked oak"],
    description:
      "Grounded in warm walnut and quiet proportions, the Aranya brings a sense of ease to the everyday ritual of rest.",
    dimensions: "Made to order · dimensions on request",
    image: bedroomImage,
  },
  {
    id: "saanjh-dining",
    name: "Saanjh Dining Table",
    category: "Dining",
    material: "Solid wood · hand-finished",
    finishes: ["Walnut", "Natural oak"],
    description:
      "A gathering point with a softly rounded profile, made to host slow breakfasts, long dinners and everything between.",
    dimensions: "Made to order · seating and size options",
    image: diningImage,
  },
  {
    id: "kaaru-writing-desk",
    name: "Kaaru Writing Desk",
    category: "Office",
    material: "Walnut · solid wood details",
    finishes: ["Walnut", "Smoked oak"],
    description:
      "A calm, substantial workspace with generous proportions and warm timber character.",
    dimensions: "Made to order · dimensions on request",
    image: officeImage,
  },
  {
    id: "mitti-sideboard",
    name: "Mitti Slatted Sideboard",
    category: "Storage",
    material: "Walnut · hand-finished details",
    finishes: ["Walnut", "Natural oak"],
    description:
      "Quietly expressive storage, pairing a clean outline with a tactile, finely detailed front.",
    dimensions: "Made to order · dimensions on request",
    image: heroImage,
  },
  {
    id: "sukoon-reading-chair",
    name: "Sukoon Reading Chair",
    category: "Sofas & Seating",
    material: "Upholstery · solid wood",
    finishes: ["Ivory", "Forest", "Clay"],
    description:
      "An inviting chair for the quiet corner: generous upholstery, considered timber and an easy, relaxed form.",
    dimensions: "Made to order · dimensions on request",
    image: sofaImage,
  },
  {
    id: "meher-bedside",
    name: "Meher Bedside Table",
    category: "Beds & Bedroom",
    material: "Walnut · solid wood",
    finishes: ["Natural walnut", "Smoked oak"],
    description:
      "A compact bedside companion with a warm wood finish and a place for the things worth keeping close.",
    dimensions: "Made to order · dimensions on request",
    image: bedroomImage,
  },
  {
    id: "saar-dining-chair",
    name: "Saar Dining Chair",
    category: "Dining",
    material: "Solid wood · upholstered seat",
    finishes: ["Walnut", "Natural oak"],
    description: "An understated dining chair shaped for long conversations and everyday use.",
    dimensions: "Made to order · fabric options on request",
    image: diningImage,
  },
];

export const projectGallery = [
  { title: "A softer living room", type: "Residential", image: heroImage },
  { title: "A considered bedroom", type: "Residential", image: bedroomImage },
  { title: "Gather around", type: "Residential", image: diningImage },
  { title: "A place to make", type: "Custom Furniture", image: craftImage },
  { title: "Work in warm tones", type: "Commercial", image: officeImage },
  { title: "Sculptural simplicity", type: "Custom Furniture", image: sofaImage },
];

export const customSteps = [
  {
    number: "01",
    title: "Share your idea",
    description: "Tell us what you have in mind, where it will live and what matters most.",
  },
  {
    number: "02",
    title: "Choose materials",
    description: "Explore a considered selection of finishes, fabrics and details with our team.",
  },
  {
    number: "03",
    title: "Design together",
    description: "Shape the proportions and details around your space and everyday life.",
  },
  {
    number: "04",
    title: "Made for you",
    description: "Your piece moves from approved design to making and delivery planning.",
  },
];

// Configure only after the showroom supplies verified details. Leave blank for demo share mode.
export const businessConfig = { whatsappNumber: "", wholesaleEnabled: true };
export const whatsappLink = (message: string) =>
  `https://wa.me/${businessConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
