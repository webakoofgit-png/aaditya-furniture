import modularKitchenImage from "@/assets/service-modular-kitchen.png";
import falseCeilingImage from "@/assets/service-false-ceiling.png";
import wardrobeImage from "@/assets/service-wardrobe.png";
import tvUnitImage from "@/assets/service-tv-unit.png";
import poojaUnitImage from "@/assets/service-pooja-unit.png";
import wallPaintingImage from "@/assets/service-wall-painting.png";
import wallPanellingImage from "@/assets/service-wall-panelling.png";
import fullHomeImage from "@/assets/service-full-home.png";
import goldSofaImage from "@/assets/gold-sofa-hero.png";
import bedroomImage from "@/assets/aaditya-bedroom.jpg";
import diningImage from "@/assets/aaditya-dining.jpg";
import officeImage from "@/assets/aaditya-office.jpg";
import craftImage from "@/assets/aaditya-craft.jpg";
import kitchenGallery1 from "@/assets/kitchen-images/kitchen-1.webp";
import kitchenGallery2 from "@/assets/kitchen-images/kitchen-2.webp";
import kitchenGallery3 from "@/assets/kitchen-images/kitchen-3.webp";
import kitchenGallery4 from "@/assets/kitchen-images/kitchen-4.webp";
import kitchenGallery5 from "@/assets/kitchen-images/kitchen-5.webp";
import kitchenGallery6 from "@/assets/kitchen-images/kitchen-6.webp";
import kitchenGallery7 from "@/assets/kitchen-images/kitchen-7.webp";
import kitchenGallery8 from "@/assets/kitchen-images/kitchen-8.webp";
import kitchenGallery9 from "@/assets/kitchen-images/kitchen-9.webp";
import kitchenGallery10 from "@/assets/kitchen-images/kitchen-10.webp";
import kitchenGallery11 from "@/assets/kitchen-images/kitchen.webp";
import tvGallery1 from "@/assets/TV-units/tv-1.webp";
import tvGallery2 from "@/assets/TV-units/tv-2.webp";
import tvGallery3 from "@/assets/TV-units/tv-3.webp";
import tvGallery4 from "@/assets/TV-units/tv-4.webp";
import tvGallery5 from "@/assets/TV-units/tv-5.webp";
import tvGallery6 from "@/assets/TV-units/tv-6.webp";
import tvGallery7 from "@/assets/TV-units/tv-7.webp";
import tvGallery8 from "@/assets/TV-units/tv-8.webp";
import tvGallery9 from "@/assets/TV-units/tv-9.webp";
import tvGallery10 from "@/assets/TV-units/tv-10.webp";
import tvGallery11 from "@/assets/TV-units/tv.webp";

export type Service = {
  id: string;
  name: string;
  shortDescription: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  highlights: string[];
  options: string[];
  galleryTitle?: string;
  gallery?: { image: string; alt: string }[];
};

export const services: Service[] = [
  {
    id: "modular-kitchen",
    name: "Modular Kitchen",
    shortDescription:
      "Customized L-shape, U-shape, parallel, straight and island kitchens with premium materials, hardware and finishes.",
    tagline: "A kitchen planned around the way you cook.",
    description:
      "We design and manufacture modular kitchens around your room, storage needs and preferred working style. From measurement and layout planning to factory production and installation, every cabinet is coordinated as one complete system.",
    image: modularKitchenImage,
    imageAlt: "Contemporary modular kitchen with an island and full-height cabinetry",
    highlights: ["Made-to-measure layouts", "Factory-manufactured cabinets", "Hardware and finish choices"],
    options: ["L-shape", "U-shape", "Parallel", "Straight", "Island", "Tall and overhead storage"],
    galleryTitle: "Kitchen designs made for real homes.",
    gallery: [
      { image: kitchenGallery1, alt: "Streamlined modular kitchen with sage cabinetry" },
      { image: kitchenGallery2, alt: "Contemporary modular kitchen design" },
      { image: kitchenGallery3, alt: "Custom kitchen cabinets and worktop" },
      { image: kitchenGallery4, alt: "Modern fitted kitchen interior" },
      { image: kitchenGallery5, alt: "Space-efficient modular kitchen layout" },
      { image: kitchenGallery6, alt: "Premium full-height kitchen cabinetry" },
      { image: kitchenGallery7, alt: "Compact custom kitchen installation" },
      { image: kitchenGallery8, alt: "Designer modular kitchen with storage" },
      { image: kitchenGallery9, alt: "Elegant contemporary kitchen interior" },
      { image: kitchenGallery10, alt: "Made-to-measure modular kitchen" },
      { image: kitchenGallery11, alt: "Finished modular kitchen project" },
    ],
  },
  {
    id: "customized-furniture",
    name: "Customized Furniture",
    shortDescription:
      "Complete home furniture made in our own factory, from a single piece to a coordinated room.",
    tagline: "Furniture made for your dimensions and daily life.",
    description:
      "Share a reference, sketch or practical requirement and our team will help shape it into furniture suited to your space. Materials, proportions, storage and finishes are confirmed before production begins.",
    image: craftImage,
    imageAlt: "Furniture craftsperson working on a custom wooden piece",
    highlights: ["Direct manufacturing", "Custom dimensions", "Choice of materials and finishes"],
    options: ["Beds", "Shoe racks", "Dressing tables", "Display units", "Side tables", "Made-to-order pieces"],
  },
  {
    id: "false-ceiling",
    name: "False Ceiling",
    shortDescription: "POP, gypsum, grid and designer false ceilings with integrated lighting.",
    tagline: "Shape the ceiling. Transform the entire room.",
    description:
      "Our false-ceiling service brings lighting, proportion and visual order together. We plan the ceiling pattern around the room, furniture layout and electrical requirements before execution.",
    image: falseCeilingImage,
    imageAlt: "Modern living room with a layered gypsum false ceiling and warm cove lighting",
    highlights: ["Lighting coordination", "Clean finished edges", "Room-specific ceiling design"],
    options: ["Gypsum board", "POP", "Grid ceiling", "Cove lighting", "Spotlights", "Designer ceiling patterns"],
  },
  {
    id: "wardrobes-cupboards",
    name: "Wardrobes & Cupboards",
    shortDescription: "Sliding, hinged and walk-in wardrobes manufactured for your space.",
    tagline: "Storage that looks calm and works hard.",
    description:
      "We manufacture wardrobes around your room dimensions, clothing needs and preferred shutter style. Internal storage is planned for practical access while the exterior finish coordinates with the bedroom.",
    image: wardrobeImage,
    imageAlt: "Premium bedroom with a full-height custom wardrobe",
    highlights: ["Custom internal storage", "Full-height manufacturing", "Coordinated bedroom finishes"],
    options: ["Sliding shutters", "Hinged shutters", "Walk-in wardrobes", "Loft storage", "Drawers and accessories", "Mirror panels"],
  },
  {
    id: "tv-unit-living-wall",
    name: "TV Unit & Living Wall",
    shortDescription: "Customized entertainment units, display storage and complete living walls.",
    tagline: "A living-room focal point with storage built in.",
    description:
      "Our TV units balance display, wiring, equipment and concealed storage. The wall composition can include panels, floating cabinets, shelving and integrated lighting for one finished elevation.",
    image: tvUnitImage,
    imageAlt: "Custom TV unit with fluted wall panels, storage and integrated lighting",
    highlights: ["Concealed cable planning", "Integrated storage", "Coordinated wall finishes"],
    options: ["Floating TV units", "Full living walls", "Fluted panels", "Display shelves", "Closed storage", "LED backlighting"],
    galleryTitle: "TV units designed as part of the room.",
    gallery: [
      { image: tvGallery1, alt: "Custom TV unit with integrated wall storage" },
      { image: tvGallery2, alt: "Contemporary TV wall with display shelving" },
      { image: tvGallery3, alt: "Modern entertainment unit with panelled backdrop" },
      { image: tvGallery4, alt: "Space-efficient TV unit and living wall" },
      { image: tvGallery5, alt: "Full-height custom TV wall composition" },
      { image: tvGallery6, alt: "Floating television cabinet with wall panels" },
      { image: tvGallery7, alt: "Minimal custom TV unit for a living room" },
      { image: tvGallery8, alt: "Designer TV wall with integrated storage" },
      { image: tvGallery9, alt: "Contemporary television wall installation" },
      { image: tvGallery10, alt: "Compact modern TV unit" },
      { image: tvGallery11, alt: "Finished custom TV and living wall project" },
    ],
  },
  {
    id: "bedroom-furniture",
    name: "Bedroom Furniture",
    shortDescription: "Beds with storage, side tables, dressing tables and complete bedroom sets.",
    tagline: "A complete bedroom, composed as one restful space.",
    description:
      "We manufacture beds and companion furniture to fit your room and storage requirements. Pieces can be developed individually or coordinated with wardrobes, wall panels and finishes as a complete bedroom.",
    image: bedroomImage,
    imageAlt: "Warm contemporary bedroom with a custom bed and bedside furniture",
    highlights: ["Room-specific dimensions", "Coordinated furniture set", "Useful integrated storage"],
    options: ["Hydraulic storage beds", "Drawer storage beds", "Side tables", "Dressing units", "Headboard walls", "Bedroom sets"],
  },
  {
    id: "sofa-furnishing",
    name: "Sofa Set & Furnishing",
    shortDescription: "5-seater, L-shape and recliner sofas manufactured for your home.",
    tagline: "Comfort, proportion and upholstery made to belong.",
    description:
      "Choose the seating format, dimensions, cushioning and upholstery that suit your living room. We manufacture sofas directly and coordinate the final piece with the wider interior palette.",
    image: goldSofaImage,
    imageAlt: "Mustard-gold three-seat sofa in a charcoal interior",
    highlights: ["Direct sofa manufacturing", "Custom upholstery", "Room-appropriate proportions"],
    options: ["5-seater sets", "L-shape sofas", "Recliners", "Three-seat sofas", "Accent chairs", "Fabric and leatherette choices"],
  },
  {
    id: "dining-furniture",
    name: "Dining Furniture",
    shortDescription: "Dining tables and chairs in sizes, materials and finishes made to your needs.",
    tagline: "Made for everyday meals and long conversations.",
    description:
      "We manufacture dining tables and seating around your family size, available space and preferred material palette. Dimensions and finishes are selected to keep circulation comfortable and the room cohesive.",
    image: diningImage,
    imageAlt: "Contemporary dining table and chairs in a warm interior",
    highlights: ["Custom table sizes", "Matching seating", "Finish coordination"],
    options: ["Four-seater tables", "Six-seater tables", "Eight-seater tables", "Dining chairs", "Benches", "Dining storage"],
  },
  {
    id: "study-office-furniture",
    name: "Study & Office Furniture",
    shortDescription: "Study tables, workstations, storage and customized office furniture.",
    tagline: "A focused workspace shaped around the work.",
    description:
      "From a compact home-study corner to coordinated office furniture, we plan practical surfaces, storage, cable access and comfortable clearances before manufacturing.",
    image: officeImage,
    imageAlt: "Warm modern office with a custom desk and storage",
    highlights: ["Ergonomic planning", "Cable and storage solutions", "Home and office applications"],
    options: ["Study tables", "Home-office desks", "Workstations", "Bookshelves", "Office storage", "Reception furniture"],
  },
  {
    id: "pooja-unit-mandir",
    name: "Pooja Unit / Mandir",
    shortDescription: "Compact and full-size pooja units designed around your available space.",
    tagline: "A serene, carefully detailed place within the home.",
    description:
      "We design and manufacture pooja units in proportions suited to your home, with considered storage, lighting and decorative details. Compact wall units and full-height mandirs can be coordinated with the surrounding interior.",
    image: poojaUnitImage,
    imageAlt: "Custom wooden pooja unit with jali details and warm backlighting",
    highlights: ["Custom size and proportion", "Integrated storage", "Lighting and jali options"],
    options: ["Wall-mounted units", "Full-height mandirs", "Jali panels", "Drawers and storage", "Backlighting", "Wood and laminate finishes"],
  },
  {
    id: "wall-painting",
    name: "Wall Painting",
    shortDescription:
      "Leading paint brands with plastic, emulsion, lustre, enamel, texture, PU, Duco and other finishes.",
    tagline: "The right colour and finish for every surface.",
    description:
      "Our painting service covers surface preparation, colour selection and application for complete homes or individual rooms. Brand and finish options are selected around performance, appearance and budget.",
    image: wallPaintingImage,
    imageAlt: "Contemporary living room with ivory and charcoal painted walls",
    highlights: ["Surface preparation", "Multiple brand choices", "Interior finish guidance"],
    options: ["Asian Paints", "Berger", "Dulux", "Nerolac", "Texture and Royale finishes", "PU and Duco"],
  },
  {
    id: "wall-panelling",
    name: "Wall Panelling",
    shortDescription:
      "Louvers, fluted panels, veneer, CNC jali, upholstered, stone, mirror, acoustic and LED-backed walls.",
    tagline: "Texture, rhythm and warmth for a feature wall.",
    description:
      "We plan wall panelling as part of the room rather than as a surface added later. Materials, joints, services and lighting are coordinated to create a clean, durable finished elevation.",
    image: wallPanellingImage,
    imageAlt: "Living room feature wall with fluted wood, marble and integrated lighting",
    highlights: ["Material combinations", "Clean service integration", "Custom wall composition"],
    options: ["WPC and charcoal louvers", "Fluted and 3D panels", "Wood and veneer", "MDF CNC jali", "Stone, glass and mirror", "Acoustic and upholstered panels"],
  },
  {
    id: "total-home-interior",
    name: "Total Home Interior",
    shortDescription:
      "Measurement, 3D design, manufacturing, painting, electrical work and installation coordinated end-to-end.",
    tagline: "One coordinated team, from empty rooms to a finished home.",
    description:
      "Our end-to-end interior service brings space planning, furniture, finishes, ceilings, lighting and execution into one coordinated process. We manage each stage from site measurement and design through manufacturing and installation.",
    image: fullHomeImage,
    imageAlt: "Cohesive open-plan apartment with living, dining and modular kitchen interiors",
    highlights: ["Single coordinated workflow", "Factory manufacturing", "Design-to-installation support"],
    options: ["Site measurement", "3D design", "Furniture manufacturing", "False ceiling and electrical", "Painting and panelling", "Installation and handover"],
  },
];

export const getService = (id: string) => services.find((service) => service.id === id);
