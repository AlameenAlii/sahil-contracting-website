// English translations for Sahil — the canonical dictionary.
// `ar.ts` is typed as `Translations = typeof en`, so any key added here must
// be added there too or the build fails.
//
// Copy rules:
// - Contractor voice: concrete scope, no marketing abstractions.
// - No claim that cannot be backed by the company facts in company.ts.
// - Numbers come from company.ts, never hard-coded in a sentence.

const en = {
	// ============================================================
	// NAV
	// ============================================================
	nav: {
		home: "Home",
		services: "Services",
		projects: "Projects",
		about: "About",
		contact: "Contact",
		contactUs: "Contact us",
		getQuote: "Request a quote",
		toggleMenu: "Open menu",
		closeMenu: "Close menu",
		language: "Language",
		switchToArabic: "العربية",
		switchToEnglish: "English",
	},

	// ============================================================
	// BRAND
	// ============================================================
	brand: {
		name: "Sahil",
		subtitle: "Sahil Contracting",
		fullName: "Sahil Contracting Co.",
		logoAlt: "Sahil — Sahil Contracting Co.",
	},

	// ============================================================
	// COMMON
	// ============================================================
	common: {
		callUs: "Call us",
		whatsapp: "WhatsApp",
		email: "Email",
		office: "Office",
		headOffice: "Head office",
		workingHours: "Working hours",
		viewAll: "View all",
		viewAllProjects: "View all projects",
		learnMore: "Learn more",
		explore: "Explore",
		requestQuote: "Request a quote",
		downloadProfile: "Download company profile",
		downloadProfileShort: "Company profile",
		talkToEngineer: "Talk to an engineer",
		getInTouch: "Get in touch",
		basedIn: "Jeddah, Saudi Arabia",
		servingKingdom: "Serving projects across the Kingdom",
		scrollToExplore: "Scroll to explore",
		skipToContent: "Skip to content",
	},

	// ============================================================
	// STATS
	// ============================================================
	stats: {
		years: "Years operating",
		projects: "Projects delivered",
		engineers: "Engineers on staff",
		workforce: "Site workforce",
	},

	// ============================================================
	// CREDENTIALS
	// ============================================================
	credentials: {
		eyebrow: "Code compliance",
		title: "Built to code, documented for handover",
		lead: "Structure, finishes and building systems are designed, executed and inspected against the codes your consultant and the municipality sign off on.",
		standardsTitle: "Codes and standards",
		standardsNote: "Applied through design review, execution, inspection and handover.",
		standardNames: {
			sbc: "Saudi Building Code",
			nfpa: "Fire protection",
			iec: "Electrical systems",
			ashrae: "HVAC design",
		},
		standardDetails: {
			sbc: "Structural, architectural, mechanical and electrical requirements for buildings in the Kingdom.",
			nfpa: "Design, installation and testing of detection, alarm and suppression systems.",
			iec: "Low-voltage distribution, protection, earthing and cable selection.",
			ashrae: "Load calculations, ventilation rates and air distribution.",
		},
		docsNote: "Registration, classification and accreditation certificates are issued with prequalification and tender submissions.",
		vision2030: "Aligned with Saudi Vision 2030",
		vision2030Note: "Building today for a better tomorrow.",
	},

	// ============================================================
	// HOME
	// ============================================================
	home: {
		meta: {
			title: "Sahil — General Contracting, Finishing and Fit-Out in Saudi Arabia",
			description:
				"Jeddah-based general contractor delivering construction, interior and exterior finishing, furniture and interior design, and project management across Saudi Arabia.",
			ogTitle: "Sahil — Let's build your living space",
			ogDescription:
				"Construction, finishing and fit-out, furniture and interiors, and project management — executed to Saudi Building Code with documented handover.",
		},
		hero: {
			eyebrow: "Jeddah · Saudi Arabia",
			titleLine1: "Let's build",
			titleLine2: "your living",
			titleLine3: "space.",
			lead: "A general contractor that owns the project from the first site visit to handover — construction, finishing and fit-out, and project management that keeps the programme intact.",
			ctaPrimary: "Request a quote",
			ctaSecondary: "See our projects",
			badge: "Design · Build · Finish · Handover",
			imageAlt: "Sahil construction site in Jeddah at dusk",
		},
		intro: {
			eyebrow: "Who we are",
			title: "One contractor, from structure to final finish",
			body1:
				"Sahil Contracting Co. is a Jeddah-based general contractor working on residential, commercial, industrial and educational projects across the Kingdom.",
			body2:
				"We carry full execution responsibility: structure and construction, interior and exterior finishing, furniture and fit-out, and the project management that keeps cost, quality and programme visible from week one.",
			cta: "More about us",
			imageAlt: "Sahil engineers reviewing execution drawings on site",
		},
		clients: {
			eyebrow: "Clients",
			title: "Organisations we have delivered for",
			note: "A selection of clients across the residential, commercial, industrial and institutional sectors.",
		},
		services: {
			eyebrow: "What we do",
			title: "Four service lines, one accountable contractor",
			lead: "Each line runs standalone or folds into a single turnkey scope, so you deal with one team instead of coordinating four.",
			cta: "All services",
		},
		projects: {
			eyebrow: "Selected work",
			title: "Delivered across the Kingdom",
			lead: "Industrial facilities, commercial complexes, educational campuses and multi-site maintenance contracts.",
			cta: "Browse all work",
		},
		why: {
			eyebrow: "Why Sahil",
			title: "What the client actually gets",
			items: [
				{
					title: "Single-point responsibility",
					body: "Structure, finishes, systems and fit-out under one contract — none of the gaps between trades where disputes start.",
				},
				{
					title: "Our own workforce",
					body: "Around 200 workers on site and more than 20 engineers on staff, so our dates do not depend on somebody else's labour.",
				},
				{
					title: "Execution to code",
					body: "Saudi Building Code, NFPA, IEC and ASHRAE applied from design review through to inspection records.",
				},
				{
					title: "Finishing is not an afterthought",
					body: "The team that builds the structure hands over the paint, joinery and furniture — one standard from start to finish.",
				},
				{
					title: "Cost and programme in the open",
					body: "A priced scope, daily site reports and a change log, so a variation is a decision you make rather than a surprise you receive.",
				},
				{
					title: "Engineering leadership by name",
					body: "You get the mobile number of the engineer accountable for your project, not a general enquiries inbox.",
				},
			],
		},
		process: {
			eyebrow: "How we work",
			title: "From first site visit to handover",
			lead: "Five stages, each with a defined deliverable you approve before the next one starts.",
			steps: [
				{
					step: "01",
					title: "Consultation and discovery",
					body: "Site visit, budget review and feasibility, closing with your sign-off on the project brief before any money goes into design.",
				},
				{
					step: "02",
					title: "Design and engineering",
					body: "Architectural and structural drawings, 3D visuals, and the approval documents the municipality and consultant require.",
				},
				{
					step: "03",
					title: "Execution and build",
					body: "Programme-driven execution with quality hold points, daily reporting and safety reviews — documented as the work happens, not afterwards.",
				},
				{
					step: "04",
					title: "Finishing and fit-out",
					body: "Interior and exterior finishes, joinery, furniture and interior design executed against the approved sample.",
				},
				{
					step: "05",
					title: "Handover and warranty",
					body: "Final inspection, as-built drawings, keys handed over and a one-year warranty on workmanship.",
				},
			],
		},
		cta: {
			eyebrow: "Next step",
			title: "Ready to build your space?",
			lead: "Send us the drawings or just describe the site, and we will come back with a scope, a programme and a price.",
			primary: "Request a quote",
			secondary: "Call the office",
			imageAlt: "Jeddah skyline at golden hour",
		},
		quote: {
			eyebrow: "Request a quote",
			title: "Tell us about the project",
			lead: "The more detail you give, the more accurate the first response. Fields marked * are required.",
			fields: {
				name: "Full name",
				company: "Company",
				phone: "Mobile / WhatsApp",
				email: "Email",
				city: "Project city",
				service: "Scope required",
				budget: "Indicative budget",
				timeline: "Target start",
				message: "Project details",
			},
			placeholders: {
				name: "e.g. Mohammed Al-Otaibi",
				company: "e.g. Red Sea Development Co.",
				phone: "+966 5X XXX XXXX",
				email: "name@company.com",
				message: "Project type, built-up area, finishing level, and any dates you must hit.",
			},
			selectPlaceholder: "Select an option",
			cityOptions: [
				"Jeddah",
				"Makkah",
				"Madinah",
				"Riyadh",
				"Taif",
				"Dammam",
				"Elsewhere in the Kingdom",
			],
			serviceOptions: [
				"Building and construction",
				"Finishing and fit-out",
				"Furniture and interiors",
				"Project management",
				"Renovation and refurbishment",
				"Not decided yet",
			],
			budgetOptions: [
				"Under SAR 250,000",
				"SAR 250,000 – 1 million",
				"SAR 1 – 5 million",
				"Over SAR 5 million",
				"To be confirmed",
			],
			timelineOptions: [
				"Immediately",
				"Within 1–3 months",
				"Within 3–6 months",
				"More than 6 months out",
				"Planning stage only",
			],
			consent: "I agree that Sahil may contact me about this enquiry.",
			submit: "Send request",
			submitting: "Sending…",
			success: "Thank you — your request has been received. We will respond within 24 hours.",
			error: "Something went wrong. Apologies — please call the number above directly.",
			required: "This field is required",
			invalidEmail: "Please enter a valid email address",
			invalidPhone: "Please enter a valid mobile number",
			consentRequired: "Please confirm we may contact you",
			directTitle: "Prefer to speak to someone now?",
			directLead: "The founding engineer answers the mobile personally, and WhatsApp is the fastest way to reach him.",
		},
	},

	// ============================================================
	// SERVICES — /services
	// ============================================================
	services: {
		meta: {
			title: "Services — Construction, Finishing, Interiors, Project Management | Sahil",
			description:
				"Four integrated service lines from Sahil Contracting Co.: building and construction, finishing and fit-out, furniture and interior design, and project management — one accountable contractor from design to handover.",
		},
		hero: {
			eyebrow: "Our services",
			title: "What we execute, and how",
			lead: "Four service lines covering the whole life of a project. Take one on its own, or combine them into a single turnkey contract.",
			imageAlt: "An Sahil site team coordinating works on an active project in Saudi Arabia.",
			imageCaption: "One contractor, accountable end to end",
		},
		lines: {
			build: {
				name: "Building and construction",
				summary: "Structural and building works from excavation to a shell ready for finishing.",
				body: "We execute reinforced concrete and steel structures for residential, commercial and industrial buildings against approved drawings and the Saudi Building Code. Each site runs with a resident engineer and a quality controller, and every pour and material test is recorded before the next stage begins.",
				bullets: [
					"Excavation, foundations and reinforced concrete structures",
					"Steel buildings, industrial halls and warehouses",
					"Blockwork, thermal and waterproofing, and facades",
					"External civil works, boundary walls and site landscaping",
					"Extensions and alterations to existing buildings",
				],
				imageAlt: "Sahil construction works in progress on site",
			},
			finishing: {
				name: "Finishing and fit-out",
				summary: "Interior and exterior finishes at a standard that passes final inspection first time.",
				body: "Finishing is what the occupant sees every day, so we start from an approved sample for every material and colour before anything is ordered. Work is executed by dedicated gypsum, painting, flooring and stonework crews, and handed over with the snag list fully closed.",
				bullets: [
					"Gypsum works, suspended ceilings and internal partitions",
					"Painting and specialist wall treatments",
					"Flooring: marble, porcelain, parquet and industrial floors",
					"Facades, cladding, aluminium and glazing",
					"Bathrooms and kitchens including sanitary installation",
				],
				imageAlt: "Interior finishing works at handover stage",
			},
			interiors: {
				name: "Furniture and interior design",
				summary: "Interior design and bespoke furniture built to site dimensions, not catalogue sizes.",
				body: "We start with a 3D concept the client signs off before fabrication, then produce fixed and loose furniture from measurements taken on site after finishing. That is why nothing arrives a centimetre out on installation day.",
				bullets: [
					"Interior design with 3D perspectives and material boards",
					"Bespoke joinery: kitchens, wardrobes, reception units",
					"Office, residential and hospitality furniture",
					"Interior lighting and acoustic treatments",
					"Final styling and handover-ready staging",
				],
				imageAlt: "Completed interior with bespoke joinery",
			},
			management: {
				name: "Project management",
				summary: "One party accountable for programme, cost, quality and subcontractors.",
				body: "We act for the owner across the whole project: a baseline programme, payment certification, change-order control, and a single weekly report that sets actual progress against plan.",
				bullets: [
					"Scheduling and critical-path tracking",
					"Quantity surveying, cost control and payment certification",
					"Subcontractor prequalification and contract administration",
					"Quality and safety plans with inspection records",
					"Handover file: as-built drawings, warranties, O&M manuals",
				],
				imageAlt: "Sahil engineers in a site coordination meeting",
			},
		},
		approach: {
			eyebrow: "Our approach",
			title: "Three rules that govern every site",
			points: [
				{
					title: "Settle it on paper, not on site",
					body: "Scope, samples and programme are approved in writing, because changing a drawing is cheaper than changing concrete.",
				},
				{
					title: "One accountable engineer",
					body: "Every project has an engineer who owns the decisions and the communication, so responsibility is never passed between departments.",
				},
				{
					title: "Documentation is part of the work",
					body: "Daily reports, stage photography and inspection records mean the handover file is ready on handover day, not a month later.",
				},
			],
			lead: "They are not slogans. Each one changes how the site is run, and each one is visible in the paperwork you receive.",
		},
		cta: {
			title: "Drawings in hand, or just an idea?",
			lead: "Send us what you have and we will define the scope, the programme and an indicative cost.",
			primary: "Request a quote",
			secondary: "See the projects",
		},
	},

	// ============================================================
	// ABOUT — /about
	// ============================================================
	about: {
		meta: {
			title: "About — Sahil Contracting Co. | Sahil",
			description:
				"A Jeddah-based general contractor with more than eight years in construction, finishing and fit-out, supported by over 20 engineers and around 200 site workers.",
		},
		hero: {
			eyebrow: "About us",
			title: "A contractor judged on what it hands over",
			lead: "Sahil Contracting Co. works out of Jeddah on construction, finishing, fit-out and project management across the Kingdom.",
			imageAlt: "The Sahil engineering team on site",
		},
		who: {
			eyebrow: "The company",
			title: "From finishing contractor to full general contractor",
			body1:
				"Sahil started with finishing and fit-out work in Jeddah, then widened into general contracting when clients asked for a single party to carry the project from foundations to furniture.",
			body2:
				"Today the company has more than 20 engineers and around 200 workers on its own payroll, delivering residential, commercial, industrial and educational projects with in-house crews rather than relying entirely on subcontract labour.",
			body3:
				"What has not changed since day one is the finishing standard: anything we hand over has to survive inspection close up, not from three metres away.",
		},
		vision: {
			title: "Our vision",
			body: "To be the contractor asked for by name in Makkah Province whenever build quality and hitting the date are not negotiable.",
			label: "Our vision",
		},
		mission: {
			title: "Our mission",
			body: "To deliver code-compliant built space within the agreed budget and programme, with documentation the owner can rely on after handover.",
			label: "Our mission",
		},
		values: {
			eyebrow: "Our values",
			title: "What we do not trade away",
			items: [
				{
					title: "Safety first",
					body: "Site hoarding, protective equipment and permits for hazardous work are in place from day one, not for the surprise visit.",
				},
				{
					title: "Measurable quality",
					body: "Material tests and recorded hold points, rather than personal impressions.",
				},
				{
					title: "Honest pricing",
					body: "A clear scope with written exclusions, and no line items appearing suddenly in the third payment certificate.",
				},
				{
					title: "Commitment to the date",
					body: "The programme is a documented commitment; any delay is reported when it happens, with a recovery plan.",
				},
				{
					title: "Respect for the workforce",
					body: "Housing, transport and regular wages for crews on our payroll — which is why the same team stays on the project to the end.",
				},
				{
					title: "Responsible building",
					body: "Waste management, material efficiency and higher energy-performance options wherever the budget allows.",
				},
			],
		},
		leadership: {
			eyebrow: "Leadership",
			title: "Who runs the work",
			lead: "Our projects are led by engineers from the top, not through a commercial intermediary.",
			roles: {
				founder: "Founder & Managing Engineer",
			},
		},
		cta: {
			title: "Want to know whether we are the right contractor for your project?",
			lead: "Speak to the founding engineer directly, or download the company profile for the full record of work and capabilities.",
			primary: "Contact us",
			secondary: "Download company profile",
		},
	},

	// ============================================================
	// PROJECTS — /projects
	// ============================================================
	projects: {
		meta: {
			title: "Projects — Delivered Works | Sahil",
			description:
				"Selected projects delivered by Sahil Contracting Co.: industrial facilities, commercial buildings, educational campuses and multi-site operations across Saudi Arabia.",
		},
		hero: {
			eyebrow: "Our work",
			title: "Projects on the ground",
			lead: "A selection of completed and ongoing works. Each entry lists the scope we carried, the facility type and where it was delivered.",
		},
		filters: {
			label: "Filter by category",
			all: "All projects",
		},
		labels: {
			location: "Location",
			facility: "Facility type",
			scope: "Scope",
			category: "Category",
			viewProject: "View project",
		},
		empty: "No projects in this category yet.",
		countLabel: "projects shown",
		cta: {
			title: "Have a similar project?",
			lead: "Send us the scope and we will tell you honestly whether it suits our teams, and what it would take.",
			primary: "Request a quote",
			secondary: "Contact us",
		},
	},

	// ============================================================
	// PROJECT DETAIL — /projects/$slug
	// ============================================================
	projectDetail: {
		back: "Back to projects",
		breadcrumbHome: "Home",
		breadcrumbProjects: "Projects",
		overview: "Overview",
		scopeOfWork: "Scope of work",
		highlights: "Project highlights",
		disciplines: "Disciplines",
		gallery: "Gallery",
		details: "Project details",
		labels: {
			client: "Client",
			location: "Location",
			facility: "Facility type",
			category: "Category",
			status: "Status",
			year: "Year",
			scope: "Scope",
		},
		imageNote: "Representative photography; project images are published with client consent.",
		nextProject: "Next project",
		notFound: {
			title: "Project not found",
			lead: "This project may have been moved or renamed. Browse the full list instead.",
			cta: "All projects",
		},
		cta: {
			title: "Planning something on this scale?",
			lead: "Talk to the engineer who would run it, before you commit to a contractor.",
			primary: "Talk to an engineer",
			secondary: "All projects",
		},
	},

	// ============================================================
	// PROJECTS DATA — six demo records carried over from the base
	// project. Titles, scope and copy rewritten for Sahil.
	// ============================================================
	projectsData: {
		categories: {
			"MEP & Fire": "Building Services & Fire",
			"ICT & Low Current": "Infrastructure & Low Current",
			"Operations & Maintenance": "Operations & Maintenance",
		},
		locations: {
			Riyadh: "Riyadh",
			"Al Kharj": "Al Kharj",
		},
		facilityTypes: {
			"Multi-site ICT Operations": "Multi-site Operations",
			"Industrial Facility": "Industrial Facility",
			"Commercial Complex": "Commercial Complex",
			"Educational Facilities": "Educational Facilities",
		},
		items: {
			"telecom-network-ict-om": {
				title: "Telecom Network — Multi-site Infrastructure & Operations",
				scope: "Low-current infrastructure, fit-out and ongoing operations across multiple sites",
				description:
					"A multi-site framework covering structured cabling, low-current infrastructure and the interior fit-out of technical rooms, followed by a continuing operations contract. Works were sequenced site by site so each location stayed live while its rooms were rebuilt.",
				scopeOfWork: [
					"Structured cabling and containment across all sites",
					"Technical room fit-out: flooring, partitions, doors and finishes",
					"Power distribution, earthing and protection for equipment rooms",
					"Scheduled maintenance and response under an operations contract",
				],
				highlights: [
					"Delivered without taking any site out of service",
					"A single documented standard applied across every location",
					"As-built drawings and asset register handed over per site",
					"Operations team retained after handover",
				],
			},
			"packaging-factory-mep-fire": {
				title: "Packaging Factory — Building Services & Fire Protection",
				scope: "Building services, fire protection and finishing works for a manufacturing facility",
				description:
					"Full building services and fire protection for a working factory, together with the finishing works to the administration and welfare areas. Installation was phased around the production schedule so output was never stopped.",
				scopeOfWork: [
					"Electrical distribution, lighting and small power throughout",
					"Ventilation and air conditioning for production and offices",
					"Fire detection, alarm and suppression to NFPA requirements",
					"Finishing of administration, welfare and prayer areas",
				],
				highlights: [
					"Executed in live production conditions with no shutdown",
					"Fire systems tested and certified before occupancy",
					"Coordinated services routing agreed in 3D before installation",
					"Handover file issued with test records and O&M manuals",
				],
			},
			"medical-factory-mep-fire": {
				title: "Medical Factory — Plant Room & Building Services",
				scope: "Plant room construction, building services and fire protection",
				description:
					"Construction of the plant room and installation of the building services serving a precision manufacturing plant, where stable temperature and clean power were product requirements rather than comfort items.",
				scopeOfWork: [
					"Plant room civil works, plinths and acoustic treatment",
					"Chilled water, air handling and controlled-environment ductwork",
					"Main and sub distribution boards with dedicated earthing",
					"Detection and suppression covering plant and production areas",
				],
				highlights: [
					"Temperature and humidity criteria met on first commissioning",
					"Plant laid out for maintenance access, not just for fit",
					"Full balancing and commissioning records issued",
					"One-year warranty on installed works",
				],
			},
			"plastics-factory-mep-fire": {
				title: "Plastics Factory — Services Installation & Commissioning",
				scope: "Building services installation, commissioning and finishing for a packaging factory",
				description:
					"Services installation and commissioning for a packaging plant, delivered against a fixed production start date, with the office and canteen block finished and furnished in the same programme.",
				scopeOfWork: [
					"Power distribution and lighting to production halls and yard",
					"Compressed air and process service routing",
					"Fire detection and suppression with municipality approval",
					"Office and canteen finishing, joinery and furniture",
				],
				highlights: [
					"Production start date met without extension",
					"Commissioning witnessed and signed off by the client's team",
					"Snag list closed before handover, not after",
					"Operator training delivered on installed systems",
				],
			},
			"compound-electronic-gates": {
				title: "Residential Compound — Access Control & Electronic Gates",
				scope: "Electronic gates, access control and associated civil works",
				description:
					"Supply and installation of electronic gates and access control for a residential compound, including the civil works, power supply and finishing around each gate line so the result matched the compound's existing architecture.",
				scopeOfWork: [
					"Civil works: foundations, gate posts and road reinstatement",
					"Electronic gate installation with safety sensors",
					"Access control, intercom and camera integration",
					"Stone and paint finishing to match the existing compound",
				],
				highlights: [
					"Resident access maintained throughout the works",
					"Safety sensors and manual release tested on every gate",
					"Finishes matched to the existing elevation treatment",
					"Maintenance schedule handed over with the system",
				],
			},
			"private-schools-om": {
				title: "Private Schools — Refurbishment & Maintenance",
				scope: "Refurbishment, finishing and ongoing maintenance across educational facilities",
				description:
					"Refurbishment and continuing maintenance across a group of school buildings, with the heavy works compressed into the summer break and a maintenance team retained through the academic year.",
				scopeOfWork: [
					"Classroom refurbishment: ceilings, flooring, paint and joinery",
					"Sanitary block renewal and water system upgrades",
					"Electrical, lighting and safety system upgrades",
					"Planned and reactive maintenance during term time",
				],
				highlights: [
					"Heavy works completed inside the summer break",
					"Materials selected for durability under school use",
					"Response times agreed for term-time call-outs",
					"Condition report issued at the end of each academic year",
				],
			},
		},
	},

	// ============================================================
	// CONTACT — /contact
	// ============================================================
	contact: {
		meta: {
			title: "Contact — Sahil Contracting Co. | Sahil",
			description:
				"Talk to Sahil in Jeddah about construction, finishing and fit-out, or project management. We respond to enquiries within 24 hours.",
		},
		hero: {
			eyebrow: "Contact",
			title: "Let's talk about your project",
			lead: "Call, message on WhatsApp, or send the form. Enquiries are answered within 24 hours on working days.",
		},
		info: {
			title: "Reach us directly",
			lead: "WhatsApp is the fastest route — send the site location and any drawings you already have.",
			officeTitle: "Head office",
			officeValue: "Jeddah, Makkah Province, Saudi Arabia",
			officeNote: "Visits by appointment. Site meetings anywhere in the Kingdom.",
			hoursTitle: "Working hours",
			daysValue: "Sunday – Thursday",
			hoursValue: "8:00 – 17:00 AST",
			generalEmail: "General enquiries",
			linkedinLabel: "LinkedIn",
		},
		form: {
			title: "Send an enquiry",
			lead: "Tell us the project type, location and rough scale. An engineer will come back to you.",
			eyebrow: "Request a quote",
		},
		map: {
			title: "Where we are",
			lead: "Our office is in Jeddah, and our teams work on projects across the Kingdom.",
			embedTitle: "Map showing the Sahil office location in Jeddah",
			openInMaps: "Open in maps",
			note: "Head office in Jeddah — teams on site across the Kingdom.",
		},
	},

	// ============================================================
	// FOOTER
	// ============================================================
	footer: {
		tagline:
			"A Jeddah-based general contractor delivering construction, finishing and fit-out, interiors and project management across Saudi Arabia.",
		quickLinks: "Quick links",
		serviceLines: "Services",
		contactTitle: "Contact",
		officeAddress: "Jeddah, Makkah Province, Saudi Arabia",
		mapTitle: "Office location",
		linkedin: "LinkedIn",
		rights: "© %YEAR% Sahil. All rights reserved.",
		legalLine: "Sahil Contracting Co. — Jeddah, Saudi Arabia",
		wordmark: "Sahil",
		items: {
			home: "Home",
			services: "Services",
			projects: "Projects",
			about: "About",
			contact: "Contact",
			build: "Building and construction",
			finishing: "Finishing and fit-out",
			interiors: "Furniture and interiors",
			management: "Project management",
		},
	},

	// ============================================================
	// ROOT — document-level strings, 404 and error views
	// ============================================================
	root: {
		title: "Sahil — Sahil Contracting Co.",
		description:
			"General contracting, finishing and fit-out, interiors and project management from Jeddah, Saudi Arabia.",
		notFound: {
			code: "404",
			title: "Page not found",
			lead: "The page you are looking for has moved or no longer exists.",
			cta: "Back to home",
			secondary: "Contact us",
			home: "Back to home",
		},
		error: {
			title: "Something went wrong",
			lead: "An unexpected error occurred. Please reload the page, or contact us if it keeps happening.",
			retry: "Reload",
			cta: "Back to home",
			home: "Back to home",
		},
	},
};

export type Translations = typeof en;
export default en;
