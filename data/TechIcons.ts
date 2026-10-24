import {
	SiNextdotjs,
	SiReact,
	SiTypescript,
	SiTailwindcss,
	SiRedux,
	SiGit,
	SiVercel,
	SiJavascript,
	SiVite,
	SiRedis,
	SiPostgresql,
	SiNodedotjs,
	SiGsap,
	SiGithub,
	SiFirebase,
	SiStripe,
	SiHtml5,
	SiCss,
    SiThreedotjs,
    SiResend,
} from 'react-icons/si';

export const techIcons = {
	// Frontend
	Next: { icon: SiNextdotjs, color: 'text-white' },
	'Next.js': { icon: SiNextdotjs, color: 'text-white' },
	React: { icon: SiReact, color: 'text-sky-400' },
	Typescript: { icon: SiTypescript, color: 'text-blue-400' },
	TypeScript: { icon: SiTypescript, color: 'text-blue-400' },
	Javascript: { icon: SiJavascript, color: 'text-yellow-400' },
	JavaScript: { icon: SiJavascript, color: 'text-yellow-400' },
	HTML: { icon: SiHtml5, color: 'text-orange-500' },
	HTML5: { icon: SiHtml5, color: 'text-orange-500' },
	CSS: { icon: SiCss, color: 'text-blue-500' },

	// Styling & Animation
	'Tailwind Css': { icon: SiTailwindcss, color: 'text-teal-400' },
	'Tailwind CSS': { icon: SiTailwindcss, color: 'text-teal-400' },
	Tailwind: { icon: SiTailwindcss, color: 'text-teal-400' },
	GSAP: { icon: SiGsap, color: 'text-green-400' },
	'Three.js': { icon: SiThreedotjs, color: 'text-white' },

	// State & Integrations
	Redux: { icon: SiRedux, color: 'text-purple-400' },
	'Redux Toolkit': { icon: SiRedux, color: 'text-purple-400' },
	Firebase: { icon: SiFirebase, color: 'text-yellow-400' },
	Stripe: { icon: SiStripe, color: 'text-indigo-400' },

	// Tools & Deployment
	Git: { icon: SiGit, color: 'text-orange-500' },
	Github: { icon: SiGithub, color: 'text-white' },
	GitHub: { icon: SiGithub, color: 'text-white' },
	Vite: { icon: SiVite, color: 'text-purple-400' },
	Vercel: { icon: SiVercel, color: 'text-white' },
	Resend: { icon: SiResend, color: 'text-white' },

	// Backend & Databases
	'Node.js': { icon: SiNodedotjs, color: 'text-emerald-400' },
	Node: { icon: SiNodedotjs, color: 'text-emerald-400' },
	Redis: { icon: SiRedis, color: 'text-red-500' },
	PostgreSQL: { icon: SiPostgresql, color: 'text-blue-400' },
} as const;
