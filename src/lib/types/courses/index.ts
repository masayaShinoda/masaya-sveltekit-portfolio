export type Technology =
	| 'HTML & CSS'
	| 'JavaScript'
	| 'NextJS'
	| 'React'
	| 'Svelte'
	| 'Django'
	| 'Figma'
	| 'Adobe XD'
	| 'Adobe Illustrator'
	| 'Adobe Photoshop'

export interface CourseMeta {
	title: string;
	category: 'programming' | 'graphic design' | 'ui design';
	level: 'beginner' | 'intermediate';
	technology: Technology;
	active: boolean;
	coming_soon?: boolean;
}
