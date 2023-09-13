// A function that takes a URL string as an input and returns an object with query param keys and values
export function getQueryParams(url: string): Record<string, string> {
	// Initialize an empty object to store the query params
	let queryParams: Record<string, string> = {};
	// Check if the URL contains a hash
	if (url.includes('#')) {
		// Split the URL by the hash symbol and get the second part
		let hashPart = url.split('#')[1];
		// Check if the hash part contains a question mark
		if (hashPart.includes('?')) {
			// Split the hash part by the question mark and get the second part
			let queryPart = hashPart.split('?')[1];
			// Split the query part by the & symbol and get an array of key-value pairs
			let pairs = queryPart.split('&');
			// Loop through the pairs array
			for (let pair of pairs) {
				// Split each pair by the equal sign and get an array of key and value
				let [key, value] = pair.split('=');
				// Decode the key and value using decodeURIComponent function
				key = decodeURIComponent(key);
				value = decodeURIComponent(value);
				// Assign the key and value to the queryParams object
				queryParams[key] = value;
			}
		}
	}
	// Return the queryParams object
	return queryParams;
}
