// Skill data shared by the homepage Skills section and the
// Skill Breaker game served at philip.dipatriz.io (src/pages/play.astro).

export interface SkillGroup {
	name: string;
	skills: string[];
}

export const skillGroups: SkillGroup[] = [
	{
		name: 'Languages and frameworks',
		skills: [
			'PHP',
			'Laravel',
			'JavaScript',
			'Alpine.js',
			'HTML',
			'CSS',
			'Tailwind CSS',
			'SQL',
			'Python',
			'PyQt',
		],
	},
	{
		name: 'CMS and e-commerce',
		skills: [
			'Statamic',
			'WordPress custom plugins and themes',
			'WooCommerce',
			'Content modeling',
		],
	},
	{
		name: 'Performance',
		skills: [
			'Core Web Vitals',
			'LCP optimization',
			'Lazy loading',
			'Third party script deferral',
			'Caching strategies',
			'Server migrations',
			'PageSpeed Insights',
		],
	},
	{
		name: 'Analytics and attribution',
		skills: [
			'GA4 custom events and reports',
			'Full GTM container builds',
			'First touch attribution',
			'Salesforce integration',
			'A/B testing with VWO and Optimizely',
			'CRO',
		],
	},
	{
		name: 'Technical SEO',
		skills: [
			'JSON-LD structured data',
			'XML sitemaps',
			'Canonical URLs',
			'301 redirect strategy',
			'Crawlability and indexation',
		],
	},
	{
		name: 'Tools and practices',
		skills: [
			'Git',
			'Vite',
			'Webpack',
			'Jenkins CI',
			'AWS S3',
			'MySQL',
			'Figma',
			'BrowserStack',
			'Test driven development',
			'Paired programming',
			'AI assisted development with Claude Code and Cursor',
		],
	},
];

// Game bricks have to fit on a phone screen, so the long names get short labels.
const shortLabels: Record<string, string> = {
	'WordPress custom plugins and themes': 'WordPress',
	'Third party script deferral': 'Script deferral',
	'Caching strategies': 'Caching',
	'Server migrations': 'Migrations',
	'LCP optimization': 'LCP',
	'PageSpeed Insights': 'PageSpeed',
	'GA4 custom events and reports': 'GA4',
	'Full GTM container builds': 'GTM',
	'First touch attribution': 'Attribution',
	'Salesforce integration': 'Salesforce',
	'A/B testing with VWO and Optimizely': 'A/B testing',
	'JSON-LD structured data': 'JSON-LD',
	'301 redirect strategy': 'Redirects',
	'Crawlability and indexation': 'Crawlability',
	'Test driven development': 'TDD',
	'Paired programming': 'Pairing',
	'AI assisted development with Claude Code and Cursor': 'Claude Code',
};

export const brickLabels: string[] = skillGroups
	.flatMap((group) => group.skills)
	.map((skill) => shortLabels[skill] ?? skill);
