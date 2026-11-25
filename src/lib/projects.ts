/**
 * Sahil project portfolio.
 *
 * Structural data lives here; all translated copy lives in
 * `src/lib/i18n/{en,ar}.ts` under `projectsData.items[slug]`. Keep the slug
 * keys in the two files in sync, and mirror any slug change into
 * `vite.config.ts` -> `projectSlugs` or the prerender step will fail.
 *
 * Source of truth for the six entries below is the project schedule supplied
 * by Sahil (location + facility type + scope description).
 *
 * Imagery: original commissioned photography stored in `src/assets`. Each
 * image is representative of the scope of work shown, NOT a photograph of the
 * specific site. TODO(client): replace with real site photography per project.
 */

import telecomIct from "@/assets/mn-proj-telecom-ict.jpg";
import packagingMepFire from "@/assets/mn-proj-packaging-mep-fire.jpg";
import medicalPlantroom from "@/assets/mn-proj-medical-plantroom.jpg";
import plasticsCommissioning from "@/assets/mn-proj-plastics-commissioning.jpg";
import compoundGates from "@/assets/mn-proj-compound-gates.jpg";
import schoolsOm from "@/assets/mn-proj-schools-om.jpg";
import manpower from "@/assets/mn-svc-manpower.jpg";

/** Aligned 1:1 with the three service lines so filters mean something. */
export type ProjectCategory = "MEP & Fire" | "ICT & Low Current" | "Operations & Maintenance";

export interface Project {
  slug: string;
  /** English fallback — translated title comes from i18n. */
  title: string;
  category: ProjectCategory;
  /** Facility classification exactly as recorded by Sahil. */
  facilityType: string;
  location: string;
  scope: string;
  cover: string;
  description: string;
  scopeOfWork: string[];
  highlights: string[];
  /** Technical disciplines engaged — used as chips on the detail page. */
  disciplines: string[];
  gallery: { src: string; caption: string }[];
}

export const projects: Project[] = [
  {
    slug: "telecom-network-ict-om",
    title: "Telecom Network — ICT O&M",
    category: "Operations & Maintenance",
    facilityType: "Multi-site ICT Operations",
    location: "Riyadh",
    scope: "Multi-site ICT network operation & maintenance",
    cover: telecomIct,
    description:
      "Operation and maintenance of ICT networks across multiple sites, ensuring stable performance, reduced downtime, and reliable service delivery.",
    scopeOfWork: [
      "Multi-site network operation",
      "Preventive & corrective maintenance",
      "Fault response and escalation",
      "Performance monitoring & reporting",
    ],
    highlights: [
      "Stable performance across all sites",
      "Measurable reduction in downtime",
      "Reliable, continuous service delivery",
      "Structured maintenance scheduling",
    ],
    disciplines: ["Fiber", "MTR / FTR", "Data Rooms", "Cabinets", "Low Current"],
    gallery: [
      { src: telecomIct, caption: "Network site infrastructure" },
      { src: medicalPlantroom, caption: "Power and distribution room" },
      { src: manpower, caption: "Field maintenance crew" },
    ],
  },
  {
    slug: "packaging-factory-mep-fire",
    title: "Packaging Factory — MEP & Fire",
    category: "MEP & Fire",
    facilityType: "Industrial Facility",
    location: "Al Kharj",
    scope: "MEP & fire protection execution",
    cover: packagingMepFire,
    description:
      "Execution of MEP and fire protection systems in compliance with industrial safety and engineering standards.",
    scopeOfWork: [
      "Mechanical installation",
      "Electrical installation",
      "Plumbing works",
      "Fire protection systems",
    ],
    highlights: [
      "Compliance with industrial safety standards",
      "Engineering-standard execution",
      "Coordinated multi-discipline delivery",
      "Inspection-ready installation",
    ],
    disciplines: ["HVAC", "Fire Fighting", "Plumbing", "Power", "Low Current"],
    gallery: [
      { src: packagingMepFire, caption: "Pipework and fire mains" },
      { src: medicalPlantroom, caption: "Electrical plant room" },
      { src: plasticsCommissioning, caption: "Testing and commissioning" },
    ],
  },
  {
    slug: "medical-factory-mep-fire",
    title: "Medical Factory — MEP & Fire",
    category: "MEP & Fire",
    facilityType: "Industrial Facility",
    location: "Al Kharj",
    scope: "Code-based MEP installation",
    cover: medicalPlantroom,
    description:
      "Code-based MEP installation delivering reliable and efficient systems for continuous industrial operation.",
    scopeOfWork: [
      "Code-based MEP installation",
      "Systems efficiency optimisation",
      "Continuous-operation readiness",
      "Quality control & verification",
    ],
    highlights: [
      "Installation executed to code",
      "Reliable, efficient systems",
      "Built for continuous operation",
      "Verified against specification",
    ],
    disciplines: ["HVAC", "Power", "Plumbing", "Fire Fighting"],
    gallery: [
      { src: medicalPlantroom, caption: "Switchgear and plant equipment" },
      { src: packagingMepFire, caption: "Distribution and containment" },
      { src: plasticsCommissioning, caption: "System verification" },
    ],
  },
  {
    slug: "plastics-factory-mep-fire",
    title: "Plastics Factory — MEP & Fire",
    category: "MEP & Fire",
    facilityType: "Industrial Facility",
    location: "Al Kharj",
    scope: "Integrated MEP & fire, tested and commissioned",
    cover: plasticsCommissioning,
    description:
      "Integrated execution of MEP and fire systems with full testing and commissioning for high-performance infrastructure.",
    scopeOfWork: [
      "Integrated MEP execution",
      "Fire system installation",
      "Full testing & commissioning",
      "Handover documentation",
    ],
    highlights: [
      "Fully tested and commissioned",
      "High-performance infrastructure",
      "Integrated discipline sequencing",
      "Documented handover package",
    ],
    disciplines: ["HVAC", "Fire Fighting", "Power", "Plumbing", "Commissioning"],
    gallery: [
      { src: plasticsCommissioning, caption: "Commissioning in progress" },
      { src: packagingMepFire, caption: "Installed MEP services" },
      { src: medicalPlantroom, caption: "Plant room equipment" },
    ],
  },
  {
    slug: "compound-electronic-gates",
    title: "Compound Electronic Gates",
    category: "ICT & Low Current",
    facilityType: "Commercial Complex",
    location: "Riyadh",
    scope: "Electronic gates with data & fiber infrastructure",
    cover: compoundGates,
    description:
      "Installation of electronic gate systems with integrated data and fiber infrastructure, delivering secure and efficient access control.",
    scopeOfWork: [
      "Electronic gate installation",
      "Data infrastructure",
      "Fiber infrastructure",
      "Access control integration",
    ],
    highlights: [
      "Secure access control",
      "Efficient visitor and staff flow",
      "Integrated data and fiber backbone",
      "Commercial-grade installation",
    ],
    disciplines: ["Access Control", "Fiber", "Structured Cabling", "Low Current"],
    gallery: [
      { src: compoundGates, caption: "Electronic access gates" },
      { src: telecomIct, caption: "Fiber and data infrastructure" },
      { src: medicalPlantroom, caption: "Systems and power room" },
    ],
  },
  {
    slug: "private-schools-om",
    title: "Private Schools — O&M",
    category: "Operations & Maintenance",
    facilityType: "Educational Facilities",
    location: "Riyadh",
    scope: "Comprehensive facilities operation & maintenance",
    cover: schoolsOm,
    description:
      "Comprehensive operation and maintenance services ensuring safe, stable, and uninterrupted educational environments.",
    scopeOfWork: [
      "Comprehensive O&M services",
      "HVAC & electrical maintenance",
      "Safety systems upkeep",
      "Planned preventive maintenance",
    ],
    highlights: [
      "Safe learning environments",
      "Stable, uninterrupted operation",
      "Term-schedule aware works planning",
      "Responsive on-site support",
    ],
    disciplines: ["HVAC", "Electrical", "Plumbing", "Fire Safety", "Facilities"],
    gallery: [
      { src: schoolsOm, caption: "Campus systems servicing" },
      { src: medicalPlantroom, caption: "Central plant maintenance" },
      { src: manpower, caption: "Maintenance team" },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const projectCategories: ProjectCategory[] = [
  "MEP & Fire",
  "ICT & Low Current",
  "Operations & Maintenance",
];

/** Slug list mirrored by `vite.config.ts` for prerendering + sitemap. */
export const projectSlugs = projects.map((p) => p.slug);
