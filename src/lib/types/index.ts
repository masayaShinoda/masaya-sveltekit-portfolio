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
	| 'Adobe Photoshop';

export interface CourseSection {
	title: string;
	slug: string;
	description?: string;
	url_youtube?: string;
	src_thumbnail?: string;
}

export interface Course {
	title: string;
	slug: string;
	category: 'programming' | 'graphic design' | 'ui design';
	level: 'beginner' | 'intermediate';
	technology: Technology;
	active: boolean;
	coming_soon?: boolean;
	sections?: Array<CourseSection>;
}
