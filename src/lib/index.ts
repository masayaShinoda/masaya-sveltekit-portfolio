// place files you want to import through the `$lib` alias in this folder.

/** Formats a 'YYYY-MM' string as e.g. "January 2024". Returns the raw input if it doesn't match. */
export function formatCompletedDate(value: string): string {
	const match = /^(\d{4})-(\d{2})$/.exec(value);
	if (!match) return value;

	const [, year, month] = match;
	const date = new Date(Number(year), Number(month) - 1);
	return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long' }).format(date);
}
