import type { Course } from '$lib/types/courses';

export async function load() {
	const courses_data: Array<Course> = [
		{
			title: 'រៀនឌីស្សាញ UI ជាមួយនឹងកម្មវិធី Figma',
			slug: 'intro-ui-design-with-figma',
			category: 'ui design',
			level: 'beginner',
			technology: 'Figma',
			active: true,
			sections: [
				{
					title: 'វគ្គសិក្សាណែនាំប្រើប្រាស់កម្មវិធី Figma',
					slug: 'intro-to-figma',
					url_youtube: 'https://youtu.be/JAviopTpIBI?si=CvYSeYGBov_KuhBo',
					src_thumbnail: '/images/courses/thumbnail_intro-figma_result.jpg',
					description:
						'វីដេអូណែនាំអំពីការប្រើប្រាស់កម្មវិធី Figma ដើម្បីចាប់ផ្តើមចេះជំនាញរចនា UI (UI design)។'
				},
				{
					title: 'រៀនឌីស្សាញគេហទំព័រព័ត៌មាន',
					slug: 'figma-design-news-website',
					url_youtube: 'https://youtu.be/rKJoyvxgrEE?si=oVsAM6U20zYwZldS',
					src_thumbnail: '/images/courses/thumbnail_figma-newspaper_result.jpg',
					description:
						'វគ្គសិក្សាខ្លីមួយបង្ហាញអំពីការប្រើប្រាស់កម្មវិធី Figma ដើម្បីឌីស្សាញ UI របស់គេហទំព័រព័ត៌មាន។'
				}
			],
			coming_soon: false
		},
		{
			title: 'វគ្គសិក្សាណែនាំបង្កើតគេហទំព័រ​ជាមួយ HTML និង CSS',
			slug: 'intro-web-dev-with-html-css',
			category: 'programming',
			level: 'beginner',
			technology: 'HTML',
			active: true,
			coming_soon: true
		},
		{
			title: 'វគ្គសិក្សាមូលដ្ឋានគ្រឹះនៃភាសា JavaScript',
			slug: 'intro-to-javascript',
			category: 'programming',
			level: 'beginner',
			technology: 'JavaScript',
			active: true,
			coming_soon: true
		},
		{
			title: 'វគ្គសិក្សាបង្កើតគេហទំព័រជាមួយនឹង SvelteKit',
			slug: 'web-dev-with-sveltekit',
			category: 'programming',
			level: 'intermediate',
			technology: 'Svelte',
			active: true,
			coming_soon: true
		},
		{
			title: 'វគ្គសិក្សាបង្កើត REST API ជាមួយនឹង Django',
			slug: 'rest-api-with-django',
			category: 'programming',
			level: 'intermediate',
			technology: 'Django',
			active: true,
			coming_soon: true
		},
		{
			title: 'វគ្គសិក្សាណែនាំប្រើប្រាស់កម្មវិធី Adobe Illustrator',
			slug: 'graphic-design-with-adobe-illustrator',
			category: 'graphic design',
			level: 'beginner',
			technology: 'Adobe Illustrator',
			active: true,
			coming_soon: true
		}
	];

	return {
		courses_data
	};
}
