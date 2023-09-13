import type { CourseMeta } from '$lib/types/courses';

export async function load() {
	const courses_data: Array<CourseMeta> = [
		{
			title: 'វគ្គសិក្សាណែនាំប្រើប្រាស់កម្មវិធី ់ Figma ',
			category: 'ui design',
			level: 'beginner',
			technology: 'Figma',
			active: true,
			url_youtube: 'https://youtu.be/JAviopTpIBI?si=L8drWli1kHdBlf5c'
		},
		{
			title: 'វគ្គសិក្សាណែនាំបង្កើតគេហទំព័រ​ជាមួយ HTML និង CSS',
			category: 'programming',
			level: 'beginner',
			technology: 'HTML & CSS',
			active: true,
			coming_soon: true
		},
		{
			title: 'វគ្គសិក្សាមូលដ្ឋានគ្រឹះនៃភាសា JavaScript',
			category: 'programming',
			level: 'beginner',
			technology: 'JavaScript',
			active: true,
			coming_soon: true
		},
		{
			title: 'វគ្គសិក្សាបង្កើតគេហទំព័រជាមួយនឹង SvelteKit',
			category: 'programming',
			level: 'intermediate',
			technology: 'Svelte',
			active: true,
			coming_soon: true
		},
		{
			title: 'វគ្គសិក្សាបង្កើត REST API ជាមួយនឹង Django',
			category: 'programming',
			level: 'intermediate',
			technology: 'Django',
			active: true,
			coming_soon: true
		},
		{
			title: 'វគ្គសិក្សាណែនាំប្រើប្រាស់កម្មវិធី Adobe Illustrator ',
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
