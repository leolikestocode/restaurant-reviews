// Initialing Service worker
if ('serviceWorker' in navigator) {
	navigator.serviceWorker
		.register('./sw.js')
		.then((reg) => {
			// worked
			if (reg.installing) {
				console.log('installing');
			} else if (reg.waiting) {
				console.log('waitign');
			} else if (reg.active) {
				console.log('active');
			}

			console.log('succeded', reg.scope);
		})
		.catch((error) => {
			// failed
			console.log('error', error);
		});
}
