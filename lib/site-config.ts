/**
 * ============================================================
 *  EDIT YOUR SITE CONTENT HERE
 * ------------------------------------------------------------
 *  Everything below is placeholder content. Change the text,
 *  phone number, email, address, services, testimonials, and
 *  image paths to your real info. To swap a photo, drop your
 *  image into /public/images and update the path here.
 * ============================================================
 */

export const company = {
  name: "Hinojosa Remodeling & Construction",
  shortName: "Hinojosa",
  tagline: "Remodeling & Construction",
  // TODO: replace with your real contact info
  phone: "(713) 555-0199",
  phoneHref: "tel:+17135550199",
  email: "info@hinojosaconstruction.com",
  emailHref: "mailto:info@hinojosaconstruction.com",
  address: "1234 Example St, Houston, TX 77002",
  serviceArea: "Serving all of Texas — based in Houston",
  hours: "Mon – Sat: 7:00 AM – 6:00 PM",
  // Minimum project size you take on
  minimumJob: "$5,000",
  // Optional: your license / insurance line
  credentials: "Licensed & Insured • Houston, Texas",
  social: {
    facebook: "#",
    instagram: "#",
    google: "#",
  },
}

export const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "250+", label: "Projects Completed" },
  { value: "100%", label: "Licensed & Insured" },
  { value: "5★", label: "Average Review" },
]

export type Service = {
  title: string
  description: string
  icon: string
}

export const services: Service[] = [
  {
    title: "New Construction",
    description:
      "Ground-up builds from the slab on up — custom homes, standalone structures, and commercial shells, framed straight and finished clean.",
    icon: "Building2",
  },
  {
    title: "Commercial Build-Outs",
    description:
      "Offices, retail, and tenant spaces taken from bare walls to open-for-business — built to code, inspection-ready, and on schedule.",
    icon: "Store",
  },
  {
    title: "Additions & Structural",
    description:
      "Room additions, second stories, and load-bearing changes that add real square footage — engineered, permitted, and built to last.",
    icon: "Hammer",
  },
  {
    title: "Kitchens & Baths",
    description:
      "Cabinets, tile, countertops, and fixtures done right — the rooms that sell a house and the ones you actually live in.",
    icon: "ChefHat",
  },
  {
    title: "Concrete & Site Work",
    description:
      "Foundations, slabs, driveways, and walkways poured level and finished to spec — the part nobody sees but everything sits on.",
    icon: "HardHat",
  },
  {
    title: "Interior & Exterior Finishes",
    description:
      "Drywall, paint, flooring, siding, decks, and trim — the finish work that makes the whole job look intentional, inside and out.",
    icon: "PaintRoller",
  },
]

export type Project = {
  title: string
  category: string
  before: string
  after: string
}

// Before / After gallery. Swap the image paths for your real project photos.
export const beforeAfterProjects: Project[] = [
  {
    title: "Modern Kitchen Renovation",
    category: "Residential",
    before: "/images/kitchen-before.png",
    after: "/images/kitchen-after.png",
  },
  {
    title: "Master Bathroom Remodel",
    category: "Residential",
    before: "/images/bathroom-before.png",
    after: "/images/bathroom-after.png",
  },
]

export type GalleryItem = {
  title: string
  category: string
  image: string
}

// Recent-projects grid. Add as many as you want — each one is a tile.
// To add a project: drop a photo in /public/images, then copy one of
// the objects below and update the title, category, and image path.
export const gallery: GalleryItem[] = [
  {
    title: "Open-Concept Living Remodel",
    category: "Residential",
    image: "/images/living-project.png",
  },
  {
    title: "Full Exterior Renovation",
    category: "Residential",
    image: "/images/exterior-project.png",
  },
  {
    title: "Retail Space Build-Out",
    category: "Commercial",
    image: "/images/commercial-project.png",
  },
  {
    title: "Custom Kitchen Build",
    category: "New Construction",
    image: "/images/kitchen-after.png",
  },
  {
    title: "Master Bath Renovation",
    category: "Residential",
    image: "/images/bathroom-after.png",
  },

  // ── Add more projects below ──────────────────────────────────────
  // 1. Drop your photo into /public/images (e.g. my-project.png)
  // 2. Uncomment a line below and update the title, category, and image.
  // { title: "Office Tenant Improvement",  category: "Commercial",       image: "/images/your-photo.png" },
  // { title: "New Home Construction",      category: "New Construction",  image: "/images/your-photo.png" },
  // { title: "Public / Municipal Project", category: "Commercial",        image: "/images/your-photo.png" },
]

export type Testimonial = {
  quote: string
  name: string
  location: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Hinojosa completely transformed our kitchen. The crew was on time, clean, and the quality was beyond what we expected. We get compliments every time someone visits.",
    name: "Maria G.",
    location: "Katy, TX",
  },
  {
    quote:
      "Professional from the first estimate to the final walkthrough. They communicated every step and finished on schedule. Highly recommend for any remodel.",
    name: "David R.",
    location: "Spring, TX",
  },
  {
    quote:
      "We hired them for our small office buildout and the result was perfect. Fair pricing, great craftsmanship, and zero headaches. We'll use them again.",
    name: "Jennifer L.",
    location: "Houston, TX",
  },
]

export const processSteps = [
  {
    step: "01",
    title: "Free Consultation",
    description:
      "We meet on-site, listen to your vision, and assess the scope of your project.",
  },
  {
    step: "02",
    title: "Detailed Estimate",
    description:
      "You receive a clear, itemized quote with no hidden fees or surprises.",
  },
  {
    step: "03",
    title: "Build & Craft",
    description:
      "Our licensed crew gets to work with quality materials and clean job sites.",
  },
  {
    step: "04",
    title: "Final Walkthrough",
    description:
      "We walk the finished project together to make sure every detail is right.",
  },
]

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]
