// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
let options = {
	root: null,
	rootMargin: '0px',
	threshold: 0.25
};

export const lazyLoad = (image: HTMLImageElement, src: string) => {
	const loaded = () => {
		image.style.opacity = '1';
	};
	const observer = new IntersectionObserver((entries) => {
		if (entries[0].isIntersecting) {
			image.src = src;
			if (image.complete) {
				// check if instantly loaded
				loaded();
			} else {
				image.addEventListener('load', loaded); // if the image isn't loaded yet, add an event listener
			}
		}
	}, options);
	observer.observe(image); // intersection observer

	return {
		destroy() {
			image.removeEventListener('load', loaded); // clean up the event listener
		}
	};
};
