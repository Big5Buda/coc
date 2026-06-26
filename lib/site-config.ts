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
    title: "Kitchen Remodeling",
    description:
      "Custom cabinetry, countertops, lighting, and full layout redesigns that transform the heart of your home.",
    icon: "ChefHat",
  },
  {
    title: "Bathroom Remodeling",
    description:
      "Walk-in showers, tile work, vanities, and modern fixtures built for comfort and lasting quality.",
    icon: "ShowerHead",
  },
  {
    title: "Home Additions",
    description:
      "Room additions, second stories, and expansions that add space and value to your property.",
    icon: "Home",
  },
  {
    title: "Flooring & Tile",
    description:
      "Hardwood, luxury vinyl, tile, and concrete installs done right the first time.",
    icon: "LayoutGrid",
  },
  {
    title: "Interior & Exterior",
    description:
      "Drywall, painting, siding, decks, and finish carpentry — inside and out.",
    icon: "PaintRoller",
  },
  {
    title: "Light Commercial",
    description:
      "Office buildouts, retail spaces, and tenant improvements for small commercial clients.",
    icon: "Building2",
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

export const gallery: GalleryItem[] = [
  {
    title: "Open Concept Living Room",
    category: "Residential",
    image: "/images/living-project.png",
  },
  {
    title: "Exterior Home Renovation",
    category: "Residential",
    image: "/images/exterior-project.png",
  },
  {
    title: "Retail Space Buildout",
    category: "Commercial",
    image: "/images/commercial-project.png",
  },
  {
    title: "Custom Kitchen Build",
    category: "Residential",
    image: "/images/kitchen-after.png",
  },
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
