// Single source of truth for the facts shown across the site.
// Keep these in sync with the CV.

export const profile = {
	name: "George Romany",
	fullName: "George Romany Labany",
	handle: "george",
	role: "Frontend Engineer",
	location: "Cairo, Egypt",
	availability: "Open to frontend roles in Cairo and remote",
	summary:
		"I build production web apps with React.js, Next.js and TypeScript: a travel booking platform at Rehletna, a bilingual Arabic/English ERP, and dashboards people use every day.",
	cv: "/docs/George-Romany-Labany-Frontend-Engineer-CV.pdf",
	email: "georgeromany166@gmail.com",
	links: {
		github: "https://github.com/GeorgeRomany166",
		linkedin: "https://www.linkedin.com/in/george-romany/",
		instagram: "https://www.instagram.com/george_romany1",
	},
};

export const about = [
	"I'm a Frontend Engineer in Cairo. Right now I build the customer-facing travel website and booking flow at Rehletna, and take on freelance work: an agency dashboard, a bilingual Arabic/English ERP & POS system, and portfolio templates.",
	"I care about the parts users never notice until they break: reusable components, clean API boundaries, accessibility, right-to-left layouts and pages that stay fast on a phone.",
	"I studied Computer Science at the Modern University for Technology & Information (MTI) and completed the DEPI React program funded by Egypt's Ministry of Communications.",
];

// Newest first.
export const experience = [
	{
		hash: "a3f9c21",
		date: "Sep 2025 – present",
		company: "Rehletna",
		role: "Junior Frontend Engineer",
		meta: "Full-time, hybrid, Cairo",
		points: [
			"Build Rehletna's customer-facing travel website and online booking flow.",
			"Created 40+ reusable, accessible UI components in React, TypeScript and Tailwind CSS.",
			"Turn Figma designs into responsive pages and wire them to REST APIs across multi-step booking flows.",
		],
		tags: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "REST APIs"],
		current: true,
	},
	{
		hash: "7be04d8",
		date: "Jan 2025 – present",
		company: "Freelance",
		role: "Frontend Developer",
		meta: "Remote",
		points: [
			"Spectra: admin dashboard for an advertising agency (Next.js, TypeScript).",
			"Veendra: multi-company ERP & POS with 8+ modules and full Arabic/English RTL support.",
			"An e-commerce store (React, Context API) and 8 portfolio website templates.",
		],
		tags: ["Next.js", "React.js", "TypeScript", "RTL / i18n"],
		current: true,
	},
	{
		hash: "51d2e6a",
		date: "Jun 2025 – Dec 2025",
		company: "Digital Egypt Pioneers Initiative (DEPI)",
		role: "React Frontend Web Developer Program",
		meta: "Training program, funded by MCIT",
		points: [
			"93 hours of technical training in React, plus soft skills, Business English and freelancing.",
		],
		tags: ["React", "JavaScript", "Git"],
	},
	{
		hash: "0c8e1fb",
		date: "2020 – 2024",
		company: "Modern University for Technology & Information",
		role: "B.Sc. Computer Science",
		meta: "Graduation project graded Excellent",
		points: ["Built MTI VPN, a web app simulating a VPN service, as my graduation project."],
		tags: ["HTML", "CSS", "JavaScript"],
	},
	{
		hash: "e94a730",
		date: "Jun 2023 – Dec 2023",
		company: "Route Academy",
		role: "Front-End Web Development with React (96 hrs)",
		meta: "Course",
		points: ["Front-end foundations: HTML, CSS, JavaScript, OOP and React."],
		tags: ["HTML", "CSS", "JavaScript"],
	},
];

// Shown as a package.json. Group names are the JSON keys.
export const stack = {
	languages: ["TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"],
	frameworks: ["React.js", "Next.js (App Router, SSR/SSG)"],
	styling: ["Tailwind CSS", "Material UI", "Bootstrap", "Responsive design", "RTL layouts"],
	state: ["Redux Toolkit", "Zustand", "Context API", "TanStack Query", "React Hook Form"],
	testing: ["Jest", "React Testing Library"],
	tools: ["Git", "GitHub", "Figma", "Postman", "Vercel"],
};

// What I do, shown as a short list on the home page.
export const services = [
	["Interfaces", "Pages and components built from Figma, pixel for pixel, that hold up on every screen size."],
	["Dashboards", "Admin tools with editable tables, filters and charts that stay quick with real data."],
	["Arabic and English", "Right-to-left layouts done properly, not mirrored as an afterthought."],
	["Components", "Reusable, typed and accessible building blocks a whole team can lean on."],
	["Performance", "Server rendering, lean bundles and images that load before you notice them."],
];
